import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataServiceService {

  taskEmitter : Observable<Response> = new Observable();
  constructor(private _http : Http) {
    
   }

  getDataObservable() {
    var apiUrl = 'http://beta.json-generator.com/api/json/get/E1pvhLv1Q';
//   return this._http.get(apiUrl,{ withCredentials: false })
//   .subscribe(
// //      (res: Response) => {console.log(res.json()); }    
//     function(response) { 
//       let objects = response.json();
//       debugger;
//       console.log(response.json())
//     },
//     function(error) { console.log("Error happened" + error)},
//     function() { console.log("the subscription is completed")}        
//     )

    this.taskEmitter = this._http.get(apiUrl,{ withCredentials: false });
    return this.taskEmitter;
  }

}
