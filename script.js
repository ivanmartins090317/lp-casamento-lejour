        //Rotativo Quick Filter
        var carouselDelay = 1000;
        
        // if (carouselDelay) {
        //    setTimeout(function() {
              
        //       var larguraDaTela = window.innerWidth;
        //         // Se a largura da tela for menor que 787px
        //         if (larguraDaTela < 1100) {
        //             document.querySelector('#fast_rotativo').style.display = 'block';
        //         } else {
        //             document.querySelector('#fast_rotativo').style.display = 'block';
        //         }
        
        //       $('#fast_rotativo').owlCarousel({
        //       items: 1,
        //       loop: false,
        //       smartSpeed: 600,
        //       responsiveClass: false,
        //       nav: false,
        //       navText: ['<img src="https://www.fastshop.com.br/wcsstore/FastShop/img/internas/rotativo_seta_esq.png">', '<img src="https://www.fastshop.com.br/wcsstore/FastShop/img/internas/rotativo_seta_dir.png">'],
        //       responsive:{ 0:{ items: 2, margin: -75, }, 1100:{items: 6, mouseDrag: false} },
        //       autoplay: false,
        //       autoplayTimeout: 0,
        //       autoplayHoverPause: false
        //     });
        //    }, carouselDelay);
        // }

            //Rotativo SugestÃµes
            (function($) { 
             $('.fast_rotativo2').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 600,
            responsiveClass: true,
            nav: true,
            navText: ['<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/esquerda.png">', '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/direita.png">'],
            responsive:{ 0:{items: 1.5, margin: 0}, 1100:{ items: 3.5, margin: 4 } },
            slideBy: 3,
            autoplay: true,
            autoplayTimeout: 20000,
            autoplayHoverPause: true
        });
        })(jQuery);
        //  ROTATIVO DE MARCAS
            (function($) { 
             $('.fast_marcas').owlCarousel({
            items: 0,
            loop: true,
            smartSpeed: 6000,
            responsiveClass: true,
            nav: false,
            // navText: ['<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/esquerda.png">', '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/direita.png">'],
            responsive:{ 0:{items: 1.5, margin: 0}, 1100:{ items: 5.5, margin: 4 } },
            slideBy: 3,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });
        })(jQuery);

    // ROTATIVO DE DEPOIMENTOS
    (function($) { 
             $('.fast_depoimentos').owlCarousel({
            items: 0,
            loop: true,
            smartSpeed: 1000,
            responsiveClass: true,
            nav: false,
            // navText: ['<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/esquerda.png">', '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/direita.png">'],
            responsive:{ 0:{items: 1.1, margin: 0}, 1100:{ items: 2.5, margin: 4, autoplay: false, mouseDrag: false } },
            slideBy: 3,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });
        })(jQuery);


    // FAQ
        $('.aniversario_sanfona_item').click(function() {
        console.log("click:")
        var alvo = '#' + $(this).attr('id');

        if ($(alvo).attr('sanfona_item_ativo') == 'false') {
            $('.aniversario_sanfona_item').attr('sanfona_item_ativo', 'false');
            $('.aniversario_sanfona_item').removeClass('aniversario_sanfona_item_ativo');

            $(alvo).addClass('aniversario_sanfona_item_ativo');
            $(alvo).attr('sanfona_item_ativo', 'true');

            console.log("open")
        }
        else {
            $(alvo).removeClass('aniversario_sanfona_item_ativo');
            $(alvo).attr('sanfona_item_ativo', 'false');

            console.log("close")
        }
    });


// Seleciona todos os links que apontam para âncoras na página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão

        // Anima a rolagem até o elemento alvo da âncora
        window.scrollTo({
            top: document.querySelector(this.getAttribute('href')).offsetTop,
            behavior: 'smooth' // Define o comportamento de rolagem suave
        });
    });
});



      