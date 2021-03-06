import { ViewChild, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TapPage } from '../tap/tap';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
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
    }
    tap(){
        this.navCtrl.setRoot(TapPage);
    }

}
