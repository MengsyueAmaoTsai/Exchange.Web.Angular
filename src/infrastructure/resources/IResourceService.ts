import type {
	AccountResponse,
	CreateOrderRequest,
	ExecutionResponse,
	InstrumentResponse,
	OrderResponse,
	PositionResponse,
	TradeResponse,
	WatchListResponse,
} from "./contracts";

export interface IResourceService {
	createOrder(request: CreateOrderRequest): string;
	listInstruments(): InstrumentResponse[];
	listWatchLists(): WatchListResponse[];
	listAccounts(): AccountResponse[];
	listOrders(): OrderResponse[];
	listExecutions(): ExecutionResponse[];
	listPositions(): PositionResponse[];
	listTrades(): TradeResponse[];
}
