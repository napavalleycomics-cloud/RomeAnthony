# RomeAnthony

Gmail API Integration Project

## Overview

This project provides a Python-based Gmail API integration that allows you to access and manage your Gmail account programmatically. It includes OAuth 2.0 authentication and various Gmail operations.

## Features

- OAuth 2.0 authentication with Gmail API
- Read and list messages from your inbox
- Send emails programmatically
- Get user profile information
- Message management capabilities

## Prerequisites

- Python 3.7 or higher
- A Google Cloud project with Gmail API enabled
- OAuth 2.0 credentials (Client ID and Client Secret)

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd RomeAnthony
```

2. Install required dependencies:
```bash
pip install -r requirements.txt
```

## Setup

### Configure OAuth 2.0 Credentials

You need to set up your Gmail API credentials before using this project.

**Option 1: Interactive Setup (Recommended)**

Run the setup script and enter your credentials when prompted:
```bash
python setup_credentials.py
```

**Option 2: Manual Setup**

1. Copy the template file:
```bash
cp credentials.json.template credentials.json
```

2. Edit `credentials.json` and replace the placeholders with your actual OAuth 2.0 credentials:
   - `YOUR_CLIENT_ID` - Your Google Cloud OAuth 2.0 Client ID
   - `YOUR_CLIENT_SECRET` - Your Google Cloud OAuth 2.0 Client Secret

### Getting OAuth 2.0 Credentials

If you don't have OAuth 2.0 credentials yet:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Gmail API for your project
4. Go to "Credentials" and create OAuth 2.0 Client ID
5. Download the credentials or copy the Client ID and Client Secret

The integration uses the following Gmail API scopes:
- `gmail.readonly` - Read all resources and metadata
- `gmail.modify` - Read, compose, send, and permanently delete messages
- `gmail.compose` - Create, read, update, and delete drafts
- `gmail.send` - Send messages only

## Usage

### Running the Main Script

To test the Gmail API integration and see your recent messages:

```bash
python main.py
```

On first run, this will:
1. Open a browser window for OAuth 2.0 authentication
2. Ask you to log in to your Google account
3. Request permission to access your Gmail
4. Save authentication tokens to `token.pickle` for future use

### Using the Gmail Auth Module

You can import and use the authentication module in your own scripts:

```python
from gmail_auth import get_gmail_service

# Get authenticated service
service = get_gmail_service()

# Use the service to access Gmail
profile = service.users().getProfile(userId='me').execute()
print(profile)
```

### Available Functions

The `main.py` script provides several utility functions:

- `list_messages(service, max_results=10)` - List recent messages
- `get_message(service, msg_id)` - Get full message content
- `get_message_snippet(service, msg_id)` - Get message preview
- `send_message(service, to, subject, message_text)` - Send an email
- `get_user_profile(service)` - Get user profile information

## Files

- `credentials.json.template` - Template for OAuth 2.0 credentials
- `credentials.json` - Your OAuth 2.0 client credentials (not in git, created by you)
- `setup_credentials.py` - Interactive setup script for credentials
- `gmail_auth.py` - Authentication module
- `main.py` - Main script with Gmail operations
- `requirements.txt` - Python dependencies
- `token.pickle` - Cached authentication tokens (generated on first run, not in git)

## Security Notes

- `credentials.json` and `token.pickle` are in `.gitignore` and will not be committed
- Never share your `credentials.json` or `token.pickle` files
- The OAuth 2.0 flow ensures secure access to your Gmail account
- Tokens are stored locally and reused for subsequent API calls

## Troubleshooting

If you encounter authentication issues:
1. Delete the `token.pickle` file
2. Run the script again to re-authenticate
3. Ensure your credentials.json is valid

## License

MIT License