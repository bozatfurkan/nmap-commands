/**
 * Custom Levenshtein Distance & Weighted Keyword Fuzzy Search Engine
 */

export function calculateLevenshteinDistance(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1,   // insertion
            matrix[i - 1][j] + 1    // deletion
          )
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export function calculateStringSimilarity(str1, str2) {
  const s1 = str1.toLowerCase().trim();
  const s2 = str2.toLowerCase().trim();

  if (s1 === s2) return 1.0;
  if (s1.includes(s2) || s2.includes(s1)) return 0.85;

  const maxLen = Math.max(s1.length, s2.length);
  if (maxLen === 0) return 1.0;

  const dist = calculateLevenshteinDistance(s1, s2);
  return Math.max(0, 1 - dist / maxLen);
}

export function performFuzzySearch(commandsList, queryStr) {
  if (!queryStr || queryStr.trim() === '') {
    return commandsList.map(cmd => ({ command: cmd, score: 1.0 }));
  }

  const query = queryStr.toLowerCase().trim();
  const tokens = query.split(/\s+/);

  const results = commandsList.map(cmd => {
    let maxScore = 0;

    // Direct match check on name, commandPattern, description
    const fullText = `${cmd.name} ${cmd.commandPattern} ${cmd.description} ${(cmd.keywords || []).join(' ')}`.toLowerCase();
    
    if (fullText.includes(query)) {
      maxScore = 0.95;
    } else {
      tokens.forEach(token => {
        (cmd.keywords || []).forEach(kw => {
          const sim = calculateStringSimilarity(token, kw);
          if (sim > maxScore) maxScore = sim;
        });

        const nameSim = calculateStringSimilarity(token, cmd.name);
        if (nameSim * 0.9 > maxScore) maxScore = nameSim * 0.9;
      });
    }

    return { command: cmd, score: maxScore };
  });

  // Filter out low scores and sort descending
  return results
    .filter(item => item.score > 0.35)
    .sort((a, b) => b.score - a.score);
}
