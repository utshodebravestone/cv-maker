import { CVType } from "../types";

const cv: CVType = {
  image:
    "https://st3.depositphotos.com/4201529/17577/i/450/depositphotos_175773982-stock-photo-close-view-red-fox-resting.jpg",
  name: "Foxila O'Doxei",
  profession: "Tricks N' Trap Designer",
  about:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",

  educations: [
    {
      institute: "Harvard University",
      location: "State X, Road Y, Zaed",
      studyYear: "2020-2022",
      degree: "Programming 101",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      institute: "Harvard University",
      location: "State X, Road Y, Zaed",
      studyYear: "2020-2022",
      degree: "Programming 101",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
    {
      institute: "Harvard University",
      location: "State X, Road Y, Zaed",
      studyYear: "2020-2022",
      degree: "Programming 101",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci illum nobis dicta assumenda optio.",
    },
  ],
};

export const useAppState = () => ({ cv });
