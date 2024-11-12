import { DogController } from './dog_controller.js';
import { DogModel } from './dog_model.js';
import { DogView } from './dog_view.js';

const dogModel = new DogModel();
const dogController = new DogController(dogModel);
const dogView = new DogView();

dogController.connectView(dogView);

document.getElementById('generateDogButton').addEventListener('click', () => {
    dogController.generateDog();
});

document.getElementById('generateDogLoreButton').addEventListener('click', () => {
    dogController.generateDogLore();
});