import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.dev-mock';
import { ComicListComponent } from './pages/comic-store-list/comic-list.component';
//import { StarComponent } from '../app/pages/star/star.component';
import { ComicFilterPipe } from './pages/comic-store-list/comic-filter.pipe';
import { StarComponent } from './pages/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    //StarComponent,
    ComicFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    //StarComponent,
    FormsModule
  ],
  providers: [environment.devProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
