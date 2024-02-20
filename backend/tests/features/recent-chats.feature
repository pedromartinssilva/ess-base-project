Scenario: Obter todos os chats recentes
    Given o método getChats retorna uma lista de conversas                                                                                                                                                                                                                                                                                                                                                               uma lista de conversas
    And a conversa com id "1" e participantes "Pedro" e "Letícia" está na lista
    When uma requisição GET for enviada para "/api/chats"
    Then o status da resposta deve ser "200"
    And o JSON da resposta deve ser uma lista de conversas 
    And a conversa com id "1" e participantes "Pedro" e "Letícia" deve estar na lista