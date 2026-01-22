"""Module for deleting spam messages."""

import time


def delete_spam_messages(service, batch_size=100, dry_run=False):
    """
    Delete all messages in the spam folder.

    Args:
        service: Gmail API service instance
        batch_size: Number of messages to delete at once
        dry_run: If True, only count messages without deleting

    Returns:
        dict: Statistics about deleted messages
    """
    print("🔍 Searching for spam messages...")

    total_deleted = 0
    page_token = None

    while True:
        # Get spam messages
        results = service.users().messages().list(
            userId='me',
            labelIds=['SPAM'],
            maxResults=batch_size,
            pageToken=page_token
        ).execute()

        messages = results.get('messages', [])

        if not messages:
            break

        message_ids = [msg['id'] for msg in messages]

        if dry_run:
            print(f"  Would delete {len(message_ids)} spam messages")
            total_deleted += len(message_ids)
        else:
            # Batch delete messages
            print(f"  Deleting {len(message_ids)} spam messages...")
            for msg_id in message_ids:
                service.users().messages().delete(userId='me', id=msg_id).execute()
                total_deleted += 1

            # Rate limiting
            time.sleep(0.1)

        page_token = results.get('nextPageToken')
        if not page_token:
            break

    print(f"✅ {'Would delete' if dry_run else 'Deleted'} {total_deleted} spam messages")

    return {
        'deleted': total_deleted,
        'dry_run': dry_run
    }
