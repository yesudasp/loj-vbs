const STORAGE_KEY = "lojVbsRegistrations";
const ADMIN_PASSCODE = "LOJ-VBS-ADMIN";

const loginForm = document.getElementById("login-form");
const passcodeInput = document.getElementById("admin-passcode");
const loginMessage = document.getElementById("login-message");
const adminLoginSection = document.getElementById("admin-login");
const adminPanel = document.getElementById("admin-panel");
const tableBody = document.getElementById("registration-table-body");
const adminMessage = document.getElementById("admin-message");
const clearButton = document.getElementById("clear-registrations");
const downloadCsvButton = document.getElementById("download-csv");

function getRegistrations() {
  const registrations = localStorage.getItem(STORAGE_KEY);
  return registrations ? JSON.parse(registrations) : [];
}

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleString();
}

function renderRegistrations() {
  const registrations = getRegistrations();
  tableBody.innerHTML = "";

  if (!registrations.length) {
    tableBody.innerHTML = '<tr><td colspan="9">No registrations yet.</td></tr>';
    return;
  }

  registrations.forEach((registration) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${formatDate(registration.submittedAt)}</td>
      <td>${registration.studentName}</td>
      <td>${registration.age}</td>
      <td>${registration.grade}</td>
      <td>${registration.guardianName}</td>
      <td>${registration.email}</td>
      <td>${registration.phone}</td>
      <td>${registration.emergencyContact}</td>
      <td>${registration.medicalNotes}</td>
    `;

    tableBody.appendChild(row);
  });
}

function convertToCsv(registrations) {
  const headers = [
    "submittedAt",
    "studentName",
    "age",
    "grade",
    "guardianName",
    "email",
    "phone",
    "emergencyContact",
    "medicalNotes",
  ];

  const rows = registrations.map((registration) =>
    headers
      .map((header) => {
        const value = (registration[header] ?? "").toString().replaceAll('"', '""');
        return `"${value}"`;
      })
      .join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passcodeInput.value !== ADMIN_PASSCODE) {
    loginMessage.textContent = "Incorrect passcode. Please try again.";
    loginMessage.classList.add("error");
    return;
  }

  loginMessage.textContent = "";
  adminLoginSection.hidden = true;
  adminPanel.hidden = false;
  renderRegistrations();
});

clearButton.addEventListener("click", () => {
  if (!window.confirm("Are you sure you want to clear all registrations?")) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  renderRegistrations();
  adminMessage.textContent = "All registrations were cleared.";
});

downloadCsvButton.addEventListener("click", () => {
  const registrations = getRegistrations();

  if (!registrations.length) {
    adminMessage.textContent = "No registrations available to export.";
    adminMessage.classList.add("error");
    return;
  }

  const csv = convertToCsv(registrations);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "loj-vbs-registrations.csv";
  link.click();

  URL.revokeObjectURL(url);
  adminMessage.textContent = "CSV download started.";
  adminMessage.classList.remove("error");
});
