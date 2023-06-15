import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { OrganizareComponent } from './organizare/organizare.component';
import { CulturaComponent } from './cultura/cultura.component';
import { DateleSiAnalizaLorComponent } from './datele-si-analiza-lor/datele-si-analiza-lor.component';
import { EcosistemComponent } from './ecosistem/ecosistem.component';
import { ExperientaClientilorComponent } from './experienta-clientilor/experienta-clientilor.component';
import { InovatieComponent } from './inovatie/inovatie.component';
import { OperatiuniComponent } from './operatiuni/operatiuni.component';
import { StrategieComponent } from './strategie/strategie.component';
import { AbilitatiComponent } from './abilitati/abilitati.component';
import { TehnologieComponent } from './tehnologie/tehnologie.component';
import { GraficeComponent } from "./grafice/grafice.component";
import {RezultatComponent} from "./rezultat/rezultat.component";
import {MedieComponent} from "./medie/medie.component";

const routes: Routes = [
  {path: 'firstpage', component:FirstpageComponent},
  {path: 'secondpage', component:SecondpageComponent},
  {path: 'organizare', component:OrganizareComponent},
  {path: 'cultura', component: CulturaComponent},
  {path: 'datele_si_analiza_lor', component: DateleSiAnalizaLorComponent},
  {path: 'ecosistem', component: EcosistemComponent},
  {path: 'experienta_clientilor', component: ExperientaClientilorComponent},
  {path: 'inovatie', component: InovatieComponent},
  {path: 'operatiuni', component: OperatiuniComponent},
  {path: 'strategie', component: StrategieComponent},
  {path: 'abilitati', component: AbilitatiComponent},
  {path: 'tehnologie', component: TehnologieComponent},
  {path: 'grafice', component: GraficeComponent},
  {path: 'rezultat', component: RezultatComponent},
  {path: 'medie', component: MedieComponent},
  {path: '', redirectTo: 'firstpage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
