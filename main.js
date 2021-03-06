function showMenu () {
    if(screen.width > 700){
        $('.nav').show();
    }
    $('.menu-icon').click(function(){
        $('.nav').show();
        $('nav').focus();
    });
    $('nav').blur(function(){
        console.log("blur works");
        hideMenu();
    });
}
function hideMenuIcon () {
    if(screen.width > 700){
        $('.menu-icon').hide();
    }
}
function hideMenu () {
        $('.nav').hide();
}
function handleAbout () {
    $('.nav-about').click(showAbout);
}
function showAbout () {

    $('h2').text('About');
    $('.about').show();
    $('.projects').hide();
    $('.contacts').hide();
}
function handleProjects() {
    $('.nav-projects').click(function (){
        $('h2').text('Projects');
        $('.projects').show();
        $('.contacts').hide();
        $('.about').hide();
    });
}

function handleContacts() {
    $('.nav-contacts').click(function (){
        $('h2').text('Contacts');
        $('.contacts').show();
        $('.about').hide();
        $('.projects').hide();
    });
}


function handlePortfolio () {
    hideMenu();
    hideMenuIcon();
    showMenu();
    showAbout();
    handleAbout();
    handleProjects();
    handleContacts();
}

$(handlePortfolio());