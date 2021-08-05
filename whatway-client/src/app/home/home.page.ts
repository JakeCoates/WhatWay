import { Component, OnInit } from '@angular/core';
import { ClassificationService } from '../classification/services/classification.service';
import { take } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Classification from '../classification/models/classification.model';
import copy from 'copy-to-clipboard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public classificationForm: FormGroup;

  constructor(
    public classification: ClassificationService,
    public formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
  }

  ngOnInit(): void {
    this.generateFormGroup();
  }

  generateFormGroup() {
    this.classificationForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  classify() {
    const text: Classification = this.classificationForm.value;
    this.classification.classifyText(text).pipe(take(1)).subscribe((result) => {
      this.classification.historicalClassifications.unshift(result);
    })
  }

  copyText(submission) {
    copy(submission.text, {
      onCopy: async(clipboardData: object) => {
        const toast = await this.toastController.create({
          message: `'${submission.text}' has been copied`,
          duration: 2000
        });
        toast.present();
      }}
    );
  }

  copySuccess

}
