export interface CVType {
  image: string;
  name: string;
  profession: string;
  about: string;

  educations: EducationType[];
}

export interface EducationType {
  institute: string;
  location: string;
  studyYear: string;
  degree: string;
  description: string;
}
