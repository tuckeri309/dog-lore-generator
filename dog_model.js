export class DogModel {
    #baseURL

    constructor(baseURL = 'https://random.dog') {
        this.#baseURL = baseURL;
    }

    async getRandomDog() {
        try {
            let response = await fetch(`${this.#baseURL}/woof.json?ref=public_apis`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let dogData = await response.json();
            return dogData;
        } catch (error) {
            console.error('Error fetching random dog:', error);
            throw error;
        }
    }
}


export class DogLore {
    #apiKey
    #baseURL
    #image

    constructor(apiKey, image, baseURL = 'https://api.openai.com/v1') {
        this.#apiKey = apiKey;
        this.#baseURL = baseURL;
        this.#image = image;
    }

    async getDogLore(dogImageUrl) {
        try {
            let response = await fetch(`${this.#baseURL}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.#apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-4o',
                    messages: [
                        {
                            role: "user",
                            content: [
                                { type: "text", text: "Come up with short fantastical backstory for whatever you see in the image in 150 words or less." },
                                {
                                    type: "image_url",
                                    image_url: {
                                    "url": this.#image,
                                    },
                                }
                            ],
                        }
                    ],
                    max_tokens: 150
                })
            });
            let loreData = await response.json();
            console.log(loreData)
            return loreData.choices[0].message.content;
        } catch (error) {
            console.error('Error fetching dog lore:', error);
            throw error;
        }
    }
}