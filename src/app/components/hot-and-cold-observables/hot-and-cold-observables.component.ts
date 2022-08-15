import { Component, OnInit } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { HotAndColdObservablesService } from "./hot-and-cold-observables..service";

@Component({
  selector: "app-hot-and-cold-observables",
  templateUrl: "./hot-and-cold-observables.component.html",
  styleUrls: ["./hot-and-cold-observables.component.scss"],
})
export class HotAndColdObservablesComponent implements OnInit {
  public coldSubscribers!: any[];
  public hotSubscribers!: any[];
  constructor(
    private readonly hotAndColdService: HotAndColdObservablesService
  ) {}

  ngOnInit(): void {
    this.coldSubscribers = [
      {
        id: 1,
        name: 'Subscriber',
        value: null,
        disabled: false
      },
      {
        id: 2,
        name: 'Subscriber',
        value: null,
        disabled: false
      },
      {
        id: 3,
        name: 'Subscriber',
        value: null,
        disabled: false
      }
    ];
    this.hotSubscribers = [
      {
        id: 4,
        name: 'Subscriber',
        value: null,
        disabled: false
      },
      {
        id: 5,
        name: 'Subscriber',
        value: null,
        disabled: false
      },
      {
        id: 6,
        name: 'Subscriber',
        value: null,
        disabled: false
      }
    ]
  }

  public subscribeToCold(item: any) {
    item.disabled = true;
    this.hotAndColdService.coldObservable$.subscribe((res) => {
      item.value = res;
    });
  }

  public subscribeToHot(item: any) {
    item.disabled = true;
    this.hotAndColdService.hotObservable().subscribe((res) => {
      item.value = res;
    })
  }

  public resetValues(){
    this.coldSubscribers.forEach(item=>{
      item.value = null;
      item.disabled = false;
    });
    this.hotSubscribers.forEach(item=>{
      item.value = null;
      item.disabled = false;
    });
  }
}
