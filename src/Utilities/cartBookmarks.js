const getStoredBookmarks = () => {
    const storedBookmarks = localStorage.getItem('bookmark');
    if (storedBookmarks) {
        return JSON.parse(storedBookmarks);
    }
    return [];
}


const addToLS = id => {
    const bookmark = getStoredBookmarks();
    bookmark.push(id);
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
}

export {addToLS, getStoredBookmarks};