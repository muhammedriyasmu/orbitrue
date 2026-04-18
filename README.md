# ORBITRUE Frontend Website

Modern frontend-first travel and visa consultancy website built with React, Vite, Tailwind CSS, Framer Motion, Lucide icons, and a Vercel serverless contact endpoint using Nodemailer.

## Structure

```text
frontend/
  src/
    animations/
    assets/
    components/
    pages/
    sections/
```

## Run Locally

1. Install frontend dependencies

```bash
cd frontend
npm install
```

2. Create env file

- Copy `frontend/.env.example` to `frontend/.env`

3. Add your values

```env
VITE_WHATSAPP_NUMBER=919999999999
VITE_CONTACT_API_URL=/api/contact
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_smtp_password_or_app_password
CONTACT_TO_EMAIL=your_email@example.com
```

4. Start development server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
```

## Contact Form Setup

This site sends email through a Vercel serverless function with Nodemailer.

Required environment variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL`

For Gmail, use:

- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_USER=yourgmail@gmail.com`
- `SMTP_PASS=your_app_password`

`VITE_CONTACT_API_URL` should usually stay as `/api/contact`.

## Local Development Note

- `npm run dev` starts the Vite frontend.
- The Nodemailer endpoint is a Vercel serverless function in `frontend/api/contact.js`.
- To test the contact form locally with the API route, use `vercel dev` from `frontend`, or deploy to Vercel.

## Deployment

Vercel:

- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- The main site remains frontend-first, but contact form delivery now uses a secure serverless function instead of exposing mail credentials in the browser.
- Destination photography is loaded from Unsplash URLs. Replace them with your licensed assets if needed.
