import { loading } from "../assets/index";

const Generating = ({
	className,
	items,
}: {
	className?: string;
	items?: string[];
}) => {
	return (
		<div
			className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
				className || ""
			} text-base`}
		>
			<img
				className="w-5 h-5 mr-4 animate-spinReverse"
				src={loading}
				alt="Loading"
			/>
			{items ? (
				<div className="overflow-hidden relative">
					<div className=" box-content w-fit text-[18px] h-10 flex flex-col justify-start items-start *:py-[6px] animate-swipeUp">
						<h3 key={items.length}>{items[items.length - 1]}</h3>
						{items?.map((item, index) => (
							<h3 key={index}>{item}</h3>
						))}
					</div>
				</div>
			) : (
				"AI is Generating!"
			)}
		</div>
	);
};

export default Generating;
