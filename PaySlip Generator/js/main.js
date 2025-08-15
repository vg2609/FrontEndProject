// ================== LOGIN PAGE ==================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "1234") {
            localStorage.setItem("loggedInUser", username);
            window.location.href = "dashboard.html"; // Redirect to Dashboard
        } else {
            alert("Invalid username or password");
        }
    });
}

// ================== PAYROLL FORM ==================
const payrollForm = document.getElementById("payrollForm");
if (payrollForm) {
    payrollForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const payrollData = {
            empName: document.getElementById("empName").value,
            role: document.getElementById("role").value,
            empId: document.getElementById("empId").value,
            date: document.getElementById("date").value,
            basic: document.getElementById("basic").value,
            totalSalary: document.getElementById("totalSalary").value,
            workingDays: document.getElementById("workingDays").value,
            presentDays: document.getElementById("presentDays").value,
            leaveDays: document.getElementById("leaveDays").value,
            additions: document.getElementById("additions").value,
            deductions: document.getElementById("deductions").value
        };

        localStorage.setItem("payrollData", JSON.stringify(payrollData));
        window.location.href = "payslip.html"; // Redirect to Payslip page
    });
}

// ================== PAYSLIP PAGE ==================
const payslipData = JSON.parse(localStorage.getItem("payrollData"));
if (payslipData) {
    if (document.getElementById("name")) {
        document.getElementById("name").textContent = payslipData.empName;
        document.getElementById("id").textContent = payslipData.empId;
        document.getElementById("role").textContent = payslipData.role;
        document.getElementById("date").textContent = payslipData.date;
        document.getElementById("workingDays").textContent = payslipData.workingDays;
        document.getElementById("presentDays").textContent = payslipData.presentDays;
        document.getElementById("basic").textContent = payslipData.basic;
        document.getElementById("additions").textContent = payslipData.additions;
        document.getElementById("deductions").textContent = payslipData.deductions;

        let total = parseFloat(payslipData.basic) + parseFloat(payslipData.additions) - parseFloat(payslipData.deductions);
        document.getElementById("total").textContent = total;
    }
}

// ================== DOWNLOAD PAYSLIP ==================
const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
        const element = document.getElementById("payslip-content");
        html2pdf().from(element).save("Payslip.pdf");
    });
}
