import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
private users: object;
  constructor(private data: UsersService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      console.log('We have new data!!!');
      this.users = data;
    });
  }

firstClick(){
  // console.log("Hello from first clickable Button!!!");
  this.data.firstClick();
}

}
