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
		this.placeOrder(TradeType.Buy);
	}

	public sell() {
		this.placeOrder(TradeType.Sell);
	}

	private placeOrder(tradeType: TradeType) {
		const request = {
			accountId: this.accountId,
			symbol: this.symbol,
			tradeType,
			orderType: this.orderType,
			timeInForce: this.timeInForce,
			quantity: this.quantity,
		};

		console.log(
			`Placing order ${request.tradeType} ${request.quantity} ${request.symbol} @ ${request.orderType} ${request.orderType} ${request.timeInForce}`,
		);

		this.resourceService.createOrder(request);
	}
}
