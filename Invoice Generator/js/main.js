// Select inputs
const customerName = document.getElementById("customerName");
const customerEmail = document.getElementById("customerEmail");
const customerPhone = document.getElementById("customerPhone");
const customerAddress = document.getElementById("customerAddress");

const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const gst = document.getElementById("gst");

const invoiceDate = document.getElementById("invoiceDate");
const dueDate = document.getElementById("dueDate");
const notes = document.getElementById("notes");

// Totals display
const subtotalEl = document.getElementById("subtotal");
const gstAmountEl = document.getElementById("gstAmount");
const totalEl = document.getElementById("total");

// Calculate totals
function calculateInvoice() {
  const qty = parseFloat(quantity.value) || 0;
  const unitPrice = parseFloat(price.value) || 0;
  const gstRate = parseFloat(gst.value) || 0;

  const subtotal = qty * unitPrice;
  const gstAmount = (subtotal * gstRate) / 100;
  const total = subtotal + gstAmount;

  subtotalEl.textContent = subtotal.toFixed(2);
  gstAmountEl.textContent = gstAmount.toFixed(2);
  totalEl.textContent = total.toFixed(2);
}

// Event listeners
quantity.addEventListener("input", calculateInvoice);
price.addEventListener("input", calculateInvoice);
gst.addEventListener("input", calculateInvoice);

// Generate PDF
document.querySelector(".generate").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Vetri Electronics - Invoice", 20, 20);

  doc.setFontSize(12);
  doc.text("Customer Information", 20, 40);
  doc.text(`Name: ${customerName.value}`, 20, 50);
  doc.text(`Email: ${customerEmail.value}`, 20, 60);
  doc.text(`Phone: ${customerPhone.value}`, 20, 70);
  doc.text(`Address: ${customerAddress.value}`, 20, 80);

  doc.text("Product Information", 20, 100);
  doc.text(`Product: ${productName.value}`, 20, 110);
  doc.text(`Quantity: ${quantity.value}`, 20, 120);
  doc.text(`Price per Unit: ₹${price.value}`, 20, 130);
  doc.text(`GST %: ${gst.value}%`, 20, 140);

  doc.text("Invoice Summary", 20, 160);
  doc.text(`Subtotal: ₹${subtotalEl.textContent}`, 20, 170);
  doc.text(`GST: ₹${gstAmountEl.textContent}`, 20, 180);
  doc.text(`Total Amount: ₹${totalEl.textContent}`, 20, 190);

  doc.text("Additional Information", 20, 210);
  doc.text(`Invoice Date: ${invoiceDate.value}`, 20, 220);
  doc.text(`Due Date: ${dueDate.value}`, 20, 230);
  doc.text(`Notes: ${notes.value}`, 20, 240);

  // Save PDF
  doc.save("invoice.pdf");
});
