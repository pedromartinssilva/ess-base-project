Feature: Lista de Conversas Recentes
    As a usuário
    I want ver a lista de conversas recentes
    So that posso acompanhar as interações mais recentes

Scenario: Fixar uma Conversa no Topo
    Given o usuário está na página de "Conversas Recentes"
    And visualiza uma conversa
    When seleciona a opção para fixar essa conversa
    Then a conversa é movida para o topo da lista
    And é mantida lá independentemente da ordem cronológica
    And outras conversas são ajustadas de acordo
    And a conversa fixada é destacada como tal