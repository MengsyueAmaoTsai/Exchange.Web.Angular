import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

export type OrderResponse = {
	id: string;
};

export interface IResourceService {
	listOrders(): OrderResponse[];
}

@Injectable({
	providedIn: "root",
})
export class ResourceService implements IResourceService {
	public httpClient = inject(HttpClient);

	public orders: OrderResponse[] = [];

	public listOrders(): OrderResponse[] {
		this.httpClient
			.get<OrderResponse[]>("https://localhost:10000/api/v1/orders")
			.subscribe((orders) => {
				this.orders = orders;
			});

		return this.orders;
	}
}
