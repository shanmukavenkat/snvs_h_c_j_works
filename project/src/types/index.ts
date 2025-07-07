export interface Team {
  id: string;
  name: string;
  members: TeamMember[];
  projectName: string;
  projectLink: string;
  documents: Document[];
}

export interface TeamMember {
  id: string;
  name: string;
  rollNumber: string;
}

export interface Document {
  id: string;
  name: string;
  url: string;
}

export interface Class {
  id: string;
  name: string;
  teams: Team[];
}

export type UserRole = 'student' | 'professor';