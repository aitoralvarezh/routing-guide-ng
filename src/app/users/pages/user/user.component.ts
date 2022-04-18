import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';
import { Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/shared/models/types/types.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: IUser;
  paramsSubscription: Subscription;
  
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  } 
}
