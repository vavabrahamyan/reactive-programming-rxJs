import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MultipleHttpRequestsService {

  constructor(private readonly http: HttpClient) { }

  public loadLessons(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos/50');
  }
}
