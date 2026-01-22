#!/usr/bin/env python3
"""Gmail Cleanup Tool - Main CLI Interface."""

import sys
from gmail_cleanup.auth import get_gmail_service
from gmail_cleanup.spam_cleaner import delete_spam_messages
from gmail_cleanup.unsubscribe import find_unsubscribe_emails, display_unsubscribe_list
from gmail_cleanup.archiver import archive_old_emails
from gmail_cleanup.attachment_cleaner import (
    find_large_attachments,
    display_large_attachments,
    delete_emails_with_large_attachments
)
from gmail_cleanup.search import (
    search_by_sender,
    search_by_subject,
    search_emails,
    display_search_results,
    export_search_results
)


def print_banner():
    """Print application banner."""
    print("\n" + "="*80)
    print("  GMAIL CLEANUP TOOL")
    print("  Automate your Gmail organization and cleanup")
    print("="*80 + "\n")


def print_menu():
    """Print main menu."""
    print("\n" + "-"*80)
    print("MAIN MENU")
    print("-"*80)
    print("1. Delete all spam messages")
    print("2. Find emails with unsubscribe links")
    print("3. Archive old emails (older than X days)")
    print("4. Find and clean up large attachments")
    print("5. Search for specific emails")
    print("6. Search emails by sender")
    print("7. Run full cleanup (spam + old emails + large attachments)")
    print("0. Exit")
    print("-"*80)


def run_spam_cleanup(service, dry_run=False):
    """Run spam cleanup."""
    print("\n--- SPAM CLEANUP ---")
    confirm = input("Are you sure you want to delete all spam? (yes/no): ")

    if confirm.lower() != 'yes':
        print("❌ Cancelled")
        return

    result = delete_spam_messages(service, dry_run=dry_run)
    print(f"\nDeleted {result['deleted']} spam messages")


def run_unsubscribe_finder(service):
    """Find unsubscribe emails."""
    print("\n--- UNSUBSCRIBE FINDER ---")
    max_results = input("How many emails to scan? (default: 100): ").strip()
    max_results = int(max_results) if max_results.isdigit() else 100

    emails = find_unsubscribe_emails(service, max_results)
    display_unsubscribe_list(emails)

    if emails:
        export = input("\nExport to file? (yes/no): ")
        if export.lower() == 'yes':
            filename = 'unsubscribe_emails.txt'
            with open(filename, 'w', encoding='utf-8') as f:
                f.write("EMAILS WITH UNSUBSCRIBE LINKS\n")
                f.write("="*80 + "\n\n")
                for email in emails:
                    f.write(f"From: {email['from']}\n")
                    f.write(f"Subject: {email['subject']}\n")
                    if email['unsubscribe_url']:
                        f.write(f"Unsubscribe URL: {email['unsubscribe_url']}\n")
                    f.write(f"Message ID: {email['id']}\n\n")
            print(f"✅ Exported to {filename}")


def run_archiver(service, dry_run=False):
    """Run email archiver."""
    print("\n--- EMAIL ARCHIVER ---")
    days = input("Archive emails older than how many days? (default: 365): ").strip()
    days = int(days) if days.isdigit() else 365

    confirm = input(f"Archive emails older than {days} days? (yes/no): ")
    if confirm.lower() != 'yes':
        print("❌ Cancelled")
        return

    result = archive_old_emails(service, days_old=days, dry_run=dry_run)
    print(f"\nArchived {result['archived']} emails")


def run_attachment_cleanup(service):
    """Run attachment cleanup."""
    print("\n--- LARGE ATTACHMENT CLEANUP ---")
    min_size = input("Minimum attachment size in MB? (default: 10): ").strip()
    min_size = int(min_size) if min_size.isdigit() else 10

    max_results = input("Maximum emails to find? (default: 100): ").strip()
    max_results = int(max_results) if max_results.isdigit() else 100

    emails = find_large_attachments(service, min_size_mb=min_size, max_results=max_results)
    display_large_attachments(emails)

    if emails:
        print("\nOptions:")
        print("1. Delete specific emails")
        print("2. Delete all found emails")
        print("3. Export list and exit")
        print("0. Cancel")

        choice = input("Choose option: ").strip()

        if choice == '1':
            indices = input("Enter email numbers to delete (comma-separated): ").strip()
            indices = [int(i.strip())-1 for i in indices.split(',') if i.strip().isdigit()]
            email_ids = [emails[i]['id'] for i in indices if 0 <= i < len(emails)]

            if email_ids:
                confirm = input(f"Delete {len(email_ids)} emails? (yes/no): ")
                if confirm.lower() == 'yes':
                    delete_emails_with_large_attachments(service, email_ids)

        elif choice == '2':
            confirm = input(f"Delete all {len(emails)} emails? (yes/no): ")
            if confirm.lower() == 'yes':
                email_ids = [e['id'] for e in emails]
                delete_emails_with_large_attachments(service, email_ids)

        elif choice == '3':
            filename = 'large_attachments.txt'
            with open(filename, 'w', encoding='utf-8') as f:
                f.write("EMAILS WITH LARGE ATTACHMENTS\n")
                f.write("="*80 + "\n\n")
                for email in emails:
                    f.write(f"From: {email['from']}\n")
                    f.write(f"Subject: {email['subject']}\n")
                    f.write(f"Size: {email['total_size_mb']} MB\n")
                    f.write(f"Message ID: {email['id']}\n\n")
            print(f"✅ Exported to {filename}")


def run_search(service):
    """Run email search."""
    print("\n--- EMAIL SEARCH ---")
    print("Search options:")
    print("1. Search by sender")
    print("2. Search by subject")
    print("3. Custom Gmail query")

    choice = input("Choose option: ").strip()

    emails = []

    if choice == '1':
        sender = input("Enter sender email or name: ").strip()
        max_results = input("Max results? (default: 100): ").strip()
        max_results = int(max_results) if max_results.isdigit() else 100
        emails = search_by_sender(service, sender, max_results)

    elif choice == '2':
        subject = input("Enter subject keywords: ").strip()
        max_results = input("Max results? (default: 100): ").strip()
        max_results = int(max_results) if max_results.isdigit() else 100
        emails = search_by_subject(service, subject, max_results)

    elif choice == '3':
        query = input("Enter Gmail query (e.g., 'from:example@email.com after:2020/01/01'): ").strip()
        max_results = input("Max results? (default: 100): ").strip()
        max_results = int(max_results) if max_results.isdigit() else 100
        emails = search_emails(service, query, max_results)

    if emails:
        display_search_results(emails)

        export = input("\nExport results? (yes/no): ")
        if export.lower() == 'yes':
            filename = input("Filename (default: search_results.txt): ").strip()
            filename = filename if filename else 'search_results.txt'
            export_search_results(emails, filename)


def run_full_cleanup(service, dry_run=False):
    """Run full cleanup process."""
    print("\n--- FULL CLEANUP ---")
    print("This will:")
    print("  1. Delete all spam messages")
    print("  2. Archive emails older than 365 days")
    print("  3. Find large attachments (for manual review)")

    confirm = input("\nProceed with full cleanup? (yes/no): ")
    if confirm.lower() != 'yes':
        print("❌ Cancelled")
        return

    # Delete spam
    print("\n[1/3] Cleaning spam...")
    spam_result = delete_spam_messages(service, dry_run=dry_run)

    # Archive old emails
    print("\n[2/3] Archiving old emails...")
    archive_result = archive_old_emails(service, days_old=365, dry_run=dry_run)

    # Find large attachments (don't auto-delete)
    print("\n[3/3] Finding large attachments...")
    attachments = find_large_attachments(service, min_size_mb=10, max_results=50)

    # Summary
    print("\n" + "="*80)
    print("CLEANUP SUMMARY")
    print("="*80)
    print(f"Spam messages deleted: {spam_result['deleted']}")
    print(f"Old emails archived: {archive_result['archived']}")
    print(f"Large attachments found: {len(attachments)}")
    print("="*80)

    if attachments:
        print("\nLarge attachments require manual review.")
        print("Use option 4 from main menu to review and delete them.")


def main():
    """Main application entry point."""
    print_banner()

    try:
        print("🔐 Authenticating with Gmail...")
        service = get_gmail_service()
        print("✅ Authentication successful!")

        while True:
            print_menu()
            choice = input("\nEnter your choice: ").strip()

            if choice == '1':
                run_spam_cleanup(service)
            elif choice == '2':
                run_unsubscribe_finder(service)
            elif choice == '3':
                run_archiver(service)
            elif choice == '4':
                run_attachment_cleanup(service)
            elif choice == '5':
                run_search(service)
            elif choice == '6':
                run_search(service)  # Search by sender is in run_search
            elif choice == '7':
                run_full_cleanup(service)
            elif choice == '0':
                print("\n👋 Goodbye!")
                sys.exit(0)
            else:
                print("❌ Invalid choice. Please try again.")

    except FileNotFoundError as e:
        print(f"\n❌ Error: {e}")
        print("\nPlease follow the setup instructions in README.md")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n\n👋 Goodbye!")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ An error occurred: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
