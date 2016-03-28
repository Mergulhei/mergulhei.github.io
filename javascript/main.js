var canvas, stage, exportRoot;
function init() {
    // Load svg animation
    canvas = document.getElementById("canvas");
    exportRoot = new lib.animacaoblogueiro();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    var swiper = new Swiper('.slider', {
        pagination: '.slider__dots',
        paginationClickable: true
    });
}
