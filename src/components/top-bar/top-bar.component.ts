import { Component } from "@angular/core";
import { SystemClockComponent } from "../system-clock/system-clock.component";

@Component({
	selector: "top-bar",
	templateUrl: "./top-bar.component.html",
	styleUrls: ["./top-bar.component.scss"],
	standalone: true,
	imports: [SystemClockComponent],
})
export class TopBarComponent {}
