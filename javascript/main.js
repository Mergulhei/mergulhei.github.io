var canvas, stage, exportRoot;
function init() {
    var stage = loadSVGAnimation();
    var snapper = loadOffsetMenu();
    var scroller = loadAnchorScrollNavigation(snapper.close);
}

function loadSVGAnimation() {
    canvas = document.getElementById("canvas");
    exportRoot = new lib.animacaoblogueiro();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    return stage;
}

function loadOffsetMenu() {
    var snapper = new Snap({
        element: document.getElementById('menu__content'),
        touchToDrag: false
    });

    snapper.on('open', function() {
        return $('.menu__dragger use')[0]
            .setAttribute('xlink:href', 'images/sprite.svg#arrow-left');
    });

    snapper.on('close', function() {
        return $('.menu__dragger use')[0]
            .setAttribute('xlink:href', 'images/sprite.svg#menu');
    });

    $('.menu__dragger').on('click', function() {
        var state = snapper.state().state;
        return state === 'closed' ? snapper.open('right') : snapper.close();
    });

    return snapper;
}

function loadAnchorScrollNavigation(callback) {
    var scrollableArea = document.getElementById('menu__content');
    var scroller = zenscroll.createScroller(scrollableArea, 2000, 0);

    $('[data-anchor-link]').on('click', function(event) {
        var hasHref = event.target.hasAttribute('href');
        var target = hasHref ? event.target.getAttribute('href') : '';
        target = target.replace('#', '');
        var elmTarget = document.getElementById(target);
        if (!elmTarget) { return null; }
        scroller.to(elmTarget);
        callback();
    });

    return scroller;
}
