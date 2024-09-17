import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

@Component({
	selector: "order-entry",
	templateUrl: "./order-entry.component.html",
	styleUrls: ["./order-entry.component.scss"],
	standalone: true,
})
export class OrderEntryComponent {
	// private readonly httpClient = inject(HttpClient);

	public buy() {
		console.log("Buy");
	}

	public sell() {
		console.log("Sell");
	}
}
