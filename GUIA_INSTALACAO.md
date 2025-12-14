# Guia de Instalação - Ciber Mind Courses

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **pnpm** (gerenciador de pacotes) - [Instruções de instalação](https://pnpm.io/installation)
- **Git** (opcional, mas recomendado) - [Download aqui](https://git-scm.com/)

### Verificar se está tudo instalado:

```bash
node --version
pnpm --version
```

---

## 🚀 Passo a Passo para Instalar e Rodar

### 1️⃣ Extrair o Arquivo ZIP

Descompacte o arquivo `ciber-mind-courses-codigo-completo.zip` em uma pasta de sua escolha.

```bash
# No Windows (PowerShell)
Expand-Archive -Path ciber-mind-courses-codigo-completo.zip -DestinationPath .

# No macOS/Linux
unzip ciber-mind-courses-codigo-completo.zip
```

### 2️⃣ Navegar até a Pasta do Projeto

```bash
cd ciber-mind-export
```

### 3️⃣ Instalar Dependências

Execute o comando abaixo para instalar todas as dependências do projeto:

```bash
pnpm install
```

**⏳ Isso pode levar alguns minutos na primeira vez.**

### 4️⃣ Configurar Variáveis de Ambiente (Opcional)

Se você quiser usar recursos avançados (autenticação, banco de dados), crie um arquivo `.env.local` na raiz do projeto:

```bash
# .env.local (exemplo)
DATABASE_URL=seu_url_de_banco_de_dados
VITE_APP_TITLE=Ciber Mind
VITE_APP_LOGO=/logo.png
```

**Nota:** Para desenvolvimento local básico, você pode pular este passo.

### 5️⃣ Rodar o Servidor de Desenvolvimento

```bash
pnpm dev
```

**Saída esperada:**
```
[15:09:19] Server running on http://localhost:3000/
```

Abra seu navegador e acesse: **http://localhost:3000/**

---

## 📁 Estrutura do Projeto

```
ciber-mind-export/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── pages/         # Páginas (Home, CourseDetail)
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── App.tsx        # Rotas principais
│   │   └── index.css      # Estilos globais
│   └── index.html         # HTML principal
├── server/                # Backend Express + tRPC
│   ├── routers.ts         # APIs e endpoints
│   └── db.ts              # Funções de banco de dados
├── shared/                # Código compartilhado
│   └── courseData.ts      # Dados dos cursos
├── drizzle/               # Configuração do banco de dados
├── package.json           # Dependências do projeto
└── vite.config.ts         # Configuração do Vite
```

---

## 🛠️ Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Compila o projeto para produção |
| `pnpm start` | Executa a versão compilada |
| `pnpm test` | Executa os testes |
| `pnpm format` | Formata o código com Prettier |
| `pnpm db:push` | Sincroniza o banco de dados |

---

## 🌐 Acessar o Site

Após rodar `pnpm dev`, o site estará disponível em:

- **Local:** http://localhost:3000/
- **Páginas principais:**
  - Home: http://localhost:3000/
  - Curso Mulheres: http://localhost:3000/curso/mulheres
  - Curso Crianças: http://localhost:3000/curso/criancas
  - Curso Adolescentes: http://localhost:3000/curso/adolescentes
  - Curso MEIs: http://localhost:3000/curso/meis

---

## ❌ Solução de Problemas

### Erro: "pnpm: command not found"

**Solução:** Instale o pnpm globalmente:
```bash
npm install -g pnpm
```

### Erro: "Port 3000 is already in use"

**Solução:** Use uma porta diferente:
```bash
pnpm dev -- --port 3001
```

### Erro: "Cannot find module"

**Solução:** Limpe o cache e reinstale:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro ao fazer build

**Solução:** Limpe o cache do Vite:
```bash
rm -rf dist
pnpm build
```

---

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
pnpm build
```

Isso gera uma pasta `dist/` com os arquivos compilados prontos para deploy.

---

## 🚀 Deploy (Opcional)

O projeto pode ser deployado em plataformas como:

- **Vercel** - Melhor para React/Next.js
- **Netlify** - Suporta builds estáticos
- **Heroku** - Para backend Node.js
- **Railway** - Fácil e rápido
- **Render** - Alternativa moderna ao Heroku

---

## 📚 Estrutura dos Cursos

O projeto contém **4 cursos** com a seguinte estrutura:

### Cada Curso Possui:
- ✅ **5 Módulos**
- ✅ **3 Vídeos por módulo** (5 minutos cada)
- ✅ **1 Jogo Educativo**
- ✅ **1 E-book Completo**

### Cursos Disponíveis:
1. **Mulheres** - Proteção e Empoderamento Digital
2. **Crianças (8-12 anos)** - Aventuras na Internet Segura
3. **Adolescentes (13-18 anos)** - Sua Identidade Digital no Controle
4. **MEIs** - Blindando seu Negócio no Mundo Digital

---

## 🎨 Design

O site utiliza o design **Soft Cyber Neumorphism** com:

- **Cores:** Azul Ciber, Roxo Neon Suave, Laranja Coral Pastel
- **Fontes:** Nunito (títulos) e Lato (corpo)
- **Componentes:** shadcn/ui + Tailwind CSS 4
- **Animações:** Framer Motion

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique se todas as dependências estão instaladas: `pnpm install`
2. Limpe o cache: `rm -rf node_modules dist`
3. Reinstale: `pnpm install && pnpm dev`
4. Consulte a documentação oficial:
   - [React](https://react.dev/)
   - [Vite](https://vitejs.dev/)
   - [Tailwind CSS](https://tailwindcss.com/)

---


**Pronto para começar? Execute `pnpm install && pnpm dev` e aproveite! 🚀**
