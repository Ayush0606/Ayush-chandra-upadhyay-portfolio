import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  // myImage: "/assets/my_image.webp",
  // myImage: "/assets/img.jpg",
  myImage: "/assets/ayush.jpg",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "ayushupadhyay0606@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Gorakhpur, UttarPradesh, Inida",
      Link: "https://www.google.com/maps/search/Explore+Gorakhpur+City,+Gorakhpur,+India/@26.7637151,83.4039116,20383m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+91 9310771547",
      Link: "tel:+919310771547",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "MMMUT Gorakhpur",
      Link: "https://mmmut.ac.in/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Electronics and Communication Engineering",
      Link: "https://www.mmmut.ac.in/EC_Home",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/Ayush0606",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/ayush-upadhyay-5a6667257/",
    },

    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/ayushupadhyay0606/",
    },
  ],
};
