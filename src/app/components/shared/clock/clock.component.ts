import { CommonModule } from "@angular/common";
import { Component, type OnDestroy, type OnInit } from "@angular/core";

@Component({
	selector: "clock",
	standalone: true,
	templateUrl: "./clock.component.html",
	styleUrls: ["./clock.component.scss"],
	imports: [CommonModule],
})
export class ClockComponent implements OnInit, OnDestroy {
	public currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	public currentTime: Date = new Date();
	public interval!: number;

	public ngOnDestroy(): void {
		clearInterval(this.interval);
	}

	public ngOnInit(): void {
		this.interval = window.setInterval(() => this.getTime(), 500);
	}

	private getTime(): void {
		this.currentTime = new Date();
	}
}
