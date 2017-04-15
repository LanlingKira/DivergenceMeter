$.extend({
    startTime:function() {
        var today = new Date();
        var h = today.getHours().toString();
        var m = today.getMinutes().toString();
        var s = today.getSeconds().toString();
        var ms = today.getMilliseconds();
        h = $.checkTime(h);
        m = $.checkTime(m);
        s = $.checkTime(s);
        $("#t1").attr("class", "n" + h.charAt(0));
        $("#t2").attr("class", "n" + h.charAt(1));
        $("#t4").attr("class", "n" + m.charAt(0));
        $("#t5").attr("class", "n" + m.charAt(1));
        $("#t7").attr("class", "n" + s.charAt(0));
        $("#t8").attr("class", "n" + s.charAt(1));
        if (ms < 500) $("#t3,#t6").addClass("n11");
        $("#t3,#t6").toggleClass("n11");
        t = setTimeout("$.startTime()", 500);
    },
    checkTime:function(i) {
        if (i < 10) i = "0" + i;
        return i;
    },
    reSet:function() {
        var oww = $(window).width();
        if (oww > 1499) $("#timeBox").css({
            transform:"scale(1)",
            "-ms-transform":"scale(1)",
            "-moz-transform":"scale(1)",
            "-webkit-transform":"scale(1)",
            "-o-transform":"scale(1)"
        });
        if (oww < 1500) $("#timeBox").css({
            transform:"scale(" + oww / 1500 + ")",
            "-ms-transform":"scale(" + oww / 1500 + ")",
            "-moz-transform":"scale(" + oww / 1500 + ")",
            "-webkit-transform":"scale(" + oww / 1500 + ")",
            "-o-transform":"scale(" + oww / 1500 + ")"
        });
        var wh = $(window).height();
        var ww = $(window).width();
        var th = $("#timeBox").height();
        var tw = $("#timeBox").width();
        $("#timeBox").css("margin-top", (wh - th) / 2 + "px");
        $("#timeBox").css("margin-left", (ww - tw) / 2 + "px");
    },
    worldLine:function(j) {
        flag = false;
        j++;
        if (j < 50) {
            var rate = Math.random().toString().substr(2, 7);
            $("#t1").attr("class", "n" + rate.charAt(0));
            $("#t2").attr("class", "n10");
            $("#t3").attr("class", "n" + rate.charAt(1));
            $("#t4").attr("class", "n" + rate.charAt(2));
            $("#t5").attr("class", "n" + rate.charAt(3));
            $("#t6").attr("class", "n" + rate.charAt(4));
            $("#t7").attr("class", "n" + rate.charAt(5));
            $("#t8").attr("class", "n" + rate.charAt(6));
        }
        if (j > 49) {
            clearTimeout(r);
            $.SteinsGate();
            return;
        }
        r = setTimeout("$.worldLine(" + j + ")", 50);
    },
    SteinsGate:function() {
        var min = .337187;
        var max = .524298;
        var num = $.randomFloat(min, max) + $.randomFloat(0, max);
        var sg = num.toString().substr(0, 8);
        $("#t1").attr("class", "n" + sg.charAt(0));
        $("#t2").attr("class", "n10");
        $("#t3").attr("class", "n" + sg.charAt(2));
        $("#t4").attr("class", "n" + sg.charAt(3));
        $("#t5").attr("class", "n" + sg.charAt(4));
        $("#t6").attr("class", "n" + sg.charAt(5));
        $("#t7").attr("class", "n" + sg.charAt(6));
        $("#t8").attr("class", "n" + sg.charAt(7));
        if (sg.charAt(0) > 0) {
            audio.play();
            $.creatNote();
        }
        setTimeout(function() {
            $.startTime();
            $("#t3,#t6").attr("class", "n10");
            flag = true;
        }, 3e3);
    },
    randomFloat:function(min, max) {
        return min + Math.random() * (max - min);
    },
    creatNote:function() {
        var newNote = new Notification("EL PSY CONGROO", {
            lang:"utf-8",
            icon:"./img/Christina.jpg",
            tag:"Steins;Gate",
            body:"助手黑丝好棒啊(¯﹃¯)"
        });
    },
    load:function() {
        $.worldLine(0);
        $.reSet();
        $("#t3,#t6").addClass("n10");
        console.log("EL PSY CONGROO!");
        console.log("<thkira.com>");
    }
});

if (Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function(status) {
        if (Notification.permission !== status) {
            Notification.permission = status;
        }
    });
}

var flag = true;

$("#t1,#t2,#t3,#t4,#t5,#t6,#t7,#t8").click(function() {
    if (flag) {
        clearTimeout(t);
        $.worldLine(0);
    }
});

$(document).keydown(function(e) {
    if (!e) var e = window.event;
    if (e.keyCode == 32) {
        if (flag) {
            clearTimeout(t);
            $.worldLine(0);
        }
    }
});

$(document).ready(function() {
    $(document).bind("contextmenu", function(e) {
        return false;
    });
});