export type CreatedResponse = {
	id: string;
};

export type InstrumentResponse = {
	symbol: string;
	description: string;
	type: string;
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