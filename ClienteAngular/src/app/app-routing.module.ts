import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './common/photo/photo.component';
import { AlbumComponent } from './common/album/album.component';

const routes: Routes = [
  { path: 'photo', component: PhotoComponent },
  { path: 'album', component: AlbumComponent },
  { path: '**', redirectTo: 'album' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
