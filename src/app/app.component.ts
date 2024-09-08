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


  changeView() {
    this.showForm = true;
  }

  deleteItems() {
    alert("borrar archivos")
  }
  
}
