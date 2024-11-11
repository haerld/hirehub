import { generateCodeVerifier, generateState } from "arctic";
import { cookies } from "next/headers";

import { google } from "@lib/auth";

export async function GET(): Promise<Response> {
	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const scopes = ["profile", "email"]

	const url = google.createAuthorizationURL(state, codeVerifier, scopes);

	(await cookies()).set("google_oauth_state", state, {
		path: "/",
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax",
	});

	(await cookies()).set("google_code_verifier", codeVerifier, {
		path: "/",
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax",
	});

	return Response.redirect(url);
}
