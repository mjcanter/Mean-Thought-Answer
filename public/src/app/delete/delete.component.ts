import { Input, Output, Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThoughtComponent } from '../thought/thought.component';
import { SessionuserComponent } from '../sessionuser/sessionuser.component';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  thought = new ThoughtComponent();
  param = null;
  constructor(private _thoughtService: ThoughtService, private _route: ActivatedRoute, private _redirect: Router ){this._route.params.subscribe((param)=>{
      this.param = param._id;
    })
  }
  ngOnInit() {
  this._thoughtService.deletenow(this.param)
    .then(thought => {this.thought = thought, this._redirect.navigate(["/dashboard"])})
    .catch((err)=>{console.log("Add(2) ERROR");
    })
	}
  }

