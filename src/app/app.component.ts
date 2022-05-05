import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private route: ActivatedRoute, private router : Router){}
    
  items: MenuItem[] = [];

  title= 'Book Online- Admin';

  ngOnInit(): void {
      this.items = [
          {
              label:'Administrator',
              icon:'pi pi-fw pi-home',
              command: () => this.router.navigate(['/home']),
              
           },
          {
              label:'Admin',
              icon:'pi pi-fw pi-user-edit',
              command: () => this.router.navigate(['/role']),
              
          },
          {
              label:'Book',
              icon:'pi pi-fw pi-flag',
              command: () => this.router.navigate(['/book']),
             
          },
          {
              label:'Role',
              icon:'pi pi-fw pi-share-alt',
              command: () => this.router.navigate(['/role']),
             
          },
           {
           label:'Author',
            icon:'pi pi-fw pi-filter',
                 
              
          },
          {
              label:'Category',
              icon:'pi pi-fw pi-list'
          },
          {
              label:'User',
               icon:'pi pi-fw pi-users',
                    
                 
           },
             {
              label:'Order',
               icon:'pi pi-fw pi-table',
                    
                 
             },
             {
              label:'Sale-Code',
               icon:'pi pi-fw pi-shopping-bag',
                    
                 
             },
      ];
  }    
}
