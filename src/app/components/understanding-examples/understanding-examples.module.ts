import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnderstandingExamplesComponent } from "./understanding-examples.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [UnderstandingExamplesComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ReactiveFormsModule, FormsModule]
})
export class UnderstandingExamplesModule {}
