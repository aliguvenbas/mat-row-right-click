import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from './car.model';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  public displayedColumns: string[] = ['brand', 'horsePower', 'color'];
  public contextMenuPosition = {x: '0px', y: '0px'};

  @ViewChild(MatMenuTrigger, { static: true }) contextMenu: MatMenuTrigger;

  public cars: Car[] = [{brand: 'renault', horsePower: 75, color: 'gray'},
    {brand: 'ferrari', horsePower: 200, color: 'red'},
    {brand: 'honda', horsePower: 130, color: 'white'}];

  constructor() {
  }

  ngOnInit() {
  }

  searchInGoogle(car: Car) {
    const url = 'https://www.google.com/search?q=' + car.brand;
    window.open(url, '_blank');
  }

  searchInDuckDuckGo(car: Car) {
    const url = 'https://duckduckgo.com/?q=' + car.brand;
    window.open(url, '_blank');
  }

  onContextMenu(event: MouseEvent, item: Car) {
    console.log('onContextMenu');
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {item: item};
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

}
