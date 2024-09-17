import { HttpClient } from "@angular/common/http";
import type { OnDestroy, OnInit } from "@angular/core";
import { Component, inject } from "@angular/core";

type OrderResponse = {
	id: string;
	accountId: string;
	symbol: string;
	tradeType: string;
	type: string;
	timeInForce: string;
	quantity: number;
	createdTimeUtc: Date;
};
@Component({
	selector: "orders",
	templateUrl: "./orders.component.html",
	styleUrls: ["./orders.component.scss"],
	standalone: true,
})
export class OrdersComponent implements OnInit, OnDestroy {
	private readonly httpClient = inject(HttpClient);

	public orders: OrderResponse[] = [];

	public ngOnDestroy(): void {}

	public ngOnInit(): void {
		this.httpClient
			.get<OrderResponse[]>("https://localhost:10000/api/v1/orders")
			.subscribe((orders) => {
				this.orders = orders;
			});
	}
}
