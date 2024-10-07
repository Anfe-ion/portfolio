import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  data:any

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.dataService.getdata().subscribe((response) => {
      this.data = response
      //console.log(this.data)
      console.log(this.data.angularProjects)
      console.log(this.data.figmaPrototypes)
      console.log(this.data.skills)
      console.log(this.data.education)
      console.log(this.data.certifications)
    })
  }

  navigateTo(url:string){
    window.open(url, '_blank');
  }
}
