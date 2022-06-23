

export default function createPetList(root) {

    return ({ dogs }) => {
        root.innerHTML = '';

        for (const dog of dogs) {
            const li = DogCard({ dog });
            root.append(li);
        }
    };
}

export function DogCard({ dog }) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    li.classList.add('dog-card');

    p.textContent = dog.name;
    img.src = `./assets/dogs/${dog.breed}.jpeg`;
    a.href = `./detail/?id=${dog.id}`;

    a.append(p, img);

    li.append(a);

    return li;
}