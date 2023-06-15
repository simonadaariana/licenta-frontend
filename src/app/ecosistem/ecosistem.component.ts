import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {BackendService} from "../service/backend.service";

@Component({
  selector: 'app-ecosistem',
  templateUrl: './ecosistem.component.html',
  styleUrls: ['./ecosistem.component.css']
})
export class EcosistemComponent implements OnInit {
  group1: FormGroup;
  group2: FormGroup;
  group3: FormGroup;
  group4: FormGroup;
  valueGroup1: number
  valueGroup2: number
  valueGroup3: number
  valueGroup4: number

  constructor(private router: Router, private backendService: BackendService) {
  }

  ngOnInit() {
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

    this.group1.valueChanges.subscribe((value) => {
      this.valueGroup1 = parseInt(value.selectedOption)
    })
    this.group2.valueChanges.subscribe((value) => {
      this.valueGroup2 = parseInt(value.selectedOption)
    })
    this.group3.valueChanges.subscribe((value) => {
      this.valueGroup3 = parseInt(value.selectedOption)
    })
    this.group4.valueChanges.subscribe((value) => {
      this.valueGroup4 = parseInt(value.selectedOption)
    })
  }


  onNextPage() {
    const suma = (this.valueGroup1 + this.valueGroup2 + this.valueGroup3 + this.valueGroup4)
    const rez = (this.valueGroup1 + this.valueGroup2 + this.valueGroup3 + this.valueGroup4) / 4

    localStorage.setItem("ecosistem1", this.valueGroup1.toString())
    localStorage.setItem("ecosistem2", this.valueGroup2.toString())
    localStorage.setItem("ecosistem3", this.valueGroup3.toString())
    localStorage.setItem("ecosistem4", this.valueGroup4.toString())

    // console.log(this.valueGroup1)
    // console.log(this.valueGroup2)
    // console.log(this.valueGroup3)
    // console.log(this.valueGroup4)
    localStorage.setItem("suma_ecosistem", suma.toString())
    console.log(localStorage.getItem("suma_ecosistem"))
    localStorage.setItem("ecosistem", rez.toString())
    console.log(localStorage.getItem("ecosistem"))

    this.backendService.saveAverageCateogries({
      averageCategoryOrganizare: parseFloat(<string>localStorage.getItem("organizare")),
      averageCategoryTehnologie: parseFloat(<string>localStorage.getItem("tehnologie")),
      averageCategoryAbilitati: parseFloat(<string>localStorage.getItem("abilitati")),
      averageCategoryEcosistem: parseFloat(<string>localStorage.getItem("ecosistem")),
      averageCategoryStrategie: parseFloat(<string>localStorage.getItem("strategie")),
      averageCategoryOperatiuni: parseFloat(<string>localStorage.getItem("operatiuni")),
      averageCategoryCultura: parseFloat(<string>localStorage.getItem("cultura")),
      averageCategoryInovatie: parseFloat(<string>localStorage.getItem("inovatie")),
      averageCategoryDateleSiAnalizaLor: parseFloat(<string>localStorage.getItem("datele_si_analiza_lor")),
      averageCategoryExperientaClientilor: parseFloat(<string>localStorage.getItem("experienta_clientilor")),
    }).then(() => {
      this.router.navigateByUrl("/rezultat")
    })
  }
}

