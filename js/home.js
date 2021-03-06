
var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() 
{
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}


function validaBusca()
{
    if(document.querySelector('#q').value=='')
    {
        //alert('A busca não pode estar em branco!');
        document.querySelector('#form-busca').style.background='red';
        return false;
    }    
}
// fazendo a associação da função com o evento
document.querySelector('#form-busca').onsubmit=validaBusca;

var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick=function()
{
    if(controle.className=='pause')
    {
        clearInterval(timer);
        controle.className='play';
    }
    else
    {
        timer = setInterval(trocaBanner, 4000);
        controle.className='pause';
    }

}

