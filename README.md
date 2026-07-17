# CAT 320CL Swamp Buggy Landing Page

A static, mobile-friendly sales landing page ready for Vercel.

## Deploy to Vercel

1. Extract this folder.
2. Upload all files to a GitHub repository.
3. In Vercel, select **Add New > Project**.
4. Import the repository.
5. Select framework preset **Other**.
6. Leave Build Command and Output Directory empty.
7. Deploy.

## Add Google Drive videos

1. Upload a video to Google Drive.
2. Right-click it and select **Share**.
3. Set access to **Anyone with the link – Viewer**.
4. Copy the link. Example:
   `https://drive.google.com/file/d/1AbCdEfGh12345/view?usp=sharing`
5. The file ID is the part between `/d/` and `/view`:
   `1AbCdEfGh12345`
6. Open `script.js` and add it like this:

```js
const driveVideos = [
  { id: "1AbCdEfGh12345", title: "Engine start and walk-around" },
  { id: "SECOND_FILE_ID", title: "Boom and bucket operation" }
];
```

The page will automatically replace the placeholders with embedded Drive video players.

## Current sales details

- WhatsApp/Phone: 08136963037
- Email: solutionsking8@gmail.com
- Location: Port Harcourt, Rivers State

## Important sales note

Prospective buyers should inspect and independently verify the machine, documentation, ownership and technical condition before payment.


## Local testing on Windows

You may now double-click `index.html` and the CSS/images should load.

For the most accurate test, use a local web server:

### VS Code Live Server
1. Install the **Live Server** extension.
2. Right-click `index.html`.
3. Choose **Open with Live Server**.

### Python alternative
Open PowerShell inside the landing-page folder and run:

```powershell
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```


## Video slots
The page is configured for two Google Drive videos. Add the two file IDs in `script.js`.

## Privacy update
The WhatsApp button does not display the phone number. The number remains inside the secure WhatsApp destination URL so the button can open the correct chat.
