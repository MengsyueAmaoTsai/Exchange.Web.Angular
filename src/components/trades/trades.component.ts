import { Component, Input } from "@angular/core";
import type { TradeResponse } from "../../infrastructure/resources/contracts";

@Component({
	selector: "trades",
	templateUrl: "./trades.component.html",
	styleUrls: ["./trades.component.scss"],
	standalone: true,
})
export class TradesComponent {
	@Input() public trades: TradeResponse[] = [];
}
