import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BottommenuComponent } from "./bottommenu/bottommenu.component";


@NgModule({
  declarations: [
    BottommenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    BottommenuComponent
  ]
})

export class ComponentsModule { }