import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { OrganizareComponent } from './organizare/organizare.component';
import { TehnologieComponent } from './tehnologie/tehnologie.component';
import { StrategieComponent } from './strategie/strategie.component';
import { OperatiuniComponent } from './operatiuni/operatiuni.component';
import { CulturaComponent } from './cultura/cultura.component';
import { AbilitatiComponent } from './abilitati/abilitati.component';
import { ExperientaClientilorComponent } from './experienta-clientilor/experienta-clientilor.component';
import { DateleSiAnalizaLorComponent } from './datele-si-analiza-lor/datele-si-analiza-lor.component';
import { InovatieComponent } from './inovatie/inovatie.component';
import { EcosistemComponent } from './ecosistem/ecosistem.component';
import { GraficeComponent } from './grafice/grafice.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RezultatComponent } from './rezultat/rezultat.component';
import {HttpClientModule} from "@angular/common/http";
import { MedieComponent } from './medie/medie.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    OrganizareComponent,
    TehnologieComponent,
    StrategieComponent,
    OperatiuniComponent,
    CulturaComponent,
    AbilitatiComponent,
    ExperientaClientilorComponent,
    DateleSiAnalizaLorComponent,
    InovatieComponent,
    EcosistemComponent,
    GraficeComponent,
    RezultatComponent,
    MedieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
