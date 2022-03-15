import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasComponent } from '../noticias/noticias.component';

@Component({
  selector: 'app-create-noticia',
  templateUrl: './create-noticia.component.html',
  styleUrls: ['./create-noticia.component.css']
})
export class CreateNoticiaComponent implements OnInit {

  noticia: Noticia = {
    id: 2,
    titulo: 'titulo de la noticia'
  };

  saved: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onGuardar() : void{
    this.saved = true;
    
  }

}
