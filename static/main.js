// Controller for HTML5 imports
var headerContent = document.querySelector('#headerTemplate').import.querySelector('header');
var footerContent = document.querySelector('#footerTemplate').import.querySelector('footer');
$("body").prepend(headerContent);
$("body").append(footerContent);
