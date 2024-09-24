$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});









document.addEventListener('DOMContentLoaded', function() {
    const firstSlide = document.querySelector('.carousel-item.active:first-of-type');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function playAnimation() {
        if (isElementInViewport(firstSlide)) {
            firstSlide.classList.add('animate');
        }
    }

    playAnimation();
    window.addEventListener('scroll', playAnimation);
});









function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach((el, index) => {
        if (isElementInViewport(el)) {
            setTimeout(() => {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }, index * 300);
        }
    });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', onScroll);







$(document).ready(function() {
    $(window).on('scroll', function() {
        var cont = $('#cont');
        var contTop = cont.offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > contTop) {
            cont.addClass('visible');
        }
    });
});









document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.custom-item.animate');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const index = item.getAttribute('data-index');
                item.style.transitionDelay = `${index * 0.3}s`; 
                item.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); 

    items.forEach(item => {
        observer.observe(item);
    });
});




$(document).ready(function() {
    $(window).on('scroll', function() {
        var conten = $('#conten');
        var contenTop = conten.offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > contenTop) {
            conten.addClass('visible');
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = parseInt(card.getAttribute('data-index'));
          const delay = (index - 1) * 0.3; 
          card.style.transitionDelay = `${delay}s`; 
          card.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });
  });







  
document.addEventListener("DOMContentLoaded", function() {
    const targets = [
        { element: document.getElementById('image'), delay: 0 },
        { element: document.getElementById('heading'), delay: 500 },
        { element: document.getElementById('paragraph'), delay: 1000 },
        { element: document.getElementById('subheading'), delay: 1500 },
        { element: document.getElementById('subparagraph'), delay: 2000 },
        { element: document.getElementById('nemo'), delay: 2500 },
        { element: document.getElementById('nemo-paragraph'), delay: 3000 },
        { element: document.getElementById('dine'), delay: 3500 },
        { element: document.getElementById('dine-paragraph'), delay: 4000 },
        { element: document.getElementById('tride'), delay: 4500 },
        { element: document.getElementById('tride-paragraph'), delay: 5000 }
    ];

    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                targets.forEach(({ element, delay }) => {
                    if (element === entry.target) {
                        setTimeout(() => {
                            element.style.opacity = 1;
                        }, delay);
                    }
                });
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    
    targets.forEach(({ element }) => {
        observer.observe(element);
    });
});












const contente = document.getElementById('contente');
  const links = document.querySelectorAll('.links a');

  const data = {
    link1: {
      title: 'Voluptatem dignissimos provident',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br><i class="fas fa-check-double checkmarks"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br><i class="fas fa-check-double checkmarks"></i> Duis aute irure dolor in reprehenderit in voluptate velit.<br><br><i class="fas fa-check-double checkmarks"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.`,
      image: 'image/imagee12.jpg'
    },
    link2: {
      title: 'Praesentium voluptatum deleniti',
      text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.<br><br><i class="fas fa-check-double checkmarks"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br><i class="fas fa-check-double checkmarks"></i> Duis aute irure dolor in reprehenderit in voluptate velit.<br><br><i class="fas fa-check-double checkmarks"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.`,
      image: 'image/imagee11.jpg'
    },
    link3: {
      title: 'Explicabo nemo enim ipsam',
      text: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.<br><br><i class="fas fa-check-double checkmarks"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br><i class="fas fa-check-double checkmarks"></i> Duis aute irure dolor in reprehenderit in voluptate velit.<br><br><i class="fas fa-check-double checkmarks"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.`,
      image: 'image/imagee6.jpg'
    },
    link4: {
      title: 'Nostrum exercitationem ullam',
      text: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.<br><br><i class="fas fa-check-double checkmarks"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br><i class="fas fa-check-double checkmarks"></i> Duis aute irure dolor in reprehenderit in voluptate velit.<br><br><i class="fas fa-check-double checkmarks"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.`,
      image: 'image/imagee8.jpg'
    }
  };

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = e.target.id;

   
      links.forEach(link => link.classList.remove('active'));

      e.target.classList.add('active');

      
      contente.innerHTML = `
        <div>
          <h2>${data[id].title}</h2>
          <p>${data[id].text}</p>
        </div>
        <img src="${data[id].image}" alt="${data[id].title}">
      `;
    });
  });






$(document).ready(function() {
    $(window).on('scroll', function() {
        var content = $('#content');
        var contentTop = content.offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > contentTop) {
            content.addClass('visible');
        }
    });
});




$(document).ready(function() {
    $(window).on('scroll', function() {
        var content = $('#content');
        var contentTop = content.offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > contentTop) {
            content.addClass('visible');
        }
    });
});









$(document).ready(function() {
    $('.filter-link').click(function(e) {
        e.preventDefault();
        var filter = $(this).data('filter');
        if (filter === 'all') {
            $('.gallery-item').show();
        } else {
            $('.gallery-item').hide();
            $('.gallery-item[data-category="' + filter + '"]').show();
        }
    });
});
$(document).ready(function() {
    $('.filter-link').click(function(e) {
        e.preventDefault();
        $('.filter-link').removeClass('active'); 
        $(this).addClass('active'); 
        var filter = $(this).data('filter');
        if (filter === 'all') {
            $('.gallery-item').addClass('show');
        } else {
            $('.gallery-item').removeClass('show');
            $('.gallery-item[data-category="' + filter + '"]').addClass('show');
        }
    });
});




$(document).ready(function() {
    $(window).on('scroll', function() {
        var contentte = $('#contentte');
        var contentteTop = contentte.offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > contentteTop) {
            contentte.addClass('visible');
        }
    });
});












  document.addEventListener('DOMContentLoaded', function() {
            const carouselItems = document.querySelectorAll('.carousel-items');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const posts = entry.target.querySelectorAll('.post');
                        posts.forEach((post, index) => {
                            setTimeout(() => {
                                post.classList.add('reveal');
                            }, index * 200); 
                        });
                    }
                });
            }, { threshold: 0.1 });


            carouselItems.forEach(items => {
                observer.observe(items);
            });
        });









        $(document).ready(function() {
            $(window).on('scroll', function() {
                var contentt = $('#contentt');
                var contenttTop = contentt.offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();
        
                if (windowBottom > contenttTop) {
                    contentt.addClass('visible');
                }
            });
        });














        
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".cards");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards= entry.target;
                const delay = cards.getAttribute('data-delay');
                cards.style.animationDelay = delay;
                cards.classList.add("show");
                observer.unobserve(cards); 
            }
        });
    }, { threshold: 0.1 }); 

    cards.forEach(cards=> observer.observe(cards));
});