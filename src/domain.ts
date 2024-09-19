export enum TradeType {
	Buy = "Buy",
	Sell = "Sell",
}

export enum OrderType {
	Market = "Market",
	Limit = "Limit",
	Stop = "Stop",
	StopLimit = "StopLimit",
	TrailingStop = "TrailingStop",
}

export enum TimeInForce {
	Day = "DAY",
	GoodTilCancelled = "GTC",
	ImmediateOrCancel = "IOC",
	FillOrKill = "FOK",
}
