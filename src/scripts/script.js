const profilesContainer = document.querySelector('.profiles');

profilesContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    profilesContainer.scrollLeft += e.deltaY;
});