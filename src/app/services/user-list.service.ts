import { Injectable } from '@angular/core';
import { Observable,ReplaySubject,AsyncSubject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserListService {
  //TODO external call
  project = new ReplaySubject(1);

  //getAll() : Observable<any> {
    getAll() {
   /* this.project.subscribe(result=>{
      this.project.next([
        {
          'id' : 1,
          'cod_socio': "00001",
          'name_socio' : 'Angel',
          'surname_socio' : 'Robledo',
          'dni' : '123456879X',
          'address': 'calle viento',
          'email': 'alakazam@ole.com',
          'telephone' : '686 654 123',
          'date_nac' : '03/03/1993',
          'date_socio': '03/03/2016'
        }
      ]);
      this.project.complete();
    });

    return this.project;*/
    return [
      {
        'id' : 1,
        'cod_socio': "00001",
        'name_socio' : 'Angel',
        'surname_socio' : 'Robledo',
        'dni' : '123456879X',
        'address': 'calle viento',
        'email': 'alakazam@ole.com',
        'telephone' : '686 654 123',
        'date_nac' : '03/03/1993',
        'date_socio': '03/03/2016'
      },

      {
        'id' : 2,
        'cod_socio': "00001",
        'name_socio' : 'Angel',
        'surname_socio' : 'Robledo',
        'dni' : '123456879X',
        'address': 'calle viento',
        'email': 'alakazam@ole.com',
        'telephone' : '686 654 123',
        'date_nac' : '03/03/1993',
        'date_socio': '03/03/2016'
      }
    ]
  }

  constructor() { }
}
