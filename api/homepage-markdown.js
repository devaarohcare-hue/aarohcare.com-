// Vercel Serverless Function & Dev Server Handler for Homepage Markdown Negotiation
// Implements https://acceptmarkdown.com standard for AI agents probing https://www.aarohcare.com/

export const HOMEPAGE_MARKDOWN = `# AarohCare — Our Health, Our Time

> Smart Outpatient (OP) Clinic & Hospital Management Platform with Zero Wait Times.

AarohCare is a digital healthcare operations platform operated by **AarohCare Technologies Pvt Ltd**. We connect patients, independent clinics, hospitals, and diagnostic laboratories into an integrated, real-time care network across India.

---

## Core Capabilities

### 1. Smart Appointment Booking Under 30 Seconds
- Fast, frictionless OP token scheduling for patients via mobile web and native apps.
- Instant doctor slot confirmation and automated digital reminders.

### 2. Live Token Tracking & Zero-Wait Telemetry
- Real-time queue telemetry replaces crowded waiting rooms.
- Patients track their exact token position and estimated consultation time live from home or nearby.
- Patients arrive at the clinic precisely when it is their turn to consult the doctor.

### 3. Clinic & Hospital Operations Suite
- Complete digital OP desk management designed with practice managers and senior clinicians.
- Multi-counter coordination, dynamic doctor schedule management, and daily outpatient load analytics.
- Automated patient status notifications dispatched via approved WhatsApp channels.

### 4. Diagnostic Lab Records & Prescriptions
- Automated diagnostic report dispatch directly to patients' WhatsApp upon lab completion.
- Consolidated digital health records, past prescriptions, and visit histories for rapid clinical review.

---

## Founding Leadership

- **Amal Hisham K** — Chief Executive Officer (CEO)
- **Muhammed Aslam** — Chief Operating Officer (COO)
- **Kiran VK** — Chief Marketing Officer (CMO)

---

## Machine-Readable & Legal Resources

- **Website**: [https://www.aarohcare.com/](https://www.aarohcare.com/)
- **Sitemap**: [https://www.aarohcare.com/sitemap.xml](https://www.aarohcare.com/sitemap.xml)
- **LLM / Agent Index**: [https://www.aarohcare.com/llms.txt](https://www.aarohcare.com/llms.txt)
- **Terms & Conditions**: [https://www.aarohcare.com/terms](https://www.aarohcare.com/terms)
- **Privacy Policy**: [https://www.aarohcare.com/privacy](https://www.aarohcare.com/privacy)
- **Account Deletion**: [https://www.aarohcare.com/delete-account](https://www.aarohcare.com/delete-account)

---

## Contact & Corporate Information

- **Legal Entity**: AarohCare Technologies Pvt Ltd
- **Registered Jurisdiction**: Kerala, India
- **Support Email**: aarohcare.in@gmail.com
- **Support Phone**: +91 6282829412
- **Mobile Application**: \`com.aarohcare.app\` (Android & iOS)
`

export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.setHeader('Vary', 'Accept')
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
  res.end(HOMEPAGE_MARKDOWN)
}

