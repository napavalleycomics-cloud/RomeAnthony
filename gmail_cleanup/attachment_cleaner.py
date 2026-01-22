"""Module for finding and cleaning up large attachments."""

import time


def find_large_attachments(service, min_size_mb=10, max_results=100):
    """
    Find emails with large attachments.

    Args:
        service: Gmail API service instance
        min_size_mb: Minimum attachment size in MB
        max_results: Maximum number of emails to find

    Returns:
        list: List of emails with large attachments
    """
    print(f"🔍 Searching for emails with attachments larger than {min_size_mb}MB...")

    # Convert MB to bytes for Gmail API
    min_size_bytes = min_size_mb * 1024 * 1024

    # Gmail query: has:attachment larger:XM
    query = f"has:attachment larger:{min_size_mb}M"

    results = service.users().messages().list(
        userId='me',
        q=query,
        maxResults=max_results
    ).execute()

    messages = results.get('messages', [])
    large_attachment_emails = []

    for msg in messages:
        msg_data = service.users().messages().get(
            userId='me',
            id=msg['id'],
            format='full'
        ).execute()

        headers = msg_data.get('payload', {}).get('headers', [])
        subject = None
        sender = None
        date = None

        for header in headers:
            if header['name'] == 'Subject':
                subject = header['value']
            elif header['name'] == 'From':
                sender = header['value']
            elif header['name'] == 'Date':
                date = header['value']

        # Calculate total size of attachments
        attachments = []
        parts = msg_data.get('payload', {}).get('parts', [])

        def process_parts(parts_list):
            """Recursively process message parts to find attachments."""
            for part in parts_list:
                if part.get('filename'):
                    size = part.get('body', {}).get('size', 0)
                    attachments.append({
                        'filename': part['filename'],
                        'size_bytes': size,
                        'size_mb': round(size / (1024 * 1024), 2)
                    })

                # Handle nested parts
                if 'parts' in part:
                    process_parts(part['parts'])

        process_parts(parts)

        total_size_bytes = sum(att['size_bytes'] for att in attachments)
        total_size_mb = round(total_size_bytes / (1024 * 1024), 2)

        # Get estimated message size
        size_estimate = msg_data.get('sizeEstimate', 0)

        large_attachment_emails.append({
            'id': msg['id'],
            'subject': subject,
            'from': sender,
            'date': date,
            'attachments': attachments,
            'total_size_mb': max(total_size_mb, round(size_estimate / (1024 * 1024), 2)),
            'size_estimate': size_estimate
        })

    # Sort by size
    large_attachment_emails.sort(key=lambda x: x['total_size_mb'], reverse=True)

    print(f"✅ Found {len(large_attachment_emails)} emails with large attachments")

    return large_attachment_emails


def display_large_attachments(emails):
    """Display list of emails with large attachments."""
    if not emails:
        print("No emails with large attachments found.")
        return

    print("\n" + "="*80)
    print("EMAILS WITH LARGE ATTACHMENTS")
    print("="*80)

    total_size = 0

    for i, email in enumerate(emails, 1):
        print(f"\n{i}. From: {email['from']}")
        print(f"   Subject: {email['subject']}")
        print(f"   Date: {email['date']}")
        print(f"   Total Size: {email['total_size_mb']} MB")
        print(f"   Attachments:")
        for att in email['attachments']:
            print(f"     - {att['filename']} ({att['size_mb']} MB)")
        print(f"   Message ID: {email['id']}")
        total_size += email['total_size_mb']

    print("\n" + "="*80)
    print(f"Total space used by these emails: {round(total_size, 2)} MB")
    print("="*80)


def delete_emails_with_large_attachments(service, email_ids, dry_run=False):
    """
    Delete emails with large attachments.

    Args:
        service: Gmail API service instance
        email_ids: List of message IDs to delete
        dry_run: If True, only count without deleting

    Returns:
        int: Number of deleted emails
    """
    if dry_run:
        print(f"Would delete {len(email_ids)} emails")
        return len(email_ids)

    print(f"Deleting {len(email_ids)} emails...")
    deleted = 0

    for email_id in email_ids:
        service.users().messages().trash(userId='me', id=email_id).execute()
        deleted += 1

        if deleted % 10 == 0:
            print(f"  Deleted {deleted}/{len(email_ids)} emails...")
            time.sleep(0.1)

    print(f"✅ Deleted {deleted} emails")
    return deleted
