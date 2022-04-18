import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  constructor(private router: Router, private authService : AuthService) { }
  isLogged: boolean = false;

  ngOnInit(): void {
  }

  onLoadServer(id : number) {
    //In case os complex calculations..
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading'})
  }

  onLogin() {
    this.authService.login();
    this.isLogged = true;
  }

  onLogout() {
    this.authService.logout();
    this.isLogged = false;
  }

}
