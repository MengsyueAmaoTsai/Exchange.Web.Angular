import { Component } from "@angular/core";

@Component({
	selector: "watch-list",
	templateUrl: "./watch-list.component.html",
	styleUrls: ["./watch-list.component.scss"],
	standalone: true,
})
export class WatchListComponent {
	public watchList = [
		{
			symbol: "MSFT",
			description: "Microsoft Corporation",
			last: 416.34,
			netChange: 3.22,
			netChangePercent: 0.78,
		},
		{
			symbol: "AAPL",
			description: "Apple Inc.",
			last: 231.09,
			netChange: 1.3,
			netChangePercent: 0.57,
		},
	];
}
