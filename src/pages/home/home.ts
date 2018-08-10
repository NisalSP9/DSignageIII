import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  htmlToAdd:any;
  myStyles = {
    'margin-top': '0px',
    'margin-bottom': '0px',
    'height':'50%',
    'border': 'dotted 1px'
  };

  myStyles2 = {

    'margin': '0px',
    // 'height':'150px',
    'border': 'dotted 1px'
  };
  myStyles3 = {
    'margin': '0px',
    'height':'50%',
    'border': 'dotted 1px'
  };

  public anArray:any=[
    {'tag':'<img class="img1" src="../../assets/img/venom.jpg">','style':this.myStyles},
    {'tag':'<marquee class="mq1">Venom is coming soon !!!</marquee>','style':this.myStyles2},
    {'tag':'<video class="v2" autoplay loop src="../../assets/videos/VENOM%20.mp4"></video>','style':this.myStyles3}];

  constructor(public navCtrl: NavController) {

    console.log('User created!');

    // this.htmlToAdd = '<div class="two">two</

    //this.htmlToAdd = '<img class="img1" src="../../assets/img/venom.jpg">'

  }




}
