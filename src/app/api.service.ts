import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";
import { InstrumentResponse, Paged } from "./api.contract";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	public constructor(private readonly http: HttpClient) {}

	public getInstruments(): Observable<Paged<InstrumentResponse>> {
		return this.http.get<Paged<InstrumentResponse>>(
			`${environment.resourceServer.baseAddress}/api/v1/instruments`,
		);
	}
}
