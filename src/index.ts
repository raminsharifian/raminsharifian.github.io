import "bootstrap/dist/css/bootstrap-reboot.min.css";

const cpYear: HTMLElement = document.getElementById("cp-year") as HTMLElement;

document.addEventListener("DOMContentLoaded", () => {
  cpYear.textContent = new Date().getFullYear().toString();
});
