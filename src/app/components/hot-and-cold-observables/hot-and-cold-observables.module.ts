import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotAndColdObservablesComponent } from './hot-and-cold-observables.component';
import { RouterModule } from '@angular/router';
import { HotAndColdObservablesService } from './hot-and-cold-observables..service';



@NgModule({
  declarations: [
    HotAndColdObservablesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HotAndColdObservablesComponent,
      }
    ])
  ],
  providers:[HotAndColdObservablesService]
})
export class HotAndColdObservablesModule { }
