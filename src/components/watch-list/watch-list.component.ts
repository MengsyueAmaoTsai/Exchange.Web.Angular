import { Component } from "@angular/core";

type WatchListItem = {
	symbol: string;
	last: number;
	change: number;
	changePercent: number;
};

@Component({
	selector: "watch-list",
	templateUrl: "./watch-list.component.html",
	styleUrls: ["./watch-list.component.scss"],
	standalone: true,
})
export class WatchListComponent {
	public watchListItems: WatchListItem[] = [
		{
			symbol: "MAX:USDTTWD",
			last: 32.033,
			change: -0.05,
			changePercent: -0.05,
		},
		{
			symbol: "CME:NQ-1",
			last: 18564,
			change: 236,
			changePercent: 0.76,
		},
		{
			symbol: "NASDAQ:AAPL",
			last: 168.34,
			change: -4.43,
			changePercent: -2.56,
		},
	];
}
