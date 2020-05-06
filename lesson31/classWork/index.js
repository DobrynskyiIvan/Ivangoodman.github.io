$(document).ready(function() {
    $('.btn').click(function () {
        console.log('Clicked:', this);
        // $('.btn').css({backgroundColor: 'blueviolet'});
        // $('.btn').removeClass('active');
        // $(this).addClass('active');
        console.log('Active:', $(this).hasClass('active'));
        $(this).toggleClass('active');


        // console.log('Width:', $(this).width());
        // console.log('Height:', $(this).height());
        // console.log('Inner Width:', $(this).innerWidth());
        // console.log('Outer Width:', $(this).outerWidth());
        // console.log('Offset:', $(this).offset());
        // console.log('Position:', $(this).position());
        //
        //
        // console.log('Parent:', $(this).parent());
        // console.log('Parent 2:', $(this).parent().parent());
        // console.log('Parents:', $(this).parents());
        // console.log('Children:', $(this).parent().children());
        // console.log('Closest:', $(this).closest());
        // console.log('Prev All:', $(this).prevAll());
        // console.log('Next All:', $(this).nextAll());
        // console.log('Next Until:', $(this).nextUntil('.btn4'));
        //
        // console.log('Siblings:', $('.btn').siblings('.btn1'));
        // console.log('Is:', $('.btn').is('.btn1'));
        // console.log('Find:', $('.btn').find('.btn1'));
        // console.log('Size:', $('.btn').size);
        // console.log('Each:', $('.btn').each(function() {
        //     return this;
        // }));
        // console.log('Map:', $('.btn').map(function() {
        //     return this;
        // }));
        // console.log('To Array:', $('.btn').toArray());
    });

    $('.btn1').click(addP);
    $('.td').click(addToList);

    $('.btn').hover(function(e) {
        console.log('HOVER:', e.target);
    });

    $('.btn').mouseover(function() {
        console.log('MOUSE OVER:', this);
    });

    $('.btn').mouseout(function() {
        console.log('MOUSE OUT:', this);
    });

    $('.td').hover(function() {
        // $(this).animate({
        //     top: '+=50',
        //     left: '+=50',
        // }, 1000, 'swing', function() {
        //     $(this).css({
        //         backgroundColor: 'green'
        //     });
        // });

        const time = 2000;
        // $(this).fadeOut(time, function() {
        //     $(this).delay(3000).fadeTo(time/2, .5);
        // });
        $(this).slideUp(time);
    });



    function addToList() {
        // $('.ul').append('<li>AAAAAA</li>');
        // $('.ul').prepend('<li>' + $(this).text() + '</li>');
        $('<li>' + $(this).text() + '</li>').appendTo('.ul');
        console.log('PREV:', $(this).prev().text());
        console.log('NEXT:', $(this).next().html());
        $(this).prev().css({
            backgroundColor: 'green',
            color: 'white'
        });

        // $(this).next().detach();
        // $(this).next().remove();
        //before
        //after
        // $('.ul').before('<p>BEFORE</p>');
        // $('.ul').after($('.ul li').clone());
    }

    function addP() {
        $('.div').html('<p>Hello</p>');
        console.log('HTML:', $('.div').html());
        $('.div').html(function(){
            return '<p>World</p>';
        });
        $('.div').text(function(){
            return '<p>World</p>';
        });

        // $('.ul li').replaceWith('<li>new items</li>');
        // $('<li>new items</li>').replaceAll('.ul li');
        $('.ul li').clone();
    }
}); // Ready!
