/**
====================================================================
                WEBSITE META DATA CONFIGURATION
====================================================================
This file contains configuration variables for your website's meta data.
These variables are used to set up important SEO and branding details such as:
- The website name
- The meta title and description for search engines
- The favicon (the small icon displayed in browser tabs)
  
⚠️ GENERAL GUIDELINES:
- **DO NOT** modify the variable names or structure.
- **ONLY** update the content values (text and file names) as needed.
- For image-related variables, ensure the corresponding files exist in the specified folder.
  
✅ HOW TO EDIT:
1️⃣ **Website Name:**
   - Update `websiteName` to reflect your brand or website name.
   - Example: `"Ease"` can be changed to `"YourBrand"`.

2️⃣ **Meta Title:**
   - Update `metaTitle` to define the title that appears in search engine results.
   - This should be concise and descriptive.
   - Example: `"Design Your Thumbnails with Ease"` can be modified to `"Create Stunning Thumbnails"`.

3️⃣ **Meta Description:**
   - Update `metaDescription` with a short description of your website.
   - This description should summarize what your website or service offers.
   - Example: Change the text to better reflect your updated service details if needed.

4️⃣ **Favicon:**
   - Update `faviconName` with the file name of your favicon.
   - **IMPORTANT:** The favicon file must be placed in the `/public` folder.
   - Example: `"favicon.png"` should exactly match the file name (including case) in the `/public` folder.

====================================================================
*/

export const websiteName = 'Ease'

export const websiteColor = "#FF0000"

export const metaTitle = 'Design Your Thumbnails with Ease'

export const metaDescription =
   "Easily create stunning thumbnails for your YouTube videos with Thumbnail Boss. Our AI-powered tool generates high-quality thumbnails that grab viewers' attention and boost engagement. Try it now and take your YouTube channel to the next level!"

export const faviconName =
   // * Favicon: The file name located in the `/public` folder
   'favicon.png'
