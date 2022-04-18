import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IServer } from '../../models/server.model';
import { ServersService } from '../../service/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server : IServer;
  serverSub: Subscription
  allowEdit;
  
  constructor(private route: ActivatedRoute, private router: Router, private serverService: ServersService) { }

  ngOnInit(): void {
/*     this.route.data.subscribe((data: Data) => {
      this.server = data['server']
    }); */
    const id = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServer(id)
    this.serverSub = this.route.params.subscribe( 
      (params: Params) => {
        this.server = this.serverService.getServer(+params['id'])
      }
    );
      this.route.queryParams.subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false 
      }
    );

  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
    
  }

  ngOnDestroy(): void {
    this.serverSub.unsubscribe()
  }
}
