export interface EventCardProps extends EventCardType {
	className?: string;
}

export interface EventCardType {
	date: string;
	src: string;
	title: string;
}
