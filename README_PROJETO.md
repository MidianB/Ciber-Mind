# 🛡️ Ciber Mind - Cursos de Segurança Cibernética

**Plataforma educativa de segurança digital para diferentes públicos, sem jargões técnicos.**

---

## 📋 Visão Geral

Ciber Mind é uma plataforma web interativa que oferece cursos de segurança cibernética especializados para 4 perfis distintos:

1. **👩‍💼 Mulheres** - Proteção contra violência digital, golpes de relacionamento e empoderamento
2. **👧 Crianças (8-12 anos)** - Segurança online lúdica e educativa
3. **🧑‍🎓 Adolescentes (13-18 anos)** - Identidade digital, saúde mental e pensamento crítico
4. **💼 MEIs** - Proteção de negócios, LGPD simplificada e segurança empresarial

---

## ✨ Características Principais

### 📚 Conteúdo Estruturado
- **5 módulos** por curso
- **3 vídeos** de 5 minutos por módulo
- **75 minutos** de conteúdo por curso
- **Total: 60 vídeos** educativos

### 🎮 Recursos Interativos
- Jogo educativo específico para cada perfil
- E-book completo com conteúdo aprofundado
- Interface intuitiva e acessível

### 🎨 Design Moderno
- **Soft Cyber Neumorphism** - Segurança com acolhimento
- Cores suaves (Azul Ciber, Roxo Neon, Laranja Coral)
- Fontes legíveis (Nunito e Lato)
- Totalmente responsivo (mobile, tablet, desktop)

### 📖 Baseado em Fontes Confiáveis
- **CERT.br** - Cartilha de Segurança para Internet
- **CISA** - Cybersecurity Awareness Program (EUA)
- **SaferNet Brasil** - Segurança digital e direitos humanos
- **ONU Mulheres** - Segurança online para mulheres
- **KnowBe4** - Treinamento em conscientização de segurança

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Interface de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilos responsivos
- **shadcn/ui** - Componentes de qualidade
- **Framer Motion** - Animações fluidas
- **Wouter** - Roteamento leve

### Backend
- **Express.js** - Servidor web
- **tRPC** - APIs type-safe
- **Drizzle ORM** - Gerenciamento de banco de dados
- **MySQL/TiDB** - Banco de dados

### Build & Deploy
- **Vite** - Build tool rápido
- **pnpm** - Gerenciador de pacotes eficiente
- **Vitest** - Testes unitários

---

## 📁 Estrutura do Projeto

```
ciber-mind-export/
│
├── client/                          # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página inicial com hero e listagem de cursos
│   │   │   ├── CourseDetail.tsx    # Detalhes do curso com módulos e vídeos
│   │   │   └── NotFound.tsx        # Página 404
│   │   ├── components/
│   │   │   ├── ui/                 # Componentes shadcn/ui
│   │   │   ├── DashboardLayout.tsx # Layout para admin
│   │   │   └── AIChatBox.tsx       # Chat com IA
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Contexto de tema
│   │   ├── hooks/
│   │   │   └── useAuth.ts          # Hook de autenticação
│   │   ├── lib/
│   │   │   └── trpc.ts             # Cliente tRPC
│   │   ├── App.tsx                 # Componente raiz com rotas
│   │   ├── main.tsx                # Entry point React
│   │   ├── index.css               # Estilos globais e tema
│   │   └── const.ts                # Constantes da aplicação
│   ├── public/                      # Assets estáticos
│   └── index.html                  # HTML principal
│
├── server/                          # Backend Node.js
│   ├── _core/                      # Infraestrutura do servidor
│   │   ├── index.ts                # Inicialização do servidor
│   │   ├── context.ts              # Contexto tRPC
│   │   ├── trpc.ts                 # Configuração tRPC
│   │   ├── oauth.ts                # Autenticação OAuth
│   │   ├── llm.ts                  # Integração com LLM
│   │   ├── imageGeneration.ts      # Geração de imagens
│   │   ├── voiceTranscription.ts   # Transcrição de áudio
│   │   ├── notification.ts         # Sistema de notificações
│   │   └── map.ts                  # Integração com Google Maps
│   ├── routers.ts                  # Definição de procedures tRPC
│   ├── db.ts                       # Funções de banco de dados
│   ├── storage.ts                  # Integração com S3
│   └── index.ts                    # Entry point do servidor
│
├── shared/                          # Código compartilhado
│   ├── courseData.ts               # Dados estruturados dos 4 cursos
│   ├── types.ts                    # Tipos TypeScript compartilhados
│   └── const.ts                    # Constantes globais
│
├── drizzle/                        # Configuração do banco de dados
│   ├── schema.ts                   # Definição das tabelas
│   ├── relations.ts                # Relações entre tabelas
│   ├── migrations/                 # Histórico de migrações
│   └── meta/                       # Metadados do Drizzle
│
├── dist/                           # Arquivos compilados (gerado após build)
│   ├── public/                     # Assets compilados
│   └── index.js                    # Servidor compilado
│
├── package.json                    # Dependências do projeto
├── pnpm-lock.yaml                  # Lock file do pnpm
├── tsconfig.json                   # Configuração TypeScript
├── vite.config.ts                  # Configuração do Vite
├── vitest.config.ts                # Configuração dos testes
├── drizzle.config.ts               # Configuração do Drizzle
├── components.json                 # Configuração shadcn/ui
├── GUIA_INSTALACAO.md              # Este arquivo
└── README_PROJETO.md               # Informações do projeto
```

---

## 🎯 Cursos Disponíveis

### 1. 👩‍💼 Proteção e Empoderamento Digital (Mulheres)

**Módulos:**
1. Fundamentos da Segurança Pessoal Online
2. Privacidade e Seus Dados Sob Controle
3. Desmascarando Golpes Financeiros e Emocionais
4. Enfrentando a Violência e o Assédio Online
5. Boas Práticas para uma Vida Digital Segura

**Jogo:** Simulador Interativo "Caça-Golpes"
**E-book:** Guia de Empoderamento e Segurança Digital para Mulheres

---

### 2. 👧 Aventuras na Internet Segura (Crianças 8-12)

**Módulos:**
1. Bem-vindo ao Mundo da Internet!
2. Superpoderes para se Proteger
3. Juntos Contra o Cyberbullying
4. Jogos, Diversão e Tempo de Tela
5. Pedindo Ajuda: Os Adultos são seus Aliados

**Jogo:** Interland (Google Be Internet Awesome)
**E-book:** O Guia do Explorador da Internet Segura

---

### 3. 🧑‍🎓 Sua Identidade Digital no Controle (Adolescentes 13-18)

**Módulos:**
1. Sua Marca no Mundo Digital
2. Relacionamentos e Riscos na Era Digital
3. Segurança de Dispositivos e Contas
4. Saúde Mental e Bem-Estar Digital
5. Fraudes, Fake News e Pensamento Crítico

**Jogo:** Quiz Interativo "Detetive Digital"
**E-book:** Guia de Sobrevivência Digital para o Jovem Conectado

---

### 4. 💼 Blindando seu Negócio no Mundo Digital (MEIs)

**Módulos:**
1. A Base da Segurança para seu Negócio
2. Golpes Financeiros que Miram o MEI
3. Proteção Contra Malware e Ransomware
4. LGPD Simplificada para o MEI
5. Construindo uma Presença Online Segura

**Jogo:** Simulador "Decisões de Risco"
**E-book:** Manual de Segurança Digital para o Microempreendedor de Sucesso

---

## 🎨 Design System

### Cores (Soft Cyber Neumorphism)
- **Primária:** Azul Ciber `oklch(0.55 0.18 250)`
- **Secundária:** Roxo Neon Suave `oklch(0.90 0.01 260)`
- **Accent:** Roxo Accent `oklch(0.88 0.01 280)`
- **Destaque:** Laranja Coral Pastel `oklch(0.60 0.20 15)`
- **Background:** Off-white `oklch(0.96 0.005 240)`

### Tipografia
- **Títulos:** Nunito (400, 600, 700, 800)
- **Corpo:** Lato (300, 400, 700)
- **Monoespaciada:** JetBrains Mono (para código)

### Componentes
- Cantos super arredondados (radius: 1.2rem)
- Sombras suaves para profundidade
- Animações fluidas (Framer Motion)
- Efeito neumórfico nos botões

---

## 🚀 Como Começar

### Instalação Rápida

```bash
# 1. Extrair o arquivo ZIP
unzip ciber-mind-courses-codigo-completo.zip
cd ciber-mind-export

# 2. Instalar dependências
pnpm install

# 3. Rodar o servidor de desenvolvimento
pnpm dev

# 4. Abrir no navegador
# http://localhost:3000
```

### Build para Produção

```bash
pnpm build
pnpm start
```

---

## 📊 Dados dos Cursos

Os dados dos cursos estão centralizados em `shared/courseData.ts` e incluem:

- Estrutura de módulos e vídeos
- Descrições detalhadas
- Informações de jogos educativos
- Detalhes dos e-books
- Público-alvo específico

Isso facilita manutenção e atualizações futuras.

---

## 🔐 Segurança

- ✅ Autenticação OAuth integrada
- ✅ Senhas hasheadas no banco de dados
- ✅ HTTPS em produção
- ✅ CORS configurado
- ✅ Validação de entrada com Zod
- ✅ Proteção contra CSRF

---

## 📱 Responsividade

O site foi desenvolvido com **mobile-first** e funciona perfeitamente em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1280px+)

---

## 🧪 Testes

```bash
# Executar testes
pnpm test

# Testes com coverage
pnpm test -- --coverage
```

---

## 🌐 Deploy

O projeto está pronto para ser deployado em:

- **Vercel** (recomendado para React)
- **Netlify** (para frontend estático)
- **Railway** (para full-stack)
- **Render** (alternativa ao Heroku)
- **AWS** (para escala enterprise)

---

## 📚 Documentação Adicional

- [Guia de Instalação](./GUIA_INSTALACAO.md) - Passo a passo completo
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [tRPC](https://trpc.io/)

---

## 🤝 Contribuindo

Para sugerir melhorias ou reportar bugs:

1. Abra uma issue descrevendo o problema
2. Faça um fork do projeto
3. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
4. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Push para a branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

---

## 📄 Licença

Este projeto foi desenvolvido pela **Manus AI** para a **Ciber Mind**.

---

## 📞 Suporte

Para dúvidas ou suporte técnico, consulte:

- [Documentação do Projeto](./GUIA_INSTALACAO.md)
- [Issues do GitHub](https://github.com/seu-usuario/ciber-mind-courses/issues)
- [Comunidade Manus](https://help.manus.im)

---

## 🎉 Agradecimentos

Desenvolvido com ❤️ pela **Manus AI**, baseado em pesquisas de fontes confiáveis como CERT.br, CISA, SaferNet Brasil, ONU Mulheres e KnowBe4.

**Pronto para proteger e educar! 🛡️**
