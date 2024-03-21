import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodegenService {

  charCodeGen(input: string) {
    let strarr = Array.from(input)
    let strcode = ""
    let strarrlength = strarr.length;
    strarr.forEach((data, index) => {
      if (index == strarrlength - 1) {
        strcode += `${data.charCodeAt(0)} `;
      }else{
        strcode += `${data.charCodeAt(0)}, `;
      }
    })
    return strcode
  }

  pythonCode(input: string) {
    let chararr = this.charCodeGen(input) 
    let code = ` chararr = [${chararr}]
    for i in chararr:
        print(chr(i),end="")`
    return code
  }
  javaCode(input: string){
    let chararr = this.charCodeGen(input) 
    let code = `public class Main {
      public static void main(String[] args) {
          int charr [] = {${chararr}};
         for (int i : charr) {
          System.out.print((char) i);
         }
      }
  }
  `
  return code
  }
  cCode(input:string){
    let chararr = this.charCodeGen(input);
    let code = ``
  }
}
