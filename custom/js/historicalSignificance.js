document.addEventListener('DOMContentLoaded', function() {
    const contentElements = document.querySelectorAll('.content');

    function handleScroll() {
        const windowHeight = window.innerHeight;

        contentElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= windowHeight) {
                element.classList.add('is-visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
