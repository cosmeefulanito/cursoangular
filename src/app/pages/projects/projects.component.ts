import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public token;
  public currentUser;
  public projects=[];

  constructor(
    private api: ApiService,
    private storage: StorageService
  ) {
    this.currentUser = this.storage.getCurrentUser();
    this.token = this.currentUser.token;
   }

  ngOnInit() {
    this.api.getProyectos(this.token).subscribe((projects:any) => {
      this.projects = projects.data;
      console.log(this.projects);
    })
  }

  public eliminarProyecto(proyectoId){
    this.api.deleteProyecto(this.token,proyectoId).subscribe(()=>{
      this.projects =[];
      this.api.getProyectos(this.token).subscribe((proyecto:any)=>{
        this.projects = proyecto.data;
      })


    })
  }

}
