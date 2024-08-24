import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, type OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	public constructor(private httpClient: HttpClient) {}
}
