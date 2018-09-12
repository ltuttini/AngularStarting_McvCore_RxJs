import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StarComponent } from './pages/star/star.component';
import { ComicListComponent } from './pages/comic-store-list/comic-list.component';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';
import { ComicHomeComponent } from './pages/comic-home/comic-home.component';

import { ComicFilterPipe } from './pages/comic-store-list/comic-filter.pipe';

const comicRoute: Routes = [
  {path: '', redirectTo: 'comic', pathMatch: 'full' },
  {path: 'comic', component: ComicHomeComponent},
  {path: 'listing', component: ComicListComponent},
  {path: 'comic/:id', canActivate: [], component: ComicDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    ComicDetailComponent,
    ComicFilterPipe,
    StarComponent,
    ComicHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(comicRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
