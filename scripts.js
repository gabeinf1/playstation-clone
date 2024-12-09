const thumbnailImage = document.getElementsByClassName('thumbnail-image-selectors')[0]; //HTMLCollection CANNOT ITERATE

Array.from(thumbnailImage.children).forEach(element => { //Creating Array to be able to iterate then iterating
    element.addEventListener('click', () => { //adding event listener click to each child //On click hero HTMLCollection
    
        if (element.classList.contains('mini-lego-horizons')) {
            document.querySelector('.horizon-adventures').classList.toggle('active-image');
        }
        if (element.classList.contains('mini-astro-bot')) {
            document.querySelector('.astro-bot').classList.toggle('active-image')
        }
            
    });
});
