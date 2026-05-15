// ─── Elementos ────────────────────────────────────────────────
const formulario  = document.querySelector('.formulario');
const mascara     = document.querySelector('.mascara-formulario');
const btnContato  = document.getElementById('btn-contato');
const btnEnviar   = document.getElementById('btn-enviar');
 
// ─── Funções ──────────────────────────────────────────────────
 
// Declaradas antes dos addEventListener para evitar erro de referência
const mostrarForm = function () {
    formulario.style.left = '50%';
    formulario.style.transform = 'translateX(-50%)';
    mascara.style.visibility = 'visible';
 
    // Foca o primeiro campo ao abrir para acessibilidade de teclado
    const primeiroCampo = formulario.querySelector('input');
    if (primeiroCampo) primeiroCampo.focus();
};
 
const esconderForm = function () {
    formulario.style.left = '-340px';
    formulario.style.transform = 'translateX(0)';
    mascara.style.visibility = 'hidden';
 
    // Devolve o foco ao botão que abriu o formulário
    btnContato.focus();
};
 
// ─── Event Listeners (sem onclick inline no HTML) ─────────────
btnContato.addEventListener('click', mostrarForm);
mascara.addEventListener('click', esconderForm);
 
// Fecha o formulário ao pressionar Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') esconderForm();
});
 
// Feedback visual ao enviar o formulário
formulario.addEventListener('submit', () => {
    btnEnviar.textContent = 'Enviando...';
    btnEnviar.disabled = true;
});