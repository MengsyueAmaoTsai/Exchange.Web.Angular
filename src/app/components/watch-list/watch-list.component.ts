import { Component, OnInit } from "@angular/core";

@Component({
	selector: "watch-list",
	standalone: true,
	imports: [],
	templateUrl: "./watch-list.component.html",
	styleUrl: "./watch-list.component.scss",
})
export class WatchListComponent implements OnInit {
	instruments: any[] = [];

	constructor() {}
	ngOnInit(): void {
		this.instruments = [{ id: 1, symbol: "Apple Inc", lastPrice: 145.12 }];
	}
}
