import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  posts = [
    {
      title: 'Premier Post',
      content: 'Test test test test test',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'Deuxième Post ',
      content: 'Test test test test test',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Troisième Post',
      content: 'Test test test test test',
      loveIts: 0,
      created_at: new Date()
    },
  ];


}
