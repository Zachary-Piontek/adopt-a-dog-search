// import services and utilities
import { getDog } from '../services/adopt-service.js';

// import component creators
import createDogDetail from '../components/DogDetail.js';
import createDogName from '../components/DogName.js';

// declare state variables
let dog = {};

// write handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
        window.location = '/';
    }

    dog = await getDog(id);

    if (!dog) window.location = '/';

    display();
}

// Create each component: 
const DogName = createDogName(document.querySelector('h1'));
const DogDetail = createDogDetail(document.querySelector('#dog-detail'));

// Roll-up display function that renders (calls with state) each component
function display() {
    DogName({ name: dog.name });
    DogDetail({ dog });
}

// Call display and page load!
handlePageLoad();
// No need to display until loaded!
// display();



