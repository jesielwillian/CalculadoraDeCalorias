const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
function handleSubmit (event) {
  event.preventDefault();
  const genero = getSelectedValue('genero');
  const idade = getInputNumberValue('idade');
  const peso = getInputNumberValue('peso');
  const altura = getInputNumberValue('altura');
  const Nivelatividade = getSelectedValue('nivel_atividade');
  const tmb = Math.round(
    genero === 'feminino'
    ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 *idade)) //if (cálculo pronto)
    : (66 + (13.7 * peso) + (5 * altura) - (6.8 *idade)) //else
  );
  const manutencao = Math.round(tmb * Number(Nivelatividade));
  const Perderpeso = manutencao - 450;
  const Ganharpeso = manutencao + 450;
  //resultados da cálculo para exibir na tela
  const layout = `
    <h2>Aqui está o resultado:</h2>
    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${manutencao} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${Perderpeso} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${Ganharpeso} calorias</strong>.
        </li>
      </ul>
  `;
  const result = document.getElementById('result');
  result.innerHTML = layout; //repassando que o layout deve ser exibido na tela
}
function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}
function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}