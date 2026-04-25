document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const settings = document.querySelector(".settings");
  const settingsBtn = document.querySelector(".settings-btn");
  const modeSwitch = document.getElementById("modeSwitch");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const sizeSwitch = document.getElementById("sizeSwitch");
  const contrastSwitch = document.getElementById("contrastSwitch");


  const savedTheme = localStorage.getItem("theme") || "light";
  html.dataset.theme = savedTheme;
  if (modeSwitch && savedTheme === "dark") modeSwitch.classList.add("on");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

  if (settingsBtn && settings) {
    settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      settings.classList.toggle("open");
    });

    document.addEventListener("click", () => settings.classList.remove("open"));
    settings.querySelector(".settings-panel")?.addEventListener("click", e => e.stopPropagation());
  }

  if (modeSwitch) {
    modeSwitch.addEventListener("click", () => {
      const dark = html.dataset.theme !== "dark";
      html.dataset.theme = dark ? "dark" : "light";
      modeSwitch.classList.toggle("on", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    });
  }
    if (sizeSwitch) {
  sizeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("big-text");
    sizeSwitch.classList.toggle("on");
  });
}
    if (contrastSwitch) {
  contrastSwitch.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
    contrastSwitch.classList.toggle("on");
  });
}

  const openBtns = document.querySelectorAll("[data-open-cv]");
  const modal = document.getElementById("cvModal");
  const closeBtn = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalRole = document.getElementById("modalRole");
  const modalProfile = document.getElementById("modalProfile");
  const modalSchool = document.getElementById("modalSchool");
  const modalExp = document.getElementById("modalExp");
  const modalSkills = document.getElementById("modalSkills");
  const modalLang = document.getElementById("modalLang");

  const cvData = {
    paul: {
      name: "Paul Parmantier",
      role: "Développeur / Coordinateur",
      profile: "Organisé, sérieux et motivé pour structurer un site clair et cohérent.",
      school: "Collège — 2022 à 2026",
      exp: "Gestion de projet scolaire, organisation des pages et vérification du code.",
      skills: ["HTML", "CSS", "Organisation", "Débogage", "Travail d'équipe"],
      lang: "Français courant, Anglais scolaire"
    },
    mia: {
      name: "Mia Perrot-Wilkinson",
      role: "Design / Contenu",
      profile: "Créative, attentive aux détails et forte pour rendre un site plus beau.",
      school: "Collège — 2022 à 2026",
      exp: "Charte graphique, mise en page, choix visuel et amélioration de l'interface.",
      skills: ["Charte graphique", "Mise en page", "Créativité", "HTML", "CSS"],
      lang: "Français courant, Anglais courant"
    },
    sara: {
      name: "Sara Zabbar",
      role: "Rédaction / Organisation",
      profile: "Bonne rédaction, claire et efficace pour présenter les informations.",
      school: "Collège — 2022 à 2026",
      exp: "Rédaction des textes, résumé des contenus et harmonisation des pages.",
      skills: ["Rédaction", "Synthèse", "Organisation", "Vérification", "Communication"],
      lang: "Français courant, Anglais intermédiaire"
    },
    raphael: {
      name: "Raphaël Renollaud",
      role: "Tests / Support technique",
      profile: "Curieux et méthodique, utile pour tester l'affichage et corriger les bugs.",
      school: "Collège — 2022 à 2026",
      exp: "Tests de pages, vérification responsive et correction des petits soucis.",
      skills: ["Tests", "Débogage", "Analyse", "Patience", "Esprit pratique"],
      lang: "Français courant, Anglais scolaire"
    }
  };

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.openCv;
      const cv = cvData[id];
      if (!cv || !modal) return;

      modalTitle.textContent = cv.name;
      modalRole.textContent = cv.role;
      modalProfile.textContent = cv.profile;
      modalSchool.textContent = cv.school;
      modalExp.textContent = cv.exp;
      modalSkills.innerHTML = cv.skills.map(skill => `<span>${skill}</span>`).join("");
      modalLang.textContent = cv.lang;
      modal.classList.add("open");
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }
});