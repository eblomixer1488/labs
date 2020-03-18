imgs = [
'blood-orange.jpg',
'Red.png',
'yellow.png'
];

setInterval(function(){
    img = imgs[Math.floor(Math.random()*imgs.length)];
    $('span').text(img);
    $('img').attr('src', img);
}, 500);