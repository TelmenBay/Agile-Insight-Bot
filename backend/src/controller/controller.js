import parseText from '../utils/parser';
import analyzeText from '../services/watson';


export async function analyzeTextController(req, res) {
    try {
        const text = req.body;
        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }
        const analysis = await analyzeText(text);
        const insights = parseText(analysis);

        return res.json(insights);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    
};