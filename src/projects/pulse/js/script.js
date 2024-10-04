$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.svg" alt="right"></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    let tabActiveClass = 'catalog__tab_active';
    let contentActiveClass = 'catalog__content_active';
    $('ul.catalog__tabs').on('click', 'li:not(.' + tabActiveClass + ')', function() {
        $(this)
            .addClass(tabActiveClass)

            .siblings()
            .removeClass(tabActiveClass)

            .closest('div.container').find('div.catalog__content')
            .removeClass(contentActiveClass)

            .eq($(this).index())
            .addClass(contentActiveClass);
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content')
                    .eq(i)
                    .toggleClass('catalog-item__content_active')
                $('.catalog-item__list')
                    .eq(i)
                    .toggleClass('catalog-item__list_active')
            })
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal
    $('[data-modal="consultation"]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    // Validation
    const validationRules = {
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
            },
            phone: {
                required: "Пожалуйста, введите номер телефона",
            },
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            }
        }
    };

    function validateForm(form, validationRules) {
        $(form).validate(validationRules);
    }

    validateForm('#consultation-form', validationRules);
    validateForm('#consultation form', validationRules);
    validateForm('#order form', validationRules);

    // Masks
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // Email
    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        // $.ajax({
        //     type: "POST",
        //     url: "mailer/smart.php",
        //     data: $(this).serialize()
        // }).done(function() {
        //     $(this).find("input").val("");
        //     $('#consultation, #order').fadeOut('slow');
        //     $('.overlay, #thanks').fadeIn('slow');
        //     $('form').trigger('reset');
        //
        //     return true;
        // });
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut('slow');
        $('.overlay, #thanks').fadeIn('slow');
        return true;
    });

    // Page up
    $(window).scroll(function() {
        if ($(window).width() > 767) {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        } else {
            $('.pageup').fadeOut();
        }
    });

    // Smooth scroll
    $("a[href='#up']").on('click', function() {
        const _href = $(this).attr('href');
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // Animation
    new WOW().init();
});
