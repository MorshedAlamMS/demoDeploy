/**
====================================================================
                HERO SECTION CONTENT CONFIGURATION
====================================================================
This file holds the content for the hero (banner) section of your website.
You can update the text, images, and colors below without needing to touch
the component code. Follow the guidelines provided to ensure your changes
display correctly.

⚠️ GENERAL GUIDELINES:
- **DO NOT** change the structure of this file (e.g., adding or removing commas, brackets, or altering export names).
- **DO NOT** modify the order of the arrays if more than one value is provided.
- Only **edit the content values** (text, image file names, and color codes) while keeping the structure intact.

⚠️ IMAGE IMPORT AND FILE NAMING:
- For images, ensure that the files are placed in the correct folders:
  * Banner images should be placed in `/public/Banner/`
  * Feedback images should be placed in `/public/feedback/`
- The file names (including case sensitivity) in the arrays or string values must match exactly the names of the files in the folders.
  For example, if you set the profile image as `"bannerImage.png"`, the file in `/public/Banner/` must be named exactly `"bannerImage.png"`.

✅ HOW TO EDIT:
1️⃣ **Editing the Banner Title:**
   - Update the text in `heroSectionTitle` to change the heading displayed in the banner.
   - Example: Changing it to `"Showcase your creativity"` will update the banner heading.

2️⃣ **Editing the Profile Image:**
   - Update the file name in `heroSectionProfileImage`.
   - Example: If you have a new image `"myProfile.png"` uploaded in `/public/Banner/`, replace the value accordingly.

3️⃣ **Editing Feedback Platform Images:**
   - Update the array `feedBackPlatformImagesName` with the image file names (order matters).
   - Ensure each file exists in `/public/feedback/`.
   - Example: `["feedback1.png", "feedback2.png"]`

4️⃣ **Editing Feedback Platform Names:**
   - Update the array `feedBackPlatformName` with the names of the platforms where you received feedback.
   - Example: `["Fiverr", "Upwork"]`

5️⃣ **Editing Feedback Star Rating:**
   - Update `feedBackStar` with a number (e.g., 4.5).
   - The component displays full stars based on the integer part of this value.
   - Example: `4.5`

6️⃣ **Editing Buttons Background Colors:**
   - Update the array `buttonsBgColor` with exactly two hexadecimal color values.
   - The first color is for the "Works" button and the second for the "Contact" button.
   - Example: `["#000000", "#252B37"]`

====================================================================
*/

export const heroSectionTitle =
  // * Banner Title (Update the text below to change your banner heading)
  'The best way to showcase your work'

export const heroSectionProfileImage =
  // * Banner Profile Image: File name located in /public/Banner/
  // * Here you can upload your profile image.
  'bannerImage.png'

export const feedBackPlatformImagesName =
  // * Feedback Images: Array of image file names located in /public/feedback/
  // * Images are displayed in the order provided in this array.
  ['feedback1.png', 'feedback2.png']

export const feedBackPlatformName =
  // * Feedback Platforms: List the platforms where you received feedback.
  // * Ensure the names correspond correctly to the displayed feedback.
  ['Free', 'Work']

export const feedBackStar =
  // * Feedback Star: Number of stars to display (e.g., 4.5)
  // * Ensure this is a number; the component displays full stars based on the integer part.
  4.5

export const buttonsBgColor =
  // * Buttons Background Colors: Array with two colors for the buttons (Works and Contact)
  // * Ensure the array contains exactly two valid hexadecimal color values.
  ['#60A5FA', '#252B37']
