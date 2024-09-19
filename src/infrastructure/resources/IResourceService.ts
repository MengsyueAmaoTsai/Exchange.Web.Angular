import type {
	ExecutionResponse,
	InstrumentResponse,
	OrderResponse,
	PositionResponse,
	TradeResponse,
} from "./contracts";

export interface IResourceService {
	listInstruments(): InstrumentResponse[];
	listOrders(): OrderResponse[];
	listExecutions(): ExecutionResponse[];
	listPositions(): PositionResponse[];
	listTrades(): TradeResponse[];
}
