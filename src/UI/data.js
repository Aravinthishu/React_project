import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Service",
    path: "/service",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const MyExperience = [
  {
    id: 1,
    icon: <LiaSchoolSolid />,
    title: "SSLC",
    place: "G.H.School | A.S.Puram",
    rank: "93.6%",
    date: "2016-2017",
    path: "/programs/111",
    image: require("../images/education.jpg"),
  },
  {
    id: 2,
    icon: <LiaSchoolSolid />,
    title: "HSC",
    place: "G.H.S.School | Maramadakki",
    rank: "63.8%",
    date: "2018-2019",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <IoSchool />,
    title: "BCA",
    place: "A.V.V.M.S.P.College | Thanjavur",
    rank: "78.3%",
    date: "2019-2021",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <MdWork />,
    title: "Web Developer",
    place: "Ec4you Digital Marketing | Chennai",
    date: "July 2023 - Present",
    info: "Developed and maintained websites with expertise in frontend and backend technologies.Specialized in WordPress for efficient website solutions.Collaborated with teams to deliver high-quality digital marketing projects.",
    path: "/programs/444",
    image: require("../images/education-1.jpg"),
  },
];

export const service = [
  {
    id: 1,
    title: "UI/UX DESIGN",
    service:
      "Crafting intuitive and visually appealing user experiences to captivate audiences and drive engagement.",
  },
  {
    id: 2,
    title: "React Development",
    service:
      "Expertise in building dynamic and responsive web applications using ReactJS for seamless user interactions.",
  },
  {
    id: 3,
    title: "Python Development(with Django)",
    service:
      " Leveraging Django framework for building robust web applications, ensuring scalability, security, and seamless user experience.",
  },
  {
    id: 4,
    title: "wordpress",
    service:
      "Proficiency in developing and customizing WordPress websites to create scalable and user-friendly online platforms.",
  },
  {
    id: 5,
    title: "Web Development",
    service:
      "Skilled in full-stack web development, utilizing modern technologies to create high-performance and feature-rich websites.",
  },
  {
    id: 6,
    title: "Figma",
    service:
      "Utilizing Figma for collaborative and efficient design workflows, from wireframing to prototyping.",
  },
  {
    id: 7,
    title: "Seo Optimized",
    service:
      "Implementing strategic SEO techniques to enhance website visibility and drive organic traffic growth.",
  },
  {
    id: 8,
    title: "Fast Support",
    service:
      " Providing prompt and reliable support services to ensure seamless operation and client satisfaction.",
  },
];
