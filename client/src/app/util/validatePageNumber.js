export const validatePageNumber = (pageNumber, pagesLength) => {
    const lastPage = pagesLength;
    if(pageNumber > lastPage) return 1;
    if(pageNumber < 1) return lastPage;
    return pageNumber;
}