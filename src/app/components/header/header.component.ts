import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  listaMenu: string[] = ['Serviços', 'Sobre Nós', 'Contactos'];
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.listaMenu.length; i++) {
      let curso = this.listaMenu[i];
    }
  }
}
