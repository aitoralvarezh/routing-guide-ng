import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IServer } from '../models/server.model';
import { ServersService } from './servers.service';

@Injectable()
export class ServerResolver implements Resolve<IServer> {
    
    constructor(private serverService : ServersService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IServer> | Promise<IServer> | IServer {
        return this.serverService.getServer(+route.params['id']);
    }
}