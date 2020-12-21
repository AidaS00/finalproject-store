import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Men} from '../men';

@Injectable({
  providedIn: 'root'
})
export class MenService {
Url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getMen(): Observable<Men>{
    return this.http.get<Men>(this.Url + '/Men');
  }
}
