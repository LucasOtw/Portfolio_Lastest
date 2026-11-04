// Anciennes adresses /project.html?id=… : renvoyées vers la page du projet.
// Le fichier _redirects de Cloudflare Pages ne sait pas lire la requête (?id=…), d'où cette fonction.
const PROJECTS = new Set(["tomexplore", "tripenarvor", "deeppace"]);

export function onRequest({ request, next }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  return PROJECTS.has(id) ? Response.redirect(`${url.origin}/projets/${id}`, 308) : next();
}
