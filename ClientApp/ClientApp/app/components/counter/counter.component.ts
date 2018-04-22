import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: require('./counter.component.html')
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
