const menuIcon = document.getElementById("menuIcon");
const menuList = document.getElementById("menuList");

menuIcon.addEventListener('mouseover', function(){
    menuList.classList.toggle('hidden');
})

