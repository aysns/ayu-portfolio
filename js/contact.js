
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("cv-modal");
    const openBtn = document.getElementById("open-cv");
    const closeBtn = document.getElementById("close-cv");
    const frame = document.getElementById("cv-frame");

    if (!modal || !openBtn || !closeBtn || !frame) return;

    let previousFocus = null;

    function openModal() {
        previousFocus = document.activeElement;

        if (!frame.src) {
            frame.src = frame.dataset.src;
        }

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";

        if (previousFocus) {
            previousFocus.focus();
        }
    }

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    // Klik area gelap untuk menutup popup
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Tombol Escape untuk menutup popup
    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("active")) return;

        if (event.key === "Escape") {
            closeModal();
        }

        // Jaga fokus keyboard tetap di popup
        if (event.key === "Tab") {
            const focusable = [closeBtn, frame];
            const currentIndex = focusable.indexOf(
                document.activeElement
            );

            if (event.shiftKey && currentIndex <= 0) {
                event.preventDefault();
                frame.focus();
            } else if (!event.shiftKey &&
                       currentIndex === focusable.length - 1) {
                event.preventDefault();
                closeBtn.focus();
            }
        }
    });
});


/* =====================================
   BACK TO TOP
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById("back-to-top");

    if (!backToTop) return;

    function toggleBackToTop() {
        const isVisible = window.scrollY > 350;

        backToTop.classList.toggle("show", isVisible);
    }

    window.addEventListener("scroll", toggleBackToTop, {
        passive: true
    });

    // Periksa posisi scroll saat halaman pertama dimuat
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: reducedMotion ? "instant" : "smooth"
        });
    });
});
