import { EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './user.interface';

export class User {
  static id(arg0: (this: void, user: IUser) => boolean, id: any) {
    throw new Error('Method not implemented.');
  }
  users: IUser[] = [
    {
      name: 'amir',
      id: '1',
      password: '123',
    },
    {
      name: 'hamid',
      id: '2',
      password: '456',
    },
  ];
}
