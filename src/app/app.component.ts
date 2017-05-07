import { Component } from '@angular/core';
import {DataServiceService} from './services/data-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor (private _dataService : DataServiceService)
  {

  }

  ngOnInit()
  {
    console.log(this._dataService.getDataObservable().subscribe((data)=> console.log(data.json())));
  }

}
