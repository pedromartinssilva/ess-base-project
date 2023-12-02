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