Comportamento do BOT:

/iniciar {hora qlqr}
— Se ja existir pelada aberta -> bot exibe msg: "Já existe pelada em andamento.";
— Se não existir pelada aberta -> bot cria uma nova pelada e exibe msg: "Pelada marcada.";

/cancelar
— Se ja existir pelada aberta -> bot cancela pelada e exibe msg: "Pelada cancelada.";
— Se não existir pelada aberta -> bot exibe msg: "Não existe pelada em andamento.";

/hora {hora qlqr}
— Se não existir pelada aberta -> bot exibe msg: "Não existe pelada em andamento.";
— Se ja existir pelada aberta -> bot atualiza data da pelada com a data informada e exibe msg: "Pelada marcada {hora informada}.";

/confirmar {nome}
— Se não existir pelada aberta -> bot exibe msg: "Não existe pelada em andamento.";
— Se ja existir pelada aberta COM o {nome} cadastrado -> bot exibe msg: "{nome} já foi confirmado.".
— Se ja existir pelada aberta sem o {nome} cadastrado -> bot insere o {nome} na lista da pelada e exibe msg: "{nome} confirmado".
—---- Se o {nome} inserido for o 8 ou mais da lista bot exibe mensagem: "PELADA CONFIRMADA"

/desconfirmar {nome}
— Se não existir pelada aberta -> bot exibe msg: "Não existe pelada em andamento.";
— Se ja existir pelada aberta COM o {nome} cadastrado -> bot remove o {nome} da lista e exibe msg: "{nome} removido da pelada.".
— Se ja existir pelada aberta sem o {nome} cadastrado -> bot exibe msg: "{nome} não estava confirmado".
—---- Se ao remover o {nome} a quantidade de membros da lista ficou menor que 8 bot exibe msg: "PELADA DESCONFIRMADA"

/pelada 
— Se não existir pelada aberta -> bot exibe msg: "Não existe pelada em andamento.";
— Se ja existir pelada aberta ->  bot exibe msg: "Pelada marcada {hora informada}. \n {nome} " (nomes da lista separados por quebra de linah);