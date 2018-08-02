import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/service/file-upload.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  message: string;

  constructor() { 
  }

  ngOnInit() {
  }

  // onPicked(input: HTMLInputElement){
  //   debugger;
  //   const file = input.files[0];
  //   if(file){
  //     this.uploaderService.upload(file).subscribe(
  //       msg =>  {
  //         input.value = null;
  //         this.message = msg;
  //       }
  //     );
  //   }
  // }

}
