import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { filter, interval, map, Subject, take, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-understanding-examples",
  templateUrl: "./understanding-examples.component.html",
  styleUrls: ["./understanding-examples.component.scss"],
})
export class UnderstandingExamplesComponent implements OnInit {
  public form: FormGroup;
  public valuesFromOperatorTake: Array<number | string> = []; 
  public valuesFromOperatorsTakeAndTakeUntil: Array<number | string> = []; 
  public showTake: boolean = false;
  public showTakeAndTakeUntil: boolean = false;
  public showTakeAndTap: boolean = false;
  public $stop = new Subject<boolean>();

  public tempArray = [
    {
      name: 'A',
      status: 'active'
    },
    {
      name: 'B',
      status: 'active'
    },
    {
      name: 'C',
      status: 'inactive'
    },
    {
      name: 'D',
      status: 'inactive'
    },
  ];
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [null],
    });
  }

  ngOnInit(): void {
    // this.operatorTakeAndTap();
    // this.operatorMap();
    // this.reactiveFormsValueChanges();
  }

  public operatorMap() {
    const obs = interval(500).pipe(
      take(5),
      map((i) => 2 * i)
    );
    obs.subscribe((res) =>
      console.log("result of observable with map operator:", res)
    );
  }

  public onSubmit() {
    console.log("onSubmit() this.form.value:", this.form.value);
  }

  public displayTake() {
    this.showTake = !this.showTake;
    this.operatorTake();
  }

  public displayTakeAndTakeUntil(){
    this.showTakeAndTakeUntil = !this.showTakeAndTakeUntil;
    this.operatorTakeAndTakeUntil();
  }

  public displayTakeAndTap(){
    this.showTakeAndTap = !this.showTakeAndTap;
    this.operatorTakeAndTap();
  }

  private operatorTake() {
    this.valuesFromOperatorTake = [];
    const obs = interval(1000).pipe(take(5));
    obs.subscribe(
      (res) => {
        this.valuesFromOperatorTake.push(res);
      },
      (error) => console.error,
      () => {
        this.valuesFromOperatorTake.push(
          "operator Take successfully completed"
        );
        setTimeout(() => {
          this.showTake = false;
        }, 300);
      }
    );
  }

  private operatorTakeAndTakeUntil() {
    this.$stop.next(true);
    console.log();
    
    this.valuesFromOperatorsTakeAndTakeUntil = [];
    const obs = interval(1000).pipe(take(5), takeUntil(this.$stop));
    obs.subscribe(
      (res) => {
        this.valuesFromOperatorsTakeAndTakeUntil.push(res);
      },
      (error) => console.error,
      () => {
        this.valuesFromOperatorsTakeAndTakeUntil.push(
          "operator Take successfully completed"
        );
        setTimeout(() => {
          this.showTake = false;
        }, 300);
      }
    );
  } 

  private operatorTakeAndTap() {
    const obs = interval(1000).pipe(
      take(7),
      tap(
        (res) => {
          console.log(res);
        },
        (error) => console.error,
        () => {
          console.log("Success res:");
        }
      )
    );
    obs.subscribe((value) => console.log("observer 1 received " + value));
    obs.subscribe((value) => console.log("observer 2 received " + value));
  }

  private reactiveFormsValueChanges() {
    this.form.valueChanges
      .pipe(
        map((value) => (value.firstName = value.firstName.toUpperCase())),
        filter((value) => this.form.valid)
      )
      .subscribe((result) =>
        console.log("result of form valid value changes:", result)
      );
  }
}
