/*
====================================================================
                CLIENT REVIEWS DATA CONFIGURATION
====================================================================

This file contains arrays with the data for client reviews, including:
- Reviewer's name
- Reviewer's image
- The client's review text

You can customize these arrays to display different client reviews on your website or application.

⚠️ WARNING: 

- **DO NOT** modify the structure of the arrays (e.g., adding or removing commas or brackets). 

- **DO NOT** change the order of the data between the arrays. The three arrays (`reviewClientNames`, `reviewerClientImages`, and `reviewsOfClient`) MUST match the order for the reviews to display correctly. Each element in the `reviewClientNames`, `reviewerClientImages`, and `reviewsOfClient` arrays corresponds to the same index in the other two arrays.

- Only **edit the content** inside the arrays (i.e., change text or image paths) while keeping the structure intact.

- If you want to add new reviews, make sure to **add a new entry in each of the three arrays** with the corresponding reviewer's name, image, and text.

⚠️ **IMPORTANT: IMAGE IMPORT AND FILE NAMING**

- The images used for client reviews must be placed in the `public/ClientReviewImages` folder of your project.

- The file names of the images in the `reviewerClientImages` array **must match exactly** with the image file names you put in the `public/ClientReviewImages` folder.

  - **Case sensitivity matters!** If the name in the array is `"ytorbit.png"`, the image in the `public/ClientReviewImages` folder must also be named `"ytorbit.png"`. Even a slight difference in upper or lower case letters will cause the image to **not display**.

- If the image path or name is incorrect, the image **will not appear**, and this can break the look of your page.

✅ HOW TO EDIT:
1️⃣ **Editing Client Names:**

   - In the `reviewClientNames` array, change or add a name by editing the text inside the quotation marks (`""`).

   - Example: `"New Client Name"` will be displayed as the reviewer's name.

2️⃣ **Editing Client Images:**
   - In the `reviewerClientImages` array, change or add an image by editing the image file name inside the quotation marks (`""`).

   - Ensure that the image file is placed in the `public/ClientReviewImages` folder.

   - The file name **must match exactly** (case-sensitive) with the image name you use in the array.

   - Example: `"newclient.png"` will be used as the image for the client. Ensure this file exists in the `public/ClientReviewImages` folder with the exact name.

3️⃣ **Editing Client Reviews:**

   - In the `reviewsOfClient` array, change or add a review by editing the text inside the quotation marks (`""`).

   - Example: `"This is a new review text"` will be displayed as the review.

By following this structure, you can easily add, remove, or edit client reviews.

Please remember that the order of names, images, and reviews is critical. Each name in `reviewClientNames` should have a corresponding image in `reviewerClientImages` and review in `reviewsOfClient` in the same order.

==================================================================== */

// Demo client names. Replace with actual client names.
export const clientNames = [
  'PixelWorks Studio',
  'Creative Hive',
  'NextGen Media',
  'Digital Spark',
  'Clara | Content Creator',
  'Eliott Harper',
  'Ryan Stevens',
  'Nina Patel',
  'Alex Monroe',
  'Bright Horizon',
  'Crafted Visuals',
  'Visionary Media',
];

// Demo client images. Replace with actual image file names.
export const clientImages = [
  'client1.png',
  'client2.png',
  'client3.png',
  'client4.png',
  'client5.png',
  'client6.png',
  'client7.png',
  'client8.png',
  'client9.png',
  'client10.png',
  'client11.png',
  'client12.png',
];

// Demo client reviews. Replace with actual client reviews.
export const reviewsOfClient = [
  'Exceptional work—truly brought my vision to life!',
  'Highly professional and delivers beyond expectations.',
  'Amazing creativity and attention to detail.',
  'Really impressive designs! The team loved the outcome.',
  'Perfect execution! Nailed the concept on the first try.',
  'Fast turnaround and top-notch quality—couldn’t ask for more!',
  'Incredibly talented and always delivers on time.',
  'The visuals are striking and effective—highly recommend!',
  'Superb communication and flawless design. Definitely working together again!',
  'Outstanding craftsmanship—elevated our project to a new level.',
  'Versatile, innovative, and reliable every single time!',
  'A real game-changer for our branding and presentation.',
];
