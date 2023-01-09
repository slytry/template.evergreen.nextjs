import Image, { type ImageProps } from 'next/image';

export const BgImage = ({ src, alt }: ImageProps) => (
	<Image
		alt={alt ?? ''}
		src={src}
		placeholder="blur"
		quality={100}
		fill
		sizes="100vw"
		style={{
			objectFit: 'cover',
			pointerEvents: 'none',
		}}
	/>
);
