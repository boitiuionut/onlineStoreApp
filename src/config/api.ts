import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000';
export const productsUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
export const whishlistUrl = baseUrl + '/wishlist';
export const customerMsgUrl = baseUrl + '/customer-messages';