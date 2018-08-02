import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.css']
})
export class CustomValidatorsComponent implements OnInit {

  constructor() { }

  static cannotContainDollarSign(formControl: FormControl){
    if(formControl.value.indexOf('$') >= 0){
      return {cannotContainDollarSign : true};
    } else {
      return {cannotContainDollarSign : false};
      }
    }
  
  ngOnInit() {
  }

}
