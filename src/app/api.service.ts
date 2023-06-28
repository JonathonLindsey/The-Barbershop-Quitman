import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'api/v1/barberShop';
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    ),
  };

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  createProduct(productData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, productData);
  }
}
