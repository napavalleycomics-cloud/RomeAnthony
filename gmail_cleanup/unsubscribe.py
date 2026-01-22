"""Module for finding and processing unsubscribe links."""

import re
import base64
from email.mime.text import MIMEText


def find_unsubscribe_emails(service, max_results=100):
    """
    Find emails with unsubscribe links.

    Args:
        service: Gmail API service instance
        max_results: Maximum number of emails to scan

    Returns:
        list: List of emails with unsubscribe information
    """
    print("🔍 Searching for emails with unsubscribe links...")

    # Search for promotional emails that typically have unsubscribe links
    query = "category:promotions OR unsubscribe"

    results = service.users().messages().list(
        userId='me',
        q=query,
        maxResults=max_results
    ).execute()

    messages = results.get('messages', [])
    unsubscribe_emails = []

    for msg in messages:
        msg_data = service.users().messages().get(
            userId='me',
            id=msg['id'],
            format='full'
        ).execute()

        headers = msg_data.get('payload', {}).get('headers', [])

        # Look for List-Unsubscribe header
        unsubscribe_header = None
        subject = None
        sender = None

        for header in headers:
            if header['name'] == 'List-Unsubscribe':
                unsubscribe_header = header['value']
            elif header['name'] == 'Subject':
                subject = header['value']
            elif header['name'] == 'From':
                sender = header['value']

        if unsubscribe_header:
            # Extract URL from header (format: <mailto:...>, <http://...>)
            url_match = re.search(r'<(https?://[^>]+)>', unsubscribe_header)
            unsubscribe_url = url_match.group(1) if url_match else None

            unsubscribe_emails.append({
                'id': msg['id'],
                'subject': subject,
                'from': sender,
                'unsubscribe_url': unsubscribe_url,
                'unsubscribe_header': unsubscribe_header
            })

    print(f"✅ Found {len(unsubscribe_emails)} emails with unsubscribe links")

    return unsubscribe_emails


def display_unsubscribe_list(emails):
    """Display list of emails with unsubscribe options."""
    if not emails:
        print("No emails with unsubscribe links found.")
        return

    print("\n" + "="*80)
    print("EMAILS WITH UNSUBSCRIBE LINKS")
    print("="*80)

    for i, email in enumerate(emails, 1):
        print(f"\n{i}. From: {email['from']}")
        print(f"   Subject: {email['subject']}")
        if email['unsubscribe_url']:
            print(f"   Unsubscribe URL: {email['unsubscribe_url']}")
        print(f"   Message ID: {email['id']}")

    print("\n" + "="*80)
