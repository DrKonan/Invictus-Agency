/* Loads all editable content JSON before React mounts.
   Each JSX file calls window.CONTENT_READY.then(() => render). */
window.CONTENT_READY = (async () => {
  const files = ["site", "contact", "page-heros", "realisations", "portfolio", "galleries", "team", "poles", "partners"];
  const data = {};
  await Promise.all(
    files.map(async (f) => {
      const res = await fetch("content/" + f + ".json?ts=" + Date.now());
      if (!res.ok) throw new Error("Failed to load content/" + f + ".json");
      const key = f.replace(/-/g, "_");
      data[key] = await res.json();
    })
  );
  window.CONTENT = data;
  return data;
})();
