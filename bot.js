var TelegramBot = require('node-telegram-bot-api');

var token = '182183214:AAFVg0QVPBebPoiAB5FMw5cjHKY6l3nqdoA';
// Setup polling way
var bot = new TelegramBot(token, {polling: {timeout: 10, interval: 2000}});

global.pelada = {};
global.pelada.open = false;

function formatList(list){
	var res = ""
  var cont = 1;
  list.forEach(function (item) {
    res = res + cont +". "+ (item.toString()) + "\n";
    cont++;
  });
	return res;
};

function checkHora(hora) {   
  var index = hora.indexOf(':');
  if(index != -1){
    var h = parseInt(hora.substring(0, index));
    var m = parseInt(hora.substring(index + 1));  
    if(isNaN(h) || isNaN(m)){
      return false;
    }
    else {
      if(h < 0 || h > 23 || m < 0 || m > 59){
        return false;
      }
      else { 
        return true;
      }
    }
  }  
};

bot.onText(/^\/pelada (.+)$/, function (msg, match) {
  var hora = match[1];
  if(global.pelada.open == false){
    if(checkHora(hora)){
      global.pelada.lista = new Set();
      global.pelada.hora = hora;
      global.pelada.open = true;

      var confirmados = formatList(pelada.lista);
      bot.sendMessage(msg.chat.id, 'Pelada Criada: ' + global.pelada.hora + '!\nConfirmados:\n' + confirmados).then(function () {
      // reply sent!
      });
    }else{
      bot.sendMessage(msg.chat.id, "Que porra de hora é essa!? \nFaz de novo seu animal...").then(function () {
      // reply sent!
      });
    }
  	
  }else{
  	bot.sendMessage(msg.chat.id, 'A pelada já foi criada!!\nPelada Criada: ' + global.pelada.hora + '!\nConfirmados:\n' + confirmados).then(function () {
    // reply sent!
  	});
  }
});

bot.onText(/^\/cancelar$/, function (msg, match) {
	if(global.pelada.open == false){
		bot.sendMessage(msg.chat.id, "Não existe pelada em andamento.").then(function () {
    	// reply sent!
  		});
	}else{
		global.pelada = {open: false};
		bot.sendMessage(msg.chat.id, "Pelada cancelada.").then(function () {
    	// reply sent!
  		});
	}
});

bot.onText(/^\/JASPERCREATOR$/, function (msg, match) {
    bot.sendMessage(msg.chat.id, "FELIPE FONSECA ARANTES CRIOU O JASPER").then(function () {
      // reply sent!
      });
});

bot.onText(/^\/ver$/, function (msg, match) {
	if(global.pelada.open == false){
		bot.sendMessage(msg.chat.id, "Não existe pelada em andamento.").then(function () {
    	// reply sent!
  		});
	}else{
    var confirmados = formatList(global.pelada.lista);
		bot.sendMessage(msg.chat.id, 'Pelada: ' + global.pelada.hora + '!\nConfirmados:\n' + confirmados).then(function () {
      // reply sent!
      });
	}
});

bot.onText(/^\/hora (.+)$/, function (msg, match) {
	var hora = match[1];
	if(global.pelada.open == false){
		bot.sendMessage(msg.chat.id, "Não existe pelada em andamento.").then(function () {
    	// reply sent!
  		});
	}else{
    if(checkHora(hora) == true){
  		global.pelada.hora = hora;
  		bot.sendMessage(msg.chat.id, 'Pelada: ' + global.pelada.hora ).then(function () {
      	// reply sent!
    		});
    }
    else{
      bot.sendMessage(msg.chat.id, 'Digita a hora certo animal. <hora:minutos>').then(function () {
        // reply sent!
        });
    }
	}
});

bot.onText(/^\/confirmar (.+)$/, function (msg, match) {
	var nome = match[1];
	if(global.pelada.open == false){
		bot.sendMessage(msg.chat.id, "Não existe pelada em andamento.").then(function () {
    	// reply sent!
  		});
	}else{
    if(global.pelada.lista.has(nome)){
      bot.sendMessage(msg.chat.id, "Esse indivíduo já esta confirmado na pelada.").then(function () {
      // reply sent!
      });
    }
    else{
      global.pelada.lista.add(nome);
      var confirmados = formatList(global.pelada.lista);
      bot.sendMessage(msg.chat.id, 'Pelada: ' + global.pelada.hora + '!\nConfirmados:\n' + confirmados).then(function () {
      // reply sent!
      });
    }		
	}
});

bot.onText(/^\/desconfirmar (.+)$/, function (msg, match) {
	var nome = match[1];
	if(global.pelada.open == false){
		bot.sendMessage(msg.chat.id, "Não existe pelada em andamento.").then(function () {
    	// reply sent!
  		});
	}else{
    if(global.pelada.lista.has(nome)){
      global.pelada.lista.delete(nome);
      var confirmados = formatList(global.pelada.lista);
      bot.sendMessage(msg.chat.id, nome + " desconfirmado da pelada.").then(function () {
      // reply sent!
      });
      bot.sendMessage(msg.chat.id, 'Pelada: ' + global.pelada.hora + '!\nConfirmados:\n' + confirmados).then(function () {
        // reply sent!
      });

    }
    else{
      bot.sendMessage(msg.chat.id, "Esse indivíduo não estava confirmado na pelada.").then(function () {
      // reply sent!
      })
    }   
	}
});







