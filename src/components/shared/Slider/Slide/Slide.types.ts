export interface SlideProps {
	className?: string;
	title?: string;
	subtitle?: string;
	mainButton?: MainButton;
	secondaryButton?: SecondaryButton;
	background?: string;
	mode?: 'light' | 'dark';
}

export interface MainButton {
	onClick?: () => void;
	text: string;
	variant: string;
}

export interface SecondaryButton {
	onClick?: () => void;
	text: string;
}
