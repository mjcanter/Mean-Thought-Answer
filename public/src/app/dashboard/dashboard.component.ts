import { Input, Output, Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionuserComponent } from '../sessionuser/sessionuser.component';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  

  ngOnInit() {
    this._thoughtService.getAll()
    .then(thoughts => {this.thoughts = thoughts})
    .catch((err)=>{console.log("TEST ERROR")})
  }
}

