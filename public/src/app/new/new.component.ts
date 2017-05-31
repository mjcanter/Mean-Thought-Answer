import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ThoughtComponent } from '../thought/thought.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionuserComponent } from '../sessionuser/sessionuser.component';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  thought = new ThoughtComponent();
  subscription: Subscription;
  user = null;
  thoughts = [];
  constructor(private _thoughtService: ThoughtService, private _redirect: Router){
    this.subscription = _thoughtService.observedUser.subscribe(
      (updatedUser) => {  this.user = updatedUser },
      (err) => { },
      () => { }
    )
  }
  onSubmit(){
  this._thoughtService.makenew(this.thought)
    .then(thoughts => {this.thoughts.push(thoughts), this._redirect.navigate(["dashboard"])})
    .catch((err)=>{this._redirect.navigate(["dashboard"])})
}}

