import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  @Input() posts;
  @Input() loveIts: number;
  
  constructor() { }

  ngOnInit() {
  }
  
  getLove(){
    this.loveIts++;
    console.log("'j'aime ça !");
  }

  getDislike(){
    this.loveIts--;
    console.log("'j'aime pas ça !");
  }

  getColor() {
    if(this.getLove > this.getDislike) {
      return 'green';
    } else if (this.getLove < this.getDislike ) {
      return 'red';
    }
  }

}
