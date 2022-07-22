import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/Lesson';

@Component({
  selector: 'app-http-requests-child-component',
  templateUrl: './http-requests-child-component.component.html',
  styleUrls: ['./http-requests-child-component.component.scss']
})
export class HttpRequestsChildComponentComponent implements OnInit {
  // @Input() lesson: Lesson;
  @Input() word: string | null = '';

  constructor() { }

  ngOnInit(): void {
  }

}
