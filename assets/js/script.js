var bounceInt=null;
$(document).ready(function() {


	const distanceToNextImage = -600;
	let currentImageNumber = 0;


	$(".goright").click(function() {
    if (currentImageNumber == 5) {
      return;
    }
		currentImageNumber++;
		$("#carousel-strip").css({left: currentImageNumber*distanceToNextImage});

	})

	$(".goleft").click(function() {
    if (currentImageNumber == 0) {
      return;
    }
		currentImageNumber--;
		$("#carousel-strip").css({left: currentImageNumber*distanceToNextImage});

	})

	$(".item").click(function() {
		currentImageNumber = parseInt($(this).attr('id'),10);
		$("#carousel-strip").css({left: currentImageNumber*distanceToNextImage});
	})
	
	
	bounceInt = setInterval(function() {
    $('#clickthese').effect('bounce',1000)
}, 1000);

	$("#hi").fadeIn("slow");
	setTimeout(function() {
  	$("#imjessie").fadeIn("slow");
}, 1000);

  $("#clickgrandcanyon").click(function() {
    var x = document.getElementById("grandcanyon");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  })

  $("#clickrocksit").click(function() {
    var x = document.getElementById("thisisme");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  })

  $(".click-icong").click(function() {

    if ($(".caption").css("display")=="none") {
      $(".caption").show();
    } else {
      $(".caption").hide();
    }
    /*var x = document.getElementsByClassName("click");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }*/
  })

	$("#bearmaps").click(function() {
		if ($("#overlay1").css("display")=="none") {
      $("#overlay1").show();
			$("#bearmapsd").show();
    } else {
      $("#overlay1").hide();
			$("#bearmapsd").hide();
    }
	})

	$("#flashlight").click(function() {
		if ($("#overlay2").css("display")=="none") {
			$("#overlay2").show();
			$("#flashlightd").show();
		} else {
			$("#overlay2").hide();
			$("#flashlightd").hide();
		}
	})

	$("#tilegame").click(function() {
		if ($("#overlay3").css("display")=="none") {
			$("#overlay3").show();
			$("#tilegamed").show();
		} else {
			$("#overlay3").hide();
			$("#tilegamed").hide();
		}
	})

	$("#depth").click(function() {
		if ($("#overlay4").css("display")=="none") {
			$("#overlay4").show();
			$("#depthd").show();
		} else {
			$("#overlay4").hide();
			$("#depthd").hide();
		}
	})

	$("#maps").click(function() {
		if ($("#overlay5").css("display")=="none") {
			$("#overlay5").show();
			$("#mapsd").show();
		} else {
			$("#overlay5").hide();
			$("#mapsd").hide();
		}
	})

	$("#antsvszombees").click(function() {
		if ($("#overlay6").css("display")=="none") {
			$("#overlay6").show();
			$("#antsvszombeesd").show();
		} else {
			$("#overlay6").hide();
			$("#antsvszombeesd").hide();
		}
	})

	$("#website").click(function() {
		if ($("#overlay7").css("display")=="none") {
			$("#overlay7").show();
			$("#websited").show();
		} else {
			$("#overlay7").hide();
			$("#websited").hide();
		}
	})

	$("#clickthese").click(function() {
		clearInterval(bounceInt);
		var x = document.getElementById("learnmore");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
	})



	/*$("#thisisme").live('click', function() {
		$("#thisisme").animate({top: "+=100px"});
	})*/
/*
  $("#jiyoo").click(function() {
    var x = document.getElementById("centralcoast");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
  })

  $("#clickbampfa").click(function() {
    var x = document.getElementById("bampfa");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  })

  $("#lookaway").click(function() {
    var x = document.getElementById("hiking");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  })

  $("#swing").click(function() {
    var x = document.getElementById("bigc");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  })

  $("#volleyball").click(function() {
    var x = document.getElementById("height");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  })

  $("#crescent-city").click(function() {
    var x = document.getElementById("travel");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }) */
});
