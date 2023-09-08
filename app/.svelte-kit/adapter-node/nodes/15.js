import * as universal from '../entries/pages/edit/personas/_id_/_page.ts.js';
import * as server from '../entries/pages/edit/personas/_id_/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/edit/personas/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/edit/personas/[id]/+page.ts";
export { server };
export const server_id = "src/routes/edit/personas/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.508f8756.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/forms.ff805141.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/PeopleCard.2abfec13.js","_app/immutable/chunks/Title.eef844be.js"];
export const stylesheets = ["_app/immutable/assets/15.474f330d.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/CardComponent.619980c2.css","_app/immutable/assets/PeopleCard.c1a5d36c.css","_app/immutable/assets/Title.6d76f96b.css"];
export const fonts = [];