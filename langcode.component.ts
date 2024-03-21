import { Component, OnInit, inject } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { CodegenService } from '../services/codegen.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-langcode',
  standalone: true,
  imports: [HighlightModule,CommonModule],
  templateUrl: './langcode.component.html',
  styleUrl: './langcode.component.css'
})
export class LangcodeComponent implements OnInit {
  codeservice = inject(CodegenService)
  code = ` const name = "Malav";
 for(let i = 0; i < 10; i++){
   console.log(i)
 }
  `
  ngOnInit(): void {
    this.code = this.codeservice.javaCode("Hello Nice I Am Shiv")
      
  }
}
