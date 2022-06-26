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

    var socios = [];
    for(var i = 0; i< 20; i++){
      var id = i+1;
      var active = true;
      if (i === 2 || i === 8){
        active = false;
      }

      socios.push({
        'id' : id,
        'cod_socio': "0000"+id,
        'name_socio' : 'Angel'+id,
        'surname_socio' : 'Robledo',
        'dni' : id+'_123456X',
        'address': 'calle viento'+id,
        'email': id+'alakazam@ole.com',
        'telephone' : '686 654 1'+id,
        'date_nac' : id+'/03/1993',
        'date_socio': id+'03/03/2016',
        'active' : active
      })
    }

    return socios;
  }

  constructor() { }
}
