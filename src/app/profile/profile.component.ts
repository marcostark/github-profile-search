import { Component, OnInit, NgModule } from '@angular/core';
import { ProfileService } from './profile.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Pesquisa de usuários do Github';
  public search;
  public user: any

  postForm = this.fb.group({
    search: [null, [Validators.required]],    
  });

  constructor(
    private appService: ProfileService,
    private fb: FormBuilder) { }  
  
  getUser(user?): void {
    this.appService.getUser(user).subscribe(
      (data: any) => {
        this.user = data
        console.log(this.user)
      });             
  }

  searchUser() {
    let query = this.postForm.value.search    
    this.getUser(query);
  }

  ngOnInit() {
    //let user = 'marcostark';
    //this.getUser(user);
  }
  
}
