import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailPage } from 'src/app/pages/DetailPage/detail/detail.page';
import { DataApi } from 'src/app/redux/models/data.model';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {

  @Input() txtImg: string = "";
  @Input() txtAltura: string = "";
  @Input() txtNome: string = "";
  @Input() txtTipo: string[] = [""];
  @Input() txtLargura: string = "";
  @Input() txtAbilidades: string[] = [""];
  @Input() pokeId: number = 0;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async presentModal(pokeName: string) {
    const data: DataApi = {
      altura: Number(this.txtAltura),
      img: this.txtImg,
      largura: Number(this.txtLargura),
      nome: this.txtNome,
      type: this.txtTipo,
      abilidades: this.txtAbilidades,
      id: this.pokeId,
    };
    const modal = await this.modalController.create({
      component: DetailPage,
      cssClass: 'modalPokemon',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      componentProps: {
        pokemon: data,
      } // Get the top-most ion-modal
    });
    return await modal.present();
  }
}
