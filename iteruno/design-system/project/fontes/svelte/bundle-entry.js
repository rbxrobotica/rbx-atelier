// Entrada do bundle do artefato (Vite, formato IIFE). Expõe window.Iteruno com os componentes, o runtime do Svelte
// (mount, unmount) e html(), que transforma uma string em snippet para passar como children a partir de JavaScript simples.
import { mount, unmount, createRawSnippet } from 'svelte';
import * as lib from './lib/index.js';

// Snippet a partir de HTML pronto. O Svelte exige UMA raiz; o invólucro com display:contents é transparente para o layout.
const html = (s) => createRawSnippet(() => ({ render: () => `<div style="display:contents">${s}</div>` }));
const api = { ...lib, mount, unmount, html, versao: '1.1.0' };
if (typeof window !== 'undefined') window.Iteruno = Object.assign(window.Iteruno || {}, api);
export default api;
