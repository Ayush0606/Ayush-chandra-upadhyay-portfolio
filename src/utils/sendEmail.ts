// import emailjs from "emailjs-com";
// const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const userId = import.meta.env.VITE_EMAILJS_USER_ID;

// export const sendEmail = async (values: {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }) => {
//   return emailjs.send(
//     serviceId,
//     templateId,
//     {
//       name: values.name,
//       email: values.email,
//       subject: values.subject,
//       message: values.message,
//     },
//     userId
//   );
// };



import emailjs from "emailjs-com";

const serviceId = "service_vgp2zya";
const templateId = "template_95nu2x2";
const userId = "J7MjLj6Y3BbqIiCkM";

interface EmailValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (values: EmailValues) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      },
      userId
    );
    return response; // You can handle the response where you call sendEmail
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error; // Re-throw to handle errors on caller side if needed
  }
};
