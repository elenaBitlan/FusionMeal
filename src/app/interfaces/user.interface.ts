export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  __v: number;
  orders: string[];
  active: boolean;
  admin: boolean;
}