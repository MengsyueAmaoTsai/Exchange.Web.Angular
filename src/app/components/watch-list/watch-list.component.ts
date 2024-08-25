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
			symbol: "AAPL",
			last: 123.45,
			change: 1.23,
			changePercent: 1.0,
		},
		{
			symbol: "GOOGL",
			last: 2345.67,
			change: 12.34,
			changePercent: 0.5,
		},
	];
}
