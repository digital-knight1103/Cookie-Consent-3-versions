const cookieBox = document.querySelector('.cookie__wrapper');
const btn = document.querySelectorAll('.cookie__btn');
const deleteCookies = document.querySelector('#deleteCookies');

const cookieMsg = () => {
  // if cookie contains digitalKnight it will be returned and below of this code will not run
  if(document.cookie.includes('digitalKnight')) return;
  cookieBox.classList.add('show');

  btn.forEach(button => {
    button.addEventListener('click' , () => {
      cookieBox.classList.remove('show');

      // if button has id acceptBtn
      if(button.id == 'acceptBtn') {
        console.log('clickAcceptBtn');
        // set cookies for 1 mouth
        document.cookie = 'cookieBy = digitalKnight, max-age ' + 60 * 60 * 24 * 30 + 'SameSite=None; Secure'
      }
    })
  })
}

// Additional Funcionality to tested delete cookies
deleteCookies.addEventListener('click', () => {
  document.cookie.split(";").forEach((cookie) => {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  cookieBox.classList.remove('show');
});


window.addEventListener('load', cookieMsg)
