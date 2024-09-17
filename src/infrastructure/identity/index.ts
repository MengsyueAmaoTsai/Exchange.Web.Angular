import { Injectable } from "@angular/core";
import type { ICurrentUser } from "../../domain";

@Injectable({
	providedIn: "root",
})
class CurrentUser implements ICurrentUser {
	isAuthenticated = true;
	id = "1";
	name = "RichillCapitall";
	email = "mengsyue.tsai@outlook.com";
}
