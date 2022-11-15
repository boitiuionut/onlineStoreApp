import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { whishlistUrl, productsUrl } from 'src/config/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(){
    return this.http.get<any>(whishlistUrl).pipe(
      map((result: any[]) => {
        let productIds: any[] = []
        result.forEach(item => productIds.push(item.id))
        
        return productIds;
      })
    )
  }

  addToWishlist(productId: number)
  {
    return this.http.post(whishlistUrl, {id: productId})
  }

  removeFromWishlist(productId: number){
    return this.http.delete(whishlistUrl + '/' + productId);
  }
}
