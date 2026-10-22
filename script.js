// Both call-to-action buttons share the single form URL in config.js.
document.addEventListener("DOMContentLoaded", () => {
  const formUrl = (window.STARTNATION_FORM_URL || "").trim();
  const links = document.querySelectorAll(".form-link");
  if (formUrl && /^https:\/\//i.test(formUrl)) {
    links.forEach((link) => {
      link.href = formUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  } else {
    links.forEach((link) => link.addEventListener("click", () => {
      const status = document.getElementById("form-status");
      if (status) status.hidden = false;
    }));
  }
});
