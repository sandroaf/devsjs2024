function virgulaponto(destino) {
    destino.value = destino.value.replace(',','.');
} 

function ehnumero(destino) {
    if (isNaN(destino.value)) {
        window.alert('Atenção!\nValor informado não é numérico.');
        destino.focus();
        return false;
    } else {
        return true;
    } 

  }