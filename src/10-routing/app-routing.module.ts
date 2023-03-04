import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'home', title: 'Homepage', component: HomepageComponent },
  { path: 'about/:who', title: 'About Us', component: AboutComponent },
];

// NOTE: both adding AboutComponent to declarations and CommonModule to imports is required for async pipes to work!

@NgModule({
  declarations: [HomepageComponent, AboutComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
