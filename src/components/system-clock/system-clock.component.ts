import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
	Component,
	type OnDestroy,
	type OnInit,
	PLATFORM_ID,
	inject,
} from "@angular/core";

@Component({
	selector: "system-clock",
	standalone: true,
	templateUrl: "./system-clock.component.html",
	styleUrls: ["./system-clock.component.scss"],
	imports: [CommonModule],
})
export class SystemClockComponent implements OnInit, OnDestroy {
	private readonly platformId = inject(PLATFORM_ID);

	private intervalId!: number;
	public time: Date = new Date();
	public timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

	public ngOnDestroy(): void {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}

	public ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.intervalId = window.setInterval(() => this.updateTime(), 1000);
		}
	}

	private updateTime(): void {
		this.time = new Date();
	}
}
