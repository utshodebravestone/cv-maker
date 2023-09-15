import { CVType } from "../types";

const cv: CVType = {
  image:
    "https://st3.depositphotos.com/4201529/17577/i/450/depositphotos_175773982-stock-photo-close-view-red-fox-resting.jpg",
  name: "Foxila O'Doxei",
  profession: "Tricks N' Traps Specialist",
  about:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",

  phone: "+123 456 7890",
  email: "foxila.doxei@fox.com",
  website: "fixila-odoxei.com",
  location: "State X, Y Forrest, Zad",

  educations: [
    {
      institute: "Foxford University",
      location: "State X, Road Y, Zaed",
      studyYear: "2014-2016",
      degree: "Hunting 101",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      institute: "Foxvart University",
      location: "State X, Road Y, Zaed",
      studyYear: "2016-2018",
      degree: "Tricking 101",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      institute: "University of Foxvort",
      location: "State X, Road Y, Zaed",
      studyYear: "2018-2020",
      degree: "Trapping 101",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
  ],

  experiences: [
    {
      position: "Main Hunter",
      location: "Forrest X, Cont Y, Z",
      workYear: "2023-Now",
      company: "Fox Association",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      position: "Trap Leader",
      location: "Forrest X, Cont Y, Z",
      workYear: "2022-2023",
      company: "Fox Association",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      position: "Tricks Fox",
      location: "Forrest X, Cont Y, Z",
      workYear: "2021-2022",
      company: "Fox Association",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
  ],

  skills: [
    { name: "Hunting" },
    { name: "Tricking" },
    { name: "Trapping" },
    { name: "Yooing (Yelling)" },
    { name: "Running away at the first sight of any Dog." },
  ],

  languages: [
    { name: "Greek" },
    { name: "Hibru" },
    { name: "Indo" },
    { name: "English" },
    { name: "Italian" },
  ],
};

export const useAppState = () => ({ cv });
