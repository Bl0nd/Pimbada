// lightbox
$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.item',
    });

    $('.filterBtnGroup').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.filterBtnGroup li').removeClass('active');
        $(this).addClass('active');
    });

})

const out = document.querySelector('.sidebar > a');
const on = document.querySelector('.container > a');

out.addEventListener('click', sai);
on.addEventListener('click', entra);

function sai(){
    const frente = document.querySelector('.sidebar');
    frente.classList.add('out')
}

function entra() {
    const frente = document.querySelector('.sidebar');
    frente.classList.remove('out')
}