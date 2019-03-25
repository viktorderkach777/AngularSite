import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
ownerName = 'Viktor';
languages = ['C#', 'C++', 'Pascal', 'Basic', 'Assembler'];
  constructor() { }

  ngOnInit() {
  }

}
