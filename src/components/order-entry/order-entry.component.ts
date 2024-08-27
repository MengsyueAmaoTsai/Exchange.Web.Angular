import { Component } from "@angular/core";

@Component({
	selector: "order-entry",
	templateUrl: "./order-entry.component.html",
	styleUrls: ["./order-entry.component.scss"],
	standalone: true,
})
export class OrderEntryComponent {
	public async buy(): Promise<void> {
		console.log("Buy");
	}
	public async sell(): Promise<void> {
		console.log("Sell");
	}
}
