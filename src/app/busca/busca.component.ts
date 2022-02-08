import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscarFiltro(){}

  mostrarPesquisa(){

   let teste1= document.getElementById('pesquisa').style.display="inline";
    console.log(teste1, "entrou" )

  }

 esconderPesquisa() {
 let teste = document.getElementById('pesquisa').style.display = 'none';
 console.log(teste, "entrou" )

 }
}
