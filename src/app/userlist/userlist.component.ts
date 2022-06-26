import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

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

  dataSource = this.getAll();
  columnsToDisplay = ['id', 'name_socio', 'surname_socio'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'status', 'actions', 'expand'];
  expandedElement: PeriodicElement | null;


  getAll() {
    return this.userListService.getAll();
  }

  ngOnInit(): void {
   // this.dataSource = this.getAll();
  }

  deleteForever(): void {
    console.log('foreverrrrr')
  }

  baja(): void {
    console.log('baja')
  }
}


export interface PeriodicElement {
  id: string;
  name_socio: string;
}
