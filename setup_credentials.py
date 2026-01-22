"""Setup script to create credentials.json file

This script helps you create the credentials.json file needed for Gmail API access.
"""

import json
import os


def setup_credentials():
    """Interactive setup to create credentials.json"""

    print("=" * 60)
    print("Gmail API Credentials Setup")
    print("=" * 60)
    print()

    # Check if credentials.json already exists
    if os.path.exists('credentials.json'):
        overwrite = input("credentials.json already exists. Overwrite? (y/n): ")
        if overwrite.lower() != 'y':
            print("Setup cancelled.")
            return

    print("Please enter your OAuth 2.0 credentials:")
    print()

    client_id = input("Client ID: ").strip()
    client_secret = input("Client Secret: ").strip()

    credentials = {
        "installed": {
            "client_id": client_id,
            "client_secret": client_secret,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "redirect_uris": ["http://localhost"]
        }
    }

    # Write credentials to file
    with open('credentials.json', 'w') as f:
        json.dump(credentials, f, indent=2)

    print()
    print("=" * 60)
    print("Credentials saved successfully to credentials.json")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Run: pip install -r requirements.txt")
    print("2. Run: python main.py")
    print()


if __name__ == '__main__':
    setup_credentials()
