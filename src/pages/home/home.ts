import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Pusher from 'pusher-js';

Pusher.logToConsole = true;
const socket = new Pusher('d2c236fdf98a911edb8a', {
  cluster: 'us2',
  encrypted: true
});

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    const channel = socket.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(data.message);
    });
  }

}
