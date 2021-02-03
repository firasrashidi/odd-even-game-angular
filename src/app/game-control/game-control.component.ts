import {Component, Input, EventEmitter, Output} from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-game-control-component',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent{
    interval;
    @Output() intervalFired = new EventEmitter<number>();
    lastNumber = 0;
    onStart(){
        this.interval = setInterval(()=>{
            this.intervalFired.emit(this.lastNumber + 1);
            this.lastNumber++
        }, 1000);
        
    }

    onStop(){
        clearInterval(this.interval)
    }
} 