export const Localization = {
    en: {
        bio: [
            "I am a full-stack developer with an interdisciplinary background: I hold a degree in Portuguese–French Language and Literature from UFRGS and I am currently majoring in Internet Systems at IFRS. My academic background directly influences the way I approach software — with attention to structure, coherence, and conceptual precision.",
            "For over three years, I have worked on the development and maintenance of a legacy management system focused on factoring companies, FIDCs (a financial instrument widely used in Brazilian credit markets), and securitization firms. Working within a complex financial domain has given me constant exposure to sensitive business rules, extensive codebases, impact analysis, and safe modifications in critical environments, primarily using Java 8 and JSP.",
            "I have experience in web development and feel comfortable working with React, Spring Boot, and REST APIs. In addition, I continuously deepen my understanding of core fundamentals — including C programming and assembly languages — as I believe that understanding low-level concepts strengthens decision-making in higher-level environments.",
            "Beyond technology, my interests include linguistics, philosophy, teaching and education, translation studies, video games, board games, and tabletop RPGs (currently running Curse of Strahd, though Call of Cthulhu will always be my baby) — activities that reinforce my intellectual curiosity and analytical and narrative skills."
        ],
        about: "about",
        projects: "projects"
    },
    pt: {
        bio: [
            "Sou desenvolvedor full-stack com formação interdisciplinar: graduado em Letras Português-Francês pela UFRGS e estudante de Sistemas para Internet no IFRS. Minha trajetória acadêmica anterior influencia diretamente minha forma de pensar software — com atenção à estrutura, clareza, coerência e precisão conceitual.",
            "Atuo há mais de três anos no desenvolvimento e manutenção de um sistema legado de gestão voltado para factorings, FIDCs e securitizadoras. Trabalhar em um domínio financeiro complexo me proporcionou contato constante com regras de negócio sensíveis, capacidade de leitura de código extenso, análise de impacto e modificação segura em ambientes críticos, utilizando principalmente Java 8 e JSP.",
            "Tenho experiência com desenvolvimento web e me sinto confortável trabalhando com React, Spring Boot e APIs REST. Além disso, constantemente busco aprofundar os fundamentos — incluindo programação em C e linguagens assembly — por acreditar que compreender o funcionamento de baixo nível fortalece a tomada de decisões em ambientes de alto nível.",
            "Para além da tecnologia, meus interesses incluem linguística, filosofia, ensino e educação, estudos da tradução, videogames, jogos de tabuleiro e RPGs de mesa (atualmente mestrando Maldição de Strahd, mas Chamado de Cthulhu é o que me faz feliz) — atividades que reforçam minha curiosidade intelectual e minha capacidade analítica e narrativa."
        ],
        about: "sobre",
        projects: "projetos"
    },
    fr: {
        bio: [
            "Je suis développeur full-stack avec une formation interdisciplinaire : diplômé en Lettres Portugais–Français à l’UFRGS, je poursuis actuellement des études en développement de systèmes web à l’IFRS. Mon parcours académique influence directement ma manière d’aborder le logiciel — avec une attention particulière à la structure, à la cohérence et à la précision conceptuelle.",
            "Depuis plus de trois ans, je travaille au développement et à la maintenance d’un système hérité destiné aux sociétés d’affacturage, aux FIDCs (instrument financier largement utilisé sur le marché brésilien du crédit) et aux entreprises de titrisation. Ce domaine financier complexe m’a exposé en permanence à des règles métier sensibles, à des bases de code étendues, à l’analyse d’impact et à des modifications sûres dans des environnements critiques, principalement en Java 8 et JSP.",
            "J’ai de l’expérience en développement web et je me sens à l’aise avec React, Spring Boot et les APIs REST. Par ailleurs, j’approfondis continuellement les fondamentaux — notamment la programmation en C et les langages assembleur — convaincu qu’une compréhension des mécanismes de bas niveau renforce la qualité des décisions prises dans des environnements de plus haut niveau.",
            "Au-delà de la technologie, je m’intéresse à la linguistique, à la philosophie, à l’enseignement, aux études de traduction, aux jeux vidéo, aux jeux de société et aux JDR (je mène actuellement une campagne de Curse of Strahd, même si Call of Cthulhu restera toujours mon préféré) — ces activités nourrissent ma curiosité intellectuelle ainsi que mes capacités d’analyse et de narration."
        ],
        about: "à propos",
        projects: "projets"
    }
} as const;

export const Languages = Object.keys(Localization) as Language[];
export type Language = keyof typeof Localization;