export function classNames(
	...classes: Array<false | undefined | undefined | string>
): string {
	return classes.filter(Boolean).join(' ');
}
