 // Sidebar form switching
    function showForm(section) {
      document.querySelectorAll(".form-group").forEach(f => f.style.display = "none");
      document.getElementById("form-" + section).style.display = "block";

      document.querySelectorAll(".sidebar ul li").forEach(li => li.classList.remove("active"));
      event.target.classList.add("active");

      document.getElementById("formTitle").textContent = section.charAt(0).toUpperCase() + section.slice(1);
    }

    // Live preview update
    function updatePreview() {
      document.getElementById("previewName").textContent = document.getElementById("name").value || "Your Name";
      document.getElementById("previewTitle").textContent = document.getElementById("title").value || "Job Title";
      document.getElementById("previewEmail").textContent = document.getElementById("email").value || "Email";
      document.getElementById("previewPhone").textContent = document.getElementById("phone").value || "Phone";
      document.getElementById("previewSummary").textContent = document.getElementById("summary").value || "Your professional summary will appear here.";


      document.getElementById("previewEducation").textContent = document.getElementById("education").value || "Your education details will appear here.";

      const skills = document.getElementById("skills").value.split(",").map(s => s.trim()).filter(s => s);
      const skillsList = document.getElementById("previewSkills");
      skillsList.innerHTML = skills.map(s => `<li>${s}</li>`).join("") || "<li>Skill 1</li><li>Skill 2</li>";

      document.getElementById("previewExperience").textContent = document.getElementById("experience").value || "Your experience details will appear here.";
    }

    // Profile photo upload & live preview
function previewProfilePhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("profilePic").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

    // PDF Download
    document.getElementById("downloadPDF").addEventListener("click", () => {
      const element = document.getElementById("resumePreview");
      html2pdf().from(element).save("resume.pdf");
    });

    // Login check
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedIn || !storedUser) {
      alert("Please login to build your resume.");
      window.location.href = "loginRegister.html";
    }

    // Add skill to preview
function addSkill() {
  const skillInput = document.getElementById("skillInput");
  const skillValue = skillInput.value.trim();

  if (skillValue === "") {
    alert("Please enter a skill");
    return;
  }

  // Create new skill item
  const li = document.createElement("li");
  li.textContent = skillValue;

  // Optional: allow removal on click
  li.onclick = () => li.remove();

  // Add to preview
  document.getElementById("previewSkills").appendChild(li);

  // Clear input
  skillInput.value = "";
}
function applyTemplate(template) {
  const preview = document.getElementById("resumePreview");
  preview.className = "preview resume " + template;
}

function showForm(section) {
  // Hide all form groups
  document.querySelectorAll('.form-group').forEach(group => {
    group.style.display = 'none';
  });

  // Show the selected form
  document.getElementById(`form-${section}`).style.display = 'block';

  // Update form title
  document.getElementById('formTitle').textContent = 
    section.charAt(0).toUpperCase() + section.slice(1);

  // Update sidebar active state
  document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.classList.remove('active');
  });
  event.target.classList.add('active');
}

function toggleDropdown() {
  document.getElementById("templateOptions").style.display =
    document.getElementById("templateOptions").style.display === "block" ? "none" : "block";
}

function applyTemplate(template, imgSrc, text) {
  const preview = document.getElementById("resumePreview");

  // Always keep "preview resume"
  preview.className = "preview resume";
  
  // Add selected template class if not default
  if (template !== "default") {
    preview.classList.add(template);
  }

  // Update dropdown selected item
  document.getElementById("selectedTemplateImg").src = imgSrc;
  document.getElementById("selectedTemplateText").textContent = text;

  // Close dropdown
  document.getElementById("templateOptions").style.display = "none";
}










