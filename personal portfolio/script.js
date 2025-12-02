// PROJECT DETAILS
const projectDetails = {
    p1: {
        title: "Learnova – Responsive Landing Page",
        desc: "Learnova is a modern student-focused learning platform. It features a beautifully designed responsive landing page with animations, structured sections, and a clean user-friendly interface.",
        link: "https://github.com/Sumaiya-khanam06/SCT_WD_01",
        image: "images/learnova.jpg"
    },

    p2: {
        title: "Stopwatch Web Application",
        desc: "A simple, smooth, and interactive stopwatch app with start, stop, reset, and lap functions. Designed with a clean UI and full responsiveness.",
        link: "https://github.com/Sumaiya-khanam06/SCT_WD_02",
        image: "images/stopwatch.jpg"
    },

    p3: {
        title: "AI Health Predictor Pro",
        desc: "An AI-powered health prediction tool that analyzes user inputs and suggests possible health outcomes. Includes real-time voice assistance and a modern UI.",
        link: "https://github.com/Sumaiya-khanam06/care-now",
        image: "images/AI health predictor pro.jpg"
    }
};

// MODAL FUNCTIONALITY
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImage = document.getElementById("modalImage");
const modalLink = document.getElementById("modalLink");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const key = card.getAttribute("data-project");

        modalTitle.textContent = projectDetails[key].title;
        modalDesc.textContent = projectDetails[key].desc;
        modalImage.src = projectDetails[key].image;
        modalLink.href = projectDetails[key].link;

        modal.style.display = "flex";
        document.body.style.overflow = 'hidden'; // prevent background scroll
    });
});

closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
};

// SECTION FADE-IN ANIMATION
const sections = document.querySelectorAll("section");

function animateSections() {
    sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < window.innerHeight - 100) {
            sec.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", animateSections);
animateSections();
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const key = card.getAttribute("data-project");

        modalTitle.textContent = projectDetails[key].title;
        modalDesc.textContent = projectDetails[key].desc;
        modalImage.src = projectDetails[key].image;
        modalLink.href = projectDetails[key].link;

        // Reset image size before scaling
        modalImage.style.maxHeight = "50vh";
        modalImage.style.width = "auto";

        // After image loads, check if it’s too tall
        modalImage.onload = () => {
            const viewportHeight = window.innerHeight;
            if (modalImage.naturalHeight > viewportHeight * 0.5) {
                modalImage.style.maxHeight = viewportHeight * 0.5 + "px";
            }
        };

        modal.style.display = "flex";
        document.body.style.overflow = 'hidden';
    });
});
