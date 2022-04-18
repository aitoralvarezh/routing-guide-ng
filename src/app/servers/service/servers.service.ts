import { Injectable } from '@angular/core';
import { IServer } from '../models/server.model';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  servers: IServer[] = [
    {
      id: 1,
      name: 'User server',
      status: 'online'
    },
    {
      id: 2,
      name: 'Admin server',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Developer server',
      status: 'online'
    }
  ];

  constructor() { }
  getServers() {
    return this.servers.slice()
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    )
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
