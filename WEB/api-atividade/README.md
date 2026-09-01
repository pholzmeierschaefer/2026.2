# Guia de Estrutura e Modificações do Projeto

2026.2/WEB/api-atividade  
yarn dev  
localhost:3001  

## 1. Organização das Pastas e Arquivos

```text
API-ATIVIDADE/
├── node_modules/
├── public/
│   ├── index.html       # Estrutura e conteúdo da página
│   ├── index.js         # Lógica dinâmica do frontend (DOM)
│   └── style.css        # Estilização visual (CSS)
├── .gitignore
├── main.js              # Servidor backend (Express)
├── package.json         # Dependências e scripts de execução
└── yarn.lock
```

## 2. Função de Cada Arquivo e Onde Mexer

| Arquivo | Função Principal | O que alterar nele |
| :--- | :--- | :--- |
| **`public/index.html`** | Estrutura e esqueleto da página | • Textos estáticos iniciais<br>• Tags, títulos (`h1`, `h2`), parágrafos (`p`), containers (`div`)<br>• Atributos como `id` e `class` para identificar os elementos |
| **`public/style.css`** | Estilo visual e layout estático | • Paleta de cores padrão (`color`, `background-color`)<br>• Fontes e tamanhos de texto (`font-family`, `font-size`)<br>• Espaçamentos, margens e alinhamentos |
| **`public/index.js`** | Interatividade e lógica no navegador (Frontend) | • Alteração dinâmica de textos (`innerText`, `innerHTML`)<br>• Modificação de cores e estilos via código (`element.style.color`)<br>• Criação e inserção de novos elementos no DOM (`createElement`, `appendChild`)<br>• Eventos e respostas a cliques de botões |
| **`main.js`** | Servidor web (Backend - Node.js/Express) | • Porta do servidor (variável `PORTA`, ex: `3001`)<br>• Criação de rotas e endpoints (ex: `app.get(...)`, `app.post(...)`)<br>• Servir arquivos estáticos e integração com APIs ou banco de dados |
| **`package.json`** | Configuração do projeto e dependências | • Scripts de execução (`start`, `dev`)<br>• Dependências instaladas (`express`, `nodemon`, etc.) |

---

## 3. Resumo Alterações

* **Alterar textos:** Modifique diretamente no `index.html`. Caso o texto deva mudar dinamicamente via JavaScript após o carregamento da página, altere o valor atribuído no `index.js`.
* **Alterar cores e fontes:** Faça a estilização padrão diretamente no `style.css`. Utilize `index.js` apenas quando o estilo precisar mudar dinamicamente devido a uma ação do usuário.
* **Adicionar novos elementos:** Adicione a tag no `index.html` (para elementos fixos) ou utilize `document.createElement()` e `.appendChild()` em `index.js` (para elementos gerados via script).
* **Configurações de rede/servidor:** Configure portas e rotas diretamente no `main.js`.