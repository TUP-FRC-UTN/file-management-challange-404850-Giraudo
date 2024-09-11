import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { FormFileComponent } from './form-file/form-file.component';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormFileComponent, ListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
  showForm : boolean = false;
  filesToDelete : string[] = [];


  changeView() {
    this.showForm = !this.showForm;
  }

  addItem(item : FileItem){
    this.files.push(item);
    this.showForm = false;
  }

  addItemDelete(id : string) {
    if(!this.filesToDelete.includes(id)){
      this.filesToDelete.push(id);
    } else {
      this.filesToDelete = this.filesToDelete.filter(fId => fId !== id);
    }
    console.log(this.filesToDelete)
  }
  
  deleteItems(){
    if(this.filesToDelete.length > 1){
      alert('borrando varios archivos')
      this.files = this.files.filter(item => !this.filesToDelete.includes(item.id));
      this.filesToDelete = [];
    } else {
      this.files = this.files.filter(item => !this.filesToDelete.includes(item.id));
      this.filesToDelete = [];
    }
  }
}
