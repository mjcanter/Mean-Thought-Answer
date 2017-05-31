import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { answerComponent } from '../answer/answer.component';
import { ThoughtComponent } from '../thought/thought.component';


@Component({
  selector: 'app-newanswer',
  templateUrl: './newanswer.component.html',
  styleUrls: ['./newanswer.component.css']
})
export class NewanswerComponent {
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
  onNewanswer(answer){
    console.log('button works')
    this._thoughtService.newcomment(this.param, this.answer)
    .then(thought => {this.thought = thought, this.answer.like = 0, this._redirect.navigate(["dashboard"])})
    .catch((err)=>{console.log("Add(2) ERROR");
    })
  }
}