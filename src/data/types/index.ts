export type Author = {
  label: string;
  firstName: string;
  secondName: string;
  profession: string;
  level: string;
  sublevel: {
    isActive: boolean;
    level: string;
  };
};

export type Social = {
  facebook: {
    label: string;
    url: string;
  };
  github: {
    label: string;
    url: string;
  };
  linkedin: {
    label: string;
    url: string;
  };
};

export type Skill = { label: string; percent: number };

export type Skills = {
  label: string;
  set: Skill[];
};

export type StackItem = {
  label: string;
  set: {
    often: string[];
    familiar: string[];
  };
};

export type Stack = {
  label: string;
  set: StackItem[];
};

export type Soft = {
  label: string;
  set: string[];
};

export type About = {
  label: string;
  text: string[];
};

export type Job = {
  position: string;
  company: string;
  start: string;
  end: string;
  description: string;
};

export type Employment = {
  label: string;
  set: Job[];
};

export type Subject = {
  subject: string;
  institution: string;
  start: string;
  end: string;
};

export type Education = {
  label: string;
  set: Subject[];
};

export type Certificates = {
  label: string;
};

// ------ Portfolio:

export type Portfolio = {
  title: string;
  subtitle: string;
};

export type Project = {
  label: string;
  set: {
    title: string;
    url: string;
    src_ui: string;
    src_api: string;
    img: string;
    ui_password: boolean;
    status: boolean;
  }[];
};

export type Projects = {
  frontend: Project;
  fullstack: Project;
  backend: Project;
};

// ------ Toasts:

export type ToastPosition = { msg: { init: string; details: string } };

export type Toasts = { position: ToastPosition };

// ------ Data:

export type Data = {
  author: Author & Social;
  skills: Skills;
  stack: Stack;
  soft: Soft;
  about: About;
  portfolio: Portfolio;
  employment: Employment;
  education: Education;
  certificates: Certificates;
  toast: Toasts;
  resume_pdf_url: string;
  message_linkedin_url: string;
} & ProjectData;

export type ProjectData = { projects: Projects };
