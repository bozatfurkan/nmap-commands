/**
 * Advanced Fuzzy Search Engine for Nmap Commands
 * Uses weighted string similarity, Levenshtein distance, and tag tokenization.
 */

/**
 * Calculates Levenshtein Distance between two strings.
 */
function levenshteinDistance(a, b) {
  const matrix = [];
  const lenA = a.length;
  const lenB = b.length;

  for (let i = 0; i <= lenA; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= lenB; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[lenA][lenB];
}

/**
 * Calculate similarity score between 0.0 and 1.0 based on Levenshtein distance
 */
function stringSimilarity(s1, s2) {
  const str1 = s1.toLowerCase().trim();
  const str2 = s2.toLowerCase().trim();
  if (str1 === str2) return 1.0;
  if (str1.includes(str2) || str2.includes(str1)) return 0.85;

  const maxLen = Math.max(str1.length, str2.length);
  if (maxLen === 0) return 1.0;

  const dist = levenshteinDistance(str1, str2);
  return Math.max(0, 1 - dist / maxLen);
}

/**
 * Performs fuzzy search over Nmap commands array
 * @param {Array} commandsList Array of Nmap command objects
 * @param {string} query Search input string
 * @returns {Array} Filtered and sorted array with score metadata
 */
export function performFuzzySearch(commandsList, query) {
  if (!query || query.trim() === "") {
    return commandsList.map(cmd => ({ command: cmd, score: 1.0 }));
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryTokens = normalizedQuery.split(/\s+/);

  const results = commandsList.map(cmd => {
    let maxScore = 0;

    // Check exact or partial matches in name and description
    const nameLower = cmd.name.toLowerCase();
    const descLower = cmd.description.toLowerCase();
    const patternLower = cmd.commandPattern.toLowerCase();

    if (nameLower.includes(normalizedQuery)) maxScore += 0.9;
    if (patternLower.includes(normalizedQuery)) maxScore += 0.95;
    if (descLower.includes(normalizedQuery)) maxScore += 0.5;

    // Check keywords list with fuzzy matching
    for (const kw of cmd.keywords) {
      const kwLower = kw.toLowerCase();
      if (kwLower === normalizedQuery) {
        maxScore = Math.max(maxScore, 1.0);
      } else if (kwLower.includes(normalizedQuery) || normalizedQuery.includes(kwLower)) {
        maxScore = Math.max(maxScore, 0.88);
      } else {
        // Token level fuzzy match
        for (const qToken of queryTokens) {
          const sim = stringSimilarity(qToken, kwLower);
          if (sim > 0.65) {
            maxScore = Math.max(maxScore, sim * 0.8);
          }
        }
      }
    }

    // Flag exact match check (e.g. -sS, -Pn, -sV)
    for (const flag of cmd.defaultFlags) {
      if (flag.toLowerCase().includes(normalizedQuery)) {
        maxScore = Math.max(maxScore, 0.98);
      }
    }

    return {
      command: cmd,
      score: maxScore
    };
  });

  // Filter out non-matching results and sort descending by score
  return results
    .filter(res => res.score > 0.3)
    .sort((a, b) => b.score - a.score);
}
