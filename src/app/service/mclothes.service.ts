import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mclothes} from '../wclothes';

@Injectable({
  providedIn: 'root'
})
export class MclothesService {
Url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getMclothes(): Observable<Mclothes>{
    return this.http.get<Mclothes>(this.Url + '/Mclothes');
  }
}
