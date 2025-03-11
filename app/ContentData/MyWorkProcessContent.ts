/*
====================================================================
                Work Process Text Configuration
====================================================================

This file contains text content and configuration for the 
Work Process section of your application. 
You can easily customize the text by replacing the values 
assigned to each exported variable below.

✅ HOW TO EDIT THIS FILE?
1️⃣. There are two exported arrays: 
    - `myWorkProcessStepsTitle`: Contains the title of each step.
    - `myWorkProcessStepsDescription`: Contains the description for each step.
    
2️⃣. Update the text between the quotation marks ("") to match your desired content.
    - Keep each title in the `myWorkProcessStepsTitle` array short and impactful (ideally 2-4 words).
    - Ensure each description in the `myWorkProcessStepsDescription` array is concise but informative.

3️⃣. Do not change the variable names or the overall structure of the arrays.
    - Only update the text content.
    - Keep the format intact for consistency and compatibility.

4️⃣. Make sure the titles and descriptions follow the same order to maintain clarity and consistency.

🚫 DO NOT:
- Add or remove items from either array, as they are linked step-by-step.
- Change the variable names (`myWorkProcessStepsTitle` and `myWorkProcessStepsDescription`).
- Remove or alter the comments, as they provide important guidance.

📧 EMAIL CONFIGURATION:
- Update the `myEmail` variable to your desired email address.
- Make sure the email address is valid and reachable.

Happy customizing!
====================================================================
*/

// Work Process Steps Configuration
// --- You can replace the steps and descriptions below with your own content.
export const myWorkProcessStepsTitle = [
  "Say Hello",
  "Project Discussion",
  "Confirm Agreement",
  "Begin Execution",
  "Final Adjustments"
];

export const myWorkProcessStepsDescription = [
  "Reach out via email to initiate the collaboration process.",
  "Discuss project details, expectations, and timelines to ensure clarity.",
  "Finalize the agreement and confirm necessary details before proceeding.",
  "Start executing the project according to the agreed plan and specifications.",
  "Review the completed work and make final adjustments if needed."
];

// My Email Configuration
// --- You can replace the email address below with your own.
// ⚠️ Make sure the email address is valid and reachable.
export const myEmail = 'example@gmail.com';
