import { CVType } from "../types";

export const exampleCV: CVType = {
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
      id: "ed1",
      institute: "Foxford University",
      location: "State X, Road Y, Zaed",
      studyYear: "2014-2016",
      degree: "Hunting 101",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      id: "ed2",
      institute: "Foxvart University",
      location: "State X, Road Y, Zaed",
      studyYear: "2016-2018",
      degree: "Tricking 101",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      id: "ed3",
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
      id: "ex1",
      position: "Main Hunter",
      location: "Forrest X, Cont Y, Z",
      workYear: "2023-Now",
      company: "Fox Association",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      id: "ex2",
      position: "Trap Leader",
      location: "Forrest X, Cont Y, Z",
      workYear: "2022-2023",
      company: "Fox Association",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      id: "ex3",
      position: "Tricks Fox",
      location: "Forrest X, Cont Y, Z",
      workYear: "2021-2022",
      company: "Fox Association",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
  ],

  skills: [
    { id: "sk1", name: "Hunting" },
    { id: "sk", name: "Tricking" },
    { id: "sk3", name: "Trapping" },
    { id: "sk4", name: "Yooing (Yelling)" },
    { id: "sk5", name: "Running away at the first sight of any Dog." },
  ],

  languages: [
    { id: "la1", name: "Greek" },
    { id: "la2", name: "Hibru" },
    { id: "la3", name: "Indo" },
    { id: "la4", name: "English" },
    { id: "la5", name: "Italian" },
  ],

  hobbies: [
    { id: "ho1", name: "Hunting" },
    { id: "ho2", name: "Tricking" },
    { id: "ho3", name: "Trapping" },
    { id: "ho4", name: "Yooing (Yelling)" },
  ],
};
