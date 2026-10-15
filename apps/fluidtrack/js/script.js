document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('screenshots-scroll');
    const prevBtn = document.getElementById('screenshots-prev');
    const nextBtn = document.getElementById('screenshots-next');

    if (scrollContainer && prevBtn && nextBtn) {
        const getScrollAmount = () => {
            const item = scrollContainer.querySelector('.screenshot-item');
            if (item) {
                return item.clientWidth + parseFloat(getComputedStyle(scrollContainer).gap || 16);
            }
            return 300;
        };

        prevBtn.addEventListener('click', function () {
            scrollContainer.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', function () {
            scrollContainer.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }
});