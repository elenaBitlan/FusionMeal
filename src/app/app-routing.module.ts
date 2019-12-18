import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
<<<<<<< HEAD
  { path: 'signin', component: LoginComponent, canActivate: [AuthGuard] }
=======
  
>>>>>>> origin/new_branch
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
