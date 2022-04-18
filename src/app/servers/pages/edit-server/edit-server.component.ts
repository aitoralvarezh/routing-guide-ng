import { Component, OnDestroy, OnInit } from '@angular/core';
import { IServer } from '../../models/server.model';
import { ServersService } from '../../service/servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
  servers: IServer[];
  server : IServer;
  activeServer: IServer;
  allowEdit = false;
  serverName: string;
  serverStatus: string = 'developer';
  changesSaved = false;

  serverSubscriptions: Subscription;
  queryParamsSub: Subscription;

  constructor(private serverService: ServersService, 
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit(): void {
    this.servers = this.serverService.getServers()
    const id = +this.route.snapshot.params["id"]
    this.activeServer = this.serverService.getServer(id)

    this.queryParamsSub = this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false 
      }
    );
    this.server = this.serverService.getServer(id)
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus })
    this.changesSaved = true;
    this.router.navigate(['../../'], { relativeTo: this.route})
  }
  ngOnDestroy(): void {

    this.queryParamsSub.unsubscribe();
  }

}
