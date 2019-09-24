import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamePlayerComponent } from './game-player/game-player.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './home-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamePlayerComponent,
    HomePageComponent,
    AboutPageComponent,
    ReviewsPageComponent,
    NewsPageComponent,
    ReviewFormComponent,
    ArticleFormComponent,
    PageNotFoundComponent,
    NavigatorComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
