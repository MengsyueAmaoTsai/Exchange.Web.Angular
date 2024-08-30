import { Component } from "@angular/core";

type WatchList = {
	id: string;
	name: string;
	items: WatchListItem[];
};

type WatchListItem = {
	symbol: string;
	description: string;
	last: number;
	netChange: number;
	netChangePercent: number;
};

@Component({
	selector: "watch-list",
	templateUrl: "./watch-list.component.html",
	styleUrls: ["./watch-list.component.scss"],
	standalone: true,
})
export class WatchListComponent {
	public currentWatchList: WatchList = {
		id: "1",
		name: "My watch list",
		items: [
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
			{
				symbol: "GOOG",
				description: "Alphabet Inc CL C Cap Stock",
				last: 164.8,
				netChange: 1.4,
				netChangePercent: 0.86,
			},
			{
				symbol: "ES 240920C55",
				description: "Eversource Energy [ES] Sep 2024 55.000 Call",
				last: 7.27,
				netChange: 0.0,
				netChangePercent: 0.0,
			},
			{
				symbol: "NVDA",
				description: "Nvidia Corporation",
				last: 119.07,
				netChange: 1.47,
				netChangePercent: 1.28,
			},
			{
				symbol: "@NQ",
				description: "E-mini Nasdaq 100 Continuous Contract [Sep24]",
				last: 19548.75,
				netChange: 155.25,
				netChangePercent: 0.8,
			},
			{
				symbol: "SOX",
				description: "Philadelphia Semiconductor Sector Index",
				last: 5029.25,
				netChange: 0,
				netChangePercent: 0,
			},
		],
	};
}
