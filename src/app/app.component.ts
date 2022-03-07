import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: {name: string, status: string}[] = [];
  title = 'user-service';

  constructor(private userService: UserService) {
    this.users = this.userService.users;
  }
}
