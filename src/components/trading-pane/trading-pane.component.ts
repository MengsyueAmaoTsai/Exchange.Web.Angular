import { Component } from "@angular/core";
import { OrdersComponent } from "../orders/orders.component";
import { PositionsComponent } from "../positions/positions.component";

@Component({
	selector: "trading-pane",
	templateUrl: "./trading-pane.component.html",
	styleUrls: ["./trading-pane.component.scss"],
	standalone: true,
	imports: [PositionsComponent, OrdersComponent],
})
export class TradingPaneComponent {
	public currentTab = "orders";

	public activateTab(tabId: string) {
		this.currentTab = tabId;
	}
}
