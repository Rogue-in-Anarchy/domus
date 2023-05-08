import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ServicesComponent } from './services/services.component';
import { ProjectDetailResolver } from './resolver/project-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'project-details/:id',
    component: ProjectDetailsComponent,
    resolve: [ProjectDetailResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
