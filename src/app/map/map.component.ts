import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Map, latLng, MapOptions, tileLayer, ZoomAnimEvent, TileLayer, TileLayerOptions, LatLng } from 'leaflet';
import { BehaviorSubject } from 'rxjs';

export const MAX_ZOOM = 18;
export const MAX_NATIVE_ZOOM = 18;
export const INITIAL_ZOOM = 17;


export const MAP_OPTIONS = {
  zoomControl: false,
  maxZoom: MAX_ZOOM,
  tap: false, // https://github.com/Leaflet/Leaflet/issues/7255
  doubleClickZoom: false,
  attributionControl: false
};
export const LONDON_COORDINATES: LatLng = new LatLng(51.5074, 0.1278);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  public map: Map;
  public zoom: number;
  // Subject for map to know when it initialised
  public mapCreated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  private tiles: TileLayer;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.map.clearAllEventListeners();
    this.map.remove();
  };
  ngAfterViewInit(): void {
    // an optimal time for view to enter and map to load properly
    setTimeout(() => this.initMap(), 500);
  }

  /**
   * Initialise a new Leaflet instance
   */
   initMap(): void {
    this.newLeafletMap();
  }

  /**
   * Add tileLayer and map based on geolocation
   * This either generates a mapbox map or a leaflet map.
   */
  newLeafletMap(): void {
    if (!this.map) {
      this.tiles = new TileLayer(this.getTiles(), this.getTileLayerOptions());
      this.map = new Map('map-container', MAP_OPTIONS);
      this.map.addLayer(this.tiles);
      this.setUserLocation();
    }
  }

  getTiles(): string {
    return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  }


  getTileLayerOptions(): TileLayerOptions {

    return {
      crossOrigin: null,
      // Maximum zoom number the tiles source has available.
      // If it is specified, the tiles on all zoom levels higher than maxNativeZoom
      // will be loaded from maxZoom level and auto-scaled.
      maxNativeZoom: MAX_NATIVE_ZOOM
    };
  }

  getUserLocationOptions(positionOptions?: PositionOptions): PositionOptions {
    return {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 60000,
      ...positionOptions
    };
  }

  setUserLocation(positionOptions?: PositionOptions): void {
    if (this.map) {
      // success - sets the view to location, failure -  focus on London as default
      this.map.locate({ setView: true, maxZoom: INITIAL_ZOOM, ...this.getUserLocationOptions(positionOptions) });

      this.map.on('locationerror', () => {
        this.map.setView(LONDON_COORDINATES, INITIAL_ZOOM, );
        this.finishMapCreation();
      });

      this.map.on('locationfound', () => {
        this.finishMapCreation();
      });
    }
  }

  /**
   * Add Zoom controls and mark mark map as created
   */
   finishMapCreation(): void {
    this.mapCreated$.next(true);
  }
}
