import { isPlatformServer } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import type { InjectionToken, OnInit } from "@angular/core";
import { ExecutionsComponent } from "../../components/executions/executions.component";
import { OrderEntryComponent } from "../../components/order-entry/order-entry.component";
import { OrdersComponent } from "../../components/orders/orders.component";
import { TradingViewChartComponent } from "../../components/trading-view-chart/trading-view-chart.component";
import { WatchListComponent } from "../../components/watch-list/watch-list.component";
import type { IResourceService } from "../../infrastructure/resources";
import { ResourceService } from "../../infrastructure/resources";

@Component({
	selector: "default",
	standalone: true,
	templateUrl: "./default.component.html",
	styleUrls: ["./default.component.scss"],
	imports: [
		TradingViewChartComponent,
		WatchListComponent,
		OrderEntryComponent,
		ExecutionsComponent,
		OrdersComponent,
	],
	providers: [
		{
			provide: "IResourceService",
			useClass: ResourceService,
		},
	],
})
export class DefaultComponent implements OnInit {
	public platformId = inject(PLATFORM_ID);

	public resourceService = inject(
		"IResourceService" as unknown as InjectionToken<IResourceService>,
	);

	public ngOnInit(): void {
		console.log("Default terminal initialized");

		if (isPlatformServer(this.platformId)) {
			console.log("[Default:OnInit:Server] Running on the server");

			this.resourceService.listOrders();
		} else {
			console.log("[Default:OnInit:Client] Running on the client");
		}
	}
}
