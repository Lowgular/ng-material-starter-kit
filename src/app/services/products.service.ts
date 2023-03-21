import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  response = of([
    {
      name: 'QWERTYUIOP...',
      imageUrl: '/assets/product-placeholder.jpg',
      price: '50',
      published: '1 day ago',
      code: '001-QWR',
    },
  ]);

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<any[]> {
    return this._httpClient
      .get<any[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/product-pipes`)
      .pipe(
        map((resp) =>
          resp.map((p) => ({
            name: p.name.slice(0, 10) + '...',
            price: p.price.endsWith('.00')
              ? p.price.replace('.00', '')
              : p.price,
            imageUrl: p.imageUrl ?? '/assets/placeholder-image.png',
          }))
        )
      );
  }
}
