import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { MinitasksComponent } from './minitasks/minitasks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },          // Default route (home page)
  { path: 'about', component: AboutComponent },    // About page
  { path: 'education', component: EducationComponent }, // Education page
  { path: 'projects', component: ProjectsComponent },   // Projects page
  { path: 'contact', component: ContactComponent }, // Contact page
  { path: 'minitasks', component: MinitasksComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },  // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
