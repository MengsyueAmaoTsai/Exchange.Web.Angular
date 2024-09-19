import type {
	AccountResponse,
	CreateOrderRequest,
	ExecutionResponse,
	InstrumentResponse,
	OrderResponse,
	PositionResponse,
	TradeResponse,
} from "./contracts";

export interface IResourceService {
	createOrder(request: CreateOrderRequest): string;
	listInstruments(): InstrumentResponse[];
	listAccounts(): AccountResponse[];
	listOrders(): OrderResponse[];
	listExecutions(): ExecutionResponse[];
	listPositions(): PositionResponse[];
	listTrades(): TradeResponse[];
}
