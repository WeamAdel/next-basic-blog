import { flattenData } from ".";

describe("utils/formatters", () => {
	it.only("should flatten the data to include the id", () => {
		expect(
			flattenData({
				1: { name: "John" },
				2: {
					name: "Jane",
				},
			}),
		).toStrictEqual([
			{ id: "1", name: "John" },
			{ id: "2", name: "Jane" },
		]);
	});
});
