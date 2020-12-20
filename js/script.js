window.onload = function() 
{
  const hamburger = document.getElementsById('hamburger');

  hamburger.onclick = function() 
  {
    let topNav = document.getElementById('myTopNav');
    if (topNav.className == 'responsive') 
    {
      topNav.className = '';
    } 
    else 
    {
      topNav.className = 'responsive';
    }
  }
}
const menuList = document.querySelectionAll ('.menu-element');
menuList.forEach(function(element) 
{
  element.addEventListener('click',function(event) 
  {
    const elementLink = element.dataset.linkll
    if(elementLink)
    {
      event.preventDefault();
      document.getElementById(elementLink).scrollIntoView({behavior:'smooth'});
    }
  });
});