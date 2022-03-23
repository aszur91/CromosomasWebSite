import { Component, OnInit } from '@angular/core';
import { listaNoticiasMock } from 'src/app/mock-data/mock-noticias';
import { noticiaCard } from 'src/app/models/noticiaCard';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  listaNoticias: noticiaCard[] = listaNoticiasMock;

  constructor() { }

  ngOnInit(): void {
    
  }

  
  

}
