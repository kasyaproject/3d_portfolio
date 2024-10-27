import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  boostrap,
  vscode,
  laravel,
  mysql,
  git,
  figma,
  php,
  xampp,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  uiux,
  jobit,
  tripguide,
  threejs,
  logo,
  daquprint,
  temanprint,
  cplus,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "skill&tool",
    title: "Skill & Tools",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
    link: "https://www.coursera.org/articles/full-stack-developer",
  },
  {
    title: "Laravel Developer",
    icon: backend,
    link: "https://idcloudhost.com/blog/laravel-developer-job-desk-tugas-kerja-dan-skill/",
  },
  {
    title: "React Native Developer",
    icon: mobile,
    link: "https://www.dicoding.com/blog/apa-itu-react-native/",
  },
  {
    title: "Graphic Design",
    icon: creator,
    link: "https://www.gramedia.com/best-seller/desain-grafis/",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Boostrap",
    icon: boostrap,
  },
  {
    name: "UI/UX",
    icon: uiux,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    link: "#work",
    points: [
      "Developing and maintaining web applications using framework laravel and other related technologies.",
      "Responsible for the entire web application development process, from creating UI/UX design, front-end and back-end, and managing database.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Providing constructive feedback from client.",
    ],
  },
  {
    title: "Production Operator",
    company_name: "Daqu Printing",
    icon: daquprint,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    link: "#work",
    points: [
      "Operate and monitor digital printing machines to ensure smooth production processes.",
      "Ensure that print quality meets established standards.",
      "Perform routine maintenance on printing machines to maintain operational performance and efficiency.",
      "Collaborate with other teams to enhance workflow and improve overall production efficiency.",
    ],
  },
  {
    title: "Production Operator",
    company_name: "Teman Print",
    icon: temanprint,
    iconBg: "#383E56",
    date: "2019 - 2022",
    link: "https://www.temanprint.com/",
    points: [
      "Operate and monitor digital printing machines to ensure smooth production processes.",
      "Ensure that print quality meets established standards.",
      "Perform routine maintenance on printing machines to maintain operational performance and efficiency.",
      "Collaborate with other teams to enhance workflow and improve overall production efficiency.",
    ],
  },
  {
    title: "Production Operator",
    company_name: "Daqu Printing",
    icon: daquprint,
    iconBg: "#E6DEDD",
    date: "2016 - 2019",
    link: "#work",
    points: [
      "Operate and monitor digital printing machines to ensure smooth production processes.",
      "Ensure that print quality meets established standards.",
      "Perform routine maintenance on printing machines to maintain operational performance and efficiency.",
      "Collaborate with other teams to enhance workflow and improve overall production efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sistem Penunjang Keputusan DBN",
    description:
      "A web-based platform that enables users to manage employees from Daqu Bisnis Nusantara, providing a convenient and efficient solution for finding the best employees.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Perpusatakaan Digital",
    description:
      "A web application designed for reading books digitally, specifically tailored for junior high school students (SMP). This platform provides an accessible and engaging way for students to explore a wide range of literature and enhance their reading experience.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "POS Daqu Printing",
    description:
      "A point-of-sale (POS) web application tailored for Daqu Printing, designed to manage sales transactions efficiently. This platform streamlines order processing, tracks inventory, and provides real-time reporting, offering a comprehensive solution to support the daily operational needs of the printing business.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sistem Pakar Ginjal",
    description:
      "A web-based expert system designed to assist in diagnosing kidney-related health conditions. This application analyzes symptoms and medical history to provide users with potential insights into kidney health, supporting early detection and guiding users toward appropriate medical consultation.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Nusa Penida",
    description:
      "A web-based travel planning platform dedicated to Nusa Penida, offering curated tours, activities, and travel guides to help users explore the island’s natural beauty and cultural heritage. This service provides tailored itineraries, local insights, and easy booking options for an unforgettable travel experience.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
