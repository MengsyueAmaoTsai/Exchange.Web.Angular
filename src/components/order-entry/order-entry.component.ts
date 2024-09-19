import { Component, inject } from "@angular/core";
import type { InjectionToken } from "@angular/core";
import type { IResourceService } from "../../infrastructure/resources";

@Component({
	selector: "order-entry",
	templateUrl: "./order-entry.component.html",
	styleUrls: ["./order-entry.component.scss"],
	standalone: true,
})
export class OrderEntryComponent {
	public resourceService = inject(
		"IResourceService" as unknown as InjectionToken<IResourceService>,
	);

	public buy() {
		this.createOrder("000-8283782", "NASDAQ:MSFT", "Buy", "Market", "IOC", 1);
	}

	public sell() {
		this.createOrder("000-8283782", "NASDAQ:MSFT", "Sell", "Market", "IOC", 1);
	}

	private createOrder(
		accountId: string,
		symbol: string,
		tradeType: string,
		orderType: string,
		timeInForce: string,
		quantity: number,
	) {
		this.resourceService.createOrder({
			accountId: accountId,
			symbol: symbol,
			tradeType: tradeType,
			orderType: orderType,
			timeInForce: timeInForce,
			quantity: quantity,
		});
	}
}
