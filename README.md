# Agile Insight Bot

AI-powered text analysis tool using IBM Watson NLU to analyze Agile standup notes and surface blockers, risks, and action items.

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
