$(function() {

        $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#tab-content > div').hide();
    $('#tab-content div:first').show();

    $('#nav li').click(function() {
        $('#nav li a').removeClass("active");
        $(this).find('a').addClass("active");
        $('#tab-content > div').hide();

        var indexer = $(this).index(); //gets the current index of (this) which is #nav li
        $('#tab-content > div:eq(' + indexer + ')').fadeIn(0); //uses whatever index the link has to open the corresponding box 
    });




    $('.center').slick({
        centerMode: true,
        centerPadding: '180px',
        slidesToShow: 1,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });


    $('next').on('click', function() {
      $('slider').slick('slickNext');
    });

    $('prev').on('click', function() {
      $('slider').slick('slickPrev');
    });


    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'

    });
    $('.slider-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });




        var arr = {
            'filter_1':{
                0: {
                    'name': 'Сайт1',
                    'type': 'Сайт1',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview1.png',
                    'bigimage':'proj1.png'
                },
                1: {
                    'name': 'Сайт2',
                    'type': 'Сайт2',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview2.png',
                    'bigimage':'proj2.png'
                },
                2: {
                    'name': 'Сайт3',
                    'type': 'Сайт3',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview3.png',
                    'bigimage':'proj3.png'
                },
                3: {
                    'name': 'Сайт4',
                    'type': 'Сайт4',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview4.png',
                    'bigimage':'proj4.png'
                },
                4: {
                    'name': 'Сайт5',
                    'type': 'Сайт5',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview5.png',
                    'bigimage':'proj5.png'
                },
                5: {
                    'name': 'Сайт6',
                    'type': 'Сайт6',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview6.png',
                    'bigimage':'proj6.png'
                },
                6: {
                    'name': 'Сайт1',
                    'type': 'Сайт1',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview1.png',
                    'bigimage':'proj1.png'
                },
                7: {
                    'name': 'Сайт2',
                    'type': 'Сайт2',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview2.png',
                    'bigimage':'proj2.png'
                },
                8: {
                    'name': 'Сайт3',
                    'type': 'Сайт3',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview3.png',
                    'bigimage':'proj3.png'
                },
                9: {
                    'name': 'Сайт4',
                    'type': 'Сайт4',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview4.png',
                    'bigimage':'proj4.png'
                },
                10: {
                    'name': 'Сайт5',
                    'type': 'Сайт5',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview5.png',
                    'bigimage':'proj5.png'
                },
                11: {
                    'name': 'Сайт6',
                    'type': 'Сайт6',
                    'link': '#',
                    'buttonType': 'go_to_small',
                    'buttonText': 'Посетить сайт',
                    'image': 'preview6.png',
                    'bigimage':'proj6.png'
                }

            },
            'filter_2':{
                0: {
                    'name': 'Приложения 1',
                    'type': 'Приложения 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview8.png',
                    'bigimage':'proj8.png'
                },
                1: {
                    'name': 'Приложения 2',
                    'type': 'Приложения 2',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview9.png',
                    'bigimage':'proj9.png'
                },
                2: {
                    'name': 'Приложения 1',
                    'type': 'Приложения 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview8.png',
                    'bigimage':'proj8.png'
                },
                3: {
                    'name': 'Приложения 2',
                    'type': 'Приложения 2',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview9.png',
                    'bigimage':'proj9.png'
                },
                4: {
                    'name': 'Приложения 1',
                    'type': 'Приложения 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview8.png',
                    'bigimage':'proj8.png'
                },
                5: {
                    'name': 'Приложения 2',
                    'type': 'Приложения 2',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview9.png',
                    'bigimage':'proj9.png'
                },
                6: {
                    'name': 'Приложения 1',
                    'type': 'Приложения 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview8.png',
                    'bigimage':'proj8.png'
                },
                7: {
                    'name': 'Приложения 2',
                    'type': 'Приложения 2',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview9.png',
                    'bigimage':'proj9.png'
                },
                8: {
                    'name': 'Приложения 1',
                    'type': 'Приложения 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview8.png',
                    'bigimage':'proj8.png'
                },
                9: {
                    'name': 'Приложения 2',
                    'type': 'Приложения 2',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview9.png',
                    'bigimage':'proj9.png'
                },
                10: {
                    'name': 'Приложения 1',
                    'type': 'Приложения 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview8.png',
                    'bigimage':'proj8.png'
                },
                11: {
                    'name': 'Приложения 2',
                    'type': 'Приложения 2',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать риложения',
                    'image': 'preview9.png',
                    'bigimage':'proj9.png'
                }
            },
            'filter_3':{
                0: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                1: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                2: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                3: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                4: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                5: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                6: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                7: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                8: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                9: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                10: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                },
                11: {
                    'name': 'Технологии 1',
                    'type': 'Технологии 1',
                    'link': '#',
                    'buttonType': 'go_to',
                    'buttonText': 'Скачать приложение',
                    'image': 'preview7.png',
                    'bigimage':'proj7.png'
                }
            },
        };

        $(".filter_button").click(function(e){
            e.preventDefault();
            $('.filter_button').removeClass('active');
            $(this).addClass('active');
            var indexVal = jQuery(this).data('filter');

            if(indexVal == 0){
                $('.slider-for').slick('unslick');
                $('.slider-nav').slick('unslick');

                $('.slider-for').html('');
                $('.slider-nav').html('');
                for(var i = 1;i<=3;i++){
                    var j = 0;
                    while (j < Object.keys(arr['filter_'+i+'']).length){
                        $('.slider-for').append('<div class="row slides_content" data-filter = "1"><div class="left_side"><div class="app">'+arr['filter_'+i+''][j]['type']+'</div><div class="name">«'+arr['filter_'+i+''][j]['name']+'»</div><a href="'+arr['filter_'+i+''][j]['link']+'" class="'+arr['filter_'+i+''][j]['buttonType']+'"><img src=" img/foreign.png" alt="foreign"><span>'+arr['filter_'+i+''][j]['buttonText']+'</span></a></div><div class="right_side"><img src=" img/'+arr['filter_'+i+''][j]['bigimage']+'" alt="mok_up" class="img-responsive"></div></div>');
                        j++;
                    }
                }
                for(var i = 1;i<=3;i++){
                    var j = 0;
                    while (j < Object.keys(arr['filter_'+i+'']).length){
                        $('.slider-nav').append('<div class="preview" data-filter = "1" > <img src=" img/'+arr['filter_'+i+''][j]['image']+'" alt="mok_up_prev"> </div>');
                        j++;
                    }
                }
                $('.slider-for').slick("slickRemove");
                $('.slider-nav').slick('slickRemove');
                $('.slider-for').slick('refresh');
                $('.slider-nav').slick('refresh');
            }else{
                $('.slider-for').slick('unslick');
                $('.slider-nav').slick('unslick');

                $('.slider-for').html('');
                $('.slider-nav').html('');
                //  console.log(arr['filter_'+indexVal+''][0]);
                var j = 0;
                while (j< Object.keys(arr['filter_'+indexVal+'']).length){
                    $('.slider-for').append('<div class="row slides_content" ><div class="left_side"><div class="app">'+arr["filter_"+indexVal+""][j]["type"]+'</div><div class="name">«'+arr["filter_"+indexVal+""][j]["name"]+'»</div><a href="'+arr["filter_"+indexVal+""][j]["link"]+'" class="'+arr["filter_"+indexVal+""][j]["buttonType"]+'"><img src=" img/foreign.png" alt="foreign"  /><span>'+arr["filter_"+indexVal+""][j]["buttonText"]+'</span></a></div><div class="right_side"><img src=" img/'+arr["filter_"+indexVal+""][j]["bigimage"]+'" alt="mok_up" class="img-responsive" /></div></div>');
                    j++;
                }

                var k = 0;
                while (k< Object.keys(arr['filter_'+indexVal+'']).length){
                    $('.slider-nav').append('<div class="preview" data-filter = "1" > <img src=" img/'+arr['filter_'+indexVal+''][k]['image']+'" alt="mok_up_prev"> </div>');
                    k++;
                }
                setTimeout(function () {
                    $('.prev').removeClass('slick-hidden');
                    $('.next').removeClass('slick-hidden');

                },10)

                $('.slider-for').slick("slickRemove");
                $('.slider-nav').slick('slickRemove');
                $('.next').on('click', function() {
                    $('.slider-for').slick('slickNext');
                    $('.slider-nav').slick('slickNext');
                });

                $('.prev').on('click', function() {
                    $('.slider-for').slick('slickPrev');
                    $('.slider-nav').slick('slickNext');
                });

                $('.slider-for').slick('refresh');
                $('.slider-nav').slick('refresh');


            }

        });


});



