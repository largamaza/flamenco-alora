import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output("openLeftMenu") openLeftMenu: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.openLeftMenu.emit();
  }

}
