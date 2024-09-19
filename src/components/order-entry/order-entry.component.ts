import { Component, inject } from "@angular/core";
import type { InjectionToken, OnInit } from "@angular/core";
import { OrderType, TimeInForce, TradeType } from "../../domain";
import type { IResourceService } from "../../infrastructure/resources";
import type { InstrumentResponse } from "../../infrastructure/resources/contracts";

@Component({
	selector: "order-entry",
	templateUrl: "./order-entry.component.html",
	styleUrls: ["./order-entry.component.scss"],
	standalone: true,
})
export class OrderEntryComponent implements OnInit {
	private readonly resourceService = inject(
		"IResourceService" as unknown as InjectionToken<IResourceService>,
	);

	public instruments: InstrumentResponse[] = [];

	public accountId = "000-8283782";
	public symbol = "";
	public orderType = OrderType.Market;
	public timeInForce = TimeInForce.ImmediateOrCancel;
	public quantity = 1;

	public ngOnInit(): void {
		this.instruments = this.resourceService.listInstruments();
	}

	public buy() {
		this.createOrder("000-8283782", "NASDAQ:MSFT", "Buy", "Market", "IOC", 1);
	}

	public sell() {
		this.createOrder("000-8283782", "NASDAQ:MSFT", "Sell", "Market", "IOC", 1);

		this.resourceService.createOrder({
			accountId: this.accountId,
			symbol: this.symbol,
			tradeType: TradeType.Sell,
			orderType: this.orderType,
			timeInForce: this.timeInForce,
			quantity: this.quantity,
		});
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
