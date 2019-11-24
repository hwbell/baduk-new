import { Component, OnInit } from "@angular/core";
import { Thread } from "../../../classes/thread";
import { ServerService } from 'src/services/server.service';
@Component({
  selector: "app-news-article-form",
  templateUrl: "./news-article-form.component.html",
  styleUrls: ["./news-article-form.component.sass"],
  providers: [ServerService]
})

export class NewsArticleFormComponent implements OnInit {

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

  submitted = false;

  toggleForm() {
    console.log("toggling form");
    this.formOpen = !this.formOpen;
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {}
}
