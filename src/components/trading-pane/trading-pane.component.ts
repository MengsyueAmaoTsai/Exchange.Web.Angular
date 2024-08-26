import { Component } from "@angular/core";

@Component({
	selector: "trading-pane",
	templateUrl: "./trading-pane.component.html",
	styleUrls: ["./trading-pane.component.scss"],
	standalone: true,
})
export class TradingPaneComponent {
	public currentTab = "positions";

	public activateTab(tabId: string) {
		this.currentTab = tabId;
	}
}
