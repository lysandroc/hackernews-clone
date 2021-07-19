import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './components/stories/stories.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoryComponent } from './components/story/story.component';

const appRoutes: Routes = [
  { path: '', component: StoriesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoriesComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
