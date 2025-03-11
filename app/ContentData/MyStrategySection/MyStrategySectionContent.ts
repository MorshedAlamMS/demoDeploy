/*
====================================================================
                Strategy Section Text Configuration
====================================================================

This file contains text content for the Strategy section of your application.
You can easily customize the text by replacing the values assigned to each 
exported variable below.

✅ HOW TO EDIT THIS FILE?
1️⃣. Each variable holds a string that represents a specific part of the strategy 
    section (e.g., top description, step one text, bottom title, etc.).
2️⃣. Update the text between the quotation marks ("") to match your desired content.
3️⃣. Keep the structure intact, and avoid changing the variable names.
4️⃣. Follow the comments for guidance on what each text section represents.

Happy customizing!
====================================================================
*/

export const myStrategySectionTopDescription =
  // strategy section Description text ---You can replace your own description that relevant to your Strategy here
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// Strategy Section Step Titles
// --- These titles represent each step of the strategy section.
// --- Ensure that the order of the titles matches the order of the images and card colors.
export const myStrategySectionStepTitle = [
  'Lorem ipsum dolor sit amet, consectetur',//step -01
  'Sed do eiusmod tempor incididunt ut labore.',// step -02
  'Tempor incididunt ut labore et dolore magna aliqua.', // step -03
]

// Strategy Section Step Images
// --- These images correspond to each step and must be synchronized with step titles and card colors.
// --- Before using an image, ensure it is imported into the `/public/MyStrategySectionImages` folder.
// --- Use the exact image name; otherwise, the image will not appear in the UI.
export const myStrategySectionImages = 
[
  'step1.png',//step -01
  'step2.png',//step -02
  'step3.png'//step -03
]

// Card Color Customization
// --- These colors correspond to each step and must be in the same order as step titles and images.
// --- Replace the hex color codes below with your preferred colors while maintaining synchronization.
export const stepCardColor = 
[
  '#FEE690', // step 01 card color
  '#D5C9EE', // step 02 card color
  '#D4E2A7' // step 03 card color
]

export const myStrategySectionBottomDescription =
  // Your strategy section bottom description text ---You can replace your description !!!
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Fusce ac orci non nisi vehicula fringilla.'

export const myStrategySectionBottomTitle =
  // Your strategy section bottom title text ---You can replace your title that will attract your client
  '⏳ Don’t miss out—grab a high-converting thumbnail now before your competition takes the lead!'
