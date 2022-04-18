import { EventEmitter, Injectable } from '@angular/core';
import { IUser } from './models/types/types.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userSelected = new EventEmitter<IUser>();

  users: IUser[] = [
    {
      id: 1,
      name: 'Anna',
      status: 'live'
    },
    {
      id: 2,
      name: 'Marcus',
      status: 'live'
    },
    {
      id: 3,
      name: 'Sarah',
      status: 'offline'
    },
    {
      id: 4,
      name: 'Sam',
      status: 'live'
    },
  ]

  constructor() { }
  getUsers() {
    return this.users.slice()
  }

}
