function enterPortal() {
  const portal = document.getElementById("portal");
  const terminal = document.getElementById("terminal");

  portal.classList.remove("hidden");

  terminal.innerHTML = "";

  const sequence = [
    "[ALTERRA SYSTEMS]",
    "Initializing secure interface...",
    "Verifying user credentials...",
    "Access tier: STANDARD",
    "Loading corporate subsystem...",
    "Welcome.",
    "You are now connected to Alterra Network Services."
  ];

  let i = 0;

  const interval = setInterval(() => {
    if (i < sequence.length) {
      terminal.innerHTML += sequence[i] + "<br>";
      i++;
    } else {
      clearInterval(interval);
    }
  }, 900);
}
