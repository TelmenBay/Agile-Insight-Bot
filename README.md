# Agile Insight Bot

Watson NLU-powered text analysis tool to analyze Agile standup notes and surface blockers, risks, and action items.
<p align="center">
  <img width="447" height="470" alt="Screenshot 2026-01-01 at 11 18 35 PM" src="https://github.com/user-attachments/assets/f0339143-f1a0-4640-a4a1-0cedb06bb9b1" />
</p>
## Features

- Sentiment analysis
- Blocker detection
- Risk identification
- Action item extraction
- Keyword analysis

## Setup

### Backend

```bash
cd backend
npm install
```

Create `.env` file:
```
PORT=3001
WATSON_API_KEY=your_api_key
WATSON_URL=your_watson_url
```

Start server:
```bash
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`

## Tech Stack

**Backend:** Node.js, Express, IBM Watson NLU
**Frontend:** React
