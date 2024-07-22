document.addEventListener('DOMContentLoaded', (event) => {
    const modals = document.querySelectorAll('.modal');
    const viewMoreButtons = document.querySelectorAll('.view-more');
    const closeButtons = document.querySelectorAll('.close');

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });

    let slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

    function showSlides(n) {
        let slides = document.querySelectorAll('#modal2 .slide');
        let dots = document.querySelectorAll('#modal2 .dot');

        // Xử lý chỉ số slide nếu nó vượt qua phạm vi
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        // Ẩn tất cả các slide
        slides.forEach(slide => slide.style.display = 'none');

        // Xóa lớp 'action' từ tất cả các chấm tròn
        dots.forEach(dot => dot.classList.remove('action'));

        // Hiển thị slide hiện tại
        slides[slideIndex - 1].style.display = 'block';

        // Thêm lớp 'action' vào chấm tròn tương ứng với slide hiện tại
        dots[slideIndex - 1].classList.add('action');
    }
});



/** Cuộn trang */

const line = document.querySelector(".timeline-innerline");
const points = Array.from(document.querySelectorAll(".row section"));
const icons = Array.from(document.querySelectorAll(".icon"));

function updateTimelineProgress() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Tính toán chiều cao của thanh timeline-innerline
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    line.style.height = `${Math.min(100, scrollPercent)}%`;

    // Tô màu các điểm tròn khi thanh timeline-innerline đi qua chúng
    points.forEach((point, index) => {
        const pointRect = point.getBoundingClientRect();
        const pointTop = pointRect.top + window.scrollY;
        const pointBottom = pointTop + pointRect.height;

        const isPointInViewport = pointTop < (scrollTop + windowHeight) && pointBottom > scrollTop;
        const isPointUnderLine = pointTop < (scrollTop + windowHeight) && pointBottom > (scrollTop - windowHeight);


    });
}

// Gọi hàm khi cuộn và thay đổi kích thước
window.addEventListener("scroll", updateTimelineProgress);
window.addEventListener("resize", updateTimelineProgress);

// Khởi tạo
updateTimelineProgress();


/**Hiệu ứng ra vào */

var rows = document.querySelectorAll(".row");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    rows.forEach(function(row) {
        if (isElementInViewport(row)) {
            row.classList.add("in-view");
        } else {
            row.classList.remove("in-view");
        }
    });
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);



/** */
/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});