import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { WolfService } from '../roles/wolf.service';
import { RoleService } from '../roles/role.service';
import { AlphaService } from '../roles/alpha.service';
import { SeerService } from '../roles/seer.service';
import { DoctorService } from '../roles/doctor.service';
import { HomeService } from './home.service';
import { PlayersListComponent } from '../players-list/players-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,PlayersListComponent],
  providers:[
    HomeService,
    {provide: 'Wolf', useClass: WolfService},
    {provide: 'Doctor', useClass: DoctorService},
    {provide: 'Seer', useClass: SeerService},
    {provide: 'Alfa', useClass: AlphaService},
    RoleService
  ],
  exports:[
    PlayersListComponent
  ]
})
export class HomePageModule {}
