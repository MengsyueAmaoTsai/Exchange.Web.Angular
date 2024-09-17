import { Component } from "@angular/core";
import { TradingViewChartComponent } from "../../components/trading-view-chart/trading-view-chart.component";
import { WatchListComponent } from "../../components/watch-list/watch-list.component";
import { OrderEntryComponent } from "../../components/order-entry/order-entry.component";
import { ExecutionsComponent } from "../../components/executions/executions.component";
import { OrdersComponent } from "../../components/orders/orders.component";

@Component({
	selector: "default",
	standalone: true,
	templateUrl: "./default.component.html",
	styleUrls: ["./default.component.scss"],
 imports: [TradingViewChartComponent, WatchListComponent, OrderEntryComponent, ExecutionsComponent, OrdersComponent],
})
export class DefaultComponent {}
