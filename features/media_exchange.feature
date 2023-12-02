feature: Allows the user to send and receive media (photos, videos and audio)

Scenario: Removes media from message history
Given os usuários “Bia” e “Letícia” trocaram mensagens
And “Leticia” enviou a mídia “foto.png” para “Bia”
And “Bia” fez o download da mídia “foto.png” enviada por “Letícia”
When “Bia” solicita ao sistema que remova a mídia “foto.png”  do seu histórico de conversa
And o sistema para de armazenar a mídia “foto.png” para “Bia”
And o sistema para de armazenar para “Bia” a mensagem que continha uma referência para “foto.png”
Then a mídia “foto.png” foi removida do histórico de conversa entre “Bia” e “Letícia”
