export class Colour {
	static ORANGE = "#F57C00";
	static BLUE = "#1976D2";
	static PURPLE = "#7B1FA2";
	static PINK = "#C2185B";
	static YELLOW = "#FBC02D";
	static RED = "#D32F2F";
	static GREEN = "#388E3C";
	static BROWN = "#5D4037";

	static #colourToName = new Map();
	static #nameToColour = new Map();

	static {
		for (const [key, value] of Object.entries(this)) {
			if (typeof value === "string") {
				this.#colourToName.set(value, key);
				this.#nameToColour.set(key, value);
			}
		}
	}

	static getName(colour: string): string {
		return this.#colourToName.get(colour) ?? "UNKNOWN_COLOUR";
	}

	static getColour(name: string): string {
		return this.#nameToColour.get(name) ?? "#000";
	}
}
