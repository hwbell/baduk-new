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

  public isCollapsed = true;
  submitted = false;

  toggleCollapse () {
    console.log('toggling')
    this.isCollapsed = !this.isCollapsed;
  }
  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {}
}
