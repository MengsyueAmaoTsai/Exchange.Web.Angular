import { Component, Input } from "@angular/core";

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
export class OrdersComponent {
	@Input()
	public orders: OrderResponse[] = [];
}
