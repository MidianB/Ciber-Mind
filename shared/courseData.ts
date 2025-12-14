export interface Module {
  id: number;
  title: string;
  videos: Video[];
}

export interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  targetAudience: string;
  modules: Module[];
  game: {
    title: string;
    description: string;
  };
  ebook: {
    title: string;
    description: string;
  };
}

export const courses: Course[] = [
  {
    id: "mulheres",
    title: "Proteção e Empoderamento Digital",
    subtitle: "Curso para Mulheres",
    description: "Capacite-se para navegar no ambiente digital com segurança e confiança, protegendo-se contra ameaças específicas de gênero.",
    icon: "👩‍💼",
    color: "from-pink-500 to-purple-600",
    targetAudience: "Mulheres de todas as idades",
    modules: [
      {
        id: 1,
        title: "Fundamentos da Segurança Pessoal Online",
        videos: [
          {
            id: 1,
            title: "Construindo sua Fortaleza Digital",
            description: "Conceitos essenciais de segurança: antivírus, firewalls e atualizações de software.",
            duration: "5 min"
          },
          {
            id: 2,
            title: "Wi-Fi Seguro e Conexões Protegidas",
            description: "Como identificar e utilizar redes Wi-Fi seguras em casa e locais públicos.",
            duration: "5 min"
          },
          {
            id: 3,
            title: "A Chave Mestra da Segurança - 2FA",
            description: "O que é e como ativar a verificação em duas etapas em suas contas.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 2,
        title: "Privacidade e Seus Dados Sob Controle",
        videos: [
          {
            id: 4,
            title: "O Valor da Sua Identidade Digital",
            description: "A importância de proteger dados pessoais e os riscos da exposição.",
            duration: "5 min"
          },
          {
            id: 5,
            title: "Senhas que Protegem",
            description: "Técnicas para criar e gerenciar senhas robustas e únicas.",
            duration: "5 min"
          },
          {
            id: 6,
            title: "Redes Sociais e Privacidade",
            description: "Guia prático para configurar opções de privacidade nas plataformas.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 3,
        title: "Desmascarando Golpes Financeiros e Emocionais",
        videos: [
          {
            id: 7,
            title: "Olho Vivo em Boletos e Ofertas Falsas",
            description: "Como identificar boletos fraudulentos e ofertas enganosas.",
            duration: "5 min"
          },
          {
            id: 8,
            title: "O Perigo dos Romance Scams",
            description: "Sinais de alerta para identificar golpes de relacionamento online.",
            duration: "5 min"
          },
          {
            id: 9,
            title: "Sextorsão - Não Ceda à Chantagem",
            description: "O que é sextorsão e como agir caso você se torne uma vítima.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 4,
        title: "Enfrentando a Violência e o Assédio Online",
        videos: [
          {
            id: 10,
            title: "Cyberbullying e Ciberassédio - Tolerância Zero",
            description: "Como identificar, documentar e denunciar violência online.",
            duration: "5 min"
          },
          {
            id: 11,
            title: "Segurança em Aplicativos de Namoro",
            description: "Dicas para proteger sua identidade em apps de relacionamento.",
            duration: "5 min"
          },
          {
            id: 12,
            title: "Criando uma Rede de Apoio",
            description: "Como agir ao presenciar violência online e construir apoio mútuo.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 5,
        title: "Boas Práticas para uma Vida Digital Segura",
        videos: [
          {
            id: 13,
            title: "O Checklist da Segurança",
            description: "Resumo prático de hábitos seguros e importância de backups.",
            duration: "5 min"
          },
          {
            id: 14,
            title: "Navegação Segura e Compras Online",
            description: "Como reconhecer sites seguros e usar métodos de pagamento protegidos.",
            duration: "5 min"
          },
          {
            id: 15,
            title: "Empoderamento Digital",
            description: "Como se manter informada e multiplicar conhecimento em segurança.",
            duration: "5 min"
          }
        ]
      }
    ],
    game: {
      title: "Simulador Interativo Caça-Golpes",
      description: "Jogo onde você analisa perfis, e-mails e mensagens para identificar tentativas de phishing, romance scams e outras fraudes."
    },
    ebook: {
      title: "Guia de Empoderamento e Segurança Digital para Mulheres",
      description: "Compilação completa do curso com checklists, ferramentas úteis e capítulo extra sobre saúde mental digital."
    }
  },
  {
    id: "criancas",
    title: "Aventuras na Internet Segura",
    subtitle: "Curso para Crianças (8-12 anos)",
    description: "Com linguagem lúdica e personagens animados, ensine os conceitos fundamentais de segurança online de forma divertida.",
    icon: "👧",
    color: "from-blue-400 to-cyan-500",
    targetAudience: "Crianças de 8 a 12 anos",
    modules: [
      {
        id: 1,
        title: "Bem-vindo ao Mundo da Internet!",
        videos: [
          {
            id: 1,
            title: "A Internet é como uma Cidade Grande",
            description: "Analogia para explicar o que é a internet e seus lugares divertidos e cuidadosos.",
            duration: "5 min"
          },
          {
            id: 2,
            title: "O Segredo dos Seus Dados",
            description: "O que são dados pessoais e por que devem ser mantidos em segredo.",
            duration: "5 min"
          },
          {
            id: 3,
            title: "Amigos Online vs. Amigos da Vida Real",
            description: "A diferença entre amigos reais e contatos online, e a regra de ouro.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 2,
        title: "Superpoderes para se Proteger",
        videos: [
          {
            id: 4,
            title: "Criando sua Senha Secreta",
            description: "Dicas divertidas para criar senhas fortes e seguras.",
            duration: "5 min"
          },
          {
            id: 5,
            title: "Onde Guardar sua Senha Secreta",
            description: "A importância de não compartilhar senhas e como guardá-las.",
            duration: "5 min"
          },
          {
            id: 6,
            title: "O Cadeado Mágico (HTTPS)",
            description: "Como identificar o cadeado de segurança no navegador.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 3,
        title: "Juntos Contra o Cyberbullying",
        videos: [
          {
            id: 7,
            title: "O que é Cyberbullying?",
            description: "Explicação simples sobre bullying online, focando em empatia.",
            duration: "5 min"
          },
          {
            id: 8,
            title: "O que Fazer se Alguém for Malvado Online",
            description: "Instruções claras: não responda, bloqueie e conte para um adulto.",
            duration: "5 min"
          },
          {
            id: 9,
            title: "Seja um Herói da Internet",
            description: "Como ajudar um amigo e espalhar gentileza online.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 4,
        title: "Jogos, Diversão e Tempo de Tela",
        videos: [
          {
            id: 10,
            title: "Escolhendo Jogos Seguros",
            description: "Como verificar a classificação indicativa e evitar vírus.",
            duration: "5 min"
          },
          {
            id: 11,
            title: "O Equilíbrio entre o Online e o Offline",
            description: "A importância do tempo limite e equilibrar atividades.",
            duration: "5 min"
          },
          {
            id: 12,
            title: "Cuidado com os Prêmios Falsos",
            description: "Desconfiar de mensagens que prometem prêmios falsos.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 5,
        title: "Pedindo Ajuda: Os Adultos são seus Aliados",
        videos: [
          {
            id: 13,
            title: "Links e Downloads Misteriosos",
            description: "A regra de nunca clicar em links ou baixar arquivos suspeitos.",
            duration: "5 min"
          },
          {
            id: 14,
            title: "Quando a Tela te Deixa Triste ou Assustado",
            description: "Incentivo para conversar com os pais sobre conteúdo desconfortável.",
            duration: "5 min"
          },
          {
            id: 15,
            title: "O Botão de Ajuda",
            description: "Resumo de quando e como pedir ajuda aos adultos de confiança.",
            duration: "5 min"
          }
        ]
      }
    ],
    game: {
      title: "Interland (Google Be Internet Awesome)",
      description: "Jogo de aventura que ensina conceitos de cidadania e segurança digital de forma interativa e divertida."
    },
    ebook: {
      title: "O Guia do Explorador da Internet Segura",
      description: "Livro digital ilustrado com personagens do curso, regras de ouro e passatempos sobre segurança online."
    }
  },
  {
    id: "adolescentes",
    title: "Sua Identidade Digital no Controle",
    subtitle: "Curso para Adolescentes (13-18 anos)",
    description: "Focado nos desafios da adolescência, desde a gestão da reputação online até a importância da saúde mental no mundo digital.",
    icon: "🧑‍🎓",
    color: "from-purple-500 to-indigo-600",
    targetAudience: "Adolescentes de 13 a 18 anos",
    modules: [
      {
        id: 1,
        title: "Sua Marca no Mundo Digital",
        videos: [
          {
            id: 1,
            title: "Pegada Digital - O que a Internet Sabe Sobre Você?",
            description: "Como funciona a pegada digital e a importância de pensar antes de postar.",
            duration: "5 min"
          },
          {
            id: 2,
            title: "Gerenciando sua Reputação Online",
            description: "Dicas para construir uma imagem online positiva para o futuro.",
            duration: "5 min"
          },
          {
            id: 3,
            title: "Configurando a Privacidade nas Redes Sociais",
            description: "Tutorial para ajustar configurações no Instagram, TikTok e Twitter.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 2,
        title: "Relacionamentos e Riscos na Era Digital",
        videos: [
          {
            id: 4,
            title: "Sexting - As Consequências de um Clique",
            description: "Conversa franca sobre os riscos do compartilhamento de imagens íntimas.",
            duration: "5 min"
          },
          {
            id: 5,
            title: "Cyberbullying - Não Curta essa Ideia",
            description: "Como identificar e usar ferramentas de denúncia e bloqueio.",
            duration: "5 min"
          },
          {
            id: 6,
            title: "Relacionamentos Online - Sinais de Alerta",
            description: "Como identificar perfis falsos e relacionamentos manipuladores.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 3,
        title: "Segurança de Dispositivos e Contas",
        videos: [
          {
            id: 7,
            title: "A Importância das Atualizações",
            description: "Por que manter sistemas e apps atualizados protege contra vulnerabilidades.",
            duration: "5 min"
          },
          {
            id: 8,
            title: "Downloads e Apps Seguros",
            description: "Os perigos da pirataria e como verificar a segurança de um app.",
            duration: "5 min"
          },
          {
            id: 9,
            title: "Senhas, Biometria e 2FA",
            description: "A evolução da segurança de contas e a melhor defesa combinada.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 4,
        title: "Saúde Mental e Bem-Estar Digital",
        videos: [
          {
            id: 10,
            title: "Vício em Telas e Redes Sociais",
            description: "Como identificar sinais de dependência digital e seus impactos.",
            duration: "5 min"
          },
          {
            id: 11,
            title: "Detox Digital - Encontrando o Equilíbrio",
            description: "Estratégias práticas para reduzir o tempo de tela.",
            duration: "5 min"
          },
          {
            id: 12,
            title: "O Impacto das Redes na Autoestima",
            description: "Discussão sobre comparação, validação e olhar crítico sobre conteúdo.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 5,
        title: "Fraudes, Fake News e Pensamento Crítico",
        videos: [
          {
            id: 13,
            title: "Phishing - A Isca dos Criminosos",
            description: "Exemplos reais de phishing e como identificar links maliciosos.",
            duration: "5 min"
          },
          {
            id: 14,
            title: "Desinformação e Fake News",
            description: "Como notícias falsas se espalham e a importância de checar fontes.",
            duration: "5 min"
          },
          {
            id: 15,
            title: "Compras Online com Segurança",
            description: "Dicas para verificar lojas online e usar métodos de pagamento seguros.",
            duration: "5 min"
          }
        ]
      }
    ],
    game: {
      title: "Quiz Interativo Detetive Digital",
      description: "Jogo de múltipla escolha com cenários realistas onde você deve tomar decisões corretas sobre segurança online."
    },
    ebook: {
      title: "Guia de Sobrevivência Digital para o Jovem Conectado",
      description: "Compilação do curso com glossário de termos digitais, checklists e capítulo bônus sobre carreira em cibersegurança."
    }
  },
  {
    id: "meis",
    title: "Blindando seu Negócio no Mundo Digital",
    subtitle: "Curso para MEIs",
    description: "Curso prático focado nas necessidades do microempreendedor, desde proteção contra golpes até adequação simplificada à LGPD.",
    icon: "💼",
    color: "from-green-500 to-teal-600",
    targetAudience: "Microempreendedores Individuais",
    modules: [
      {
        id: 1,
        title: "A Base da Segurança para seu Negócio",
        videos: [
          {
            id: 1,
            title: "Kit de Sobrevivência Digital do MEI",
            description: "As três práticas essenciais: antivírus, backups e senhas fortes.",
            duration: "5 min"
          },
          {
            id: 2,
            title: "A Regra de Ouro - Mantenha Tudo Atualizado",
            description: "A importância de manter sistemas e softwares atualizados.",
            duration: "5 min"
          },
          {
            id: 3,
            title: "Protegendo sua Rede e suas Contas",
            description: "Como configurar Wi-Fi seguro e ativar 2FA em contas críticas.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 2,
        title: "Golpes Financeiros que Miram o MEI",
        videos: [
          {
            id: 4,
            title: "O Fantasma do Boleto Falso",
            description: "Como identificar boletos de cobrança fraudulentos.",
            duration: "5 min"
          },
          {
            id: 5,
            title: "Cuidado com Sites Falsos do Governo",
            description: "Alerta sobre sites que cobram por serviços gratuitos do governo.",
            duration: "5 min"
          },
          {
            id: 6,
            title: "Empréstimos e Ofertas Irrecusáveis",
            description: "Como desconfiar de ofertas de crédito fácil e investimentos suspeitos.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 3,
        title: "Proteção Contra Malware e Ransomware",
        videos: [
          {
            id: 7,
            title: "O que são Malware e Ransomware?",
            description: "Explicação simples sobre vírus que sequestram dados do negócio.",
            duration: "5 min"
          },
          {
            id: 8,
            title: "A Melhor Defesa é a Prevenção",
            description: "Importância de não abrir anexos desconhecidos e usar proteção anti-ransomware.",
            duration: "5 min"
          },
          {
            id: 9,
            title: "Meu Negócio foi Atacado, e Agora?",
            description: "Passos a seguir após um ataque e importância de backups offline.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 4,
        title: "LGPD Simplificada para o MEI",
        videos: [
          {
            id: 10,
            title: "LGPD para Pequenos - O que Você Precisa Saber",
            description: "Explicação sobre a lei e regras diferenciadas para pequenos negócios.",
            duration: "5 min"
          },
          {
            id: 11,
            title: "Como Coletar e Guardar Dados de Clientes",
            description: "Dicas práticas para coletar e armazenar dados de forma segura.",
            duration: "5 min"
          },
          {
            id: 12,
            title: "Transparência que Gera Confiança",
            description: "Como criar uma política de privacidade simples para seu negócio.",
            duration: "5 min"
          }
        ]
      },
      {
        id: 5,
        title: "Construindo uma Presença Online Segura",
        videos: [
          {
            id: 13,
            title: "Seu Site é seu Cartão de Visitas - Proteja-o",
            description: "A importância do certificado SSL para segurança e credibilidade.",
            duration: "5 min"
          },
          {
            id: 14,
            title: "Redes Sociais para Negócios",
            description: "Como proteger contas comerciais com senhas fortes e 2FA.",
            duration: "5 min"
          },
          {
            id: 15,
            title: "Gerenciamento de Crises e Reputação Online",
            description: "Como responder a reclamações públicas de forma profissional.",
            duration: "5 min"
          }
        ]
      }
    ],
    game: {
      title: "Simulador Decisões de Risco",
      description: "Jogo onde o MEI enfrenta situações do dia a dia e precisa tomar decisões corretas para proteger o negócio."
    },
    ebook: {
      title: "Manual de Segurança Digital para o Microempreendedor de Sucesso",
      description: "Compilação completa com checklists práticos, modelos de política de privacidade e guia de ação rápida."
    }
  }
];
