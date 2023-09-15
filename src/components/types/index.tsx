export interface CVType {
  image: string;
  name: string;
  profession: string;
  about: string;

  phone: string;
  email: string;
  website: string;
  location: string;

  educations: EducationType[];

  experiences: ExperienceType[];

  skills: SkillType[];

  languages: LanguageType[];

  hobbies: HobbyType[];
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

export interface SkillType {
  name: string;
}

export interface LanguageType {
  name: string;
}

export interface HobbyType {
  name: string;
}
