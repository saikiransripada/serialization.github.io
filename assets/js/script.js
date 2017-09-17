(function() {

    var emojis = ['🆒','🌄','🌏','🌞','🌟','🌤','🌦','🌧','🌩','🌲','🌳','🌴','🌶','🌺','🌻','🍀','🍄','🍅','🍉','🍍','🍎','🍏','🍒','🍔','🍨','🍫','🍯','🍰','🍴','🍸','🍹','🍿','🎂','🎄','🎈','🎉','🎊','🎙','🎧','🎮','🎰','🎱','🎳','🎵','🏔','🏕','🏖','🏝','🏞','🏡','🏴‍☠️','🐃','🐄','🐒','🐕','🐘','🐞','🐢','🐣','🐪','🐫','🐾','👻','💀','💡','💣','💧','💭','📋','📡','📢','📺','🔥','🕊','🕯','🖼','🗿','😀','😂','😃','😄','😅','😆','😇','😉','😊','😍','😎','😘','😚','😛','😜','😝','😴','🤗','🤨','🥤','🥦','🥪','🦃','🦅','🦉','🦊','⌨','⏰','☀','☁','☔','☕','☠','☺','⛅','⛈','⛳','⛽','⭐'];
    var code = emojis[Math.floor(Math.random() * emojis.length)];

    if(typeof twemoji !== 'undefined') {
        twemoji.parse(code, {
            folder: 'svg',
            ext: '.svg',
            callback: function(icon, options, variant) {
                var emoji = options.base + options.size + '/' + icon + options.ext;
                document.getElementsByClassName('site-title')[0].getElementsByTagName('a')[0].innerHTML = '<img class="site-logo" src="'+emoji+'"/>';
            }
        });
    }

}());