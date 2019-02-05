import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-detail-salle',
  templateUrl: './detail-salle.page.html'
})
export class DetailSallePage implements OnInit {

  id: number;
  salle: any;

  constructor(private route: ActivatedRoute, private serv: AppService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id_salle'];
    this.serv.getSalle(this.id).subscribe(
      (data) => {
        this.salle = data;
      }
    );
  }

}
