import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private srvHttp: HttpClient) { }

  getSalles(): Observable<any> {
    const obs = this.srvHttp.get(environment.urlSalles);
    /*obs.subscribe(
      (data) => {
        console.log(data);
        return data;
      },
      (err) => {
        console.error(err);
      }
    );*/
    return obs;
  }


}
