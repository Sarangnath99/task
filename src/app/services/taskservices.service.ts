import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class TaskservicesService {

  constructor() { }


  task :any ={
    emp011:{"Empcode":"emp011","EmpPassword":4589,"Employeename":"Arjun M","Position":"UI/UX Designer","task":"FrontEnd","status":"Active",TASKHistory:[]},
    emp012:{"Empcode":"emp012","EmpPassword":4589,"Employeename":"ASwathi N ","Position":"Python Dev","task":"Back-End","status":"Active",TASKHistory:[]},
    emp013:{"Empcode":"emp013","EmpPassword":4589,"Employeename":"Ram Reddy ","Position":"ASSociateSE","task":"FrontEnd","status":"Active",TASKHistory:[]},
    

  }



  
  taskAdd(Employeename:any,Empcode:any,Emp_pswd:any,designation:any,task:any,status:any){
    let db = this.task
    if (Empcode in task) {
      if (Emp_pswd == task[Empcode]["Emp_pswd"]) {
        db[Empcode]["task"].push({
          EMPLOYEE_CODE:Empcode,
          EMPLOYEE_PASSWORD:Emp_pswd,
          EMPLOYEE_NAME: Employeename,
          DESIGNATION:designation,
          NEW_Task:task,
          STATUS:status
        
        })
        db[Empcode].TASKHistory.push({
            EMPLOYEE_CODE:Empcode,
            EMPLOYEE_PASSWORD:Emp_pswd,
            EMPLOYEE_NAME: Employeename,
            DESIGNATION:designation,
            NEW_Task:task

          })
          console.log(task)
        // this.saveDetails()
        return db[Empcode]["order"]

      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("User does not exist")
      return false
    }
  }
  
  tasks(Empcode:any){
    return this.task[Empcode].TASkHistory
  }
}
