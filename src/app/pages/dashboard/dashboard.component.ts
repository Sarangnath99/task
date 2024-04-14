import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskservicesService } from 'src/app/services/taskservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
Tasklist:any
tasklist:any;
  constructor(private service:TaskservicesService,private router:Router) {
   }
  ngOnInit(): void {
  }

}
