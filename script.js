const STORAGE_KEY = "lojVbsRegistrations";

function getRegistrations() {
  const registrations = localStorage.getItem(STORAGE_KEY);
  return registrations ? JSON.parse(registrations) : [];
}

function saveRegistrations(registrations) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
}

const form = document.getElementById("registration-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = "Please complete all required fields.";
    message.classList.add("error");
    return;
  }

  const formData = new FormData(form);
  const registration = {
    studentName: formData.get("studentName")?.toString().trim(),
    age: formData.get("age")?.toString().trim(),
    grade: formData.get("grade")?.toString().trim(),
    guardianName: formData.get("guardianName")?.toString().trim(),
    email: formData.get("email")?.toString().trim(),
    phone: formData.get("phone")?.toString().trim(),
    emergencyContact: formData.get("emergencyContact")?.toString().trim(),
    medicalNotes: formData.get("medicalNotes")?.toString().trim() || "N/A",
    submittedAt: new Date().toISOString(),
  };

  const registrations = getRegistrations();
  registrations.push(registration);
  saveRegistrations(registrations);

  form.reset();
  message.textContent = "Thank you! Registration submitted successfully.";
  message.classList.remove("error");
});
