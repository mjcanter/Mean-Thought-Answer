import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionuserComponent } from '../sessionuser/sessionuser.component';
import { Subscription } from "rxjs/Subscription";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ThoughtService } from '../thought.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  subscription: Subscription;
  username = '';
  constructor(private _thoughtService: ThoughtService, private _redirect: Router ) {
    _thoughtService.updateUser(this.username)
  }
  
  updateUser(){

    this._thoughtService.updateUser(this.username);
    this._redirect.navigate(["/dashboard"])
  }

  ngOnInit() {
  }

}
