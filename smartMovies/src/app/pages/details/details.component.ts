import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [
    ApiService
  ]
})
export class DetailsComponent implements OnInit {

  public idMovie: any;
  public idSerie: any;
  public details: any = {};
  public genres: Array<any> = new Array<any>();
  public similares: Array<any> = new Array<any>();






  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.idMovie = localStorage.getItem('idMovie')
    this.idSerie = localStorage.getItem('idSerie')

    if (this.idMovie != 0) {
      this.apiService.getMovieDetail(this.idMovie).subscribe(
        data => {
          const detail = (data as any);

          this.details = JSON.parse(JSON.stringify(detail));
          this.genres = this.details.genres

        }, error => {
          console.log(error);
        })

      this.apiService.getMovieSimilar(this.idMovie).subscribe(
        data => {
          const similar = (data as any);

          const similar_json = JSON.parse(JSON.stringify(similar));
          this.similares = similar_json.results;
          this.similares.length = 6;
        }, error => {
          console.log(error);
        }
      )
    } else {
      this.apiService.getSerieDetail(this.idSerie).subscribe(
        data => {
          const detail = (data as any);

          this.details = JSON.parse(JSON.stringify(detail));
          this.genres = this.details.genres
        }, error => {
          console.log(error);
        }
      )

      this.apiService.getSerieSimilar(this.idSerie).subscribe(
        data => {
          const similar = (data as any);

          const similar_json = JSON.parse(JSON.stringify(similar));
          this.similares = similar_json.results;
          this.similares.length = 6;
        }, error => {
          console.log(error);
        }
      )
    }
  }
}
