import { Component, EventEmitter, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';

@Component({
  selector: 'app-form-file',
  standalone: true,
  imports: [],
  templateUrl: './form-file.component.html',
  styleUrl: './form-file.component.css'
})
export class FormFileComponent {

  owners : FileOwner[] = OWNERS;
  files : FileType[] = [FileType.FILE, FileType.FOLDER];

  @Output() hideForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  mainPage(){
    this.hideForm.emit(true);
  }
  
}
