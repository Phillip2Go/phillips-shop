import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhillipsCmsService {
  url: string | undefined;

  constructor(private http: HttpClient) {}

  fetchUserProducts(amount: number, userId: string): Observable<any>{
    this.url = 'http://localhost:4000/user/userproducts/' + amount + '/' + userId;
    return this.http.get(this.url);
  }
  fetchRandomAmoundProducts(amount: number): Observable<any>{
    this.url = 'http://localhost:4000/shops/no-beats/products/random/amount/' + amount;
    return this.http.get(this.url);
  }
  fetchProducts(): Observable<any>{
    this.url = 'http://localhost:4000/shops/no-beats/products';
    return this.http.get(this.url);
  }
  fetchAds(): Observable<any>{
    this.url = 'http://localhost:4000/shops/no-beats/ads';
    return this.http.get(this.url);
  }
}
