import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { distinctUntilChanged } from 'rxjs/operators';
import { HomeService } from '../home/home.service';
import { PlayersListComponent } from '../players-list/players-list.component';

@Injectable({
  providedIn: 'root',
})
export class WolfService {
  enemies = [];
  allies = ['Wolf', 'Alfa'];
  constructor(
    private homeService: HomeService,
    public modalController: ModalController
  ) {
    this.homeService
      .getPlayers()
      .pipe(distinctUntilChanged())
      .subscribe((data) => {
        this.enemies = data.filter(
          (player) => !this.allies.includes(player.role)
        );
      });
  }

  async execute() {
    await this.presentModal();

    this.homeService.kill(this.enemies[0].id);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PlayersListComponent,
      componentProps: {
        playersList: this.enemies,
        currentRole: 'Wolf',
      },
    });
    await modal.present();
    return await modal.onWillDismiss();
  }
}
