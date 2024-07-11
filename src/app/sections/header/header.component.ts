import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInHeader', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('3s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class HeaderComponent {
  
}
