import { Component, OnInit } from '@angular/core';
import { menuItems } from 'src/app/mock-data/mock-menu';
import { menuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-side-nav-lateral',
  templateUrl: './side-nav-lateral.component.html',
  styleUrls: ['./side-nav-lateral.component.css']
})
export class SideNavLateralComponent implements OnInit {

  menu = menuItems;

  constructor() { }

  ngOnInit(): void {
  }

}
