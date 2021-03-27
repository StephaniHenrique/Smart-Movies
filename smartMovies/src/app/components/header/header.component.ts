import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  @ViewChild('header') header: ElementRef;
  private headerEl: any;

  constructor() {
    this.header = this.headerEl;
  }

  @HostListener('window:scroll') onWindowScroll() {

    if (window.scrollY > 1.5) {
      this.header.nativeElement.style.backgroundColor = '#2D2F66';
    } else {
      this.header.nativeElement.style.backgroundColor = '#131313';
      this.header.nativeElement.classList.remove("background-color");
    }
  }

  ngOnInit(): void {

  }

}
