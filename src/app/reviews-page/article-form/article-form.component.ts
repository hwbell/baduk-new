import { Component, OnInit, NgModule } from "@angular/core";
import { FormBuilder, Form } from "@angular/forms";
import { Thread } from "../../classes/thread";

@Component({
  selector: "app-article-form",
  templateUrl: "./article-form.component.html",
  styleUrls: ["./article-form.component.sass"]
})
export class ArticleFormComponent implements OnInit {
  model = new Thread(
    "Lee Changho wins",
    {
      file: ""
    },
    "A come from behind win"
  );

  public formOpen = true;
  submitted = false;

  srcResult = null;

  toggleForm () {
    console.log('toggling')
    this.formOpen = !this.formOpen;
  }
  onSubmit() {
    this.submitted = true;
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }

    console.log(inputNode.files[0])
  }

  ngOnInit() {}
}
