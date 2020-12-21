import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Accessories} from './accessories';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {
url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getAccessories(): Observable<Accessories>{
    return this.http.get<Accessories>(this.url + '/Accessories');
  }
}
