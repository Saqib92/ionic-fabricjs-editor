import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorfabricPageRoutingModule } from './editorfabric-routing.module';

import { EditorfabricPage } from './editorfabric.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditorfabricPageRoutingModule
  ],
  declarations: [EditorfabricPage]
})
export class EditorfabricPageModule {}
