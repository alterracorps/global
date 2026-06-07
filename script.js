function enterPortal() {
  document.getElementById("portal").classList.remove("hidden");

  const terminal = document.getElementById("terminal");

  const lines = [
    "> Connecting to Alterra network...",
    "> Verifying identity...",
    "> ACCESS DENIED",
    "> Attempting override...",
    "> Welcome, USER.",
    "> Loading restricted files...",
    "> WARNING: Anomaly detected."
  ];

  let i = 0;

  const interval = setInterval(() => {
    if (i < lines.length) {
      terminal.innerHTML += "<br>" + lines[i];
      i++;
    } else {
      clearInterval(interval);
      terminal.innerHTML += "<br>> Connection unstable...";
    }
  }, 700);
}
