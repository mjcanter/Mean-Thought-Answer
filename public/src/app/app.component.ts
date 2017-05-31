import { Component } from '@angular/core';
import { ThoughtService } from './thought.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionuserComponent } from './sessionuser/sessionuser.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription: Subscription;
  user = '';
  constructor(_thoughtService: ThoughtService, private _redirect: Router) {
    _thoughtService.updateUser(this.user)
  }
  ngOnInit() {
  	this._redirect.navigate(["/login"])}
}
