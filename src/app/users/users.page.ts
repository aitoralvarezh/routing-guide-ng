import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/models/types/types.model';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.css'],
})
export class UsersPage implements OnInit {

  users: IUser[];
  
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

}
