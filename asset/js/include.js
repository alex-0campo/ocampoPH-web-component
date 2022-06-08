let currYear = (new Date).getFullYear();

function elementFromHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

let headerContent = elementFromHtml(`
  <div class="container">
    <nav id="header-nav" class="navbar navbar-expand-md navbar-light bg-light px-2">
      <a class="navbar-brand" href="index.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-journal-code me-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"/>
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
        </svg>ocampoPH.com
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          <a class="nav-link" href="about.html">About</a>
          <a class="nav-link disabled" href="contact.html">Contact</a>
          <a class="nav-link disabled" href="blog.html">Blog</a>
        </div>
      </div>
    </nav>
  </div>
`);

let footerContent = elementFromHtml(`
  <div class="container">                
    <footer id="footer" class="navbar-light bg-light py-1 my-4">
      <ul class="nav justify-content-center border-bottom">
        <li class="nav-item active" aria-current="page"><a href="index.html" class="nav-link px-2 text-light">Home</a></li>
        <li class="nav-item"><a href="about.html" class="nav-link px-2 text-light">About</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link px-2 text-light disabled">Contact</a></li>
        <li class="nav-item"><a href="blog.html" class="nav-link px-2 text-light disabled">Blog</a></li>
      </ul>
      <p class="text-center text-light">
        <small>
          2014-${currYear}&#169; ocampoph.com - all rights reserved.
        </small>
      </p>
    </footer>
  </div>
`);

// set reference element
let target = document.querySelector('body');

// insert header element
// target.prepend(headerContent, footerContent);
target.prepend(headerContent);

// insert footer element
let refElement = document.querySelector('main.container');
// console.log(refElement.nextElementSibling); // <script>...</script>
if(refElement.nextElementSibling) {
  // console.log(refElement.parentNode) // body
  refElement.parentNode.insertBefore(footerContent, refElement.nextElementSibling);
}


