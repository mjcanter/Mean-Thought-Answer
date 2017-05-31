import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ThoughtService {

  

  constructor(private _http: Http) { }
  getAll() {
  	return this._http.get('/thoughts').map((answers) => answers.json()).toPromise();
  }
  getOne(id) {
    return this._http.get('/show/'+id).map((answers) => answers.json()).toPromise();
  }
  makenew(thought){
    console.log('services')
  	return this._http.post('/new', thought).map((thoughts) => thought.json()).toPromise();
  }
  updatenow(thought){
    return this._http.post('/updatethought/'+thought.id, thought).map((thoughts) => thoughts.json()).toPromise();
  }
  deletenow(id) {
    return this._http.get('/destroy/'+id).map((thoughts) => thoughts.json()).toPromise();
  }
  deletecomment(id1, id2){
    return this._http.get('/answer/'+id1+ '/destroy/'+id2).map((thoughts) => thoughts.json()).toPromise();
  }
  newcomment(id, answer){
    console.log('services', answer)
    return this._http.post('/newanswer/'+ id, answer).map((answers) => answers.json()).toPromise();
  }

  observedUser = new BehaviorSubject(null);

  updateUser(user: String){
    this.observedUser.next(user);
    console.log(user)
  }
  addlike(id) {
    console.log(id, 'services')
    return this._http.get('/likeanswer/'+id).map((thoughts) => thoughts.json()).toPromise();
  }
}
