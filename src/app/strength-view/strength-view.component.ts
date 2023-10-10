import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-view',
  templateUrl: './strength-view.component.html',
  styleUrls: ['./strength-view.component.css'],
})
export class StrengthViewComponent {
  @Input() status?: string;
}
