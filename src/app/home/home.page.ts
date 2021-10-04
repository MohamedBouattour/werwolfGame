import { Component, Injector } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentPlayerindex = 0;
  gameStarted = false;
  players = [
    { id: 1, name: 'Wolf', role: 'Wolf', roleClass: undefined },
    { id: 2, name: 'Doctor', role: 'Doctor', roleClass: undefined },
    { id: 3, name: 'Seer', role: 'Seer', roleClass: undefined },
    { id: 4, name: 'Alfa', role: 'Alfa', roleClass: undefined },
    { id: 5, name: 'Wolf', role: 'Wolf', roleClass: undefined },
  ];
  roles = [];
  constructor(private injector: Injector, private homeService: HomeService) {
    this.homeService
      .getPlayers()
      .pipe(distinctUntilChanged())
      .subscribe((data) => {
        this.players = data;
      });
  }
  async run() {
    this.currentPlayerindex = 0
    this.gameStarted = true
    await this.startGame();
  }

  showRole(){
    this.players[this.currentPlayerindex].roleClass.execute();
    this.currentPlayerindex +=1
  }

  async startGame() {
    //const roles = Array.from(new Set(this.player.map(player => player.role)))
    const roles = this.players;
    for (let i = 0; i < roles.length; i++) {
      const service = this.injector.get(this.players[i].role);
      this.players[i].roleClass = service;
    }
    this.homeService.setPlayers(this.players);
    await this.startRound();
  }

  async startRound() {
    /* await this.players.forEach( async (player) => {
      await player.roleClass.execute();
    });
    console.log(this.homeService.getAnnonce()); */
  }
}
