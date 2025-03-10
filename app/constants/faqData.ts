import { answers, questions } from "~/ContentData";

// ===============================
// FAQ DATA ARRAY (DO NOT EDIT THIS)
// ===============================
// This array combines the questions and answers. 
// If you update a question or answer from FAQContent, it will be automatically updated here.

// 👉 Loop through questions and answers to create FAQ data
export const faqData = questions?.map((question, index) => ({
  question,
  answer: answers[index]
}));
