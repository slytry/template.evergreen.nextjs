import { SlideProps } from './Slide/Slide.types';

export interface SliderProps {
	animationDuration: number;
	slides: SlideProps[];
	className?: string;
	showControls?: boolean;
	showProgress?: boolean;
	type?: string;
	mode: 'light' | 'dark';
}
