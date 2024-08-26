import { Component } from "@angular/core";

@Component({
	selector: "rc-data-grid",
	templateUrl: "./data-grid.component.html",
	styleUrls: ["./data-grid.component.scss"],
	standalone: true,
})
export class DataGridComponent {
	public data = [];
	public sortedData = [];

	public currentSortBy = "";
	public currentOrderBy = "asc";

	public sortBy(key: string): void {
		console.log("Sort by", key);
	}
}
