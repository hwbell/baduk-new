import { TestBed } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";


import { ServerService } from './server.service';

// update this sample user to match the real form
let sampleUser = {
  name: 'jeff',
  email: 'jeff@markmail.com',
  password: 'lasangahog',
  rank: '8d'
}

describe('ServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: ServerService = TestBed.get(ServerService);
    expect(service).toBeTruthy();
  });

  it('should get user data', () => {
    const service: ServerService = TestBed.get(ServerService);
    expect(service.getUser(sampleUser)).toBeTruthy();
  });
});
