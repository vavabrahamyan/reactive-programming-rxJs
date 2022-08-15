import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleHttpRequestsComponent } from './multiple-http-requests/multiple-http-requestes/multiple-http-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { MultipleHttpRequestsService } from './services/multiple-http-requests.service';
import { HttpRequestsChildComponentComponent } from './multiple-http-requests/http-requests-child-component/http-requests-child-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnderstandingExamplesComponent } from './components/understanding-examples/understanding-examples.component';

const routes: Routes = [
  {
    path: 'http-request',
    component: MultipleHttpRequestsComponent,
  },
  {
    path: 'understanding-rxjs',
    loadChildren: ()=>import('./components/understanding-examples/understanding-examples.module').then(m=>m.UnderstandingExamplesModule),
    component: UnderstandingExamplesComponent,
  },
  {
    path: 'hot-and-cold-observables',
    loadChildren: ()=>import('./components/hot-and-cold-observables/hot-and-cold-observables.module').then(m=>m.HotAndColdObservablesModule),
  },
  {
    path: '',
    redirectTo: '/hot-and-cold-observables',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/hot-and-cold-observables',
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
