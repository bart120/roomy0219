import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-salles',
  templateUrl: './liste-salles.page.html',
})
export class ListeSallesPage implements OnInit {

  lstSalles: Array<any>;

  constructor(private serv: AppService, private router: Router) { }

  ngOnInit() {
    this.serv.getSalles().subscribe(
      (data) => {
        this.lstSalles = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  afficheSalle(id: number) {
    this.router.navigate([`/detail/${id}`]);
  }

}
