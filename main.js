$(function() {

    //img array
    var cardsArray = [
       '<img src="img/1.png">',                  
        '<img src="img/2.png">',
        '<img src="img/3.png">',
        '<img src="img/4.png">',
        '<img src="img/5.png">',
        '<img src="img/6.png">',
        '<img src="img/7.png">',
        '<img src="img/8.png">',
        '<img src="img/9.png">',
        '<img src="img/10.png">',
        '<img src="img/11.png">',
        '<img src="img/12.png">',
        '<img src="img/13.png">',
        '<img src="img/14.png">',
        '<img src="img/15.png">',
        '<img src="img/16.png">',
        '<img src="img/17.png">',
        '<img src="img/18.png">',
        '<img src="img/19.png">',
        '<img src="img/20.png">',
        '<img src="img/21.png">',
        '<img src="img/22.png">',
        '<img src="img/23.png">',
        '<img src="img/24.png">',
        '<img src="img/25.png">'
    ];

    var currentArray = cardsArray.slice();
    console.log(currentArray);

    //math random
    function mathRandom() {
        return Math.floor(Math.random() * currentArray.length);
    }

    // change img inside divs
    function getRandomImage() {
        var num = mathRandom();
        if(currentArray[num]) {
            var img = currentArray[num];
            currentArray.splice(num, 1);
            return img;
        }
        else {
            getRandomImage();
        }
    }

    function insertRandomImageInHtml(image) {
        $('.image').each(function() {
            var img = getRandomImage();
            $(this).html(img);
        });
    }


    // imitation of spin of the wheel

    $('.start').on('click', function() {
        var wheel = setInterval(function() {
            currentArray = cardsArray.slice();
            insertRandomImageInHtml();
        }, 80);
        setTimeout(function() {
            clearInterval(wheel);
            showResult();
        }, 3000);
    });

    function showResult() {
        var result1 = $('.image4').find('img').clone();
        $('.figure1').html(result1);

        var result2 = $('.image5').find('img').clone();
        $('.figure2').html(result2);

        var result3 = $('.image6').find('img').clone();
        $('.figure3').html(result3);
    }



});