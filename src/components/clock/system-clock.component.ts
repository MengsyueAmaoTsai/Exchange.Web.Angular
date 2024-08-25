import { Component, type OnDestroy, type OnInit } from "@angular/core";

@Component({
	selector: "system-clock",
	standalone: true,
	templateUrl: "./system-clock.component.html",
	styleUrls: ["./system-clock.component.css"],
})
export class SystemClockComponent implements OnInit, OnDestroy {
	private intervalId!: number;

	public time: Date = new Date();
	public timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

	public ngOnDestroy = (): void => {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	};

	public ngOnInit = (): void => {
		this.intervalId = window.setInterval(() => this.updateTime(), 1000);
	};

	private updateTime(): void {
		this.time = new Date();
	}
}
