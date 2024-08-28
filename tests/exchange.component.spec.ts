import { TestBed } from "@angular/core/testing";
import { ExchangeComponent } from "../src/exchange.component";

describe("ExchangeComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ExchangeComponent],
		}).compileComponents();
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(ExchangeComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
