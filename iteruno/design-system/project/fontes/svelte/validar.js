// Validação em português para os formulários do site. Devolve [{ id, name, message }] para o Form e para cada campo.
// Regras: required, type=email, data-tipo="telefone" (10 ou 11 dígitos), minlength. Sem JavaScript o navegador valida sozinho.
export function validar(form) {
  const erros = [];
  for (const el of form.querySelectorAll('input, select, textarea')) {
    if (!el.name || el.disabled) continue;
    // Rótulo do campo: para a caixa de marcar, só o título (sem a descrição).
    const lab = form.querySelector(`label[for="${el.id}"]`);
    const rotulo = ((lab?.querySelector('.itr-check__label') || lab)?.textContent || el.name).replace(/\(opcional\)/i, '').trim();
    const vazio = el.type === 'checkbox' ? !el.checked : !String(el.value || '').trim();
    let message = '';
    if (el.required && vazio) message = el.type === 'checkbox' ? `Marque "${rotulo}".` : `Preencha ${rotulo.toLowerCase()}.`;
    else if (!vazio && el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) message = 'Informe um e-mail válido, como nome@exemplo.com.br.';
    else if (!vazio && el.dataset.tipo === 'telefone' && !/^\d{10,11}$/.test(el.value.replace(/\D/g, ''))) message = 'Informe um telefone com DDD, como (11) 90000-0000.';
    else if (!vazio && el.minLength > 0 && String(el.value).length < el.minLength) message = `Use pelo menos ${el.minLength} caracteres.`;
    if (message) erros.push({ id: el.id, name: el.name, message });
  }
  return erros;
}
