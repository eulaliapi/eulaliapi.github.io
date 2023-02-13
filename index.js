$(document).ready(function () {

    $('.nav-item').click((event) => {

        switch(event.currentTarget.id) {
            case 'about-nav':
                $('#about-nav').addClass('about');
                $('#skills-nav').removeClass('skills');
                $('#works-nav').removeClass('works');
                $('#contact-nav').removeClass('contact');
                $('#skills').fadeOut();
                $('#works').fadeOut();
                $('#contact').fadeOut();
                $('#about').fadeIn(1000);
                
            break;
            case 'skills-nav':
                $('#about-nav').removeClass('about');
                $('#skills-nav').addClass('skills');
                $('#works-nav').removeClass('works');
                $('#contact-nav').removeClass('contact');
                $('#about').fadeOut();
                $('#works').fadeOut();
                $('#contact').fadeOut();
                $('#skills').fadeIn(1000);
            break;
            case 'works-nav':
                $('#about-nav').removeClass('about');
                $('#skills-nav').removeClass('skills');
                $('#works-nav').addClass('works');
                $('#contact-nav').removeClass('contact');
                $('#about').fadeOut();
                $('#skills').fadeOut();
                $('#contact').fadeOut();
                $('#works').fadeIn(1000);
            break;
            case 'contact-nav':
                $('#about-nav').removeClass('about');
                $('#skills-nav').removeClass('skills');
                $('#works-nav').removeClass('works');
                $('#contact-nav').addClass('contact');
                $('#about').fadeOut();
                $('#skills').fadeOut();
                $('#works').fadeOut();
                $('#contact').fadeIn(1000);
            break;
        }

    });

    $('#lang').click((event) => {
        
        switch(event.currentTarget.innerText) {
            case 'IT':
                $('#about-nav').text('Su di me');
                $('#skills-nav').text('Competenze');
                $('#works-nav').text('Progetti');
                $('#contact-nav').text('Contatti');
                $('#hello').text('Ciao, sono Eulalia.');
                $('#description').text('Che si tratti di aiutare una persona o una comunità sono sempre entusiasta di partecipare alla ricerca della soluzione più efficace ed efficiente utile a risolvere un problema.');
                $('#call-to-action').text("Se pensi che io abbia lo spirito giusto per entrare a far parte della tua squadra non esitare a contattarmi, sarò entusiasta di partecipare e imparare ad utilizzare al meglio gli strumenti di cui vi servite.");
                $('#cv').text('Leggi il mio CV');
                $('#cv').attr("href", "./text-files/CV_Eulalia_Pirone_Jr_Developer_IT.pdf");
                $('#github-link').text('Visita il mio Github');
                $('#name-label').text('Nome');
                $('#msg-label').text('Messaggio');
                $('#send-btn').val('Invia');
                
                $('#linkedin-link').text('Contattami su LinkedIn');
                $('#particle').text('o');
                $(event.currentTarget).text('EN')
                break;
            case 'EN':
                $('#about-nav').text('About');
                $('#skills-nav').text('Skills');
                $('#works-nav').text('Works');
                $('#contact-nav').text('Contact');
                $('#hello').text('Hi, I am Eulalia.')
                $('#description').text("Whether it is about helping a person or a community, I am keen to take part in projects whose aim is to provide the most efficient solution to solve people's problems.");
                $('#call-to-action').text("If you think I might have the right spirit to work in your team don't hesitate to contact me, I will be glad to be on board and make all efforts to learn the technologies that suit your needs.");
                $('#cv').text('Read my resume');
                $('#cv').attr("href", "./text-files/CV_Eulalia_Pirone_Jr_Developer_EN.pdf");
                $('#github-link').text('Visit my Github');
                $('#name-label').text('Name');
                $('#msg-label').text('Message');
                $('#send-btn').val('Send');
                $('#linkedin-link').text('Contact me on LinkedIn');
                $('#particle').text('or');
                $(event.currentTarget).text('IT')
                break;
        }
    })

    $('.list').click((event) => {

        $('.list').not(event.currentTarget).fadeToggle();

        if ($(window).width() < 768) {
            if (event.currentTarget.offsetTop == 80) {

                switch (event.currentTarget.id) {
                    case 'pj1':
                        $('#pj1').animate({ top: '96px' }, 1000);
                        $('#pj1_det').fadeOut();
                        break;
                    case 'pj2':
                        $('#pj2').animate({ top: '144px' }, 1000);
                        $('#pj2_det').fadeOut();
                        break;
                    case 'pj3':
                        $('#pj3').animate({ top: '192px' }, 1000);
                        $('#pj3_det').fadeOut();
                        break;
                    case 'pj4':
                        $('#pj4').animate({ top: '240px' }, 1000);
                        $('#pj4_det').fadeOut();
                        break;
                    case 'pj5':
                        $('#pj5').animate({ top: '288px' }, 1000);
                        $('#pj5_det').fadeOut();
                        break;
                    case 'pj6':
                        $('#pj6').animate({ top: '336px' }, 1000);
                        $('#pj6_det').fadeOut();
                        break;
                }

            } else {
                $(event.currentTarget).animate({ top: '80px' }, 1000);

                switch (event.currentTarget.id) {
                    case 'pj1':
                        $('#pj1_det').fadeIn();
                        break;
                    case 'pj2':
                        $('#pj2_det').fadeIn();
                        break;
                    case 'pj3':
                        $('#pj3_det').fadeIn();
                        break;
                    case 'pj4':
                        $('#pj4_det').fadeIn();
                        break;
                    case 'pj5':
                        $('#pj5_det').fadeIn();
                        break;
                    case 'pj6':
                        $('#pj6_det').fadeIn();
                        break;
                }
            }
        } else {
            
            if(event.currentTarget.offsetTop == 35) {
                switch(event.currentTarget.id) {
                    case 'pj1':
                        $('#pj1').animate({top: '70px'}, 1000);
                        $('#pj1_det').fadeOut();
                        break;
                    case 'pj2':
                        $('#pj2').animate({top: '70px'}, 1000);
                        $('#pj2_det').fadeOut();
                        break;
                    case 'pj3':
                        $('#pj3').animate({top: '170px'}, 1000);
                        $('#pj3_det').fadeOut();
                        break;
                    case 'pj4':
                        $('#pj4').animate({top: '170px'}, 1000);
                        $('#pj4_det').fadeOut();
                        break;
                    case 'pj5':
                        $('#pj5').animate({top: '270px'}, 1000);
                        $('#pj5_det').fadeOut();
                        break;
                    case 'pj6':
                        $('#pj6').animate({top: '270px'}, 1000);
                        $('#pj6_det').fadeOut();
                        break;
                }
            } else {

                $(event.currentTarget).animate({ top: '35px' }, 1000);

                switch(event.currentTarget.id) {
                    case 'pj1':
                        $('#pj1_det').fadeIn();
                        console.log(event.currentTarget.offsetTop)
                        break;
                    case 'pj2':
                        $('#pj2_det').fadeIn();
                        break;
                    case 'pj3':
                        $('#pj3_det').fadeIn();
                        break;
                    case 'pj4':
                        $('#pj4_det').fadeIn();
                        break;
                    case 'pj5':
                        $('#pj5_det').fadeIn();
                        break;
                    case 'pj6':
                        $('#pj6_det').fadeIn();
                        break;
                }
            }
            
        } 

    });

});