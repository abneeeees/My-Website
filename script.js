document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Loaded");  // ✅ Debug line — check Console

    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();  // 🧠 Stops default jump
            const targetId = link.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                console.warn("No element found for:", targetId);
            }
        });
    });
});
