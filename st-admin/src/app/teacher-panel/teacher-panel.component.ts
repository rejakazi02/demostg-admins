import { Component, OnInit } from '@angular/core';
import { navItems } from './_teacherPanel';

@Component({
  selector: 'app-teacher-panel',
  templateUrl: './teacher-panel.component.html',
  styleUrls: ['./teacher-panel.component.scss']
})
export class TeacherPanelComponent implements OnInit {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
