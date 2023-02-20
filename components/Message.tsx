import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import logo from "../public/chat-gpt-logo.jpg";

type Props = {
	message: DocumentData;
};

function Message({ message }: Props) {
	const isChatGPT = message.user.name === "ChatGPT";
	return (
		<div className={`py-5 text-white ${isChatGPT && "bg-[#434656]"}`}>
			<div className="flex space-x-5 max-w-2xl mx-auto">
				{message?.user?.avatar ? (
					<img
						src={
							message?.user?.avatar ? message?.user?.avatar : logo
						}
						alt=""
						className="h-8 w-8"
					/>
				) : (
					<Image src={logo} className="h-8 w-8" alt="logo" />
				)}

				<p className="pt-1 text-sm">{message.text}</p>
			</div>
		</div>
	);
}

export default Message;
