import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
   animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserlistComponent implements OnInit {

  constructor(private userListService : UserListService) { }

  dataSource = [];
  columnsToDisplay = ['id', 'name_socio'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;


  getAll() {
    debugger;
    return this.userListService.getAll();
  }

  ngOnInit(): void {
    this.dataSource = this.getAll();
  }

}


export interface PeriodicElement {
  id: string;
  name_socio: string;
}
