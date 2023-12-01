Feature: Gerenciamento de Usuários

  Cenário 1: Cadastro de novos usuários
    Quando um usuário decide se cadastrar na plataforma
    E acessa a página de registro dedicada, disponível para acesso exclusivo na ausência de um usuário autenticado
    Então são fornecidos campos essenciais, como nome, e-mail, usuário e senha, para que o usuário os preencha
    E há os campos imagem e data de nascimento que são opcionais
    Quando o usuário preenche com sucesso esses campos e envia as informações
    Então o sistema processa os dados
    E, se tudo estiver correto, exibe uma mensagem de sucesso
    Caso o e-mail ou usuário sejam inválidos
    Então uma mensagem de erro é exibida pedindo para tentar novamente

  Cenário 2: Login de usuários
    Na página de login
    Quando o usuário insere suas credenciais, ou seja, seu usuário e senha
    Então o sistema verifica a autenticidade dos dados
    E, se a autenticação for bem-sucedida
    Então o usuário é redirecionado para a área restrita da plataforma
    E recebe uma mensagem de login bem-sucedida
    Caso contrário, se as credenciais estiverem incorretas
    Então uma mensagem de erro é exibida indicando a necessidade de revisão das informações inseridas
