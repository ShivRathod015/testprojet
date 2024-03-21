import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatDividerModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css'
})
export class TextboxComponent {

}
