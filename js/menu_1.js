//Menu Hidden-Control
let listElements = document.querySelectorAll('.shown-btn');

listElements.forEach(item =>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("active");
        let height = 0;
        let menu = item.nextElementSibling;
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }
        menu.style.height = height + "px";
    })
})

//Cambio de idioma
$.getJSON('js/lang.json', function(json){
    $('.flag').click(function(){
        let lang = $(this).attr('id');
        $('.lang').each(function(index,value){
            $(this).text(json[lang][$(this).attr('key')]);
        });
    });
});

