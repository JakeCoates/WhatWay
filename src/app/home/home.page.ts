import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Map} from 'leaflet';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public classificationForm: FormGroup;
  private map: Map;
  private zoom: number;

  constructor(
    public formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
  }

  ngOnInit(): void {
  }

}
