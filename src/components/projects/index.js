import lajoCover from "./images/Lajo-The-Unbanked-Platform.png";
import workspaceCover from "./images/Workspace.png";
import whatsappCover from "./images/private_chat_screenshot.png";
import youtubegoCover from "./images/s1.png";
import cafeteriaManagementCover from "./images/cafeteriaManagement.png"
import optiquizImage from "./images/optiquiz.png";
import sabbiImage from "./images/sabbi.png";


const projects = [
  {
    cover_image: sabbiImage,
    projectName: "Sabbi",
    link: "https://sabbi.page",
    live: true,
    details: {
      title: "Sabi",
      body: `Sabbi is a plaform that let's people connect with business around them, It comes with presists location search to get it's users with the closest result in search`,
      tools: "Flask and React",
    },
  },
  {
    cover_image: lajoCover,
    projectName: "Lajo",
    link: "https://lajoapp.com/",
    live: true,
    details: {
      title: "Lajo",
      body: `This finetech project is knowm as the bank for the unbanking, it 
        helps SME save up and get interest at a set duration.`,
      tools: "Flask and Vue",
    },
  },
  {
    cover_image: optiquizImage,
    projectName: "Opitquiz",
    link: "https://optiquiz.onrender.com/",
    live: true,
    details: {
      body: `Our optometry quiz platform was created with the goal of providing a comprehensive and convenient resource for optometry students and professionals to improve their knowledge and skills.`,
      tools: "Typescript",
    },
  },
  {
    cover_image: whatsappCover,
    projectName: "Whatapp Clone",
    link: "https://github.com/iMiebaka/Whatsapp_full_clone",
    details: {
      body: `This web project is a collaburation from a Youtuber @clumes. It the clone of the Whatsapp application owned by Facebook.
            Some of the featues include, real time messageing and video calling`,
      tools: "Django",
    },
  },
  {
    cover_image: youtubegoCover,
    projectName: "YouTube GO Clone",
    link: "https://github.com/iMiebaka/youtubeGoClone",
    details: {
      body: `In this mobile development project, I made a clone of the YouTube's Go app. 
            It's come with media player integration.`,
      tools: "React Native",
    },
  },
  {
    cover_image: cafeteriaManagementCover,
    projectName: "Cafeteria Management System",
    link: "https://github.com/iMiebaka/Cafeteria-Management-System",
    details: {
      body: `This was a research work that seeks to solve the ticketing problem in Adeleke University Cafeteria.`,
      tools: "C# and C++",
    },
  },
];

export default projects;
