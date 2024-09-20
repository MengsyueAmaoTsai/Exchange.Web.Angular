import { Component, VERSION } from "@angular/core";
import type { OnInit } from "@angular/core";

@Component({
	selector: "about",
	templateUrl: "./about.component.html",
})
export class AboutComponent implements OnInit {
	public appVersion = "0.0.0";
	public angularVersion = VERSION.full;

	public ngOnInit(): void {
		console.log(`App version: ${this.appVersion}`);
		console.log(`Angular version: ${this.angularVersion}`);
	}
}
