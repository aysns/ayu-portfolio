
/* ==========================================
   FEATURED PROJECTS — SCROLL REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".projects-section");

    if (!section) return;

    const projects = section.querySelectorAll(".project-showcase");

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
        return;
    }

    section.classList.add("projects-motion-ready");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("project-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    projects.forEach((project) => {
        observer.observe(project);
    });
});
