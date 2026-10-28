
/* =========================================
   DICODING CERTIFICATE SLIDER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById("dicoding-slider");
    const prevBtn = document.getElementById("dicoding-prev");
    const nextBtn = document.getElementById("dicoding-next");
    const counter = document.getElementById("dicoding-counter");

    if (!slider || !prevBtn || !nextBtn) {
        return;
    }

    const cards = Array.from(
        slider.querySelectorAll(".dicoding-card")
    );

    if (cards.length === 0) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    // Menghitung jumlah kartu yang terlihat
    function getVisibleCount() {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const styles = window.getComputedStyle(slider);
        const gap = parseFloat(styles.columnGap) || 0;

        return Math.max(
            1,
            Math.floor(
                (slider.clientWidth + gap + 1) /
                (cardWidth + gap)
            )
        );
    }

    // Mencari posisi kartu terdekat
    function getCurrentIndex() {
        const scrollLeft = slider.scrollLeft;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
            const distance = Math.abs(
                card.offsetLeft -
                cards[0].offsetLeft -
                scrollLeft
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        return closestIndex;
    }

    // Menggeser ke kartu tertentu
    function goToCard(index) {
        const visible = getVisibleCount();

        const maxIndex = Math.max(
            0,
            cards.length - visible
        );

        const targetIndex = Math.min(
            Math.max(index, 0),
            maxIndex
        );

        const targetLeft =
            cards[targetIndex].offsetLeft -
            cards[0].offsetLeft;

        slider.scrollTo({
            left: targetLeft,
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "auto" : "smooth"
        });
    }

    // Memperbarui tombol dan counter
    function updateSlider() {
        const visible = getVisibleCount();
        const current = getCurrentIndex();

        const maxScroll =
            slider.scrollWidth - slider.clientWidth;

        prevBtn.disabled = slider.scrollLeft <= 2;

        nextBtn.disabled =
            slider.scrollLeft >= maxScroll - 2;

        if (counter) {
            const start = Math.min(
                current + 1,
                cards.length
            );

            const end = Math.min(
                current + visible,
                cards.length
            );

            const format = number =>
                String(number).padStart(2, "0");

            counter.textContent =
                `${format(start)} — ${format(end)} / ` +
                `${format(cards.length)}`;
        }
    }

    // Tombol sebelumnya
    prevBtn.addEventListener("click", () => {
        goToCard(getCurrentIndex() - 1);
    });

    // Tombol berikutnya
    nextBtn.addEventListener("click", () => {
        goToCard(getCurrentIndex() + 1);
    });

    // Memperbarui saat digeser manual
    slider.addEventListener("scroll", updateSlider, {
        passive: true
    });

    // Memperbarui saat ukuran layar berubah
    window.addEventListener("resize", updateSlider);

    // Mendukung tombol panah keyboard
    slider.addEventListener("keydown", event => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            goToCard(getCurrentIndex() + 1);
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            goToCard(getCurrentIndex() - 1);
        }
    });

    updateSlider();
});
