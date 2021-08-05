import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Map, Marker, geoJSON, Control, LeafletEvent, TileLayer, TileLayerOptions, DomUtil, FeatureGroup } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map;

  constructor() { }


  ngAfterViewInit() {
    this.initMap();
  }

  private initMap() {
    this.map = new Map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
