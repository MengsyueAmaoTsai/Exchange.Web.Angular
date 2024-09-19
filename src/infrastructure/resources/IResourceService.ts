import type {
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
	listOrders(): OrderResponse[];
	listExecutions(): ExecutionResponse[];
	listPositions(): PositionResponse[];
	listTrades(): TradeResponse[];
}
