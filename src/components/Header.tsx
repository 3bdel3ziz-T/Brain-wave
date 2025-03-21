import { brainwave } from "../assets/index";
import { navigation } from "../constants/navigation";
import { useLocation } from "react-router-dom";
import Button from "./CustomButton";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
import { Link } from "react-router-dom";

const Header = () => {
	const currentLocation = useLocation();
	const [openNav, setOpenNav] = useState<boolean>(false);

	const toggleNav = (): void => setOpenNav((prev) => !prev);

	const handleClick = () => {
		if (!openNav) return;

		toggleNav();
	};
	return (
		<div
			className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
				openNav ? "bg-n-8 h-dvh" : "bg-n-8/90 backdrop-blur-sm"
			}`}
		>
			<div className="flex items-center px-5 lg:px-7.5 border-b border-n-6 xl:px-10 max-lg:py-4">
				<a className="block w-[12rem] xl:mr-8" href="#hero">
					<img src={brainwave} width={190} height={40} alt="Brainwave" />
				</a>
				<nav
					className={`${
						openNav ? "flex" : "hidden"
					} fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
				>
					<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
						{navigation.map((link) => (
							<a
								key={link.id}
								href={link.url}
								onClick={handleClick}
								className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-1 ${
									link.onlyMobile ? "lg:hidden" : ""
								} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
									link.url === currentLocation.hash
										? "z-2 lg:text-n-1"
										: "lg:text-n-1/50"
								} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
							>
								{link.title}
							</a>
						))}
					</div>
					<HamburgerMenu />
				</nav>
				<a
					href="#signup"
					className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
				>
					New account
				</a>
				<Link to="/signIn">
					<Button className="hidden lg:inline-flex">Sign in</Button>
				</Link>

				<Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
					<MenuSvg openNavigation={openNav} />
				</Button>
			</div>
		</div>
	);
};

export default Header;
