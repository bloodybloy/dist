$(function(){
    $('.header-top__slider').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
    });


    $('.services__slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 6,
        responsive: [
            {
              breakpoint: 1680,
              settings: {

                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 1450,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            // {
            //   breakpoint: 920,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 1
            //   }
            // },
            {
                breakpoint: 870,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
          ]
    });

    $('.offers__slider').slick({
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="../images/arrow-next.svg" alt="next-arrow"></button>',
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Next" type="button" style=""><img src="../images/arrow-prev.svg" alt="prev-arrow"></button>',
      dots: false, // true
      arrows: false
    })

    // $('.menu__btn').click(function(event) {
    //   &('')
    // })
    const menuBtn = document.querySelector('#navToggle')
    const nav = document.querySelector('#nav')
    menuBtn.addEventListener('click', event => {
      event.preventDefault
      menuBtn.classList.toggle('active')
      nav.classList.toggle('show')
    })


    // Fixed Header
    const header = $('#header')

    const headerTop = $('#header-top')
    const about = $('#about')
    const headerTopHeight = headerTop.innerHeight()   // + about.innerHeight() просто height() выдает высоту без padding (785px)
    let scrollPosition = $(window).scrollTop() // скрол от верха

    checkScroll(scrollPosition, headerTopHeight) // чтобы при загрузки страницы сразу проверялось

    $(window).on('scroll load resize', function() {
      const headerTopHeight = headerTop.innerHeight()  // + about.innerHeight() обновление высоты, т.к у нас на телефоне другой размер
      scrollPosition = $(window).scrollTop() + 61 // обновление скрола,   61 это из-за -60 в elemOffset
      checkScroll(scrollPosition, headerTopHeight)
    })

    function checkScroll(scrollPosition, headerTopHeight) {
      if (scrollPosition > headerTopHeight) {
        header.addClass('fixed')
      } else {
        header.removeClass('fixed')
      }
    }


    // Smooth Scroll (скрол к элементу nav)

    $('[data-scroll]').on('click', function(e) {
      e.preventDefault()

      let elemID = $(this).data('scroll') // scroll - слово идущее за data- (data-scroll)
      let elemOffset = $(elemID).offset().top // отступ данного элемента от верха
      console.log(elemID, elemOffset); // #about 785   #offers 1907 - смотря на какой блок я нажал

      function scrollAnimate() {
        $('html, body').animate({
          scrollTop: elemOffset - 60
        }, 1000)
        const menuClose = document.querySelector('#nav')
        menuClose.classList.remove('show')
        menuBtn.classList.remove('active')
      }

      scrollAnimate()

    })


});

