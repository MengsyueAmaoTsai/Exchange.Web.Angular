import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";
import { AccountResponse, InstrumentResponse, Paged } from "./api.contract";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	public constructor(private readonly http: HttpClient) {}

	public listInstruments(): Observable<Paged<InstrumentResponse>> {
		return this.http.get<Paged<InstrumentResponse>>(
			`${environment.resourceServer.baseAddress}/api/v1/instruments`,
		);
	}

	public listAccounts(): Observable<Paged<AccountResponse>> {
		return this.http.get<Paged<AccountResponse>>(
			`${environment.resourceServer.baseAddress}/api/v1/accounts`,
		);
	}
}
