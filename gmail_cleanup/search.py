"""Module for searching and finding specific emails."""

import time


def search_emails(service, query, max_results=100):
    """
    Search for emails matching a query.

    Args:
        service: Gmail API service instance
        query: Gmail search query
        max_results: Maximum number of results to return

    Returns:
        list: List of matching emails
    """
    print(f"🔍 Searching for: {query}")

    results = service.users().messages().list(
        userId='me',
        q=query,
        maxResults=max_results
    ).execute()

    messages = results.get('messages', [])
    email_list = []

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
        to = None

        for header in headers:
            if header['name'] == 'Subject':
                subject = header['value']
            elif header['name'] == 'From':
                sender = header['value']
            elif header['name'] == 'Date':
                date = header['value']
            elif header['name'] == 'To':
                to = header['value']

        # Get snippet
        snippet = msg_data.get('snippet', '')

        email_list.append({
            'id': msg['id'],
            'subject': subject,
            'from': sender,
            'to': to,
            'date': date,
            'snippet': snippet,
            'labels': msg_data.get('labelIds', [])
        })

    print(f"✅ Found {len(email_list)} matching emails")
    return email_list


def search_by_sender(service, sender_email, max_results=100):
    """
    Search for all emails from a specific sender.

    Args:
        service: Gmail API service instance
        sender_email: Email address or name to search for
        max_results: Maximum number of results

    Returns:
        list: List of emails from sender
    """
    query = f"from:{sender_email}"
    return search_emails(service, query, max_results)


def search_by_subject(service, subject_keywords, max_results=100):
    """
    Search for emails by subject keywords.

    Args:
        service: Gmail API service instance
        subject_keywords: Keywords to search for in subject
        max_results: Maximum number of results

    Returns:
        list: List of matching emails
    """
    query = f"subject:{subject_keywords}"
    return search_emails(service, query, max_results)


def search_by_date_range(service, after_date=None, before_date=None, max_results=100):
    """
    Search for emails within a date range.

    Args:
        service: Gmail API service instance
        after_date: Search emails after this date (format: YYYY/MM/DD)
        before_date: Search emails before this date (format: YYYY/MM/DD)
        max_results: Maximum number of results

    Returns:
        list: List of emails in date range
    """
    query_parts = []

    if after_date:
        query_parts.append(f"after:{after_date}")
    if before_date:
        query_parts.append(f"before:{before_date}")

    query = " ".join(query_parts) if query_parts else "in:anywhere"
    return search_emails(service, query, max_results)


def display_search_results(emails):
    """Display search results in a readable format."""
    if not emails:
        print("No emails found.")
        return

    print("\n" + "="*80)
    print("SEARCH RESULTS")
    print("="*80)

    for i, email in enumerate(emails, 1):
        print(f"\n{i}. From: {email['from']}")
        print(f"   To: {email['to']}")
        print(f"   Subject: {email['subject']}")
        print(f"   Date: {email['date']}")
        print(f"   Preview: {email['snippet'][:100]}...")
        print(f"   Message ID: {email['id']}")

    print("\n" + "="*80)
    print(f"Total: {len(emails)} emails")
    print("="*80)


def export_search_results(emails, filename='search_results.txt'):
    """
    Export search results to a text file.

    Args:
        emails: List of email dictionaries
        filename: Output filename

    Returns:
        str: Path to exported file
    """
    with open(filename, 'w', encoding='utf-8') as f:
        f.write("="*80 + "\n")
        f.write("GMAIL SEARCH RESULTS\n")
        f.write("="*80 + "\n\n")

        for i, email in enumerate(emails, 1):
            f.write(f"{i}. From: {email['from']}\n")
            f.write(f"   To: {email['to']}\n")
            f.write(f"   Subject: {email['subject']}\n")
            f.write(f"   Date: {email['date']}\n")
            f.write(f"   Preview: {email['snippet']}\n")
            f.write(f"   Message ID: {email['id']}\n\n")

        f.write("="*80 + "\n")
        f.write(f"Total: {len(emails)} emails\n")

    print(f"✅ Results exported to {filename}")
    return filename
