$(document).ready(function() {
  $("#read__more").hide();
  $("#readless").hide();

  $(".medium").click(function() {
    $("#menu").slideToggle();
  });

  window.onscroll = function() {
    myFunction();
    changeClass();
  };
  var spanIcon = document.getElementById("topnav");
  var pos = spanIcon.offsetTop;
  //position the menu bar on the top
  function myFunction() {
    if (window.pageYOffset >= pos) {
      spanIcon.style.top = 0;
      spanIcon.style.position = "sticky";
    } else {
      spanIcon.style.position = "";
    }
  }
  //change active class
  function changeClass() {
    let navigationLinks = document.querySelectorAll("nav ul li a");
    let fromTop = window.scrollY;
    
    navigationLinks.forEach(link=> {
      let section = document.querySelector(link.hash);
      
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      )
      {
        link.classList.add("active");
      }
      else {
        link.classList.remove("active");
      }
    });
  }
  $("#read").click(function() {
    $("#readless").show();
    $("#read").hide();
    $("#read__more").slideToggle();
  });
  $("#readless").click(function() {
    $("#read").show();
    $("#readless").hide();
    $("#read__more").slideToggle();
  });
  $("li").click(function(){
    $("#menu").slideToggle();
  });
  $("#move").click(function(){
    window.scrollTo(0,0);
  });
  //script for barchart
  var ctx = document.getElementById('barChart');
  var barChart = new Chart(ctx,
    {
      type: 'bar',
      data: {
        labels: ['Web Development',
          'Digital Marketing',
          'Mobile Development',
          'Fullstack Development'],
        datasets: [{
          label: '% of services',
          data: [90,
            80,
            50,
            50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

}
);