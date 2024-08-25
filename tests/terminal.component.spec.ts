import { TestBed } from "@angular/core/testing";
import { TerminalComponent } from "../src/terminal.component";

describe("TerminalComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TerminalComponent],
		}).compileComponents();
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(TerminalComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
