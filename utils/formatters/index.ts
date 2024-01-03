/**
 * Flatten firebase data object to an array with the id as a property.
 */
export function flattenData(data: Record<string, Object>) {
	return Object.entries(data).map(([id, item]) => {
		return {
			id,
			...item,
		};
	});
}
