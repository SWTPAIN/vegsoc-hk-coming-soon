window.onload = function() {
  var SUCCESS_MESSAGE_SHOW_TIME = 1500;
  var myDataRef = new Firebase('https://vegsochk.firebaseio.com/subscribers');
  var form = document.getElementById('subscribeForm');
  var emailInputField = document.getElementById('emailInput')
  var loadingCover = document.getElementById('loading');
  form.addEventListener("submit", processForm);

  function getEmailInputValue() {
    return emailInputField.value;
  }

  function processForm(e) {
    e.preventDefault();
    saveEmail(getEmailInputValue());
  }

  function saveEmail(email) {
    myDataRef.push({email: email}, function() {
      emailInputField.value = '';
      displayLoadingCover();
      setTimeout(hideLoadingCover, SUCCESS_MESSAGE_SHOW_TIME);
    });
  }

  function displayLoadingCover() {
    loadingCover.className = 'show';
  }

  function hideLoadingCover() {
    loadingCover.className = '';
  }

}
