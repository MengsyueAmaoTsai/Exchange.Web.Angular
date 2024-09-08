import { Component, VERSION } from "@angular/core";

@Component({
	selector: "about",
	templateUrl: "./about.component.html",
})
export class AboutComponent {
	public appVersion = "0.0.0";
	public angularVersion = VERSION.full;
}
