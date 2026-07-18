// Build the email address in the browser so it is not exposed as plain text in the HTML.
const emailUser = ["solutions", "king8"].join("");
const emailDomain = ["gmail", "com"].join(".");
const emailAddress = `${emailUser}@${emailDomain}`;

document.querySelectorAll(".js-email-link").forEach((link) => {
  const subject = link.dataset.subject || "CAT 320CL Enquiry";
  link.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
});

// Build the WhatsApp number in the browser so it is not exposed in the HTML source.
const whatsappNumber = ["234", "813", "696", "3037"].join("");

document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
  const message =
    link.dataset.message ||
    "Hello, I am interested in the CAT 320CL swamp buggy.";

  link.href =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});
