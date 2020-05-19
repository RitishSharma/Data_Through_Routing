import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { DataComponentService } from '../service/dataCompService.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dataComponent',
  templateUrl: './dataComponent.component.html',
  styleUrls: ['./dataComponent.component.css']
})

export class DataComponent implements OnInit {
  result: Observable<any>;
  idToNodeMap: Array<any> = [];
  constructor(
    private loc: Location,
    private dataCompService: DataComponentService,
    public activatedRoute: ActivatedRoute
    ) {}
  
  ngOnInit(){
      this.activatedRoute.data.subscribe((res) =>{
        this.result = window.history.state.data;
        console.log(window.history.state)
      })
    }

  GoBack(){
    this.loc.back();
  }
  
}
