/*
   NordicStrength 2026
   Navigation & Page Handling
   Steel-Black Theme + Electric Cyan
*/

// Simple page navigation for multi-file structure
function openPage(page) {
    window.location.href = page;
}

// Back button support
function goBack() {
    window.history.back();
}

// Scroll to top on navigation change
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Small ripple effect (optional)
function buttonPulse(el) {
    el.style.transform = "scale(0.97)";
    setTimeout(() => el.style.transform = "scale(1)", 120);
}
