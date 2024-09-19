import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import type { IResourceService } from "./IResourceService";
import type {
	ExecutionResponse,
	InstrumentResponse,
	OrderResponse,
	PositionResponse,
	TradeResponse,
} from "./contracts";

@Injectable({
	providedIn: "root",
})
export class ResourceService implements IResourceService {
	private static readonly BaseAddress = "https://localhost:10000";

	public httpClient = inject(HttpClient);

	public instruments: InstrumentResponse[] = [];
	public orders: OrderResponse[] = [];
	public executions: ExecutionResponse[] = [];
	public positions: PositionResponse[] = [];
	public trades: TradeResponse[] = [];

	public listInstruments(): InstrumentResponse[] {
		this.httpClient
			.get<InstrumentResponse[]>(
				`${ResourceService.BaseAddress}/api/v1/instruments`,
			)
			.subscribe((instruments) => {
				this.instruments = instruments;
			});

		return this.instruments;
	}

	public listOrders(): OrderResponse[] {
		this.httpClient
			.get<OrderResponse[]>(`${ResourceService.BaseAddress}/api/v1/orders`)
			.subscribe((orders) => {
				this.orders = orders;
			});

		return this.orders;
	}

	public listExecutions(): ExecutionResponse[] {
		this.httpClient
			.get<ExecutionResponse[]>(
				`${ResourceService.BaseAddress}/api/v1/executions`,
			)
			.subscribe((executions) => {
				this.executions = executions;
			});

		return this.executions;
	}

	public listPositions(): PositionResponse[] {
		this.httpClient
			.get<PositionResponse[]>(
				`${ResourceService.BaseAddress}/api/v1/positions`,
			)
			.subscribe((positions) => {
				this.positions = positions;
			});

		return this.positions;
	}

	public listTrades(): TradeResponse[] {
		this.httpClient
			.get<TradeResponse[]>(`${ResourceService.BaseAddress}/api/v1/trades`)
			.subscribe((trades) => {
				this.trades = trades;
			});

		return this.trades;
	}
}
