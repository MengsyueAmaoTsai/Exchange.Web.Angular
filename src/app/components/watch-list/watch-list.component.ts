import { Component } from "@angular/core";

type WatchListResponse = {
	id: string;
	displayName: string;
	symbols: string[];
};

@Component({
	selector: "watch-list",
	standalone: true,
	imports: [],
	templateUrl: "./watch-list.component.html",
	styleUrl: "./watch-list.component.scss",
})
export class WatchListComponent {
	public watchList: WatchListResponse = {
		id: "1",
		displayName: "Demo List",
		symbols: ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA", "MAX:USDTTWD"],
	};
}
