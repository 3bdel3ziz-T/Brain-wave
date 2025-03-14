import { ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Button = ({
	className,
	href,
	onClick,
	children,
	px,
	white = false,
}: {
	className?: string;
	href?: string;
	onClick?: () => void;
	px?: string;
	white?: boolean;
	children: ReactNode;
}) => {
	const classes = `${
		className || ""
	} button relative items-center justify-center h-11 transition-colors hover:text-1 ${
		px || "px-7"
	} ${white ? "text-n-8" : "text-n-1"}`;
	const spanClasses = "relative z-10";

	const renderButton = () => (
		<button className={classes} onClick={onClick}>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(white)}
		</button>
	);

	const renderLink = () => (
		<a href={href} className={classes}>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(white)}
		</a>
	);

	return (
		<>
			{href ? renderLink() : renderButton()}
			<ButtonGradient />
		</>
	);
};

export default Button;
