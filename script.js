const driveVideos = [
  {
    source: "https://drive.google.com/file/d/1QHITGxsM7RCsn9fF-yOGC2K9MUXE2en6/view?usp=sharing",
    title: "Engine start and walk-around"
  },
  {
    source: "https://drive.google.com/file/d/1P4DUU0euHpxvD0_ROcLCKsiStdLPjCPh/view?usp=sharing",
    title: "Boom and bucket operation"
  }
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
  .map((video) => ({ ...video, id: extractDriveFileId(video.source || video.id || "") }))
  .filter((video) => video.id);

if (videoGrid) {
  videoGrid.innerHTML = validVideos.map((video) => `
    <article class="video-card">
      <button class="video-launch" type="button"
        data-video-id="${video.id}"
        data-video-title="${video.title}"
        aria-label="Play ${video.title}">
        <img
          src="https://drive.google.com/thumbnail?id=${video.id}&sz=w1200"
          alt="${video.title}"
          loading="lazy">
        <span class="video-launch-overlay">
          <span class="video-play-button">▶</span>
          <span>Tap to play video</span>
        </span>
      </button>
      <div class="video-title">${video.title}</div>
      <a class="video-drive-link"
         href="https://drive.google.com/file/d/${video.id}/view"
         target="_blank"
         rel="noopener">Open directly in Google Drive</a>
    </article>
  `).join("");
}

const videoModal = document.getElementById("videoModal");
const videoModalPlayer = document.getElementById("videoModalPlayer");
const videoModalClose = document.getElementById("videoModalClose");

function closeVideoModal() {
  if (!videoModal || !videoModalPlayer) return;
  videoModal.classList.remove("is-open");
  videoModal.setAttribute("aria-hidden", "true");
  videoModalPlayer.src = "";
  document.body.classList.remove("video-modal-open");
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".video-launch");
  if (!button || !videoModal || !videoModalPlayer) return;

  const videoId = button.dataset.videoId;
  const title = button.dataset.videoTitle || "Machine video";
  videoModalPlayer.title = title;
  videoModalPlayer.src = `https://drive.google.com/file/d/${videoId}/preview`;
  videoModal.classList.add("is-open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("video-modal-open");
});

videoModalClose?.addEventListener("click", closeVideoModal);
videoModal?.addEventListener("click", (event) => {
  if (event.target === videoModal) closeVideoModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeVideoModal();
});

const emailUser = ["solutions", "king8"].join("");
const emailDomain = ["gmail", "com"].join(".");
const emailAddress = `${emailUser}@${emailDomain}`;

document.querySelectorAll(".js-email-link").forEach((link) => {
  const subject = link.dataset.subject || "CAT 320CL Enquiry";
  link.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
});

const whatsappNumber = ["234", "813", "696", "3037"].join("");
document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
  const message = link.dataset.message || "Hello, I am interested in the CAT 320CL swamp buggy.";
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});
