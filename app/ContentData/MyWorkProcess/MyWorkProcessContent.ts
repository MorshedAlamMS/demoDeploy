/*
====================================================================
                Work Process Text Configuration
====================================================================

This file contains text content and color configurations for the 
Work Process section of your application. 
You can easily customize the text and colors by replacing the values 
assigned to each exported variable below.

✅ HOW TO EDIT THIS FILE?
1️⃣. Each object inside the `myWorkProcess` array represents a single step 
    in the work process. Each object has two properties:
    - `processTitle`: A short, catchy title for the step.
    - `processDescription`: A brief description that explains the step.  

2️⃣. Update the text between the quotation marks ("") to match your desired content.
    - Keep the `processTitle` short and impactful (ideally 2-4 words).
    - Make sure the `processDescription` is concise but informative.  

3️⃣. Do not change the variable names or the overall structure of the array.
    - Only update the text content.
    - Keep the format intact for consistency and compatibility.  

4️⃣. Follow the comments within each step for guidance on content style and length.

🚫 DO NOT:
- Add or remove keys from each object (only `processTitle` and `processDescription` are allowed).
- Change the variable name (`myWorkProcess`).
- Remove or alter the comments, as they provide important guidance.

Happy customizing!
====================================================================
*/

// Work Process Steps Configuration
// --- You can replace the steps and descriptions below with your own content.
export const myWorkProcess = [
  // Step 1
  {
    processTitle:
      // 🔄 Keep the title short and relevant (e.g., 2 words). Example: "Say Hello"
      'Say Hello',

    processDescription:
      // 💡 Clearly explain the step in one concise sentence.
      'You reach out to me via email with your request.',
  },
  // Step 2
  {
    processTitle:
      // 🔄 Use an informative and engaging title. Example: "We Discuss Your Project"
      'We Discuss Your Project',

    processDescription:
      // 💡 Briefly describe what happens during this step.
      'We discuss your video topic, style, pricing, and turnaround time.',
  },
  // Step 3
  {
    processTitle:
      // 🔄 Keep it simple and direct. Example: "You Send Payment"
      'You Send Payment',

    processDescription:
      // 💡 Describe the payment process clearly and succinctly.
      'Once we finalize the details, you send the payment to kick off the work.',
  },
  // Step 4
  {
    processTitle:
      // 🔄 Use action-oriented words. Example: "We Start Designing"
      'We Start Designing',

    processDescription:
      // 💡 Explain the design process in one impactful sentence.
      'I design a scroll-stopping, high-CTR thumbnail based on our discussion.',
  },
  // Step 5
  {
    processTitle:
      // 🔄 Make the title reflect the purpose. Example: "Revision if Needed"
      'Revision if Needed',

    processDescription:
      // 💡 Mention that adjustments can be made if required.
      'If you want any tweaks, I make adjustments to ensure it’s perfect.',
  },
]

// My Email Configuration
// --- You can replace the email address below with your own.
// ⚠️ Make sure the email address is valid and reachable.
export const myEmail = 'example@gmail.com'
