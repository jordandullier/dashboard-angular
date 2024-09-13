import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus: 'unknown' | 'online' | 'offline' = 'unknown';
  private interval?: ReturnType<typeof setInterval>

  constructor() {}

  ngOnInit(){
    this.interval =  setInterval(() => {
      const random = Math.random()

      if(random < 0.5){
        this.currentStatus = 'online'
      }else if(random < 0.9){
        this.currentStatus = 'offline'
      }else{
        this.currentStatus = 'unknown'
      }
    },5000)
  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }

}
