import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IServer } from './models/server.model';
import { ServersService } from './service/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.page.html',
  styleUrls: ['./servers.page.css'],
})
export class ServersPage implements OnInit {
  servers: IServer[] = []

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers()
  }
  onReload() {  
    //this.router.navigate(['servers'], { relativeTo: this.route })
    this.router.navigate(['/servers'])
  }

}
