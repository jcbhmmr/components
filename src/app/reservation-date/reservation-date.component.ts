import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-date',
  templateUrl: './reservation-date.component.html',
  styleUrls: ['./reservation-date.component.css']
})
export class ReservationDateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonWasClicked = false;
  selectedDate = '';

  confirmDate = () => {
    this.buttonWasClicked = true;
    return this.selectedDate;
  };

  handleDateChange = () => {
    this.buttonWasClicked = false;
  };

  handleDateArrows = () => {
    this.buttonWasClicked = false;
  };
}
