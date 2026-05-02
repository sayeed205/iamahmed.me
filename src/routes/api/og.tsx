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
				const variant = url.searchParams.get("variant");
				const title = url.searchParams.get("title") || defaultTitle;
				const description =
					url.searchParams.get("description") || defaultDescription;

				if (variant === "resume") {
					return new ImageResponse(<ResumeOgImage />, {
						height: 630,
						width: 1200,
					});
				}

				if (variant === "projects") {
					return new ImageResponse(
						<PageOgImage
							accent="#38bdf8"
							background="#08111f"
							description="Selected SaaS, admin, travel, ecommerce, and integration projects built with Node.js, AdonisJS, React, Inertia, and PostgreSQL."
							label="Projects"
							path="/projects"
							tags={["SaaS", "AdonisJS", "React", "PostgreSQL"]}
							title="Production-focused full-stack work"
						/>,
						{ height: 630, width: 1200 },
					);
				}

				if (variant === "skills") {
					return new ImageResponse(
						<PageOgImage
							accent="#a78bfa"
							background="#111026"
							description="Frontend, backend, database, cloud, mobile, and integration skills for building reliable product systems."
							label="Skills"
							path="/skills"
							tags={["Node.js", "React", "SQL", "Cloudflare"]}
							title="Practical stack for product engineering"
						/>,
						{ height: 630, width: 1200 },
					);
				}

				if (variant === "contact") {
					return new ImageResponse(
						<PageOgImage
							accent="#34d399"
							background="#061a16"
							description="Reach Sayed Ahmed on LinkedIn, GitHub, X, Telegram, email, or phone for full-stack development work."
							label="Contact"
							path="/contact"
							tags={["LinkedIn", "GitHub", "X", "Email"]}
							title="Let’s build something useful"
						/>,
						{ height: 630, width: 1200 },
					);
				}

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

function ResumeOgImage() {
	return (
		<div
			style={{
				background:
					"radial-gradient(circle at 20% 15%, rgba(59, 130, 246, 0.35), transparent 32%), radial-gradient(circle at 82% 80%, rgba(14, 165, 233, 0.25), transparent 34%), #0b1020",
				color: "#f8fafc",
				display: "flex",
				fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
				height: "100%",
				padding: "58px",
				position: "relative",
				width: "100%",
			}}
		>
			<div
				style={{
					border: "1px solid rgba(148, 163, 184, 0.28)",
					borderRadius: "42px",
					display: "flex",
					flexDirection: "column",
					height: "100%",
					justifyContent: "space-between",
					overflow: "hidden",
					padding: "58px 64px",
					position: "relative",
					width: "100%",
				}}
			>
				<div
					style={{
						background:
							"linear-gradient(135deg, rgba(15, 23, 42, 0.86), rgba(30, 41, 59, 0.62))",
						border: "1px solid rgba(255, 255, 255, 0.12)",
						borderRadius: "42px",
						display: "flex",
						height: "100%",
						left: 0,
						position: "absolute",
						top: 0,
						width: "100%",
					}}
				/>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						position: "relative",
					}}
				>
					<div
						style={{
							background: "rgba(37, 99, 235, 0.18)",
							border: "1px solid rgba(96, 165, 250, 0.55)",
							borderRadius: "999px",
							color: "#bfdbfe",
							display: "flex",
							fontSize: "28px",
							fontWeight: 800,
							padding: "14px 28px",
						}}
					>
						Resume
					</div>
					<div
						style={{
							color: "#94a3b8",
							display: "flex",
							fontSize: "26px",
							fontWeight: 700,
						}}
					>
						iahmed.qzz.io/resume
					</div>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "18px",
						position: "relative",
					}}
				>
					<h1
						style={{
							fontSize: "92px",
							fontWeight: 950,
							letterSpacing: "-0.07em",
							lineHeight: 0.9,
							margin: 0,
						}}
					>
						Sayed Ahmed
					</h1>
					<p
						style={{
							color: "#e2e8f0",
							fontSize: "44px",
							fontWeight: 800,
							lineHeight: 1.08,
							margin: 0,
							maxWidth: "880px",
						}}
					>
						Full-Stack Developer focused on scalable SaaS, backend architecture,
						and integrations.
					</p>
				</div>

				<div
					style={{
						display: "flex",
						gap: "16px",
						position: "relative",
					}}
				>
					{["Node.js", "React", "AdonisJS", "PostgreSQL", "Cloudflare"].map(
						(skill) => (
							<div
								key={skill}
								style={{
									background: "rgba(15, 23, 42, 0.82)",
									border: "1px solid rgba(148, 163, 184, 0.28)",
									borderRadius: "18px",
									color: "#dbeafe",
									display: "flex",
									fontSize: "26px",
									fontWeight: 800,
									padding: "14px 20px",
								}}
							>
								{skill}
							</div>
						),
					)}
				</div>
			</div>
		</div>
	);
}

function PageOgImage({
	accent,
	background,
	description,
	label,
	path,
	tags,
	title,
}: {
	accent: string;
	background: string;
	description: string;
	label: string;
	path: string;
	tags: string[];
	title: string;
}) {
	return (
		<div
			style={{
				background: `radial-gradient(circle at 18% 18%, ${accent}66, transparent 32%), radial-gradient(circle at 88% 72%, ${accent}38, transparent 34%), ${background}`,
				color: "#f8fafc",
				display: "flex",
				fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
				height: "100%",
				padding: "56px",
				width: "100%",
			}}
		>
			<div
				style={{
					background: "rgba(15, 23, 42, 0.72)",
					border: "1px solid rgba(255, 255, 255, 0.16)",
					borderRadius: "44px",
					display: "flex",
					flexDirection: "column",
					height: "100%",
					justifyContent: "space-between",
					padding: "60px 66px",
					width: "100%",
				}}
			>
				<div
					style={{
						alignItems: "center",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							background: `${accent}24`,
							border: `1px solid ${accent}99`,
							borderRadius: "999px",
							color: "#ffffff",
							display: "flex",
							fontSize: "28px",
							fontWeight: 850,
							padding: "14px 28px",
						}}
					>
						{label}
					</div>
					<div
						style={{
							color: "#cbd5e1",
							display: "flex",
							fontSize: "26px",
							fontWeight: 750,
						}}
					>
						iahmed.qzz.io{path}
					</div>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "24px",
					}}
				>
					<h1
						style={{
							fontSize: "82px",
							fontWeight: 950,
							letterSpacing: "-0.065em",
							lineHeight: 0.94,
							margin: 0,
							maxWidth: "940px",
						}}
					>
						{title}
					</h1>
					<p
						style={{
							color: "#dbeafe",
							fontSize: "34px",
							fontWeight: 650,
							lineHeight: 1.18,
							margin: 0,
							maxWidth: "940px",
						}}
					>
						{description}
					</p>
				</div>

				<div
					style={{
						alignItems: "center",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							gap: "14px",
						}}
					>
						{tags.map((tag) => (
							<div
								key={tag}
								style={{
									background: "rgba(15, 23, 42, 0.78)",
									border: "1px solid rgba(148, 163, 184, 0.28)",
									borderRadius: "16px",
									color: "#f8fafc",
									display: "flex",
									fontSize: "25px",
									fontWeight: 800,
									padding: "12px 18px",
								}}
							>
								{tag}
							</div>
						))}
					</div>
					<div
						style={{
							color: accent,
							display: "flex",
							fontSize: "28px",
							fontWeight: 900,
						}}
					>
						Sayed Ahmed
					</div>
				</div>
			</div>
		</div>
	);
}
