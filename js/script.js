var data1 = [{
  "header": 'Name',
  'content': 'HRM'
}, {
  "header": 'Detalis',
  'content': 'Insert Info ,Update Info , Delete Info , Search Info'
}, {
  "header": 'Member',
  'content': '2'
}, {
  "header": 'Technicals',
  'content': 'Java Swing , MySql , Git'
}];
var data2 = [{
  "header": 'Name',
  'content': 'Cakes Website'
}, {
  "header": 'Detalis',
  'content': 'Insert ,Update , Delete, Search, Check Bills , Login, Security'
}, {
  "header": 'Member',
  'content': '2'
}, {
  "header": 'Technicals',
  'content': 'JSP Servlet , MySQL'
}];
var data3 = [{
  "header": 'Name',
  'content': 'Smart Home'
}, {
  "header": 'Detalis',
  'content': 'Control light , Door , Motor Water , Sensor Temp by Websie & Voice'
}, {
  "header": 'Member',
  'content': '3'
}, {
  "header": 'Technicals',
  'content': 'Node MCU Esp32 , Arduino , PHP , MySQL, Google Assistant'
}];
var data4 = [{
  "header": 'Name',
  'content': 'Profolio'
}, {
  "header": 'Detalis',
  'content': ' Build CV Online'
}, {
  "header": 'Member',
  'content': '1'
}, {
  "header": 'Technicals',
  'content': 'HTML , CSS , JavaScript'
}];

function detailsTable(data) {
  var detailsTable;
  detailsTable = '<table id="detailsTable">';
  data.forEach(function (item, index) {
    console.log(index);
    detailsTable += '<tr>';
    detailsTable += '<td>' + item.header + '</td>';
    detailsTable += '<td>' + item.content + '</td>';
    detailsTable += '</tr>';
  })
  detailsTable += '</table>';
  return detailsTable;
}
function modal(nameProductInfo, dataProduct) {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById(nameProductInfo);
  var closebtn = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
    var str = detailsTable(dataProduct);
    $("#content").html(str);
  }
  closebtn.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
function progressbarRun(element, started, end) {
  var startpoint = started;
  $(element).css("width", started + "%").children("#skill-java-core").css("left", started + "%");
  $(element).css("width", started + "%").children("#java-core").css("left", started + "%");
  var movepoint = started;
  var myprogressbarRun = setInterval(function () {
    movepoint++;
    $(element).css("width", movepoint + "%").children(".skill-java-core").css("left", (movepoint - 3) + "%").html(movepoint + "%");
    $(element).css("width", movepoint + "%").children(".java-core").css("left", movepoint - 1 + "%");
    if (movepoint >= end) {
      clearInterval(myprogressbarRun);
    }
  }, 60);
}

function clickActiveMenu() {
  var target = $("#about1").attr("href");
  $('html, body').stop().animate({
    scrollTop: $("#about").offset().top
  }, 600, function () {
    location.hash = target;
  });
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 700, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
}
function onScroll() {
  var scrollPos = $(document).scrollTop();
  var currLink = $("#about");
  currLink.addClass("active");
  $('#navbarNav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#navbarNav ul li a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
function xxx (){
  progressbarRun("#progress-bar-child", 0, 70);
  progressbarRun("#progress-bar-child1", 0, 60);
  progressbarRun("#progress-bar-child2", 0, 50);
  progressbarRun("#progress-bar-child3", 0, 60);
  progressbarRun("#progress-bar-child4", 0, 50);
  progressbarRun("#progress-bar-child5", 0, 60);
}
$(document).ready(function () {
  $("#phone-contactme").on("click", function () {
    $('html, body').stop().animate({
      'scrollTop': $("#about").offset().top + 2
    }, 700, 'swing', function () {
    });
  });
  // xxx();
  // setInterval(function(){  progressbarRun("#progress-bar-child", 0, 70);
  // progressbarRun("#progress-bar-child1", 0, 60);
  // progressbarRun("#progress-bar-child2", 0, 50);
  // progressbarRun("#progress-bar-child3", 0, 60);
  // progressbarRun("#progress-bar-child4", 0, 50);
  // progressbarRun("#progress-bar-child5", 0, 60); }, 15000);
  progressbarRun("#progress-bar-child", 0, 70);
  progressbarRun("#progress-bar-child1", 0, 60);
  progressbarRun("#progress-bar-child2", 0, 50);
  progressbarRun("#progress-bar-child3", 0, 60);
  progressbarRun("#progress-bar-child4", 0, 50);
  progressbarRun("#progress-bar-child5", 0, 60);

  
  ///////////
  clickActiveMenu();
  modal("product-info1", data1);
  modal("product-info2", data2);
  modal("product-info3", data3);
  modal("product-info4", data4);

});