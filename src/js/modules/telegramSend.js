import $ from 'jquery'

export function init() {
    $('.footer-form__form').on('submit', function (event) {

        event.stopPropagation();
        event.preventDefault();
    
        let form = this,
            submit = $('.submit-text', form),
            data = new FormData(),
            files = $('input[type=file]')
    
    
        $('.submit-text', form).val('Отправка...');
        $('input, textarea', form).attr('disabled','');
    
        data.append( 'Имя', 		$('[name="name"]', form).val() );
        data.append( 'Телефон', 		$('[name="phone"]', form).val() );
        data.append( 'О проекте', 		$('[name="text"]', form).val() );
        data.append( 'Цена', 		$('[name="currencies"]', form).val() );
        // data.append( 'file', 		$('[name="file"]', form).val() );
       
    
        files.each(function (key, file) {
            let cont = file.files;
            if ( cont ) {
                $.each( cont, function( key, value ) {
                    data.append( key, value );
                });
            }
        });
        
        $.ajax({
            url: '/files/ajax.php',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            xhr: function() {
                let myXhr = $.ajaxSettings.xhr();
    
                if ( myXhr.upload ) {
                    myXhr.upload.addEventListener( 'progress', function(e) {
                        if ( e.lengthComputable ) {
                            let percentage = ( e.loaded / e.total ) * 100;
                                percentage = percentage.toFixed(0);
                            if(percentage < 100) {
                                $('.footer-form__form', form).addClass('invalid');
                                $('.submit-text', form)
                                .html( percentage + '%' ); 
                            } else {
                                window.location.reload();
                                // $('.submit-text', form)
                                //     .html( $('.submit-text').attr('data-thanks') );
                                // setTimeout(() => {
                                //     $('.submit-text', form)
                                //         .html( $('.submit-text').attr('data-text') );
                                //         $('.footer-form__form', form).removeClass('invalid');
                                // }, 5000);
                            }
                        }
                    }, false );
                }
    
                return myXhr;
            },
            error: function( jqXHR, textStatus ) {
                // Тут выводим ошибку
            },
            complete: function() {
                // Тут можем что-то делать ПОСЛЕ успешной отправки формы
                console.log('Complete')
                form.reset() 
            }
        });
    
        return false;
    });
}