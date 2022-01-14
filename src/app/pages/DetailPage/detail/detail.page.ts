import { ModalController } from '@ionic/angular';
import { ReduxService } from './../../../services/ReduxService/redux.service';
import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/pokeApiService/poke-api.service';
import { DataApi } from 'src/app/redux/models/data.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  @Input() pokemon: DataApi;

  private getImg: string;
  private getNome: string;
  private getAltura: string;
  private getLargura: string;
  private getTipo: Array<string>;
  private getAbilidades: Array<string>;
  private getId: number;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.getImg = this.pokemon.img;
    this.getNome = this.pokemon.nome;
    this.getAltura = this.pokemon.altura.toString().replace('.', ',') + 'm';
    this.getLargura = this.pokemon.largura.toString().replace('.', ',') + 'm';
    this.getTipo = this.pokemon.type;
    this.getAbilidades = this.pokemon.abilidades;
    this.getId = this.pokemon.id;
  }

  fecharModal() {
    this.modalController.dismiss();
  }

}
