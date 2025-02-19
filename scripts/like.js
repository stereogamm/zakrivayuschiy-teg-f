
/* this script uses the following class names:
✦ like-icon — for the svg-icon of the animated heart  
✦ card__like-button — for the Like button next to the icon  
✦ card__icon-button — for the button wrapping the icon  
✦ card__icon-button — for the button wrapping the icon  
✦ is-liked — for indicating the liked state of the heart icon  
✦ button__text — for indicating the text element inside the button  
If these classes are changed in the HTML, the script will stop working. Be careful.  
*/  


const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}
