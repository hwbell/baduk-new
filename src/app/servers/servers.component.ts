import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No servers created yet .... ';
  serverName = '';
  serverCreated = false;
  servers = ['Server 1', 'Server 2', 'Server 3', 'Server 4'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `The ${this.serverName} server was created!`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement > event.target).value;
  }

}
