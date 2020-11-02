import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UserTokenGuard } from './user-token.guard';


const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "/login" },
  { path: "login", component: LoginComponent },
  {
    //Comentar el canActivate para probar la API si no funciona el login
    path: "home", component: HomeComponent, /* canActivate: [UserTokenGuard], */ children: [
      {
        path: "createPost",
        component: CreatePostComponent
      }
    ]
  },
  { path: 'updatePost/:postId', component: UpdatePostComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
