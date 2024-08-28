import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import type { OnDestroy, OnInit } from "@angular/core";

@Component({
	selector: "system-clock",
	templateUrl: "./system-clock.component.html",
	styleUrls: ["./system-clock.component.scss"],
	standalone: true,
	imports: [CommonModule],
})
export class SystemClockComponent implements OnInit, OnDestroy {
	private intervalId!: number;

	public time: Date = new Date();
	public timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
	public menuVisible = false;

	public ngOnDestroy(): void {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}

	public ngOnInit(): void {
		this.intervalId = window.setInterval(() => {
			this.time = new Date();
		}, 1000);
	}

	public toggleMenu(): void {
		this.menuVisible = !this.menuVisible;
	}
}
