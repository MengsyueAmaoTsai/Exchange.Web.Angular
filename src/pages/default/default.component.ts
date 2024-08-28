import { Component } from "@angular/core";
import { TradingViewChartComponent } from "../../components/trading-view-chart/trading-view-chart.component";

@Component({
	selector: "default",
	standalone: true,
	templateUrl: "./default.component.html",
	styleUrls: ["./default.component.scss"],
 imports: [TradingViewChartComponent],
})
export class DefaultComponent {}
