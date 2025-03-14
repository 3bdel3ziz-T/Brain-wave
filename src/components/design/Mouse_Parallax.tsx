import React, { useEffect, useState } from "react";

const MouseParallax = ({
	strength = 50,
	children,
}: {
	strength: number;
	children: React.ReactNode;
}) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const x = (event.clientX * strength) / 100;
			const y = (event.clientY * strength) / 100;
			setMousePosition({ x, y });
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const modifiedChildren = React.Children.map(children, (child) => {
		return React.cloneElement(child, {
			style: {
				// ...child.props.style,
				transform: `translateY(${mousePosition.y}px) translateX(${mousePosition.x}px)`,
				transition: "transform 200ms ease-out",
			},
		});
	});

	return <div>{modifiedChildren}</div>;
};

export default MouseParallax;
