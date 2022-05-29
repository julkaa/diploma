export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  date: string;
  email: string;
  password: string;
}

export interface JUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  issueIds: string[];
}
