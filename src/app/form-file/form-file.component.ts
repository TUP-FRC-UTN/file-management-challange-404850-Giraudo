import { Component, EventEmitter, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-file',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-file.component.html',
  styleUrl: './form-file.component.css'
})
export class FormFileComponent {

  owners : FileOwner[] = OWNERS;
  files : FileType[] = [FileType.FILE, FileType.FOLDER];
  folders : FileItem[] = FILE_LIST.filter(file => file.type == FileType.FOLDER);
  

  item : FileItem = {
    id: '0',
    creation: new Date(),
    name: 'default name',
    owners: [],
    type: FileType.FILE
  };

  @Output() hideForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() addFileItem: EventEmitter<FileItem> = new EventEmitter<FileItem>();

  mainPage(){
    this.hideForm.emit(true);
  }

  sendFileItem(form : NgForm){
    console.log(form);
    console.log("item a cargar: ", this.item)
    if(form.valid){
      this.addFileItem.emit
    }
  }
  
}
