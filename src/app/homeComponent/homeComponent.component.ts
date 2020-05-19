import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { DataComponentService } from '../service/dataCompService.service';

@Component({
  selector: 'app-homeComponent',
  templateUrl: './homeComponent.component.html',
  styleUrls: ['./homeComponent.component.css']
})
export class HomeComponent implements OnInit{
  phoneData: Array<any> = [];
  laptopData: Array<any> = [];

  constructor(
    private route : Router,  
    private dataCompService: DataComponentService
    ) { }

  ngOnInit(){
    this.LoadPhoneData();
    this.LoadLaptopData();
  }

  routeComponentPhone() {
    this.route.navigateByUrl('Phones', {state: {data: this.phoneData}});
  }

  routeComponentLaptop() {
    this.route.navigateByUrl('Laptop', {state: {data: this.laptopData}});
  }

  LoadPhoneData() {
    this.dataCompService.getPhoneData().toPromise().then((res) => {
      this.phoneData = res;
    });
  }

  LoadLaptopData() {
    this.dataCompService.getLaptopData().toPromise().then((res) => {
      this.laptopData = res;
    });
  }
}
