import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import User from '../tyspes/users';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [];
  _id?: String

  constructor() {}

  userService = inject(UserService)

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
      console.log(this.users);
    });
  }

  delete(id: string) {
    this.userService.deleteUser(id).subscribe((result) => {
      alert('User deleted successfully')
      this.users = this.users.filter((user) => user._id !== id);
    });
  }
}

