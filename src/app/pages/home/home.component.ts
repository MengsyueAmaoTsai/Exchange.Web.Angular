import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, type OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TradingClockComponent } from "../../components/trading-clock.component";

enum PositionSide {
	Long = "Long",
	Short = "Short",
}

enum OrderSide {
	Buy = "Buy",
	Sell = "Sell",
}

type OrderResponse = {
	id: string;
	symbol: string;
	side: OrderSide;
	quantity: number;
	price: number;
	createdTimeUtc: Date;
};

type ExecutionResponse = {
	id: string;
	orderId: string;
	quantity: number;
	price: number;
	executedTimeUtc: Date;
};

type PositionResponse = {
	id: string;
	symbol: string;
	side: PositionSide;
	quantity: number;
	averagePrice: number;
	createdTimeUtc: Date;
};

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	public orders: OrderResponse[] = [];
	public executions: ExecutionResponse[] = [];
	public positions: PositionResponse[] = [];

	public constructor(private httpClient: HttpClient) {
		this.httpClient
			.get<OrderResponse[]>("https://localhost:10000/api/v1/orders")
			.subscribe((orders) => {
				this.orders = orders;
			});

		this.httpClient
			.get<ExecutionResponse[]>("https://localhost:10000/api/v1/executions")
			.subscribe((executions) => {
				this.executions = executions;
			});

		this.httpClient
			.get<PositionResponse[]>("https://localhost:10000/api/v1/positions")
			.subscribe((positions) => {
				this.positions = positions;
			});
	}
}
