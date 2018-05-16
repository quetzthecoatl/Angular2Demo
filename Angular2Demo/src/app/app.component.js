"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageHeader = "Employee Details";
        this.imgPath = 'https://thonyc.files.wordpress.com/2018/05/1024px-johannes_kepler_1610.jpg?w=500';
        this.firstName = "Quetz";
        this.lastName = "thecoatl";
        this.colorFlag = true;
        this.boldFlag = true;
        this.italicFlag = true;
        this.isGreen = false;
        this.fontSize = 30;
        this.showDetails = false;
        this.buttonString = "show Details";
    }
    AppComponent.prototype.onClick = function () {
        console.log("clicked third button");
    };
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
        if (this.showDetails) {
            this.buttonString = 'Hide Details';
        }
        else {
            this.buttonString = 'Show Details';
        }
        //console.log("flag = " + this.showDetails);
        //console.log("string = " + this.buttonString);
    };
    AppComponent.prototype.getClasses = function () {
        var classes = {
            'bold-class': this.boldFlag,
            'color-class': this.colorFlag,
            'italic-class': this.italicFlag
        };
        return classes;
    };
    AppComponent.prototype.getStyles = function () {
        var styles = {
            'color': this.isGreen ? 'green' : 'cyan',
            'background': this.isGreen ? 'cyan' : 'green',
            'font-size.px': 30
        };
        return styles;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div>\n        <h1>{{pageHeader ? pageHeader : 'No header'}}</h1>\n        <!--button class=\"bold-class\" [ngStyle]=\"getStyles()\" >first</button><br><br>\n        <button style='color:blue' [style.background]=\"isGreen ? 'green': 'cyan'\" [class.bold-class]=\"boldFlag\">second</button><br><br>\n        <button [ngClass]=\"getClasses()\" (click)=\"onClick()\">third</button><br><br-->\n        <my-employee  [showDetails]=\"showDetails\"></my-employee>\n        <button (click)=\"toggleDetails()\">{{buttonString}}</button>\n    </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map