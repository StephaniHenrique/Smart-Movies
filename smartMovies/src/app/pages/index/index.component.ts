import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],

})

export class IndexComponent implements OnInit {

  public movies: Array<any> = new Array<any>();
  public series: Array<any> = new Array<any>();

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getDiscoverMovie().subscribe(
      data => {
        const obj = (data as any);

        const obj_json = JSON.parse(JSON.stringify(obj));

        this.movies = obj_json.results;
      }, error => {
        console.log(error);
      }
    )

    this.apiService.getDiscoverTV().subscribe(
      data => {
        const objs = (data as any);

        const obj_json = JSON.parse(JSON.stringify(objs));

        this.series = obj_json.results;
      }, error => {
        console.log(error);
      }
    )

  }

  showDetails(idMovie: string) {
    this.router.navigate(['details']);
    localStorage.setItem('idMovie', idMovie);
  }

  showDetailsTV(idSerie: string) {
    this.router.navigate(['details']);
    localStorage.setItem('idSerie', idSerie);
    localStorage.setItem('idMovie', '')
  }


}
