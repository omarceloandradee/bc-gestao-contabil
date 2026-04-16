# BC Gestão Contábil - Landing Page

Uma Landing Page premium, responsiva e performática desenvolvida para uma contabilidade estratégica, destacando serviços como abertura de empresas, departamento fiscal, pessoal, contábil e regularização. 

## 🎯 Problema Resolvido
Contadores e escritórios de contabilidade frequentemente enfrentam o desafio de comunicar seus serviços e diferenciais de forma clara e profissional. Este projeto oferece uma solução front-end robusta e sofisticada (com CSS modularizado, Glassmorphism, animações fluídas e interações ricas) para elevar a percepção de valor e converter leads (através de integrações prontas com o WhatsApp).

## 🚀 Tecnologias Utilizadas
- **HTML5**: Semântico e acessível.
- **CSS3 Puro (Vanilla CSS)**: Modularizado pela metodologia de arquitetura de pastas (Base, Components, Sections).
  - Variáveis Nativas
  - Efeitos em Glassmorphism
  - Animações exclusivas baseadas em Observer e Interações de Scroll
- **JavaScript (ES Modules)**: Modular e focado em separação de responsabilidades (Clean Code).

## 📁 Estrutura de Pastas
O projeto segue uma arquitetura limpa e escalável de arquivos, separando responsabilidades lógicas e visuais:

```text
bc-gestao-contabil/
├── .env.example          # Template para variáveis de ambiente (ex: número do WhatsApp)
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Metadados e scripts utilitários (lint/format)
├── README.md             # Esta documentação
├── index.html            # Ponto de entrada
├── assets/               # Assets públicos estáticos
│   └── img/
│       └── logo1.png
└── src/
    ├── css/              # Estilos distribuídos e isolados
    │   ├── main.css      # Hub principal de importação
    │   ├── base/
    │   ├── components/
    │   ├── sections/
    │   ├── animations.css
    │   └── responsive.css
    └── js/               # Lógica distribuída via ES Modules
        ├── app.js        # Entrypoint do bundle local
        ├── modules/      # Componentes interativos individuais
        ├── utils/        # Hooks e variáveis centralizadas
        └── services/     # Serviços de integração (ex: form submission)
```

## ⚙️ Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/omarceloandradee/bc-gestao-contabil.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd bc-gestao-contabil
   ```

3. Instale as dependências (para lint e dev server opcional):
   ```bash
   npm install
   ```

4. Como o projeto usa **ES Modules nativo** (`<script type="module">`), você precisa de um servidor local leve para não incorrer em erros de CORS (Cross-Origin Resource Sharing) no navegador. Você pode rodar:
   ```bash
   npm start
   # ou
   npx serve .
   ```
   *Alternativamente, utilize a extensão "Live Server" se estiver usando o VS Code.*