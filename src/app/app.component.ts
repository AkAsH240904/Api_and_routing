import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public getJsonValue: any;
  public postJsonValue:any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMethod();
    this.postt();
  }
  postt(){
    this.postMethod();
  }
  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (response) => {
        this.getJsonValue = response;
        console.log(this.getJsonValue); // Log the response data to the console
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  public postMethod() {
    let body={
        id: 101,
        title: 'foo',
        body: 'bar',
        userId: 1
    }
    this.http.post('https://jsonplaceholder.typicode.com/posts',body).subscribe(
      (response) => {
        this.postJsonValue = response;
        console.log(this.postJsonValue); 
      },
      (error) => {
        console.error('Error posting data:', error);
      }
    );
  }

}
