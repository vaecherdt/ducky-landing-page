// Header Scrolling Animation
window.addEventListener("scroll", function()
{
    const logoImage = document.querySelector(".logo img");
    const mainNav = document.getElementById("main-nav");
    
    if (window.pageYOffset > 0)
    {
        logoImage.style.height = "50px";
        mainNav.classList.add('alt-background');
        mainNav.classList.add('alt-text');
    }
    else
    {
        logoImage.style.height = "60px";
        mainNav.classList.remove('alt-background');
        mainNav.classList.remove('alt-text');
    }
})