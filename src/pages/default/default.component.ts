import { isPlatformServer } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import type { InjectionToken, OnInit } from "@angular/core";
import { ExecutionsComponent } from "../../components/executions/executions.component";
import { OrderEntryComponent } from "../../components/order-entry/order-entry.component";
import { OrdersComponent } from "../../components/orders/orders.component";
import { TradingViewChartComponent } from "../../components/trading-view-chart/trading-view-chart.component";
import { WatchListComponent } from "../../components/watch-list/watch-list.component";
import { DefaultLogger } from "../../infrastructure/logging";
import type { ILogger } from "../../infrastructure/logging";
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
			provide: "ILogger<DefaultComponent>",
			useFactory: () => new DefaultLogger<DefaultComponent>(DefaultComponent),
		},
		{
			provide: "IResourceService",
			useClass: ResourceService,
		},
	],
})
export class DefaultComponent implements OnInit {
	private readonly logger = inject(
		"ILogger<DefaultComponent>" as unknown as InjectionToken<
			ILogger<DefaultComponent>
		>,
	);

	private readonly resourceService = inject(
		"IResourceService" as unknown as InjectionToken<IResourceService>,
	);

	private readonly platformId = inject(PLATFORM_ID);

	public ngOnInit(): void {
		this.logger.logInformation("Default terminal initialized");

		if (isPlatformServer(this.platformId)) {
			this.logger.logInformation(
				"[Default:OnInit:Server] Running on the server",
			);
			this.resourceService.listOrders();
		} else {
			this.logger.logInformation(
				"[Default:OnInit:Client] Running on the client",
			);
		}
	}
}
