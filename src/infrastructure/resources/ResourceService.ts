import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import type { IResourceService } from "../../domain";
import type {
	CreateOrderRequest,
	OrderCreatedResponse,
	OrderDetailsResponse,
	OrderResponse,
} from "./contracts";

@Injectable({
	providedIn: "root",
})
class ResourceService implements IResourceService {
	private static BaseAddress = "https://localhost:10000";
	private readonly httpClient = inject(HttpClient);

	public listOrders() {
		return this.httpClient.get<OrderResponse[]>(
			`${ResourceService.BaseAddress}/api/v1/orders`,
		);
	}

	public getOrder(orderId: string) {
		return this.httpClient.get<OrderDetailsResponse>(
			`${ResourceService.BaseAddress}/api/v1/orders/${orderId}`,
		);
	}

	public createOrder(request: CreateOrderRequest) {
		return this.httpClient.post<OrderCreatedResponse>(
			`${ResourceService.BaseAddress}/api/v1/orders`,
			request,
		);
	}
}
