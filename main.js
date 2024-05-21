// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  const likeButtons = document.querySelectorAll('.like');

  likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', () => {
      const likeGlyph = likeButton.querySelector('.like-glyph');
      
      mimicServerCall()
        .then(() => {
          likeGlyph.classList.toggle('liked');
          likeGlyph.textContent = FULL_HEART;
        })
        .catch(error => {
          const modal = document.getElementById('modal');
          const modalMessage = document.getElementById('modal-message');
          modalMessage.textContent = error;
          modal.classList.remove('hidden');
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
