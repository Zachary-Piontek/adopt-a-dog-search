

export default function createDogDetail(root) {
    const img = root.querySelector('img');
    const intro = root.querySelector('.intro');
    const description = root.querySelector('.description');

    return ({ dog }) => {
        img.src = `../assets/dogs/${dog.breed}.jpeg`;
        img.alt = dog.name;
        intro.textContent = `${dog.name} is a ${dog.age} year old ${dog.breed}`;
        description.textContent = dog.description;
    };
}
