import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from "@angular/material/expansion";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { GamePlayerComponent } from "./game-player/game-player.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ReviewsPageComponent } from "./reviews-page/reviews-page.component";
import { NewsPageComponent } from "./news-page/news-page.component";
import { ArticleFormComponent } from "./reviews-page/article-form/article-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NavigatorComponent } from "./navigator/navigator.component";
import { FooterComponent } from "./home-page/footer/footer.component";
import { GameReviewComponent } from './reviews-page/game-review/game-review.component';
import { ReviewsComponent } from './reviews-page/reviews/reviews.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamePlayerComponent,
    HomePageComponent,
    AboutPageComponent,
    ReviewsPageComponent,
    NewsPageComponent,
    ArticleFormComponent,
    PageNotFoundComponent,
    NavigatorComponent,
    FooterComponent,
    GameReviewComponent,
    ReviewsComponent,
    ProfilePageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
