import { createFileRoute } from "@tanstack/react-router";
import ImageResponse from "takumi-js/response";

const defaultTitle = "Sayed Ahmed";
const defaultDescription =
	"Full-stack developer specializing in Node.js, AdonisJS, React, Inertia.js, and PostgreSQL.";

export const Route = createFileRoute("/api/og")({
	server: {
		handlers: {
			GET: ({ request }) => {
				const url = new URL(request.url);
				const title = url.searchParams.get("title") || defaultTitle;
				const description =
					url.searchParams.get("description") || defaultDescription;

				return new ImageResponse(
					<div
						style={{
							alignItems: "center",
							background: "#14161a",
							color: "#f8fafc",
							display: "flex",
							fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
							height: "100%",
							justifyContent: "center",
							padding: "72px",
							position: "relative",
							width: "100%",
						}}
					>
						<div
							style={{
								border: "4px solid rgba(29, 78, 216, 0.85)",
								borderRadius: "48px",
								display: "flex",
								flexDirection: "column",
								height: "100%",
								justifyContent: "space-between",
								padding: "64px",
								width: "100%",
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "28px",
								}}
							>
								<div
									style={{
										alignSelf: "flex-start",
										background: "#1d4ed8",
										borderRadius: "999px",
										color: "#ffffff",
										display: "flex",
										fontSize: "28px",
										fontWeight: 700,
										padding: "16px 28px",
									}}
								>
									Portfolio
								</div>
								<h1
									style={{
										fontSize: "86px",
										fontWeight: 900,
										letterSpacing: "-0.06em",
										lineHeight: 0.95,
										margin: 0,
										maxWidth: "880px",
									}}
								>
									{title}
								</h1>
								<p
									style={{
										color: "#cbd5e1",
										fontSize: "34px",
										lineHeight: 1.28,
										margin: 0,
										maxWidth: "920px",
									}}
								>
									{description}
								</p>
							</div>
							<div
								style={{
									alignItems: "center",
									display: "flex",
									fontSize: "30px",
									fontWeight: 700,
									justifyContent: "space-between",
								}}
							>
								<span>iahmed.qzz.io</span>
								<span style={{ color: "#60a5fa" }}>
									Node.js • React • PostgreSQL
								</span>
							</div>
						</div>
					</div>,
					{ height: 630, width: 1200 },
				);
			},
		},
	},
});
