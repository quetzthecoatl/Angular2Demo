import { Component } from "@angular/core";
import { EmployeeComponent } from "./employee/employee.component";

@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1>{{pageHeader ? pageHeader : 'No header'}}</h1>
        <!--button class="bold-class" [ngStyle]="getStyles()" >first</button><br><br>
        <button style='color:blue' [style.background]="isGreen ? 'green': 'cyan'" [class.bold-class]="boldFlag">second</button><br><br>
        <button [ngClass]="getClasses()" (click)="onClick()">third</button><br><br-->
        <my-employee  [showDetails]="showDetails"></my-employee>
        <button (click)="toggleDetails()">{{buttonString}}</button>
    </div>`
    //templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageHeader: string = "Employee Details";
    imgPath: string = 'https://thonyc.files.wordpress.com/2018/05/1024px-johannes_kepler_1610.jpg?w=500';
    firstName: string = "Quetz";
    lastName: string = "thecoatl";

    colorFlag: boolean = true;
    boldFlag: boolean = true;
    italicFlag: boolean = true;
    isGreen: boolean = false;
    fontSize: number = 30;
    showDetails: boolean = false;
    buttonString: string = "show Details";

    onClick(): void {
        console.log("clicked third button");
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
        if (this.showDetails) {
            this.buttonString = 'Hide Details';
        }
        else {
            this.buttonString = 'Show Details';
        }
        //console.log("flag = " + this.showDetails);
        //console.log("string = " + this.buttonString);
    }

    getClasses() {
        let classes = {
            'bold-class': this.boldFlag,
            'color-class': this.colorFlag,
            'italic-class': this.italicFlag
        };
       
        return classes;
    }

    getStyles() {
        let styles = {
            'color': this.isGreen ? 'green' : 'cyan',
            'background': this.isGreen ? 'cyan' : 'green',
            'font-size.px' : 30
        };
        return styles;
    }
}