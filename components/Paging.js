

export default function createPaging(root, { handlePaging }) {
    const selectSize = root.querySelector('select');
    const pageInfo = root.querySelector('.page-info');
    const [prev, next] = root.querySelectorAll('button');

    prev.addEventListener('click', () => {
        // *** call handlePaging with the page change and page size
    });

    next.addEventListener('click', () => {
        // *** call handlePaging with the page change and page size
    });

    selectSize.addEventListener('change', () => {
        // *** call handlePaging with the page change and page size
    });

    return ({ page, pageSize, totalPages }) => {
        selectSize.value = pageSize;
        // *** disable the prev or next button if on page 1 or totalPages

        pageInfo.textContent = `Page ${page} of ${totalPages}`;
    };
}