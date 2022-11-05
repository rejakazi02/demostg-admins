import { Component, OnInit } from '@angular/core';
import { navItems } from './_studentPanel';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit {
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
