import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
empName = ""        
designation = ""
salary =""
companyName = ""
mobile =""
usernme = ""
password = ""
constructor(private api :ApiService){}
readValue = () =>
{
  let data:any={"empName":this.empName,"designation":this.designation,"salary":this.salary,"companyName":this.companyName,"mobile":this.mobile,"usernme":this.usernme,"password":this.password}
  console.log(data)
  this.api.addEmployee(data).subscribe(
    (response) => {
      console.log(response)
    }
  )

}


    


}


