import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_noticias';

  listaNoticias:any[] = [];

  loading = false;

  constructor(private newsService:NewsService) { }

  buscarNoticias($event:any) {
    console.info('Desde padre:', $event);

    this.loading = true;

    this.listaNoticias=[];

    setTimeout(() => {
      this.newsService.getNoticias($event).subscribe(res => {
        console.log(res);
        this.loading = false;
        this.listaNoticias = res.articles;
      });
    }, 2000)
  }
}
