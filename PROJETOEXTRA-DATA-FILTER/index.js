// VAMOS ESCREVER 1 EVENT DE 'CLICK' EM CADA BUTTON, PARA QUE AÍ SEJA CHECADO O 'ID' DE CADA BUTTON...

// FILTERS SÃO 'dev-btn' 'dsg-btn' e 'seo-btn' ' ---->  QUANDO CLICAMOS EM 1 DOS BUTTON, ELE FICARÁ ACTIVE...

// DEPOIS, VAMOS PEGAR DE NOVO O TIPO , E  AÍ VERIFICAR 'QUAL BUTTON FOR CLICADO' --> quando 1 deles der match, vamos simplesmente esconder os outros e deixar os elementos que correspondem, esses deverão ser exibidos...

// VAMOS CRIAR UM NOVO SCRIPT...

// recebe o TIPO e todas AS CAIXAS QUE EXISTEM NO PROJETO... (convenience function)....
function eachBoxes(type, boxes) {
  if (type === 'all') {
    // se o type for de all, vou querer mostrar todas as caixas... --> PARA ISSO, PODEMOS USAR ESSE EVENTO DO JQUERY (fadeIn), que exibe todos os elementos que estavam ocultos pelo 'fade'...
    $(boxes).fadeIn();
  } else {
    // se o case não for de all, vamos querer PASSAR POR DENTRO DE cada 1 dos box,
    // para VERIFICAR SE O TIPO QUE CLICAMOS É OU NÃO

    $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');  //VAMOS QUERER FAZER FADE OUT DE TODOS OS 'BOXES' QUE NÃO SE ENCAIXEM NO CRITÉRIO DE 'tem a class especificada' (seja ela 'all', 'dev' ou 'seo')...
        } else {
            $(this).fadeIn(); //CASO CONTRÁRIO, VAMOS QUERER QUE OS ELEMENTOS CORRESPONDENTES 'apareçam' (pq terão/possuirão aquela class necessária)...
        }
    })
  }
}

// ESSE É O  CÓDIGO/LÓGICA NECESSÁRIA... --> vai adicionar/remover a class de 'active' em algum button, de acordo com o button que foi pressionado

$('.filter-btn').on('click', function () {
  // primeiro devemos IDENTIFICAR OS BUTTONS...
  // DEVEMOS IDENTIFICAR QUAL O 'ID' DO BUTTON QUE FOI CLICADO...
  let type = $(this).attr('id');
  // IDENTIFICAMOS TODAS AS BOXES DE NOSSO PROJETO...
  let boxes = $('.project-box');

  // AGORA ESCREVMOS A LÓGICA PARA TIRAR A CLASS DE 'ACTIVE' DE TODOS OS OUTROS BUTTONS, e aí dizemos que 'this' (O BUTTON QUE FOI CLICADO) deverá receber a class de 'active'... (ao passo que essa class é removida de todos os outros)...

  $('.main-btn').removeClass('active');
  $(this).addClass('active');

  //   adicionada a class ao button desejado, e removida essa class de 'active' de todos os outros,
  // NOS RESTA FAZER A PARTE DE 'DETECTAR QUAL O ID QUE FOI PRESSIONADO, E EXIBIR/ESCONDER AS BOXES QUE QUEREMOS/NÃO QUEREMOS'...

  // PARA ISSO, ESCREVEMOS ALGUNS IFS...

  // o professor cria uma função externa, pq a função sempre será a mesma...

  if (type === 'design-button') {
    eachBoxes('design', boxes);
  } else if (type === 'dev-btn') {
    eachBoxes('dev', boxes);
  } else if (type === 'seo-btn') {
    eachBoxes('seo', boxes);
  } else {
    eachBoxes('all', boxes);
  }
});





// FADEOUT- -> ESCONDE 



// FADEIN --> MOSTRA...