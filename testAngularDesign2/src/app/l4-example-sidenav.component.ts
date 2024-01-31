import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'l4-example-sidenav',
  templateUrl: './l4-example-sidenav.component.html',
  styleUrls: ['./l4-example-sidenav.component.css']
})
export class L4ExampleSidenavComponent implements OnInit {

  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
    } else {
        this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
        this.isCollapsed = !this.isCollapsed;
      }
  }

}
