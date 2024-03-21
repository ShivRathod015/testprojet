import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextboxComponent } from './textbox/textbox.component';
import { LanglistComponent } from './langlist/langlist.component';
import { LangcodeComponent } from './langcode/langcode.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TextboxComponent,LanglistComponent,LangcodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '7lang';
}
