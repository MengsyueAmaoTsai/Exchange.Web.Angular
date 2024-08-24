import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { WatchListComponent } from "../../components/watch-list/watch-list.component";

type OrderResponse = {
	id: string;
	symbol: string;
	side: string;
	quantity: number;
	price: number;
	status: string;
	createdTimeUtc: Date;
};

type ExecutionResponse = {
	id: string;
	orderId: string;
	symbol: string;
	side: string;
	quantity: number;
	price: number;
	createdTimeUtc: Date;
};

type PositionResponse = {
	id: string;
	symbol: string;
	side: string;
	quantity: number;
	averagePrice: number;
	createdTimeUtc: Date;
};

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, FormsModule, WatchListComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	public orders: OrderResponse[] = [];
	public executions: ExecutionResponse[] = [];
	public openPositions: PositionResponse[] = [];

	public constructor(private httpClient: HttpClient) {
		this.httpClient
			.get<OrderResponse[]>("https://localhost:10000/api/v1/orders")
			.subscribe((response) => {
				this.orders = response;
			});

		this.httpClient
			.get<ExecutionResponse[]>("https://localhost:10000/api/v1/executions")
			.subscribe((response) => {
				this.executions = response;
			});

		this.httpClient
			.get<PositionResponse[]>("https://localhost:10000/api/v1/positions")
			.subscribe((response) => {
				this.openPositions = response;
			});
	}
}
