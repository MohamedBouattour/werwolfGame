import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  players$ = new Subject<any>();
  players = [];
  annoces = [];
  constructor() {
    this.players$.pipe(distinctUntilChanged()).subscribe((data) => {
      this.players = data;
    });
  }

  setPlayers(list) {
    this.players$.next(list);
  }

  getPlayers() {
    return this.players$;
  }

  kill(id) {
    const playerIndex = this.players.findIndex((player) => player.id === id);
    if (!this.players[playerIndex].hasProtect) {
      this.annoces.push(`${this.players[playerIndex].name} died ...`);
      this.players.splice(playerIndex, 1);
      this.setPlayers([...this.players]);
    }
  }

  showRole(id){

  }

  changeRole(){

  }

  revive(){

  }

  cast(){

  }

  protect(){

  }


   

  getAnnonce() {
    return this.annoces;
  }
}
