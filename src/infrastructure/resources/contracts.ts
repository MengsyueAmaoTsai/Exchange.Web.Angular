type CreatedResponse = {
	id: string;
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

export type OrderResponse = {
	id: string;
	accountId: string;
	symbol: string;
	tradeType: string;
	type: string;
	timeInForce: string;
	quantity: number;
	createdTimeUtc: Date;
};

export type OrderDetailsResponse = OrderResponse;
