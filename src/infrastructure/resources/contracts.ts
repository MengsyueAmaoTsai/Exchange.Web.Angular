export type ErrorResponse = {
	type: string;
	title: string;
	status: number;
	detail: string;
	traceId: string;
};

export type CreatedResponse = {
	id: string;
};

export type InstrumentResponse = {
	symbol: string;
	description: string;
	type: string;
};

export type WatchListResponse = {
	id: string;
	userId: string;
	name: string;
};

export type WatchListDetailsResponse = WatchListResponse;

export type AccountResponse = {
	id: string;
	userId: string;
	alias: string;
	currency: string;
	createdTimeUtc: Date;
};

export type OrderResponse = {
	id: string;
	accountId: string;
	symbol: string;
	tradeType: string;
	type: string;
	timeInForce: string;
	quantity: number;
	remainingQuantity: number;
	executedQuantity: number;
	status: string;
	createdTimeUtc: Date;
};

export type OrderDetailsResponse = OrderResponse;

export type CreateOrderRequest = {
	accountId: string;
	symbol: string;
	tradeType: string;
	orderType: string;
	timeInForce: string;
	quantity: number;
};

export type OrderCreatedResponse = CreatedResponse;

export type ExecutionResponse = {
	id: string;
	accountId: string;
	orderId: string;
	symbol: string;
	tradeType: string;
	orderType: string;
	timeInForce: string;
	quantity: number;
	price: number;
	commission: number;
	tax: number;
	createdTimeUtc: Date;
};

export type ExecutionDetailsResponse = ExecutionResponse;

export type PositionResponse = {
	id: string;
	accountId: string;
	symbol: string;
	side: string;
	quantity: number;
	averagePrice: number;
	commission: number;
	tax: number;
	swap: number;
	status: string;
	createdTimeUtc: Date;
};

export type TradeResponse = {
	id: string;
	accountId: string;
	symbol: string;
	side: string;
	quantity: number;
	entryPrice: number;
	entryTimeUtc: Date;
	exitPrice: number;
	exitTimeUtc: Date;
	commission: number;
	tax: number;
	swap: number;
};
