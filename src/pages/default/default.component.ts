import { Component, inject } from "@angular/core";
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
import type {
	AccountResponse,
	ExecutionResponse,
	InstrumentResponse,
	OrderResponse,
	PositionResponse,
	TradeResponse,
} from "../../infrastructure/resources/contracts";

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

	public instruments: InstrumentResponse[] = [];
	public accounts: AccountResponse[] = [];
	public orders: OrderResponse[] = [];
	public executions: ExecutionResponse[] = [];
	public positions: PositionResponse[] = [];
	public trades: TradeResponse[] = [];

	public ngOnInit(): void {
		this.instruments = this.resourceService.listInstruments();
		this.accounts = this.resourceService.listAccounts();
		this.orders = this.resourceService.listOrders();
		this.executions = this.resourceService.listExecutions();
		this.positions = this.resourceService.listPositions();
		this.trades = this.resourceService.listTrades();

		this.logger.logInformation("Default terminal initialized");
	}
}
