export interface CVType {
  image: string;
  name: string;
  profession: string;
  about: string;

  educations: EducationType[];

  experiences: ExperienceType[];
}

export interface EducationType {
  institute: string;
  location: string;
  studyYear: string;
  degree: string;
  description: string;
}

export interface ExperienceType {
  position: string;
  location: string;
  workYear: string;
  company: string;
  description: string;
}
