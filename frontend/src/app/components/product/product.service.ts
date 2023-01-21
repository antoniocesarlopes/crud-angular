import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { BACKEND_URL_API } from 'src/app/app.api';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create( product: Product): Observable<Product> {
    return this.http.post<Product>(`${BACKEND_URL_API}/products`, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BACKEND_URL_API}/products`);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${BACKEND_URL_API}/${id}`);
  } 

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${BACKEND_URL_API}/${product.id}`, product);
  } 
}
