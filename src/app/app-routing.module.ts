import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  { 
    path: 'companies', 
    loadChildren: './companies/companies.module#CompaniesPageModule' 
  },
  { 
    path: 'interviews', 
    loadChildren: './interviews/interviews.module#InterviewsPageModule' 
  },  { path: 'interview-dialog', loadChildren: './interview-dialog/interview-dialog.module#InterviewDialogPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
