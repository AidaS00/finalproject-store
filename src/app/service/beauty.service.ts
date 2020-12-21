import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Beauty} from './beauty';

@Injectable({
  providedIn: 'root'
})
export class BeautyService {
  Url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  getBeauty(): Observable<Beauty>{
    return this.http.get<Beauty>(this.Url + '/Beauty');
  }
}
