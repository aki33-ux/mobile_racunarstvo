import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecomendModule } from '../recomend.module';
import { RecomendModel } from '../interface/recomend.model';
import { ActivatedRoute } from '@angular/router';
import { RecomendService } from '../recomend.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})

export class EditComponent  implements OnInit {
  rec: RecomendModel;

  
  constructor(private modalC: ModalController, private route: ActivatedRoute, private recomendService: RecomendService) { }

  @ViewChild('f', {static:true})f: NgForm;

  ngOnInit() {
    this.rec= this.recomendService.getEdit();
    console.log('iz edit'+this.rec.laptop);
    
  }
  cancel(){
    this.modalC.dismiss(null, 'cancel');
  }
  onEdit(){
    if(!this.f.valid){
      return;
    }
    this.modalC.dismiss({recomendData: {
      id: this.rec.id,
      author: this.rec.author,
      brand: this.f.value['brand'],
      laptop: this.f.value['laptop'],
      laptop_size: this.f.value['laptop_size'],
      comment: this.f.value['comment']
    }},
    'confirm');
  }

}
