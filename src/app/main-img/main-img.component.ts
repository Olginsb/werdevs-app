import { Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

import {
  isSameDay,
  isSameMonth
} from 'date-fns';
import { CalendarEvent, CalendarView } from 'angular-calendar';



@Component({
  selector: 'app-main-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-img.component.html',
  styleUrls: ['./main-img.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainImgComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'An event',
    },
  ];


  activeDayIsOpen: boolean;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {

  }


}
