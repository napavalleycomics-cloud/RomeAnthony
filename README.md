# Gmail Cleanup Tool

A comprehensive Python tool to automate Gmail organization and cleanup tasks.

## Features

- **Delete Spam**: Permanently remove all messages in your spam folder
- **Find Unsubscribe Links**: Identify promotional emails with unsubscribe options
- **Archive Old Emails**: Automatically archive emails older than a specified number of days
- **Clean Large Attachments**: Find and delete emails with large attachments to free up storage
- **Search Emails**: Search for specific emails by sender, subject, or custom queries
- **Full Cleanup**: Run all cleanup tasks in one go

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Set Up Google Cloud Project and Gmail API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Enable the Gmail API:
   - Click "Enable APIs and Services"
   - Search for "Gmail API"
   - Click "Enable"

4. Create OAuth 2.0 Credentials:
   - Go to "Credentials" → "Create Credentials" → "OAuth client ID"
   - If prompted, configure the OAuth consent screen:
     - User Type: External (for personal use)
     - App name: "Gmail Cleanup Tool"
     - User support email: Your email
     - Developer contact: Your email
     - Scopes: Add `https://www.googleapis.com/auth/gmail.modify`
   - Application type: "Desktop app"
   - Name: "Gmail Cleanup Tool"
   - Click "Create"

5. Download credentials:
   - Click the download button (⬇) next to your newly created OAuth 2.0 Client ID
   - Save the file as `credentials.json` in the project root directory

### 3. First Run - Authentication

```bash
python main.py
```

On first run, the tool will:
1. Open your browser for Gmail authentication
2. Ask you to log in to your Google account
3. Request permission to access your Gmail
4. Save authentication token to `token.json` for future use

**Note**: Your credentials are stored locally and never shared with anyone.

## Usage

Run the main script:

```bash
python main.py
```

### Menu Options

1. **Delete all spam messages** - Permanently removes all spam
2. **Find emails with unsubscribe links** - Identifies promotional emails you can unsubscribe from
3. **Archive old emails** - Archives emails older than X days (keeps starred/important emails)
4. **Find and clean up large attachments** - Locate emails with large files eating up storage
5. **Search for specific emails** - Find emails by sender, subject, or custom query
6. **Search emails by sender** - Find all emails from a specific person
7. **Run full cleanup** - Execute spam deletion, archiving, and find large attachments
0. **Exit** - Close the application

### Example: Finding Emails from a Specific Person

To find all emails from a loved one:

1. Run `python main.py`
2. Choose option `5` (Search for specific emails)
3. Choose option `1` (Search by sender)
4. Enter the email address or name
5. Results will be displayed and can be exported to a file

### Example: Cleaning Up Storage

1. Run `python main.py`
2. Choose option `4` (Find and clean up large attachments)
3. Enter minimum size (e.g., 10 MB)
4. Review the list of emails with large attachments
5. Choose which ones to delete

## Security Notes

- **credentials.json** and **token.json** contain sensitive authentication data
- These files are automatically excluded from git (in `.gitignore`)
- Never share these files with anyone
- The tool uses OAuth 2.0, so your Gmail password is never stored

## Gmail API Scopes

This tool uses the `gmail.modify` scope which allows:
- Reading emails
- Modifying labels (for archiving)
- Deleting messages

The tool **cannot**:
- Send emails on your behalf
- Access emails in other Google accounts
- Modify settings outside of labels and messages

## Troubleshooting

### "credentials.json not found"
- Make sure you've downloaded the credentials file from Google Cloud Console
- Place it in the project root directory

### "Invalid grant" or "Token has been expired or revoked"
- Delete `token.json`
- Run the script again to re-authenticate

### Rate limiting errors
- The tool includes automatic rate limiting
- If you still encounter issues, try reducing batch sizes in the code

## File Structure

```
RomeAnthony/
├── gmail_cleanup/
│   ├── __init__.py
│   ├── auth.py                 # Gmail API authentication
│   ├── spam_cleaner.py         # Spam deletion module
│   ├── unsubscribe.py          # Unsubscribe link finder
│   ├── archiver.py             # Email archiving module
│   ├── attachment_cleaner.py   # Large attachment cleanup
│   └── search.py               # Email search functionality
├── main.py                     # Main CLI interface
├── requirements.txt            # Python dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## Privacy & Data

- All processing happens locally on your computer
- No data is sent to external servers (except Google's Gmail API)
- Authentication tokens are stored locally
- The tool is open source - you can review all code

## License

This tool is provided as-is for personal use. Feel free to modify and distribute.

## Support

For issues or questions:
- Check the troubleshooting section above
- Review Google's [Gmail API documentation](https://developers.google.com/gmail/api)
- Ensure your credentials are properly configured in Google Cloud Console
