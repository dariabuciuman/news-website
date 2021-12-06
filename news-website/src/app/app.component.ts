import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-website';

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1450px)']).subscribe((res) => {
      if (res.matches) {
        console.log('shoudl be closed');
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        console.log('shoudlnt be closed');
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
