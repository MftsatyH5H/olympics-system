import { Component } from '@angular/core';

@Component({
  selector: 'app-add-multiple-participants',
  templateUrl: './add-multiple-participants.component.html',
  styleUrls: ['./add-multiple-participants.component.css']
})
export class AddMultipleParticipantsComponent {
  downloadTemplate(): void {
    const templateFilePath = 'assets/Template.xlsx';
    const link = document.createElement('a');
    link.href = templateFilePath;
    link.download = 'Template.xlsx';
    link.click();
  }
}
