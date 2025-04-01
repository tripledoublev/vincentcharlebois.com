export function load({ url }) {
  const title = "À propos \Vincent Charlebois";
  const description = "À propos de Vincent Charlebois - Artiste, technologue créatif et membre de la coopérative de travailleurs Hypha.";
  
  return {
    seo: {
      title,
      description,
      currentUrl: `https://vincentcharlebois.com${url.pathname}`
    }
  };
} 