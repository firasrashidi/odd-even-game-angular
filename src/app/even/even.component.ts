import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-even-component',
    templateUrl: './even.component.html',
    styleUrls: ['./even.component.css']
})
export class EvenComponent{
    @Input() number: Number;
} 