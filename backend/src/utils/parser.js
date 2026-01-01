
export function parseText(watsonResult) {
  const keywords = watsonResult.keywords?.map(k => k.text) || [];
  const sentiment = watsonResult.sentiment?.document?.label || 'neutral';

  const blockers = keywords.filter(k =>
    k.toLowerCase().includes('block') ||
    k.toLowerCase().includes('latency') ||
    k.toLowerCase().includes('failure')
  );

  const actionItems = keywords.filter(k =>
    k.toLowerCase().includes('fix') ||
    k.toLowerCase().includes('refactor') ||
    k.toLowerCase().includes('implement')
  );

  const risks = keywords.filter(k =>
    k.toLowerCase().includes('risk') ||
    k.toLowerCase().includes('delay') ||
    k.toLowerCase().includes('miss')
  );

  return {
    sentiment,
    blockers,
    risks,
    actionItems,
    keywords,
  };
}
