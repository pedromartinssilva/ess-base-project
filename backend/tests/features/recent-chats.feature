Feature: Recent Chats

Scenario: obtenção todos os chats recentes
    Given o método getChats retorna uma lista de conversas
    And a conversa com id "1" e participantes "Pedro" e "Letícia" está na lista
    When uma requisição GET for enviada para "/api/chats"
    Then o status da resposta deve ser "200"
    And o JSON da resposta deve ser uma lista de conversas 
    And a conversa com id "1" e participantes "Pedro" e "Letícia" deve estar na lista

Scenario: remoção bem-sucedida de uma conversa
    Given o método deleteChat retorna uma lista de conversas
    And a conversa com id "1" e participantes "Pedro" e "Letícia" está na lista
    And a conversa com id "2" e participantes "Pedro" e "Jessyca" está na lista
    When uma requisição DELETE for enviada para "/api/chats/1"
    Then o status da resposta deve ser "200"
    And o JSON da resposta deve conter a mensagem "Conversa removida com sucesso"

Scenario: remoção malsucedida de uma conversa
    Given o método deleteChat retorna uma lista de conversas
    And a conversa com id "1" e participantes "Pedro" e "Letícia" está na lista
    And a conversa com id "2" e participantes "Pedro" e "Jessyca" está na lista
    When uma requisição DELETE for enviada para "/api/chats/3"
    Then o status da resposta deve ser "500"
    And o JSON da resposta deve conter a mensagem "Erro ao excluir conversa: Conversa não encontrada"

Scenario: fixação bem-sucedida de uma conversa
    Given o método fixChat retorna uma lista de conversas
    And a conversa com id "1" e participantes "Pedro" e "Letícia" está na lista
    And a conversa com id "2" e participantes "Pedro" e "Jessyca" está na lista
    When uma requisição PUT for enviada para "/api/chats/1/fix"
    Then o status da resposta deve ser "200"
    And o JSON da resposta deve conter a mensagem "Conversa fixada com sucesso"