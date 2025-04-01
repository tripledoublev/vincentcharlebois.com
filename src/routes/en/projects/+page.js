export function load({ url }) {
  const title = "Projects \Vincent Charlebois";
  const description = "Explore Vincent Charlebois's projects and his work at Hypha Worker Co-operative.";
  
  return {
    seo: {
      title,
      description,
      currentUrl: `https://vincentcharlebois.com${url.pathname}`
    }
  };
} 