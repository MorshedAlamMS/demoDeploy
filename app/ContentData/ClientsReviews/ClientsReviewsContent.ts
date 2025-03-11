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

- **DO NOT** change the order of the data between the arrays. The three arrays (`reviewClientNames`, `reviewerClientImages`, and `reviewsOfClient`) MUST match the order for the reviews to display correctly. Each element in the `reviewClientNames`, `reviewerClientImages`, and `reviewsOfClient` arrays corresponds to the same index in the   other two arrays.

- Only **edit the content** inside the arrays (i.e., change text or image paths) while keeping the structure intact.

- If you want to add new reviews, make sure to **add a new entry in each of the three arrays** with the corresponding reviewer's name, image, and text.

⚠️ **IMPORTANT: IMAGE IMPORT AND FILE NAMING**

- The images used for client reviews must be placed in the `public/ClientReviewImages` folder of your project.

- The file names of the images in the `reviewerClientImages` array **must match exactly** with the image file names you put in the `public/ClientReviewImages` folder.

  - **Case sensitivity matters!** If the name in the array is `"ytorbit.png"`, the image in the `public/ClientReviewImages` folder must also be named `"ytorbit.png"`. Even a slight difference in upper or lower case letters will cause the image to **not display**.

- For example, `"ytOrbit.png"` or `"YtOrbit.png"` will not work if the file in the folder is `"ytorbit.png"`.

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

📌 **Example of Editing a Review:**

export const reviewClientNames = [
    "YT orbit",                  // Client's name
    "New Client",                 // Add new name here
    "Ease media",
    // continue with other names...
];

export const reviewerClientImages = [
    "ytorbit.png",               // Image file for "YT orbit"
    "newclient.png",             // Add the corresponding image file here
    "ease.png",
    // continue with other images...
];

export const reviewsOfClient = [
    "Sup 🔥",                    // Review for "YT orbit"
    "This new client is amazing!", // Add review for "New Client"
    "This is some good work",
    // continue with other reviews...
];

By following this structure, you can easily add, remove, or edit client reviews.

Please remember that the order of names, images, and reviews is critical. Each name in reviewClientNames should have a corresponding image in reviewerClientImages and review in reviewsOfClient in the same order.

==================================================================== */


export const clientNames = [
    "YT orbit",
    "ZHC",
    "Ease media",
    "Muskonomy",
    "Ayan Ghosh | Video Editor",
    "James Charles",
    "Shawn Herrin",
    "Saima",
    "Justin Pugh",
    "Blue Thunder",
    "ZHC Crafts",
    "Kamahley"
];


export const clientImages = [
    "ytorbit.png",
    "zhc.png",
    "ease.png",
    "muskonomy.png",
    "ayan.png",
    "james.png",
    "shawn.png",
    "saima.png",
    "justinpugh.png",
    "blueThunder.png",
    "zhcCrafts.png",
    "kamahley.png"
];

export const reviewsOfClient = [
    "Sup 🔥",
    "Great guy, even better thumbnails.",
    "This is some good work",
    "Let's keep up the great work.Your communication and design skills are excellent. I'm hoping for a long-term collaboration here.",
    "You cooked 🔥",
    "I’m great!!! I came across your thumbnail work, you’re amazing!",
    "Bottom right. No idea why, the contrast grabs my eye. When I expanded the image they were all so good. But at small size the white shirt got me.",
    "Awesome, after seeing this Jimmy would be motivated to go the gym",
    "Super easy to work with and crazy talented. Thumbnail BOSS always takes our ideas and levels them up!",
    "Brilliant thumbnail designer—his work is clean, impactful, and optimized for maximum engagement!",
    "Fast, reliable, and always on point! ",
    "Extremely communicative and always focused on making the best possible design."
];