import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  @Input() inactiveUser: {name: string, status: string};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  updateStatus(name: string, newStatus: string) {
    this.userService.onStatusChanged(name, newStatus);
  }

}
