import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact = { nom : 'Dhekra', phone : '0654256', mail : 'dhekra@gmail.com'};
  constructor() { }

  ngOnInit() {
  }

}
