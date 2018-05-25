import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './services/storage/storage.service';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UsersComponent } from './pages/users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditProjectComponent } from './pages/projects/edit-project/edit-project.component';
import { NewProjectComponent } from './pages/projects/new-project/new-project.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    SidebarComponent,
    ProjectsComponent,
    UsersComponent,
    ResumenComponent,
    NavbarComponent,
    EditProjectComponent,
    NewProjectComponent,
    CounterComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'ingresar', pathMatch: 'full'},
      {path: 'ingresar', component: LoginComponent},      
      {path: 'dashboard', component: DashboardComponent,
        children: [
          {path: '', redirectTo: 'resumen', pathMatch: 'full'},
          {path: 'resumen', component: ResumenComponent},
          {path: 'proyectos', component: ProjectsComponent},
          {path: 'proyectos/editar/:id', component: EditProjectComponent},      
          {path: 'proyectos/nuevo', component: NewProjectComponent},              
          {path: 'usuarios', component: UsersComponent},
        ]
      },
    {path: '404', component: NotFoundComponent},      
    {path: '**', redirectTo: '404'}
    ])
  ],
  providers: [StorageService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
