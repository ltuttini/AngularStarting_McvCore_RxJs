import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.dev-mock';
import { ComicListComponent } from './pages/comic-store-list/comic-list.component';

import { ComicFilterPipe } from './pages/comic-store-list/comic-filter.pipe';
import { StarComponent } from './pages/star/star.component';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';
import { AppRoutingComicModule } from './app-routing-comic.module';
import { ComicGuardService } from './_service/comic/comic-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    ComicDetailComponent,
    ComicFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   {path: 'comic', component: ComicListComponent},
    //   {path: 'comic/:id', component: ComicDetailComponent}
    // ]),
    RouterModule,
    FormsModule,
    AppRoutingComicModule
  ],
  providers: [environment.devProviders, ComicGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
