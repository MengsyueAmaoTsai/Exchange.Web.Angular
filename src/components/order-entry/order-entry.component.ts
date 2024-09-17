import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { OrderType, TimeInForce, TradeType } from "../../domain";

type CreateOrderRequest = {
	accountId: string;
	symbol: string;
	tradeType: TradeType;
	orderType: OrderType;
	timeInForce: TimeInForce;
	quantity: number;
};

type OrderCreatedResponse = {
	id: string;
};

@Component({
	selector: "order-entry",
	templateUrl: "./order-entry.component.html",
	styleUrls: ["./order-entry.component.scss"],
	standalone: true,
})
export class OrderEntryComponent {
	private readonly httpClient = inject(HttpClient);

	public buy() {
		this.createOrder({
			accountId: "1",
			symbol: "AAPL",
			tradeType: TradeType.Buy,
			orderType: OrderType.Market,
			timeInForce: TimeInForce.FillOrKill,
			quantity: 1,
		});
	}

	public sell() {
		this.createOrder({
			accountId: "1",
			symbol: "AAPL",
			tradeType: TradeType.Sell,
			orderType: OrderType.Market,
			timeInForce: TimeInForce.FillOrKill,
			quantity: 1,
		});
	}

	private createOrder(createOrderRequest: CreateOrderRequest) {
		console.log("Create order request:", createOrderRequest);

		return this.httpClient
			.post<OrderCreatedResponse>(
				"https://localhost:10000/api/v1/orders",
				createOrderRequest,
			)
			.subscribe((response) => {
				const { id } = response;

				alert(`Order ${id} has been created`);
			});
	}
}
