$(document).ready(function(){
    $(".whatsps").show()
    $("#iframewhatsps").hide()
    $(".whatsps").click(function(){
        $(".whatsps").hide();
        $("#iframewhatsps").fadeToggle()
        $("#iframewhatsps")[0].src += "?autoplay=1";
    })
})

$(document).ready(function(){
    $(".Howspsworks").show()
    $("#Howspsworks").hide()
    $(".Howspsworks").click(function(){
        $(".whatsps").hide();
        $("#Howspsworks").fadeToggle()
        $("#Howspsworks")[0].src += "?autoplay=1";
    })
})

$(document).ready(function(){
    $(".joinsps1").show()
    $("#joinsps1").hide()
    $(".joinsps1").click(function(){
        $(".joinsps1").hide();
        $("#joinsps1").fadeToggle()
        $("#joinsps1")[0].src += "?autoplay=1";
    })
})

$(document).ready(function(){
    $(".howmuchcostsps").show()
    $("#howmuchcostsps").hide()
    $(".howmuchcostsps").click(function(){
        $(".howmuchcostsps").hide();
        $("#howmuchcostsps").fadeToggle()
        $("#howmuchcostsps")[0].src += "?autoplay=1";
    })
})

$(document).ready(function(){
    $(".convocationc").show()
    $("#convocationc").hide()
    $(".convocationc").click(function(){
        $(".convocationc").hide();
        $("#convocationc").fadeToggle()
        $("#convocationc")[0].src += "?autoplay=1";
    })
})

