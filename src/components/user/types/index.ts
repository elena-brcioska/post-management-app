export interface IUserCard {
    name: string;
    emailCard: string;
    role: string;
  }
  
  export interface IGeneral {
    birthDate: string;
    jobTitle: string;
    gender: string;
    company: string;
  }
  
  export interface IContact {
    email: string;
    phoneNumber: string;
    linkedin: string;
    github: string;
    website: string;
    address: string;
    twitter: string;
    facebook: string;
  }
  
  export interface IEducation {
    university: string;
    college: string;
    degree: string;
    fieldOfStudy: string;
    graduationYear: string;
    gpa: string;
    honors: string;
    relevantCoursework: string;
    extracurricularActivities: string;
    certifications: string;
  }
  
  export interface IUser {
    userCard: IUserCard;
    general: IGeneral;
    contact: IContact;
    education: IEducation;
  }

  export interface IContactUserProps {
    user: IContact;
    onUpdate: (update: IContact) => void
  }

  export interface IEducationUserProps {
    user: IEducation;
    onUpdate: (update: IEducation) => void
  }

  export interface IUserProps {
    user: IUser,
    onUpdate: (update: IUser) => void
}

export interface IUserFieldProps {
  id: string;
  label?: string;
  data: string;
  isUserCard?: boolean;
  type?: "text" | "number" | "radio" | "date" | "select";
  options?: { value: string; label: string }[];  // For radio or select options
  onChange: (id: string, value: string) => void;
  isEdit: boolean
};

  
  
  