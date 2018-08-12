
import {Handcrafter} from "./handcrafter";
import {Deserializable} from "./deserializable";


export class Shot  {
  id: number;
  name: string;
  creation_date: string;
  url: string;
  description: string;
  user_id: number;
  //user: Handcrafter;

  constructor(id: number, name: string, url: string, description: string) {
  	var date = new Date();
  	this.id = id;
  	this.name = name;
  	this.creation_date = date.toDateString();
  	this.url = url;
  	this.description = description;
  	//this.user = new Handcrafter(100, 'tmp','tmp','tmp','tmp','tmp');
    this.user_id = 11;
  }

}