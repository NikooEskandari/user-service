import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input() activeUser: {name: string, status: string};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  updateStatus(name:string, newStatus: string) {
    this.userService.onStatusChanged(name, newStatus);
  }

}
