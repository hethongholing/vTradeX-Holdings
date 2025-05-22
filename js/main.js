(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
            $('#phone-tada').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
            $('#phone-tada').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Seach
    $(document).ready(function () {
        $('#toggle-search').click(function (e) {
            e.preventDefault();
            $('#search-box').toggleClass('d-none').toggleClass('show');

            // Auto-focus nếu hiện
            if ($('#search-box').hasClass('show')) {
                $('#search-input').focus();
            }
        });

        // Đóng nếu click ra ngoài
        $(document).click(function (e) {
            if (!$(e.target).closest('#toggle-search, #search-box').length) {
                $('#search-box').addClass('d-none').removeClass('show');
            }
        });
    });

    // dropdown 
    $(document).ready(function() {
        $('#megaMenuTabs a').click(function(e) {
            e.preventDefault();
            $('#megaMenuTabs a').removeClass('active');
            $('.mega-content').addClass('d-none');

            $(this).addClass('active');
            const target = $(this).data('target');
            $(target).removeClass('d-none');
        });
    });
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
<script>
  const btn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>



    // Roadmap carousel
    $(".roadmap-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });



    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });




})(jQuery);

function toggleChat() {
    var chatBox = document.getElementById('messenger-chat-box');
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
        setTimeout(function() {
            document.getElementById('chat-input').focus();
        }, 200);
    } else {
        chatBox.style.display = "none";
    }
}
function sendChat() {
    var input = document.getElementById('chat-input');
    var msg = input.value.trim();
    if (msg.length === 0) return;
    var chatMessages = document.getElementById('chat-messages');
    var userMsg = document.createElement('div');
    userMsg.innerHTML = '<div style="text-align:right;"><span style="background:#e9f5ff; color:#0084ff; border-radius:12px; padding:6px 12px; display:inline-block; margin-bottom:4px;">' + msg + '</span></div>';
    chatMessages.appendChild(userMsg);
    input.value = '';
    setTimeout(function() {
        var botMsg = document.createElement('div');
        botMsg.innerHTML = '<div style="text-align:left;"><span style="background:#f1f1f1; color:#333; border-radius:12px; padding:6px 12px; display:inline-block; margin-bottom:4px;">Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.</span></div>';
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 700);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
