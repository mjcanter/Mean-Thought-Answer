import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { answerComponent } from '../answer/answer.component';
import { ThoughtComponent } from '../thought/thought.component';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  thought = new ThoughtComponent;
  param = null;
  answer = new answerComponent;
  user = null;

  constructor(private _thoughtService: ThoughtService, private _route: ActivatedRoute, private _redirect: Router ){this._route.params.subscribe((param)=>{
      this.param = param._id;
    }), _thoughtService.observedUser.subscribe(
      (updatedUser) => {  this.user = updatedUser },
      (err) => { },
      () => { }
    )
  }
  
  ngOnInit() {
    this._thoughtService.getOne(this.param)
    .then(thought => {this.thought = thought})
    .catch((err)=>{console.log("TEST ERROR");
    })
  }
  onLike(this){
    console.log(this)
    this._thoughtService.addlike(this.param)
    .then(thought => {this.thought = thought, this._redirect.navigate(["dashboard"])})
    .catch((err)=>{console.log("Add(2) ERROR")}
    )
  }
}