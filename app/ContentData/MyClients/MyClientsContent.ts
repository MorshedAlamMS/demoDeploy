// ===============================
// CLIENTS DATA ARRAYS
// ===============================
// These arrays store the data for client names, subscriber counts, and client images.
// -----------------------------------------------------------------------------

/*
✅ *EDITING CLIENTS DATA* 🎉
--------------------------------
*1️⃣ Client Names:* ✍️
   - The `clientsName` array contains the names of your clients.
   - Update any entry to change a client's name.

*2️⃣ Subscriber Counts:* 📊
   - The `clientsSubs` array holds each client's subscriber count.
   - Ensure you keep the formatting consistent (e.g., "7.6M subs").

*3️⃣ Client Images:* 🖼️
   - The `clientsImg` array lists the image file names for each client.
   - // * *Important:* Upload images to `/public/MyClients/` and ensure the file name matches the corresponding client's name exactly.

*4️⃣ Adding or Removing Clients:* 🚀
   - To add a new client, add new entries to all three arrays in the same order.
   - To remove a client, delete the corresponding entries from all arrays.
--------------------------------
*/

// * *Important:* Ensure data is stored in the same order in all three arrays.

// * This array holds the names of your clients.
export const clientsName = [
  "Client One",
  "Client Two",
  "Client Three",
  "Client Four",
];

// * This array holds the subscriber counts for each client.
export const clientsSubs = [
  "7.6M subs",
  "24.5M subs",
  "854K subs",
  "18.2M subs",
];

// * Image will be uploaded in /public/MyClients/
// * Make sure the image name is the same as the name in the array
export const clientsImg = [
  "client1.png",
  "client2.png",
  "client3.png",
  "client4.png",
];
