import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public sideMenuPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/tabs/profile',
      icon: 'cog'
    },
    {
      title: 'Activity',
      url: '/tabs/activity',
      icon: 'analytics'
    },
    {
      title: 'Search',
      url: '/tabs/search',
      icon: 'search'
    },
    {
      title: 'About',
      url: '/tabs/about',
      icon: 'list'
    },
    {
      title: 'Contact',
      url: '/tabs/contact',
      icon: 'people'
    },
];

  constructor() { }

  ngOnInit() {
  }

  getSideMenu() {
    return this.sideMenuPages;
  }

}
