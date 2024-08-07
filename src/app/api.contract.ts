export type Paged<T> = {
	items: T[];
	hasPrevious: boolean;
	hasNext: boolean;
	page: number;
	pageSize: number;
	totalCount: number;
};

export type InstrumentResponse = {
	symbol: string;
	description: string;
	exchange: string;
};

export type AccountResponse = {
	id: string;
	name: string;
};
