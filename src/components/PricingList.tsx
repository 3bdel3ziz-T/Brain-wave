import { check } from "../assets/index";
import { pricing } from "../constants/pricing";
import Button from "./CustomButton";

const PricingList = () => {
	return (
		<div className="flex gap-[1rem] max-lg:flex-wrap">
			{pricing.map((item) => (
				<div
					key={item.id}
					className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-12 odd:py-6 odd:my-4 [&>#1]:first:text-2 [&>#2]:text-1 [&>#3]:last:text-3"
				>
					<h4 className="h4 mb-4" id={item.id} >{item.title}</h4>

					<p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
						{item.description}
					</p>

					<div className="flex items-center h-[5.5rem] mb-6">
						{item.price && (
							<>
								<div className="h3">$</div>
								<div className="text-[5.5rem] leading-none font-bold">
									{item.price}
								</div>
							</>
						)}
					</div>

					<ul>
						{item.features.map((feature, index) => (
							<li
								key={index}
								className="flex items-start py-5 border-t border-n-6"
							>
								<img src={check} width={24} height={24} alt="Check" />
								<p className="body-2 ml-4">{feature}</p>
							</li>
						))}
					</ul>
					<Button
						className="w-full mb-2 inline-flex mt-4"
						href={item.price ? "/pricing" : "mailto:contact@example.com"}
						white={!!item.price}
					>
						{item.price ? "Get started" : "Contact us"}
					</Button>
				</div>
			))}
		</div>
	);
};

export default PricingList;
