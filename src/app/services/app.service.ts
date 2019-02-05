import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private srvHttp: HttpClient) { }

  getSalles() {
    const obs = this.srvHttp.get(environment.urlSalles);
    obs.subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    );

  }


}
