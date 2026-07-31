/**
 * Community Recipe Sharing Module
 */

export class CommunityManager {
  constructor() {
    this.storageKey = "nmap_community_recipes_v1";
    this.recipes = this.loadRecipes();
  }

  loadRecipes() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : this.getDefaultRecipes();
    } catch (e) {
      return this.getDefaultRecipes();
    }
  }

  getDefaultRecipes() {
    return [
      {
        id: "rec_1",
        title: "Full Infrastructure Vulnerability Audit",
        author: "CyberAuditLab",
        command: "nmap -sS -sV -O -p- -T4 --script=vuln 192.168.1.1",
        description: "Executes complete TCP port sweep with OS fingerprinting and NSE vulnerability probes."
      },
      {
        id: "rec_2",
        title: "Firewall Bypass & Decoy Probe",
        author: "RedTeamGhost",
        command: "nmap -Pn -sS -f -D RND:10 --source-port 53 192.168.1.1",
        description: "Packet fragmentation with 10 fake decoys and DNS source port spoofing to bypass simple firewalls."
      }
    ];
  }

  addRecipe(title, author, command, description) {
    const newRecipe = {
      id: `rec_${Date.now()}`,
      title: title.trim(),
      author: author.trim() || "Anonymous",
      command: command.trim(),
      description: description.trim()
    };

    this.recipes.unshift(newRecipe);
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.recipes));
    } catch (e) {
      console.error("Error saving community recipe", e);
    }
    return newRecipe;
  }

  getRecipes() {
    return this.recipes;
  }
}
