import { ViewChild, Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
    selector: 'page-tap',
    templateUrl: 'tap.html',
})
export class TapPage {
    @ViewChild('textarea') ta;
    text:string = "";
    items:any = [];

    constructor(public navCtrl: NavController) { }

    submit(){
        this.items.push(this.text);
        this.text = "";
        for(;;){
            this.ta.setFocus();
            console.log("loop");
            if("textarea" == this.ta._elementRef.nativeElement.ownerDocument.activeElement.type){
                console.log("sucess");
                this.ta.setFocus();//念のため
                break;
            }
        }
    }

    click(){
        this.navCtrl.setRoot(HomePage);
    }
    tap(){
    }
}
