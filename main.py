"""Main Gmail API Access Script

This script demonstrates how to access Gmail using the Gmail API.
It provides functions to read messages, send emails, and manage your inbox.
"""

from gmail_auth import get_gmail_service
from googleapiclient.errors import HttpError
import base64
from email.mime.text import MIMEText


def list_messages(service, max_results=10):
    """Lists the most recent messages in the user's inbox.

    Args:
        service: Authorized Gmail API service instance
        max_results: Maximum number of messages to retrieve (default: 10)

    Returns:
        list: List of message objects
    """
    try:
        results = service.users().messages().list(
            userId='me',
            maxResults=max_results
        ).execute()

        messages = results.get('messages', [])

        if not messages:
            print('No messages found.')
            return []

        print(f'Found {len(messages)} messages:')
        return messages

    except HttpError as error:
        print(f'An error occurred: {error}')
        return []


def get_message(service, msg_id):
    """Gets the full content of a specific message.

    Args:
        service: Authorized Gmail API service instance
        msg_id: The ID of the message to retrieve

    Returns:
        dict: Message object with full content
    """
    try:
        message = service.users().messages().get(
            userId='me',
            id=msg_id,
            format='full'
        ).execute()

        return message

    except HttpError as error:
        print(f'An error occurred: {error}')
        return None


def get_message_snippet(service, msg_id):
    """Gets a snippet/preview of a message.

    Args:
        service: Authorized Gmail API service instance
        msg_id: The ID of the message

    Returns:
        str: Message snippet
    """
    try:
        message = service.users().messages().get(
            userId='me',
            id=msg_id,
            format='metadata',
            metadataHeaders=['Subject', 'From']
        ).execute()

        headers = message.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), 'No Subject')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), 'Unknown')

        snippet = message.get('snippet', '')

        return f"From: {sender}\nSubject: {subject}\nSnippet: {snippet}"

    except HttpError as error:
        print(f'An error occurred: {error}')
        return None


def send_message(service, to, subject, message_text):
    """Sends an email message.

    Args:
        service: Authorized Gmail API service instance
        to: Email address of the recipient
        subject: Subject of the email
        message_text: Body of the email

    Returns:
        dict: Sent message object
    """
    try:
        message = MIMEText(message_text)
        message['to'] = to
        message['subject'] = subject

        raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode('utf-8')
        send_message_body = {'raw': raw_message}

        sent_message = service.users().messages().send(
            userId='me',
            body=send_message_body
        ).execute()

        print(f'Message sent successfully. Message ID: {sent_message["id"]}')
        return sent_message

    except HttpError as error:
        print(f'An error occurred: {error}')
        return None


def get_user_profile(service):
    """Gets the user's Gmail profile information.

    Args:
        service: Authorized Gmail API service instance

    Returns:
        dict: User profile information
    """
    try:
        profile = service.users().getProfile(userId='me').execute()
        return profile

    except HttpError as error:
        print(f'An error occurred: {error}')
        return None


def main():
    """Main function to demonstrate Gmail API usage."""
    print("Authenticating with Gmail API...")
    service = get_gmail_service()

    if not service:
        print("Failed to authenticate with Gmail API.")
        return

    print("Authentication successful!\n")

    # Get user profile
    print("Fetching user profile...")
    profile = get_user_profile(service)
    if profile:
        print(f"Email: {profile.get('emailAddress')}")
        print(f"Total messages: {profile.get('messagesTotal')}")
        print(f"Threads total: {profile.get('threadsTotal')}\n")

    # List recent messages
    print("Fetching recent messages...")
    messages = list_messages(service, max_results=5)

    if messages:
        print("\nMessage previews:")
        for i, msg in enumerate(messages, 1):
            print(f"\n--- Message {i} ---")
            snippet = get_message_snippet(service, msg['id'])
            if snippet:
                print(snippet)

    print("\n" + "="*50)
    print("Gmail API integration is working successfully!")
    print("="*50)


if __name__ == '__main__':
    main()
