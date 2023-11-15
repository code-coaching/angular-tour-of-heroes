import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-styled-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './styled-button.component.html',
  styleUrl: './styled-button.component.css',
})
export class StyledButtonComponent {
  @Output() click = new EventEmitter<void>();
  @Input() type: 'default' | 'primary' | 'negative' = 'default';
}
