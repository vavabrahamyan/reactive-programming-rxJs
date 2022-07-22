import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleHttpRequestsComponent } from './multiple-http-requests/multiple-http-requestes/multiple-http-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { MultipleHttpRequestsService } from './services/multiple-http-requests.service';
import { HttpRequestsChildComponentComponent } from './multiple-http-requests/http-requests-child-component/http-requests-child-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'http-request',
    component: MultipleHttpRequestsComponent,
  },
  {
    path: '',
    redirectTo: '/http-request',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/http-request',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [MultipleHttpRequestsComponent, HttpRequestsChildComponentComponent],
  exports: [RouterModule],
  providers: [MultipleHttpRequestsService]
})
export class AppRoutingModule {}
