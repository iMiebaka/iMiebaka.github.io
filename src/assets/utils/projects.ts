import lajoCover from "../images/project/lajo.png";
import optiquizImage from "../images/project/optiquiz.png";
import sabbiImage from "../images/project/sabbi.png";
import iratein from "../images/project/iratein.png";

const projects = [
  {
    cover_image: iratein,
    projectName: "iRatein",
    link: "https://iratein.com",
    details: {
      title: "iRatein",
      body: `iRatein is a review platform that helps individuals make smart choices and encourage businesses to gain return`,
      tools: "Django and React",
    },
  },

  {
    cover_image: lajoCover,
    projectName: "Lajo",
    link: "https://lajoapp.com",
    details: {
      title: "Lajo",
      body: `Insurance project with very low pricing and onboarding entry to help people aquire an insurance plan. Current finish it beta stage and available to the public use.`,
      tools: "Flask and Vue",
    },
  },
  {
    cover_image: sabbiImage,
    projectName: "Sabbi",
    link: "https://sabbi.page",
    details: {
      title: "Sabbi",
      body: `Sabbi is a plaform that let's people connect with business around them, It comes with presists location search to get it's users with the closest result in search`,
      tools: "Flask and React",
    },
  },
  {
    cover_image: optiquizImage,
    projectName: "Opitquiz",
    link: "https://optiquiz.onrender.com",
    details: {
      body: `Optometry quiz platform was created with the goal of providing a comprehensive and convenient resource for optometry students and professionals to improve their knowledge and skills.`,
      tools: "Typescript",
    },
  },
];

export default projects;
