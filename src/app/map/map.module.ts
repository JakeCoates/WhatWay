import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    CommonModule, FormsModule, LeafletModule
  ]
})
export class MapModule { }
