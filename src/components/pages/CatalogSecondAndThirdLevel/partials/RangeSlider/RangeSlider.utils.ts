/**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */
export function clamp(value: number, min = -Infinity, max = Infinity): number {
	const newValue = Math.min(Math.max(value, min), max);
	return newValue;
}
