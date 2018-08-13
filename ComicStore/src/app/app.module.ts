import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.dev-mock';
import { ComicListComponent } from './pages/comic-store-list/comic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [environment.devProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
