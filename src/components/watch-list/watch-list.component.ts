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
		},
		{
			symbol: "AAPL",
			description: "Apple Inc.",
		},
	];
}
