#!/usr/bin/env python3
"""
Script to fix encoded URLs in imageSrcSet and srcSet attributes.
"""

import re
import urllib.parse

def fix_encoded_urls_in_file(file_path):
    """Fix encoded URLs in imageSrcSet and srcSet attributes."""
    print(f"Processing: {file_path}")
    
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count original occurrences
    original_count = content.count('%2FSafeRoadWebsite%2F')
    if original_count == 0:
        print(f"  No encoded URLs to fix in {file_path}")
        return
    
    print(f"  Found {original_count} encoded URLs to fix")
    
    # Function to fix encoded URLs
    def fix_encoded_url(match):
        full_match = match.group(0)
        
        # Decode the URL
        decoded = urllib.parse.unquote(full_match)
        
        # Replace the problematic paths
        fixed = decoded.replace('/SafeRoadWebsite/_next/', '_next/')
        fixed = fixed.replace('/SafeRoadWebsite/', './')
        
        # Re-encode
        return urllib.parse.quote(fixed, safe=':/?=&')
    
    # Replace all encoded URLs
    content = re.sub(r'%2FSafeRoadWebsite%2F[^%]*', fix_encoded_url, content)
    
    # Write the fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  Fixed encoded URLs in {file_path}")

def main():
    """Main function to process all HTML files."""
    html_files = [
        'index.html',
        'signin.html', 
        'signup.html',
        'reset-password.html',
        '404.html'
    ]
    
    print("Fixing encoded URLs for GitHub Pages deployment...")
    print("=" * 50)
    
    for html_file in html_files:
        if os.path.exists(html_file):
            fix_encoded_urls_in_file(html_file)
        else:
            print(f"Warning: {html_file} not found")
    
    print("=" * 50)
    print("Encoded URL fixing completed!")

if __name__ == "__main__":
    import os
    main() 