import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { OrderType } from "../../../domain/order-type";
import { TimeInForce } from "../../../domain/time-in-force";
import { TradeType } from "../../../domain/trade-type";
import { AccountResponse, InstrumentResponse, Paged } from "../../api.contract";
import { ApiService } from "../../api.service";

@Component({
	selector: "order-entry",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./order-entry.component.html",
	styleUrl: "./order-entry.component.scss",
})
export class OrderEntryComponent implements OnInit {
	TradeType = TradeType;

	apiService = inject(ApiService);

	/** Options */
	accounts: AccountResponse[] = [];
	orderTypes = Object.values(OrderType);
	timeInForces = Object.values(TimeInForce);

	/** Form data */
	accountId = "";
	instrument: InstrumentResponse | null = null;
	tradeType = TradeType.Buy;
	orderType = OrderType.Market;
	timeInForce = TimeInForce.ImmediateOrCancel;
	quantity = 0;

	public constructor() {}

	public ngOnInit(): void {
		this.apiService.listAccounts().subscribe(
			(data: Paged<AccountResponse>) => {
				this.accounts = data.items;
				this.accountId = this.accounts[0].id;
			},
			(error: Error) => {
				console.log("Error fetching accounts: ", error);
			},
		);
	}

	placeOrder(
		accountId: string,
		symbol: string,
		tradeType: string,
		orderType: string,
		timeInForce: string,
		quantity: number,
	) {
		console.log("account: ", accountId);
		console.log("symbol: ", symbol);
		console.log("trade type: ", tradeType);
		console.log("order type: ", orderType);
		console.log("time in force: ", timeInForce);
		console.log("quantity: ", quantity);
	}
}
