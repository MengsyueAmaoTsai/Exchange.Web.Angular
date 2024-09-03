import { Component } from "@angular/core";

@Component({
	selector: "order-entry",
	templateUrl: "./order-entry.component.html",
	styleUrls: ["./order-entry.component.scss"],
	standalone: true,
})
export class OrderEntryComponent {
	public buy() {}

	public sell() {}

	public withOrderType(orderType: string) {}
	public withTimeInForce(timeInForce: string) {}
	public withLimitPrice(limitPrice: number) {}

	private placeOrder(
		symbol: string,
		tradeType: string,
		quantity: number,
		orderType: string,
		timeInForce: string,
	) {}
}
