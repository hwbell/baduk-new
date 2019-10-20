import { Component, OnInit, NgModule } from "@angular/core";
import { FormBuilder, Form } from "@angular/forms";
import { Thread } from "../../../classes/thread";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ServerService } from 'src/services/server.service';
@Component({
  selector: "app-article-form",
  templateUrl: "./article-form.component.html",
  styleUrls: ["./article-form.component.sass"],
  providers: [ServerService]
})
export class ArticleFormComponent implements OnInit {

  constructor( private serverService: ServerService ) {

  }

  model = new Thread(
    "Lee Changho wins",
    {
      file: ""
    },
    "A come from behind win"
  );

  public formOpen = false;
  public fileSelected = false;
  submitted = false;

  srcResult = null;
  fileName = null;

  toggleForm() {
    console.log("toggling");
    this.formOpen = !this.formOpen;
    if (this.fileSelected) {
      this.fileSelected = false;
    }
  }
  onSubmit() {
    this.submitted = true;
  }

  onFileSelected(event) {
    console.log('FILE UPLOADING NOW')

    const inputNode: any = document.querySelector("#file");

    if (typeof FileReader !== "undefined") {
      const reader = new FileReader();

      reader.onload = () => {
        this.srcResult = event.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
      this.fileSelected = true;
    }
    console.log('FILE UPLOADED')
    console.log(inputNode.files[0])
    this.fileName = inputNode.files[0].name;
  }

  ngOnInit() {}
}
