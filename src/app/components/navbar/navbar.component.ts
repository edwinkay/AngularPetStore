import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: string[] = [
    'Location', 'Blog', 'Services', 'About Us', 'Franchise With Us'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

