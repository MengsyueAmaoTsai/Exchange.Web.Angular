export interface IResourceService {}

export interface ICurrentUser {
	isAuthenticated: boolean;
	id: string;
	name: string;
	email: string;
}
