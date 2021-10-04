import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
  @Input() playersList: Array<any>;
  @Input() currentRole: any;
  selectedPlayer:any;
  constructor(private modalContoller: ModalController) {}

  ngOnInit() {
    console.log(this.playersList);
  }

  dismissModal() {
    this.modalContoller.dismiss(this.selectedPlayer);
  }
  select(player){
    this.selectedPlayer = player
  }
}
