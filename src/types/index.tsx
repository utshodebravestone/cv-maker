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
  id: string;
  institute: string;
  location: string;
  studyYear: string;
  degree: string;
  description: string;
}

export interface ExperienceType {
  id: string;
  position: string;
  location: string;
  workYear: string;
  company: string;
  description: string;
}

export interface SkillType {
  id: string;
  name: string;
}

export interface LanguageType {
  id: string;
  name: string;
}

export interface HobbyType {
  id: string;
  name: string;
}
