import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText = '';
  rakutenResult: any;
  googleResult: any;

  select = 'rakuten';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  search() {
    // 楽天
    this.http.get(
      'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404',
      {
        params: {
          applicationId: '',
          title: this.searchText
        }
      }
    )
      .subscribe(result => {
        this.rakutenResult = result;
      });

    // Google
    this.http.get(
      'https://www.googleapis.com/books/v1/volumes', {
        params: {
          key: '',
          q: this.searchText
        }
      }
    )
      .subscribe(result => this.googleResult = result);

  }
}
