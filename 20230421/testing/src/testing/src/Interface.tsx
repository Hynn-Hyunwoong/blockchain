export interface IComment {
  id: number;
  userId: string;
  content: string;
  register: Date;
}

export interface IUser {
  userId: string;
  username: string;
}

export interface IState {
  list: Array<IComment>;
  user: IUser;
}
