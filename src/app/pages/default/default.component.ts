import { Component } from "@angular/core";
import { OrderPaneComponent } from "../../components/order-pane/order-pane.component";
import { TradingPaneComponent } from "../../components/trading-pane/trading-pane.component";
import { TradingViewChartComponent } from "../../components/trading-view-chart/trading-view-chart.component";
import { WatchListComponent } from "../../components/watch-list/watch-list.component";

@Component({
	selector: "default",
	standalone: true,
	templateUrl: "./default.component.html",
	styleUrls: ["./default.component.scss"],
	imports: [
		WatchListComponent,
		TradingPaneComponent,
		OrderPaneComponent,
		TradingViewChartComponent,
	],
})
export class DefaultComponent {}
