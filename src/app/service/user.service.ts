import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      name: 'Max',
      status: 'active'
    }, {
      name: 'Anna',
      status: 'active'
    }, {
      name: 'Chris',
      status: 'inactive'
    }, {
      name: 'Manu',
      status: 'inactive'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor() { }

  onStatusChanged(updatedName, updatedStatus) {
    this.users.filter((updatedUser) => {
      if (updatedUser.name === updatedName) {
        updatedUser.status = updatedStatus;
      }

      return true;
    });
  }

}
