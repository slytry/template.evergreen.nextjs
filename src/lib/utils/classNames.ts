export function cn(
	...classes: Array<false | undefined | undefined | string>
): string {
	return classes.filter(Boolean).join(' ');
}
