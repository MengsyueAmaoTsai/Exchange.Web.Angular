import { Component } from "@angular/core";

@Component({
	selector: "orders",
	templateUrl: "./orders.component.html",
	styleUrls: ["./orders.component.scss"],
	standalone: true,
})
export class OrdersComponent {
	orders = [];
}