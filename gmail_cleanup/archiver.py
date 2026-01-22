"""Module for archiving old emails."""

import time
from datetime import datetime, timedelta


def archive_old_emails(service, days_old=365, exclude_labels=None, dry_run=False):
    """
    Archive emails older than specified days.

    Args:
        service: Gmail API service instance
        days_old: Archive emails older than this many days
        exclude_labels: List of label IDs to exclude (e.g., ['STARRED', 'IMPORTANT'])
        dry_run: If True, only count messages without archiving

    Returns:
        dict: Statistics about archived messages
    """
    if exclude_labels is None:
        exclude_labels = ['STARRED', 'IMPORTANT']

    print(f"🔍 Searching for emails older than {days_old} days...")

    # Calculate date threshold
    threshold_date = datetime.now() - timedelta(days=days_old)
    date_str = threshold_date.strftime('%Y/%m/%d')

    # Build query
    query = f"before:{date_str} -in:trash -in:spam"

    total_archived = 0
    page_token = None

    while True:
        results = service.users().messages().list(
            userId='me',
            q=query,
            maxResults=100,
            pageToken=page_token
        ).execute()

        messages = results.get('messages', [])

        if not messages:
            break

        for msg in messages:
            # Get message details to check labels
            msg_data = service.users().messages().get(
                userId='me',
                id=msg['id'],
                format='minimal'
            ).execute()

            msg_labels = msg_data.get('labelIds', [])

            # Skip if message has excluded labels or is already archived
            if any(label in msg_labels for label in exclude_labels):
                continue

            if 'INBOX' not in msg_labels:
                continue  # Already archived

            if dry_run:
                total_archived += 1
            else:
                # Archive by removing INBOX label
                service.users().messages().modify(
                    userId='me',
                    id=msg['id'],
                    body={'removeLabelIds': ['INBOX']}
                ).execute()
                total_archived += 1

            # Rate limiting
            if total_archived % 100 == 0:
                print(f"  Processed {total_archived} messages...")
                time.sleep(0.5)

        page_token = results.get('nextPageToken')
        if not page_token:
            break

    print(f"✅ {'Would archive' if dry_run else 'Archived'} {total_archived} old emails")

    return {
        'archived': total_archived,
        'days_old': days_old,
        'dry_run': dry_run
    }
