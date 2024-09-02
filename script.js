        //Rotativo Quick Filter
        var carouselDelay = 1000;
        
        if (carouselDelay) {
           setTimeout(function() {
              
              var larguraDaTela = window.innerWidth;
                // Se a largura da tela for menor que 787px
                if (larguraDaTela < 1100) {
                    document.querySelector('#fast_rotativo').style.display = 'block';
                } else {
                    document.querySelector('#fast_rotativo').style.display = 'block';
                }
        
              $('#fast_rotativo').owlCarousel({
              items: 1,
              loop: false,
              smartSpeed: 600,
              responsiveClass: false,
              nav: false,
              navText: ['<img src="https://www.fastshop.com.br/wcsstore/FastShop/img/internas/rotativo_seta_esq.png">', '<img src="https://www.fastshop.com.br/wcsstore/FastShop/img/internas/rotativo_seta_dir.png">'],
              responsive:{ 0:{ items: 2, margin: -75, }, 1100:{items: 6, mouseDrag: false} },
              autoplay: false,
              autoplayTimeout: 0,
              autoplayHoverPause: false
            });
           }, carouselDelay);
        }

            //Rotativo SugestÃµes
            (function($) { 
        $('.fast_rotativo2').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 600,
            responsiveClass: true,
            nav: true,
            navText: ['<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/esquerda.png">', '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/direita.png">'],
            responsive:{ 0:{ items: 3, margin: 4 } },
            slideBy: 3,
            autoplay: true,
            autoplayTimeout: 20000,
            autoplayHoverPause: true
        });
        })(jQuery);


        //Rotativo Essencial Mobile
        if (carouselDelay) {
           setTimeout(function() {
              
              var larguraDaTela = window.innerWidth;
    
                // Se a largura da tela for menor que 1100px
                if (larguraDaTela < 1100) {
                    document.querySelector('.fast_rotativo_header').style.display = 'block';
                    console.log('mobile')
                } else {
                    document.querySelector('.fast_rotativo_header').style.display = 'none';
                    document.querySelector('.wrapper-aspect-ratio modelo-Mobile1').style.display = 'none';
                    console.log('desk')
                }
        
              $('.fast_rotativo_header').owlCarousel({
              items: 1,
              loop: true,
              dots:false,
              smartSpeed: 600,
              responsiveClass: false,
             //nav: true,
             //navText: ['<img src="https://www.fastshop.com.br/wcsstore/FastShop/img/internas/rotativo_seta_esq.png">', '<img src="https://www.fastshop.com.br/wcsstore/FastShop/img/internas/rotativo_seta_dir.png">'],
              responsive:{ 0:{ items: 1.2 } },
              autoplay: false,
              autoplayTimeout: 0,
              autoplayHoverPause: false
            });
           }, carouselDelay);
        }