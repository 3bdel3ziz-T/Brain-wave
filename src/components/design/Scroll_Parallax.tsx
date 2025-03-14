import React, { useState, useEffect } from "react";

const ScrollParallax = ({
	children,
	strength = 10,
}: {
	children: React.ReactNode;
	strength?: number;
}) => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const modifiedChildren = React.Children.map(children, (child, index) => {
		const yOffset = (scrollY * strength * (index + 1) * 0.2) / 100; // Different speeds per child

		return React.cloneElement(child, {
			style: {
				// ...child.props.style,
				transform: `translateY(${yOffset}px)`,
				transition: "transform 150ms ease-out",
				transitionDelay: "10ms",
			},
		});
	});

	return <div>{modifiedChildren}</div>;
};
export default ScrollParallax;
