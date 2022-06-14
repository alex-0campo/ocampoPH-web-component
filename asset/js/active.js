function activePage(nodeList) {
    let len = nodeList.length;

    for(let i = 0; i < len; i++) {
        let thisPage = nodeList[i].href.split("/").pop();

        // console.log(thisPage);
        if(thisPage === currentPage) {
            // console.log(`You are in: ${thisPage} page...\nadd active class and aria-current="page"`)
            // console.log(nodeList)
            nodeList[i].classList.add("active");
            nodeList[i].ariaCurrent = "page";
        } else {
            // if current page === '', add active class and aria-current="page" to the index.html page
            // console.log(nodeList[i].attributes);
            // nodeList[i].classList.remove("active");
            // nodeList[i].removeAttribute(ariaCurrent="page");
        } 
    }
}

let path = window.location.pathname;
let currentPage = path.split("/").pop();
if(currentPage === '') {
   console.log(`${currentPage} current page is empty...`); 
}


let navMenuItems = document.querySelectorAll('.navbar-nav>a');
// let len = navMenuItems.length;
activePage(navMenuItems);

let footerMenuItems = document.querySelectorAll('footer>ul>li>a');
// console.log(footerMenuItems);
activePage(footerMenuItems);
