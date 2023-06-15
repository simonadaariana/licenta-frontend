import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

export interface AverageCategories {
  averageCategoryOrganizare: number;
  averageCategoryTehnologie: number;
  averageCategoryAbilitati: number;
  averageCategoryEcosistem: number;
  averageCategoryStrategie: number;
  averageCategoryOperatiuni: number;
  averageCategoryCultura: number;
  averageCategoryInovatie: number;
  averageCategoryDateleSiAnalizaLor: number;
  averageCategoryExperientaClientilor: number;
}

export interface TotalAverageCategories {
  totalAverageCategoryOrganizare: number;
  totalAverageCategoryTehnologie: number;
  totalAverageCategoryAbilitati: number;
  totalAverageCategoryEcosistem: number;
  totalAverageCategoryStrategie: number;
  totalAverageCategoryOperatiuni: number;
  totalAverageCategoryCultura: number;
  totalAverageCategoryInovatie: number;
  totalAverageCategoryDateleSiAnalizaLor: number;
  totalAverageCategoryExperientaClientilor: number;
}


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {
  }

  getTotalAverageCategories(): Promise<TotalAverageCategories> {
    return lastValueFrom(
      this.http.get<TotalAverageCategories>('http://localhost:8080/average-company')
    );

  }


  saveAverageCateogries(averageCategories: AverageCategories): Promise<AverageCategories> {
    return lastValueFrom(
      this.http.post<AverageCategories>('http://localhost:8080/average-company', averageCategories)
    );

  }
}
