function clickImage(imageSrc){
    // Show modal
    const modal = document.querySelector('.modal_wrapper');
    modal.style.display = 'flex';

    // Set the modal image source
    const modalImg = document.querySelector('.modal_content img');
    modalImg.src = imageSrc;
}


// Optional: close modal when clicking outside modal_content
document.querySelector('.modal_wrapper').addEventListener('click', function(e) {
    if(e.target === this){
        this.style.display = 'none';
    }
});
