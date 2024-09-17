import { Component, inject } from "@angular/core";

@Component({
	selector: "order-entry",
	templateUrl: "./order-entry.component.html",
	styleUrls: ["./order-entry.component.scss"],
	standalone: true,
})
export class OrderEntryComponent {
	public buy() {
		this.createOrder({
			accountId: "1",
			symbol: "AAPL",
			tradeType: "Buy",
			orderType: "Market",
			timeInForce: "FOK",
			quantity: 1,
		});
	}

	public sell() {
		this.createOrder({
			accountId: "1",
			symbol: "AAPL",
			tradeType: "Sell",
			orderType: "Market",
			timeInForce: "FOK",
			quantity: 1,
		});
	}

	private createOrder(createOrderRequest: {}) {}
}
