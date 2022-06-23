

export default function createDogName(root) {

    return ({ name }) => {
        document.title = name;
        root.textContent = name;
    };
}