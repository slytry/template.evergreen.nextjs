/**
 * Provides API to get a range from an array
 */
function getArrRange<T>(array: Array<T>, range: number, part: number): Array<T> {
	if (!Number.isInteger(range) || !Number.isInteger(part)) {
		throw new Error('Arguments `range` and `part` must be integers');
	}

	const start = range * (part - 1);
	const end = range * part;
	return array.slice(start, end);
}

export { getArrRange };
