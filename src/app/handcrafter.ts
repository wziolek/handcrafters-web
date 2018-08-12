
import {Deserializable} from "./deserializable";
import { Shot } from './shot';

export class Handcrafter {
  id: number;
  name: string;
  surname: string;
  login: string;
  city: string;
  email: string;
  avatar?: string;
  age?: number;
  last_login?: string;
  creation_date?: string; 
  password: string;
  shots?:Shot[];
  skills?:string[];
  elsewhere?:string;
  user_description?: string;

  // deserialize(input: any): this {
  //   Object.assign(this, input);
  //   return this;
  // }
   constructor(id: number, name: string, surname: string, login: string, city: string, email: string) {
    var date = new Date();
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.login = login;
    this.city = city;
    this.email = email;
    this.creation_date = date.toDateString();
    this.password = '12345';
  }
}