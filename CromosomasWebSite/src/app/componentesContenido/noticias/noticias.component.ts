import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticia: Noticia = {
    id: 1,
    titulo: 'titulo de la noticia',
    contenido: 'Contenido'
  };

  listaNoticias: Noticia[] = [
      {
        id: 1,
        titulo: 'noticia 1'
      },
      {
        id: 2,
        titulo: 'noticia 2'
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
