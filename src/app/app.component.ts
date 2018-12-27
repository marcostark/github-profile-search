import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Pesquisa de usuários do Github';
  public user: any

  constructor(private appService: AppService) { }  
  
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
