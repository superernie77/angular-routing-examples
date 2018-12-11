import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // get router in constructor
  constructor(private router : Router) { }

  ngOnInit() {
  }

  // use navigate to go somewhere
  onLoadServers(){
    this.router.navigate(['/servers']);
  }

}
