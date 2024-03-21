import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-langlist',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatTooltipModule],
  templateUrl: './langlist.component.html',
  styleUrl: './langlist.component.css'
})
export class LanglistComponent {

}
