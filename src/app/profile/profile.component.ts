import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Pesquisa de usuários do Github';
  public user: any

  constructor(private appService: ProfileService) { }  
  
  getUser(user?): void {
    this.appService.getUser(user).subscribe(
      (data: any) => {
        this.user = data
        console.log(this.user)
      });             
  }

  ngOnInit() {
    let user = 'marcostark';
    this.getUser(user);
  }
  
}
