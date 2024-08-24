import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "clock",
	standalone: true,
	templateUrl: "./clock.component.html",
	styleUrls: ["./clock.component.scss"],
	imports: [CommonModule],
})
export class ClockComponent {
	public currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	public currentTime: Date = new Date();
}
