import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';

const routes: Routes = [
{
path:'',
component:HomeComponent
},
{
  path:'form',
  component:ResumeFormComponent
  },
  {
    path:'view',
    component:ResumeViewComponent
    },
    {
      path:'edit/:id',
      component:EditComponent
      },
    
    {
      path:'admin',
      component:AdminComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
