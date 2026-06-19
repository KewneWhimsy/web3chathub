/// <reference path="../.astro/types.d.ts" />
// src/types/en.d.ts

// Pas d'import/export en tête de fichier : env.d.ts est un script ambiant global,
// donc cette interface est fusionnée directement dans le Window global (pas besoin
// de "declare global", qui ne s'applique qu'à l'intérieur d'un module).
interface Window {
  htmx: any; // utilisé par scriptsparouter.astro si présent, sinon ignoré
  __trysteroJoinRoom: typeof import("trystero").joinRoom;
}