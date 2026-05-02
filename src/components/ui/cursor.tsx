import { useTheme } from "next-themes";
import { type ComponentType, useEffect, useState } from "react";

type AnimatedCursorProps = {
	innerSize: number;
	outerSize: number;
	outerAlpha: number;
	color: string;
	innerScale: number;
	outerScale: number;
	trailingSpeed: number;
	clickables: string[];
};

export default function Cursor() {
	const { systemTheme, theme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	const [AnimatedCursor, setAnimatedCursor] =
		useState<ComponentType<AnimatedCursorProps> | null>(null);

	useEffect(() => {
		import("react-animated-cursor-ts").then((mod) =>
			setAnimatedCursor(() => mod.AnimatedCursor),
		);
	}, []);

	useEffect(() => {
		console.log(
			"%cMade with ❤︎️ by Sayed Ahmed",
			"background:#14161a;color:#fff;padding:0.5em 1em;line-height:1.8;",
		);
	}, []);

	if (!AnimatedCursor) return null;

	return (
		<AnimatedCursor
			innerSize={12}
			outerSize={60}
			outerAlpha={0.1}
			color={
				currentTheme === "dark"
					? "255,255,255"
					: currentTheme === "light"
						? "0,0,0"
						: "13,115,231"
			}
			innerScale={2.5}
			outerScale={0.8}
			trailingSpeed={18}
			clickables={["a", "button", ".heading"]}
		/>
	);
}
