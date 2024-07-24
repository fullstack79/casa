document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
  
    // Insert dots into the DOM
    items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });
  
    let dots = document.querySelectorAll(".dot");
  
    // Function to show a specific item
    function showItem(index) {
      items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
          item.classList.add("active");
          dots[idx].classList.add("active");
        }
      });
    }
  
    // Event listeners for buttons
    document.querySelector(".prev").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    });
  
    // Event listeners for dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showItem(index);
      });
    });
  });

/*carousel pdf*/

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel-pdf");
  let items = carousel.querySelectorAll(".item2");
  let dotsContainer = document.querySelector(".dots2");

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot2");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot2);
  });

  let dots = document.querySelectorAll(".dot2");

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active2");
      dots[idx].classList.remove("active2");
      if (idx === index) {
        item.classList.add("active2");
        dots[idx].classList.add("active2");
      }
    });
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active2")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active2")
    );
    showItem((index + 1) % items.length);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});

/*carousel videos*/

//VIDEO THUMBS FUNCTIONS//

$('.video-thumb:nth-child(1)').clone().appendTo('.video-thumbs').addClass('clone first-clone');

$('.video-thumbs').find('.video-thumb:nth-child(5)').removeClass('active thumb-1').attr('index', '5');

$('.video-thumb:nth-child(4)').clone().prependTo('.video-thumbs');

$('.video-thumbs').find('.video-thumb:nth-child(1)').removeClass('active').addClass('clone last-clone').attr('index', '0');


function nextVideoThumb() {
	var currentThumb = parseInt($('.video-thumbs').attr('current-thumb'));
	var totalThumbsInit = $('.video-thumb').length;
	var totalThumbs = parseInt(totalThumbsInit - 2);
	var activeClasses = $('.video-thumbs').attr('class');
	var splitClasses = activeClasses.split(' ');
	var thisClass = splitClasses[1];
	
	$('.video-thumb').removeClass('active');

	if (currentThumb < totalThumbs) {
		var nextThumb = parseInt(currentThumb + 1);
		var nextClass = 'position-' + nextThumb;
		$('.video-thumbs').attr('current-thumb', nextThumb);
		$('.video-thumbs').removeClass(thisClass);
		$('.video-thumbs').addClass(nextClass);
		$('.video-thumb[index='+nextThumb+']').addClass('active');

	} else if (currentThumb == totalThumbs) {
		var nextThumb = 1;
		var nextClass = 'position-1';
		$('.video-thumbs').attr('current-thumb', nextThumb);
		$('.video-thumbs').removeClass(thisClass);
		$('.video-thumbs').addClass(nextClass);
		$('.video-thumb[index='+nextThumb+']').addClass('active');
	}

};

function prevVideoThumb() {
	var currentThumb = parseInt($('.video-thumbs').attr('current-thumb'));
	var totalThumbsInit = $('.video-thumb').length;
	var totalThumbs = parseInt(totalThumbsInit - 2);
	var activeClasses = $('.video-thumbs').attr('class');
	var splitClasses = activeClasses.split(' ');
	var thisClass = splitClasses[1];

	if (currentThumb > 1) {
		var prevThumb = parseInt(currentThumb - 1);
		var prevClass = 'position-' + prevThumb;
		$('.video-thumbs').attr('current-thumb', prevThumb);
		$('.video-thumbs').removeClass(thisClass);
		$('.video-thumbs').addClass(prevClass);
		$('.video-thumb[index='+prevThumb+']').addClass('active');

	} else if (currentThumb == 1) {
		var prevThumb = totalThumbs;
		var prevClass = 'position-' + totalThumbs;
		$('.video-thumbs').attr('current-thumb', prevThumb);
		$('.video-thumbs').removeClass(thisClass);
		$('.video-thumbs').addClass(prevClass);
		$('.video-thumb[index='+prevThumb+']').addClass('active');
	}
};

$('.video-thumbs-frame').on('swipeleft', nextVideoThumb);
$('.video-thumbs-frame').on('swiperight', prevVideoThumb);

//