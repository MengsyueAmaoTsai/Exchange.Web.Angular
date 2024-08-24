import { Component } from "@angular/core";
import { ClockComponent } from "../clock/clock.component";

@Component({
	selector: "top-bar",
	standalone: true,
	templateUrl: "./top-bar.component.html",
	styleUrls: ["./top-bar.component.scss"],
	imports: [ClockComponent],
})
export class TopBarComponent {}
