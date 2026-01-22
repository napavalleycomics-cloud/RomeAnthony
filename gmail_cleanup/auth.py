"""Gmail API authentication module."""

import os.path
import pickle
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/gmail.modify']


def get_gmail_service():
    """
    Authenticate and return Gmail API service.

    Returns:
        Resource: Gmail API service instance
    """
    creds = None

    # The file token.json stores the user's access and refresh tokens
    if os.path.exists('token.json'):
        with open('token.json', 'rb') as token:
            creds = pickle.load(token)

    # If there are no (valid) credentials available, let the user log in
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                raise FileNotFoundError(
                    "credentials.json not found. Please download it from Google Cloud Console.\n"
                    "See README.md for setup instructions."
                )
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)

            # Manual OAuth flow for headless environment
            auth_url, _ = flow.authorization_url(prompt='consent')

            print("\n" + "="*80)
            print("Please visit this URL to authorize this application:")
            print("\n" + auth_url + "\n")
            print("="*80)
            print("\nAfter authorization, you'll be redirected to a URL.")
            print("Copy the FULL redirect URL and paste it here.\n")

            redirect_response = input('Paste the full redirect URL here: ').strip()

            flow.fetch_token(authorization_response=redirect_response)
            creds = flow.credentials

        # Save the credentials for the next run
        with open('token.json', 'wb') as token:
            pickle.dump(creds, token)

    return build('gmail', 'v1', credentials=creds)
