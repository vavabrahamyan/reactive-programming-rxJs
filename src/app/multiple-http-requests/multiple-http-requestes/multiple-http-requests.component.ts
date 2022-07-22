import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay, Subject } from 'rxjs';
import { Lesson } from 'src/app/models/Lesson';
import { MultipleHttpRequestsService } from 'src/app/services/multiple-http-requests.service';

@Component({
  selector: 'app-multiple-http-requests',
  templateUrl: './multiple-http-requests.component.html',
  styleUrls: ['./multiple-http-requests.component.scss'],
})
export class MultipleHttpRequestsComponent implements OnInit {
  public lessons$: Observable<Lesson>;
  private _word: Subject<string> = new Subject<string>();
  public word$: Observable<string> = this._word.asObservable();
  public inputValue: string = '';

  constructor(
    private readonly multipleHttpRequestsService: MultipleHttpRequestsService
  ) {
    this.lessons$ = this.multipleHttpRequestsService
      .loadLessons()
      .pipe(shareReplay());
  }

  ngOnInit(): void {
    this.lessons$.subscribe(
      (res) => {
        console.log('lessons loaded');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public callNext() {
    if (this.inputValue !== '') {
      this._word.next(this.inputValue);
      this.inputValue = '';
    }
  }
}
