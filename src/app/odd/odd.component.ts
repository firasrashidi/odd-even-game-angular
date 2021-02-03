import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-odd-component',
    templateUrl: './odd.component.html',
    styleUrls: ['./odd.component.css']
})
export class OddComponent{
    @Input() number: Number;
} 