import { Component } from "@angular/core";
import { Input } from "@angular/core"

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    @Input()
    showDetails: boolean = true;

    firstName: string = "quetz";
    lastName: string = "thecoatl";
    gender: string = "Male";
    age: number = 30;
    colSpan: number = 2;
}