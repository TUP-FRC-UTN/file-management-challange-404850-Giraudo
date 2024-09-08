import { Component, Input } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {

  @Input() item: FileItem = {
    id: "1",
    name: "user",
    creation: new Date(),
    owners: [],
    type: FileType.FILE
  };

  folder: FileType = FileType.FOLDER;
  file: FileType = FileType.FILE;

}
