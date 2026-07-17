/*
  GOOGLE DRIVE VIDEO SETUP
  ------------------------
  1. Upload each video to Google Drive.
  2. Set access to: Anyone with the link - Viewer.
  3. Paste either the full share link or only the file ID below.

  Example full link:
  https://drive.google.com/file/d/1QHITGxsM7RCsn9fF-yOGC2K9MUXE2en6/view?usp=sharing
*/

const driveVideos = [
  // { source: "https://drive.google.com/file/d/1QHITGxsM7RCsn9fF-yOGC2K9MUXE2en6/view?usp=sharing", title: "Engine start and walk-around" },
  // { source: "https://drive.google.com/file/d/1P4DUU0euHpxvD0_ROcLCKsiStdLPjCPh/view?usp=sharing", title: "Boom and bucket operation" },
];

function extractDriveFileId(value) {
  if (!value) return "";
  const trimmed = value.trim();
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /^([a-zA-Z0-9_-]{10,})$/
  ];
  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) return match[1];
  }
  return "";
}

const videoGrid = document.getElementById("videoGrid");
const validVideos = driveVideos
  .map(video => ({ ...video, id: extractDriveFileId(video.source || video.id || "") }))
  .filter(video => video.id);

if (videoGrid && validVideos.length > 0) {
  videoGrid.innerHTML = validVideos.map((video) => `
    <article class="video-card">
      <iframe
        src="https://drive.google.com/file/d/${video.id}/preview"
        title="${video.title}"
        allow="autoplay; encrypted-media"
        allowfullscreen
        loading="lazy">
      </iframe>
      <div class="video-title">${video.title}</div>
    </article>
  `).join("");
}

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
  const message = link.dataset.message || "Hello, I am interested in the CAT 320CL swamp buggy.";
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});
