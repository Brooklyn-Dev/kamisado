export class Colour {
	static ORANGE = "#ff6900";
	static BLUE = "#2b7fff";
	static PURPLE = "#ad46ff";
	static PINK = "#f6339a";
	static YELLOW = "#f0b100";
	static RED = "#fb2c36";
	static GREEN = "#00c950";
	static BROWN = "#973c00";

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
