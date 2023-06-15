import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-abilitati',
  templateUrl: './abilitati.component.html',
  styleUrls: ['./abilitati.component.css']
})
export class AbilitatiComponent implements OnInit{
  group1: FormGroup;
  group2: FormGroup;
  group3: FormGroup;
  group4: FormGroup;
  valueGroup1: number
  valueGroup2: number
  valueGroup3: number
  valueGroup4: number

  constructor(private router: Router) {}

  ngOnInit(){
    this.group1 = new FormGroup({
      selectedOption: new FormControl()
    });

    this.group2 = new FormGroup({
      selectedOption: new FormControl()
    });

    this.group3 = new FormGroup({
      selectedOption: new FormControl()
    });

    this.group4 = new FormGroup({
      selectedOption: new FormControl()
    });

    this.group1.valueChanges.subscribe((value)=>{this.valueGroup1 = parseInt(value.selectedOption)})
    this.group2.valueChanges.subscribe((value)=>{this.valueGroup2 = parseInt(value.selectedOption)})
    this.group3.valueChanges.subscribe((value)=>{this.valueGroup3 = parseInt(value.selectedOption)})
    this.group4.valueChanges.subscribe((value)=>{this.valueGroup4 = parseInt(value.selectedOption)})
  }

  onNextPage(){
    const suma = (this.valueGroup1 + this.valueGroup2 + this.valueGroup3 + this.valueGroup4)
    const rez = (this.valueGroup1 + this.valueGroup2 + this.valueGroup3 + this.valueGroup4) / 4
    localStorage.setItem("abilitati1", this.valueGroup1.toString())
    localStorage.setItem("abilitati2", this.valueGroup2.toString())
    localStorage.setItem("abilitati3", this.valueGroup3.toString())
    localStorage.setItem("abilitati4", this.valueGroup4.toString())
    // console.log(this.valueGroup1)
    // console.log(this.valueGroup2)
    // console.log(this.valueGroup3)
    // console.log(this.valueGroup4)
    localStorage.setItem("suma_abilitati", suma.toString())
    console.log(localStorage.getItem("suma_abilitati"))
    localStorage.setItem("abilitati", rez.toString())
    console.log(localStorage.getItem("abilitati"))
    this.router.navigateByUrl("/experienta_clientilor")
  }
}