export function load({ url }) {
  const title = "Vincent Charlebois — Écologies, technologies;";
  const description = "Vincent Charlebois; artiste intermédia, développeur logiciel, technologue créatif et membre de la coopérative de travailleurs Hypha.";
  
  return {
    seo: {
      title,
      description,
      currentUrl: `https://vincentcharlebois.com${url.pathname}`
    }
  };
} 