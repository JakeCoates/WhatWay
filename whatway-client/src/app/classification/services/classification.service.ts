import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Classification from '../models/classification.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {
  baseUrl = 'http://localhost:8000';

  historicalClassifications = [];

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }


  /**
   * Create new block for the farm
   * @newBlock
   */
   classifyText(text: Classification): Observable<Classification> {
    const url = `${this.baseUrl}/classify`;
    return this.http.post<any>(url, text);
  }

}
