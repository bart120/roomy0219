import { Component, OnInit } from '@angular/core';
import { all } from 'q';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  public all: Boolean = false;

  public items: Array<{ title: string; note: string; icon: string, coche: Boolean }> = [];

  constructor(private serv: AppService) {
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        coche: false
      });
    }
  }

  ngOnInit() {
  }

  changeAll() {
    this.all = !this.all;

    for (let it of this.items) {
      it.coche = this.all;
    }

    console.log(this.all);
    console.log(this.items);

  }

  test() {
    this.items.push({
      title: 'sdfdsf',
      note: 'fjksjgksjgsg',
      icon: 'american-football',
      coche: true
    });
    console.log(this.items);

    this.serv.getSalles();

  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
