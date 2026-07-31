/**
 * Community Recipe Contribution & Voting Module (English)
 */

const COMMUNITY_STORAGE_KEY = "nmap_community_recipes_v1";

export class CommunityManager {
  constructor() {
    this.recipes = this.loadCommunityRecipes();
  }

  loadCommunityRecipes() {
    try {
      const data = localStorage.getItem(COMMUNITY_STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn("Community storage load error:", e);
    }
    // Return sample community submission recipes in English
    return [
      {
        id: "comm-1",
        title: "Bypass Cloudflare & Fast Port Discovery",
        author: "CyberSecGuy99",
        command: "nmap -sS -Pn --script=dns-brute -p 80,443 {target}",
        upvotes: 42,
        description: "Discovers direct IP origin behind Cloudflare WAF using DNS sub-domain brute-forcing.",
        createdAt: "2026-07-28"
      },
      {
        id: "comm-2",
        title: "SCADA / Industrial Control System Safe Audit",
        author: "ICS_Analyst",
        command: "nmap -sS -p 102,502,44818 --script=s7-info,modbus-discover {target}",
        upvotes: 28,
        description: "Safely queries Modbus and Siemens S7 industrial automation PLCs without crashing devices.",
        createdAt: "2026-07-29"
      }
    ];
  }

  saveCommunityRecipes() {
    try {
      localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(this.recipes));
    } catch (e) {
      console.error("Community storage save error:", e);
    }
  }

  addRecipe(title, author, command, description) {
    const newRecipe = {
      id: "comm-" + Date.now(),
      title: title.trim(),
      author: author.trim() || "Anonymous Researcher",
      command: command.trim(),
      upvotes: 1,
      description: description.trim(),
      createdAt: new Date().toISOString().slice(0, 10)
    };
    this.recipes.unshift(newRecipe);
    this.saveCommunityRecipes();
    return newRecipe;
  }

  upvoteRecipe(id) {
    const recipe = this.recipes.find(r => r.id === id);
    if (recipe) {
      recipe.upvotes += 1;
      this.saveCommunityRecipes();
      return recipe.upvotes;
    }
    return 0;
  }
}
