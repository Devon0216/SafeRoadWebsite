#!/usr/bin/env python3
"""
Comprehensive script to fix all absolute paths in HTML files for GitHub Pages deployment.
Fixes both direct paths and encoded URLs in imageSrcSet and srcSet attributes.
"""

import os
import re
import urllib.parse

def fix_html_paths(file_path):
    """Fix absolute paths in an HTML file."""
    print(f"Processing: {file_path}")
    
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count original occurrences
    original_count = content.count('/SafeRoadWebsite/')
    if original_count == 0:
        print(f"  No paths to fix in {file_path}")
        return
    
    # Fix 1: Replace direct absolute paths with relative paths
    # Replace /SafeRoadWebsite/_next/ with _next/
    content = re.sub(r'/SafeRoadWebsite/_next/', '_next/', content)
    
    # Replace /SafeRoadWebsite/ with ./ (for any remaining paths)
    content = re.sub(r'/SafeRoadWebsite/', './', content)
    
    # Fix 2: Fix encoded URLs in imageSrcSet and srcSet attributes
    # Pattern to match imageSrcSet and srcSet with encoded URLs
    def fix_encoded_urls(match):
        attr_name = match.group(1)  # imageSrcSet or srcSet
        attr_value = match.group(2)
        
        # Decode the URL
        decoded_url = urllib.parse.unquote(attr_value)
        
        # Replace /SafeRoadWebsite/ with _next/ in the decoded URL
        fixed_url = decoded_url.replace('/SafeRoadWebsite/_next/', '_next/')
        fixed_url = fixed_url.replace('/SafeRoadWebsite/', './')
        
        # Re-encode the URL
        encoded_url = urllib.parse.quote(fixed_url, safe=':/?=&')
        
        return f'{attr_name}="{encoded_url}"'
    
    # Apply the fix to imageSrcSet and srcSet attributes
    content = re.sub(r'(imageSrcSet|srcSet)="([^"]*%2FSafeRoadWebsite%2F[^"]*)"', fix_encoded_urls, content)
    
    # Fix 3: Fix any remaining encoded URLs in the content
    def fix_remaining_encoded(match):
        encoded_part = match.group(1)
        decoded_part = urllib.parse.unquote(encoded_part)
        fixed_part = decoded_part.replace('/SafeRoadWebsite/_next/', '_next/')
        fixed_part = fixed_part.replace('/SafeRoadWebsite/', './')
        return urllib.parse.quote(fixed_part, safe=':/?=&')
    
    # Find and fix any remaining encoded URLs
    content = re.sub(r'%2FSafeRoadWebsite%2F([^%]*)', fix_remaining_encoded, content)
    
    # Write the fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  Fixed paths in {file_path}")

def main():
    """Main function to process all HTML files."""
    html_files = [
        'index.html',
        'signin.html', 
        'signup.html',
        'reset-password.html',
        '404.html'
    ]
    
    print("Fixing all absolute paths for GitHub Pages deployment...")
    print("=" * 60)
    
    for html_file in html_files:
        if os.path.exists(html_file):
            fix_html_paths(html_file)
        else:
            print(f"Warning: {html_file} not found")
    
    print("=" * 60)
    print("Comprehensive path fixing completed!")
    print("\nNext steps:")
    print("1. Commit these changes to your repository")
    print("2. Push to GitHub")
    print("3. Your CSS and media files should now load correctly on GitHub Pages")

if __name__ == "__main__":
    main() 