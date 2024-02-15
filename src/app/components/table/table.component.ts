import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public menuAcoes = false;
  public menu = false;

  openMenu() {
    this.menu = !this.menu;
  }

  openMenuAcoes() {
    this.menuAcoes = !this.menuAcoes;
  }
}
