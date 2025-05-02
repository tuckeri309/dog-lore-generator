import { DogLore } from "./dog_model.js";

let api_key = OPENAI_KEY_HERE

export class DogController {

    #model
    #view
    #currentDog

    constructor(model) {
        this.#model = model;
        this.#view = null;
        this.#currentDog = null;
    }

    connectView(view) {
        this.#view = view;
    }

    async generateDog() {
        try {
            this.#currentDog = await this.#model.getRandomDog();
            this.#view.showDog(this.#currentDog);
        } catch (error) {
            console.error('Failed to generate dog:', error);
        }
    }

    async replaceDog() {
        await this.generateDog(type);
    }

    async generateDogLore() {
        if (!this.#currentDog) {
            console.error('No dog to generate lore for.');
            return;
        }
        const lore = new DogLore(api_key, this.#currentDog.url);
        let loreMsg = await lore.getDogLore();
        this.#view.showDogLore(loreMsg);
    }
}
