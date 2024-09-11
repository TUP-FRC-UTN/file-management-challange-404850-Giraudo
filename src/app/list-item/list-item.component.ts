import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  selected : boolean = false;

  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();

  @Input() item: FileItem = {
    id: "1",
    name: "user",
    creation: new Date(),
    owners: [],
    type: FileType.FILE
  };

  folder: FileType = FileType.FOLDER;
  file: FileType = FileType.FILE;

  sendSelected(){
    this.selectedItem.emit(this.item.id);
  }
}
