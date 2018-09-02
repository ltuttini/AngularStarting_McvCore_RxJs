import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicListComponent } from './pages/comic-store-list/comic-list.component';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';
import { ComicGuardService } from './_service/comic/comic-guard.service';

const comicRoute: Routes = [
  {path: 'comic', component: ComicListComponent},
  {path: 'comic/:id', canActivate: [ComicGuardService], component: ComicDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(comicRoute)
  ]
})
export class AppRoutingComicModule { }
