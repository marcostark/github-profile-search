import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private githubUrl = 'https://api.github.com/';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  //https://api.github.com/users/
  
  getUser(user): Observable<any> {
    return this.httpClient.get(this.githubUrl + `users/${user}`);
  }

  getUserRepositorio(username): Observable<any> {
    return this.httpClient.get(this.githubUrl + `${username}/repos`)
  }
  
}
