"use client";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
	chatId: string;
};

function Chat({ chatId }: Props) {
	const { data: session } = useSession();
	const [messages] = useCollection(
		session &&
			query(
				collection(
					db,
					"users",
					session?.user?.email!,
					"chats",
					chatId,
					"messages"
				),
				orderBy("createdAt", "asc")
			)
	);
	const containerRef = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef && containerRef.current) {
			const element = containerRef.current;
			element.scroll({
				top: element.scrollHeight,
				left: 0,
				behavior: "smooth",
			});
		}
	}, [containerRef, messages]);
	return (
		<div
			ref={containerRef}
			className="flex-1 overflow-y-auto overflow-x-auto"
		>
			{messages?.empty && (
				<>
					<p className="mt-10 text-center text-white">
						Type a prompt in the field below to get started!
					</p>
					<ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
				</>
			)}
			{messages?.docs.map((message) => (
				<Message key={message?.id} message={message?.data()} />
			))}
		</div>
	);
}

export default Chat;
