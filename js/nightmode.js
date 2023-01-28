function switchNightMode() {
    if($("body").hasClass("night")) {
        document.getElementById("night-mode").title="深色模式";
    }
    else{
        document.getElementById("night-mode").title="浅色模式";
    }
    $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($("body")), setTimeout(function(){var DarkMode=$("body").hasClass("night")?'1':'0';(DarkMode=='0')?($("#nightMode").click(),$("body").addClass("night"),$("#nightMode").removeClass("fa-moon-o").addClass("fa-lightbulb-o"),$('#modeicon').attr("xlink:href","#icon-sun")):($("#nightMode").click(),$("body").removeClass("night"),$("nightMode").removeClass("fa-lightbulb-o").addClass("fa-moon-o"),$('#modeicon').attr("xlink:href","#icon-_moon")),setTimeout(function(){$(".Cuteen_DarkSky").fadeOut(1e3,function(){$(this).remove()})},2e3)}),50;
}
function checkNightMode(){
    if($("body").hasClass("night")) {
        $("#nightMode").removeClass("fa-moon-o");$("#nightMode").addClass("fa-lightbulb-o");$('#modeicon').attr("xlink:href","#icon-sun");return;
    }
    if($("body").hasClass("night")){
        $("#nightMode").removeClass("fa-lightbulb-o");$("#nightMode").addClass("fa-moon-o");$('#modeicon').attr("xlink:href","#icon-_moon");return;
    }
    //如果没有切换过，从 cookie 中获取标志位判断
    if (document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") === '') {
        if (new Date().getHours() >= 19 || new Date().getHours() < 6) {
            $("body").addClass("night");
            document.cookie = "DarkMode=1;path=/";
            console.log('夜间模式开启');
            $('#nightMode').removeClass("fa-moon-o").addClass("fa-lightbulb-o");
        } else {
            $("body").removeClass("night");
            document.cookie = "DarkMode=0;path=/";
            console.log('夜间模式关闭');
            $('#nightMode').removeClass("fa-lightbulb-o").addClass("fa-moon-o");
        }
    } else {
        var DarkMode = document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
        if (DarkMode == '0') {
            $("body").removeClass("night");
            $('#nightMode').removeClass("fa-lightbulb-o").addClass("fa-moon-o");
        } else if (DarkMode == '1') {
            $("body").addClass("night");
            $('#nightMode').removeClass("fa-moon-o").addClass("fa-lightbulb-o");
        }
    }
}
// 加载脚本时执行
checkNightMode();