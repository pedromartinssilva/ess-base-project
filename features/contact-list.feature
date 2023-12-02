Feature: Lista de contatos
    As um usuário
    I want acessar e gerenciar lista de contatos
    So that posso manter e gerenciar uma lista atualizada

Scenario: Adição de Novo Contato na Lista
    Given o usuário está na página de "Lista de Contatos"
    When o usuário encontra e toca no botão de adição de novo contato
    Then uma nova tela de inserção de informações do contato é apresentada
    And o usuário preenche manualmente as informações do novo contato
    when o usuário confirma a adição do novo contato
    Then o usuário é redirecionado de volta à página de "Lista de Contatos"
    And o novo contato está incorporado à lista de contatos

Scenario: Informações do Contato
    Given o usuário está na página de "Lista de Contatos"
    And o usuário possui contatos na lista
    When o usuário clica no nome de um contato específico
    Then uma nova tela é apresentada com as informações do contato selecionado
    And o usuário pode visualizar detalhes como nome, foto, status e outras informações relevantes
    And o usuário tem a opção de iniciar uma conversa com o contato
    And ao selecionar a opção de iniciar conversa, a tela de conversa é aberta

Scenario: Busca por Contato
    Given o usuário está na página de "Lista de Contatos"
    And o usuário possui contatos na lista
    When o usuário utiliza a função de busca para encontrar um contato específico
    Then o sistema exibe os resultados da busca, destacando o contato desejado
    And os demais contatos na lista são filtrados de acordo com os critérios da pesquisa
    And o usuário pode visualizar os contatos que correspondem à busca
    And o usuário pode interagir com o contato desejado a partir dos resultados da busca