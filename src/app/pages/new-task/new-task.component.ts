import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskservicesService } from 'src/app/services/taskservices.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  taskForm=this.fb.group({
    Employeename:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    Empcode: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.maxLength(4)]],
    Emp_pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.maxLength(6)]],
    designation:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    task:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
status:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],


  })

  constructor(private router:Router,private services:TaskservicesService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  taskAdd()
  {
    console.log(this.taskForm.value.item);
    var Employeename =this.taskForm.value.Employeename
    var Empcode =this.taskForm.value.Empcode
    var Emp_pswd=this.taskForm.value.Emp_pswd
    var designation=this.taskForm.value.designation
    var taskname =this.taskForm.value.taskname
    var status=this.taskForm.value.status
    const result = this.services.taskAdd(Employeename,Empcode,Emp_pswd,designation,taskname,status)
    if(this.taskForm.valid){
      if(result)
        {
          alert('New TASK Added')
          this.router.navigateByUrl('/')
        }
      }
      else{
        alert('Invalid Form')
      }
    }
     

}
