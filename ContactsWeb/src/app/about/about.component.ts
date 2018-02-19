import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  infos={
    nom:'dhekra',
    phone:'056789',
    mail:'dhekra@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
