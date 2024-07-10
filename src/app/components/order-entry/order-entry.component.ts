import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { AccountResponse, Paged } from "../../api.contract";
import { ApiService } from "../../api.service";

@Component({
	selector: "order-entry",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./order-entry.component.html",
	styleUrl: "./order-entry.component.scss",
})
export class OrderEntryComponent implements OnInit {
	accountId = "";
	symbol = "";
	tradeType = "buy";
	orderType = "";
	timeInForce = "";
	quantity = 0;

	accounts: AccountResponse[] = [];
	orderTypes = ["market", "limit", "stop", "stop_limit"];
	timeInForces = ["day", "gtc", "opg", "ioc", "fok"];

	apiService = inject(ApiService);

	public constructor() {}

	ngOnInit(): void {
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
