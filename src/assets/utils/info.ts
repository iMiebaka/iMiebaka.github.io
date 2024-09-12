const contact = {
  phone: "+234 803 422 4184",
  email: "miebakaiwarri.dev@gmail.com",
  address: "Lagos, Nigeria",
  workingAt: "Uobis",
};

const info = {
  profile: {
    name: "Miebaka Iwarri",
    position: "Software Engineer",
    details: `I currently work at ${contact.workingAt}.  I major in Web and Mobile apps. 
      My Technologies are Django, Flask, ExpressJS, React Native, Vue, MySQL, Postgres, MongoDB and Docker.
      \n  I like to try out new technologies and challenge myself to be the best Software Developer of my time.`,
  },
  workingExpirence:[
    {
      duration: "Jan 2022 - Present",
      name: "Uobis",
      location: "Abuja, NG",
      position: "Fullstack Software Engineer",
      note: `He worked as a Software Engineer, focused primarily on breaking down different complex technical concepts to deliver highend software solutions, using tools like Docker, Javascript and Python`,
    },
    {
      duration: "Feb 2024 - Present",
      name: "HIS IT Solution",
      location: "Hong Kong, CH",
      position: "Fullstack Software Engineer",
      note: `Contract fullstack software engineer contributing to the HER SAAS application`,
    },
    {
      duration: "Feb 2023 - Dec 2023",
      name: "Wallx Africa",
      location: "Lagos, NG",
      position: "Fullstack Software Engineer",
      note: `Developed the iRatein project, Manage and optimize existing backend
      applications of other products, assisted in building and maintaining frontend
      applications.`,
    },
    {
      duration: "Jan 2023 - March 2023",
      name: "Afrilish",
      location: "Lagos, NG",
      position: "Team lead Engineer",
      note: `Technical support team lead engineer for a UK startup, manage developers
      complete tasks, project hosting and tech infrastructure management.`,
    },
    {
      duration: "Aug 2022 - Aug 2023",
      name: "Skillup Africa",
      location: "Lagos, NG",
      position: "Fullstack Software Engineer",
      note: `Trained software developers on Algorithm and Data Structure, version control
      with Git and GitHub, Backend development and version control with Git and
      GitHub MongoDB. Trained over 40 actively practicing software engineers.`,
    },
  ],
  education: [
    {
      year: "2015 - 2019",
      name: "Adeleke University",
      location: "Ogun State, NG",
      certificate: "Undergraduate",
      degree: "Computer Science",
      note: `Completed rigorous coursework in computer science, focusing on algorithms, data structures, and software development.
          Developed a cafeteria management system as the final project, meeting graduation requirements. This project demonstrated proficiency in system design, database management, and software implementation.`,
    },
  ],
  languages: ["Typescript", "Python"],
  professionalSkills: [
    "ExpressJS",
    "Django",
    "Flask",
    "React Native",
    "NextJS",
    "NuxtJS",
    "Postgres",
    "MongoDB",
    "Elastic Search",
    "MySQL",
    "Redis",
    "Kafka",
    "RabbitMq"
  ],
  contact: [
    // [
    //   "mdi mdi-phone-in-talk port-contact-icons",
    //   "Call Me",
    //   `<a className="port-contact-info" href="tel:${contact.phone}">${contact.phone}</a>`,
    // ],
    [
      "mdi mdi-message-plus port-contact-icons",
      "Email",
      `<a className="port-contact-info" href="mailto:${contact.email}">${contact.email}</a>`,
    ],
    [
      "mdi mdi-map-marker-outline port-contact-icons",
      "Address",
      `<span className="port-contact-info">${contact.address}</span>`,
    ],
  ],
  socials: {
    youtube: "https://www.youtube.com/@imiebaka",
    twitter: "https://twitter.com/miebakaIwarri",
    linkedin: "https://linkedin.com/in/miebakaiwarri",
    github: "https://github.com/iMiebaka",
  },
  cv: "https://github.com/iMiebaka/iMiebaka.github.io/raw/main/docs/assets/MIEBAKA-IWARRI=RESUME.pdf",
};

export default info;
