
export default function parseText(watsonResult) {
  const keywords = watsonResult.keywords?.map(k => k.text) || [];
  const sentiment = watsonResult.sentiment?.document?.label || 'neutral';

  const blockers = keywords.filter(k =>
    k.toLowerCase().includes('block') ||
    k.toLowerCase().includes('latency') ||
    k.toLowerCase().includes('failure') ||
    k.toLowerCase().includes('issue') ||
    k.toLowerCase().includes('bug') ||
    k.toLowerCase().includes('error')
  );

  const actionItems = keywords.filter(k =>
    k.toLowerCase().includes('fix') ||
    k.toLowerCase().includes('refactor') ||
    k.toLowerCase().includes('implement') ||
    k.toLowerCase().includes('update') ||
    k.toLowerCase().includes('improve') ||
    k.toLowerCase().includes('optimize')
  );

  const risks = keywords.filter(k =>
    k.toLowerCase().includes('risk') ||
    k.toLowerCase().includes('delay') ||
    k.toLowerCase().includes('miss') ||
    k.toLowerCase().includes('overrun')
  );

  return {
    sentiment,
    blockers,
    risks,
    actionItems,
    keywords,
  };
}
