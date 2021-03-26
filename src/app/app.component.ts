import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showGenerateSection = false;
  fonts = [
    {name: 'Damion'},
    {name: 'Stuttgart'},
  ];
  formData: any = { enteredText: '', selectedFont: ''};
  fontBody = '';

  onGenerate(): void {
    this.showGenerateSection = true;
  }

  onSubmit(fontsForm: any): void {
    this.formData = fontsForm;
  }


}
