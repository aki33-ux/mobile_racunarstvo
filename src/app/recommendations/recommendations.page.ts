import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecomendModel } from '../interface/recomend.model';
import { RecomendService } from '../recomend.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit, OnDestroy {

  private subRec: Subscription;
  recomends: RecomendModel[]=[];
  private sub2: Subscription;
  alreadyIn: RecomendModel[];
  old= new RecomendModel("", "","","","","");
  public results:RecomendModel[] = [...this.recomends];

  constructor(private recomendService: RecomendService, private alertC: AlertController) { 
    //this.recomends=this.recomendService.recomend;
  } 
  ngOnInit() {
    this.subRec=this.recomendService.reccomendations.subscribe((recomendationData)=>{
      //console.log(recomendationData);
      this.recomends=recomendationData;
      this.results=recomendationData;
    }
    );
    this.sub2=this.recomendService.staredRecomendations.subscribe((recomendationData)=>{
      //console.log(recomendationData);
      this.alreadyIn=recomendationData;
    }
    );
  }
  ionViewWillEnter() {
    this.recomendService.getRecomendations().subscribe((recomendationData)=>{
      console.log(recomendationData);
     // this.recomends=recomendationData;
    }
    );
    this.recomendService.getStarredReccomendation().subscribe((recomendationData)=>{
      console.log(recomendationData);
     // this.recomends=recomendationData;
    }
    );
  }
  
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewWDidLeave');
  }
  ngOnDestroy(){
  console.log('ngOnDestroy');
  if(this.subRec){
  this.subRec.unsubscribe();
  if(this.sub2){
    this.subRec.unsubscribe();
  }
}

}

staredAlert(rec: RecomendModel){
  this.alertC.create({
    header: "Saving recomendation.",
    message: "Are you sure you want to save this laptop recomendation?",
    buttons:[
      {
        text: "Cancel",
        handler: ()=>{
          console.log("Canceling it!");
        }
      },
      {
        text: "Save",
        handler: ()=>{
          console.log(this.old);
          for(const key in this.alreadyIn){
            if(this.alreadyIn[key].id==rec.id || this.old.id==rec.id){
              this.alertC.create({
                header: "",
                message:"Already saved recommendation!",
                buttons:[ "Okay"]
              }).then( (alert: HTMLIonAlertElement)=>{
              alert.present();
              });

              return;
            }
          }
          this.old=rec;
          console.log(rec.laptop);
          this.recomendService.addStaredRecomendation(rec).subscribe((res)=>{
            console.log(res);
          });;
          
        }
      }
    ]
  }).then( (alert: HTMLIonAlertElement)=>{
  alert.present();
});
}


handleInput(event:any) {
  const query = event.target.value.toLowerCase();
  this.recomends = this.results.filter((rec) => rec.laptop.toLowerCase().indexOf(query) > -1);
}

}
