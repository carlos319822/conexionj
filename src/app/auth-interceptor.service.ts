import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';

import { Observable } from 'rxjs';



export class MyInterceptor implements HttpInterceptor {

  apikey= '0GYWI5khzH4h1KXqmRFgzFSPFosmtk01wNkz7TTwdjf3DkN9dFr5n9BHgwZpL/+u';
  intercept(
    request:HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    let formattedRequest = request;
    if(!request.headers.has('Accept')){
      formattedRequest = request.clone({
        headers: request.headers
        .set('Accept', 'application/json, text/plain, */*')
        .set('Authorization', `Bearrer ${this.apikey}`),
      });
    }

    console.log(formattedRequest);
    return next.handle(formattedRequest)
  }
  

  
}
