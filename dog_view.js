export class DogView {
    constructor() {
        this.dogImageElement = document.getElementById('dogImage');
        this.dogLoreElement = document.getElementById('dogLore');
    }

    showDog(dog) {
        if (this.dogImageElement) {
            this.dogImageElement.src = dog.url;
            this.dogImageElement.alt = 'Random Dog';
            this.dogImageElement.style.maxWidth = '600px';
            this.dogImageElement.style.maxHeight = '600px';
        }
        if (this.dogLoreElement) {
            this.dogLoreElement.textContent = dog.message || 'No message available';
        }
    }

    showDogLore(lore) {
        if (this.dogLoreElement) {
            this.dogLoreElement.textContent = lore;
        }
    }
}