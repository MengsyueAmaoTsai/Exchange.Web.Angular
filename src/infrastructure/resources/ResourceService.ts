import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment";
import type { IResourceService } from "./IResourceService";
import type {
	AccountResponse,
	CreateOrderRequest,
	ExecutionResponse,
	InstrumentResponse,
	OrderCreatedResponse,
	OrderResponse,
	PositionResponse,
	TradeResponse,
	WatchListResponse,
} from "./contracts";

@Injectable({
	providedIn: "root",
})
export class ResourceService implements IResourceService {
	private static readonly BaseAddress = environment.resources.baseAddress;

	public httpClient = inject(HttpClient);

	public instruments: InstrumentResponse[] = [];
	public watchLists: WatchListResponse[] = [];
	public accounts: AccountResponse[] = [];
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

	public listWatchLists(): WatchListResponse[] {
		this.httpClient
			.get<WatchListResponse[]>(
				`${ResourceService.BaseAddress}/api/v1/watch-lists`,
			)
			.subscribe((watchLists) => {
				this.watchLists = watchLists;
			});

		return this.watchLists;
	}

	public listAccounts(): AccountResponse[] {
		this.httpClient
			.get<AccountResponse[]>(`${ResourceService.BaseAddress}/api/v1/accounts`)
			.subscribe((accounts) => {
				this.accounts = accounts;
			});

		return this.accounts;
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

	public createOrder(request: CreateOrderRequest): string {
		let orderId = "";

		this.httpClient
			.post<OrderCreatedResponse>(
				`${ResourceService.BaseAddress}/api/v1/orders`,
				request,
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			)
			.subscribe((created) => {
				console.log("order created", created);
				orderId = created.id;
			});

		return orderId;
	}
}
