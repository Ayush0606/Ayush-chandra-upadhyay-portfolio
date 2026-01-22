export const aboutMe = {
  description: [
   "I’m Ayush, a final-year ECE student at MMMUT and a passionate Full Stack Developer with expertise in the MERN stack. I have strong problem-solving skills in DSA and hands-on experience in building scalable web and mobile applications using React Native and modern technologies."
  ],
  cvPath: "/assets/resume%20(24).pdf", // Upload your own CV in /public/assets as CV.pdf
  cvFileNameAfterDownload: "Ayush_chandra_upadhyay_Resume.pdf", // This is what the name of the file is going to be when downloaded
};

export const technicalSkills: Record<string, string[]> = {
  // You can rename the type of skills, it's dynamically rendered. eg: You can change "Programming Languages" -> to just "Languages"
  "Programming Languages": ["JavaScript", "TypeScript", "C", "C++", "Java"," Python"],
  "Frontend Development": [
    "React",
    "React Native",
    "HTML5",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Redux Toolkit",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "SQL",
    "MySQL",
  ],
  // "UI/UX Design": [
  //   "Figma",
  //   "Adobe Illustrator",
  //   "Adobe Photoshop",
  //   "Miro",
  //   "MockFlow",
  // ],
  "Tools & Technologies": ["Git", "GitHub", "Postman", "Netlify", "Render"],
  "Soft Skills": ["Presentation", "Communication", "Leadership", "Mentorship"],
};
