export const locales = ["en", "fr"] as const
export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localePath(locale: Locale, path = "") {
  const suffix = path ? `/${path.replace(/^\/+|\/+$/g, "")}` : ""
  return `/${locale}${suffix}/`
}

export const messages = {
  en: {
    nav: { projects: "Projects", gate: "Gate", winegold: "Winegold", openMenu: "Open menu", language: "Language" },
    footer: { tagline: "Useful tools for independent work." },
    home: {
      badge: "Tools for independent work",
      title: "Spend less time managing. More time making.",
      intro: "Spel creates simple, practical tools for artisans, artists and independent entrepreneurs. Organize the everyday work, remove repetitive friction and keep your attention on your craft and your clients.",
      explore: "Explore the tools",
      source: "View open source projects",
      toolsEyebrow: "Our tools",
      toolsTitle: "Practical help for the everyday work.",
      toolsIntro: "Focused products for small teams and independent professionals who need useful software, not another job managing software.",
      boxKind: "Inventory",
      boxDescription: "Keep products, supplies and stock movements clear without turning inventory into a full-time occupation.",
      gateKind: "Automation",
      gateDescription: "Connect the tools on your computer to an AI assistant when a repetitive task deserves a shortcut.",
      winegoldKind: "macOS utility",
      winegoldDescription: "Drop a file at the edge of your screen and launch a useful action without interrupting your flow.",
      approachEyebrow: "Our approach",
      approachTitle: "Technology should support the work, not replace its meaning.",
      principles: [
        ["Made for real work", "Tools shaped around the daily reality of independent professionals, not abstract enterprise workflows."],
        ["Less admin, more craft", "Reduce repetitive tasks, keep things organized and spend more time on the work your clients actually value."],
        ["Simple from day one", "Useful when you are starting out, clear enough to understand and flexible enough to grow with your activity."],
      ],
    },
    gate: {
      description: "Bring local tools and automations into ChatGPT.",
      badge: "Local automation gateway",
      title: "Your machine, inside ChatGPT.",
      intro: "Gate connects local commands, files and trusted tools to ChatGPT through one protected endpoint. Your services stay local. The assistant gets a door, not the whole building.",
      installButton: "Install Gate",
      you: "You",
      prompt: "Restart OpenClaw and show me the last 50 error lines.",
      connected: "Connected to your machine",
      restarted: "OpenClaw restarted",
      logs: "Logs retrieved",
      install: "Install",
      installTitle: "One command. Then talk.",
      installCopy: "macOS, Linux and WSL. A rare case where the one-line installer is not a metaphor.",
      features: [
        ["Streaming commands", "Run local commands, inspect output as it arrives and keep the work on your own machine."],
        ["Protected access", "Use one stable endpoint with authentication and safeguards around destructive commands."],
        ["Files and tools", "Share revocable files and load trusted tools only when a conversation needs them."],
      ],
    },
    winegold: {
      description: "Drop a file on the screen edge. Pick an action. Done.",
      badge: "Native macOS automation",
      title: "Drop a file. Pick an action. Done.",
      intro: "Winegold turns the edge of your screen into a local action launcher. Drag files, select a recipe and let the machine handle the repetitive part.",
      installButton: "Install Winegold",
      install: "Install",
      installTitle: "One command on macOS.",
      installCopy: "Community builds are local and open source. macOS may ask for approval in Privacy & Security because apparently clicking once was too peaceful.",
      features: [
        ["Edge drop zone", "Drag files to the right edge of the screen and open a focused action panel without hunting through menus."],
        ["Local recipes", "Create or import readable .wg.yml actions that run commands with file and folder placeholders."],
        ["Native macOS app", "Runs from the menu bar, stays local and updates from signed release artifacts with checksum verification."],
      ],
      recipe: "Example recipe",
    },
  },
  fr: {
    nav: { projects: "Projets", gate: "Gate", winegold: "Winegold", openMenu: "Ouvrir le menu", language: "Langue" },
    footer: { tagline: "Des outils utiles pour le travail indépendant." },
    home: {
      badge: "Des outils pour les indépendants",
      title: "Moins de gestion. Plus de création.",
      intro: "Spel crée des outils simples et pratiques pour les artisans, les artistes et les entrepreneurs indépendants. Organisez le quotidien, réduisez les tâches répétitives et gardez votre attention sur votre métier et vos clients.",
      explore: "Découvrir les outils",
      source: "Voir les projets open source",
      toolsEyebrow: "Nos outils",
      toolsTitle: "Une aide concrète pour le travail quotidien.",
      toolsIntro: "Des produits ciblés pour les petites équipes et les indépendants qui ont besoin de logiciels utiles, pas d'un nouveau métier consistant à gérer leurs logiciels.",
      boxKind: "Stock",
      boxDescription: "Gardez une vision claire de vos produits, consommables et mouvements de stock sans en faire une occupation à plein temps.",
      gateKind: "Automatisation",
      gateDescription: "Reliez les outils de votre ordinateur à un assistant IA lorsqu'une tâche répétitive mérite un raccourci.",
      winegoldKind: "Utilitaire macOS",
      winegoldDescription: "Déposez un fichier au bord de l'écran et lancez une action utile sans interrompre votre travail.",
      approachEyebrow: "Notre approche",
      approachTitle: "La technologie doit soutenir le métier, pas remplacer ce qui lui donne du sens.",
      principles: [
        ["Pensé pour le travail réel", "Des outils adaptés au quotidien des indépendants, pas à des processus abstraits de grande entreprise."],
        ["Moins d'administratif, plus de métier", "Réduisez les tâches répétitives, restez organisé et consacrez plus de temps au travail que vos clients valorisent vraiment."],
        ["Simple dès le premier jour", "Utile lorsque vous démarrez, assez clair pour être compris et assez souple pour évoluer avec votre activité."],
      ],
    },
    gate: {
      description: "Reliez vos outils locaux et vos automatisations à ChatGPT.",
      badge: "Passerelle d'automatisation locale",
      title: "Votre machine, dans ChatGPT.",
      intro: "Gate relie vos commandes locales, vos fichiers et vos outils de confiance à ChatGPT grâce à un point d'accès protégé. Vos services restent chez vous. L'assistant obtient une porte, pas tout le bâtiment.",
      installButton: "Installer Gate",
      you: "Vous",
      prompt: "Redémarre OpenClaw et montre-moi les 50 dernières lignes d'erreur.",
      connected: "Connexion à votre machine",
      restarted: "OpenClaw redémarré",
      logs: "Journaux récupérés",
      install: "Installation",
      installTitle: "Une commande. Puis vous discutez.",
      installCopy: "macOS, Linux et WSL. Un cas rare où l'installation en une ligne n'est pas une métaphore.",
      features: [
        ["Commandes en direct", "Exécutez des commandes locales, suivez leur sortie et gardez le travail sur votre propre machine."],
        ["Accès protégé", "Utilisez un point d'accès stable avec authentification et protections contre les commandes destructrices."],
        ["Fichiers et outils", "Partagez des fichiers révocables et chargez uniquement les outils utiles à la conversation."],
      ],
    },
    winegold: {
      description: "Déposez un fichier au bord de l'écran. Choisissez une action. Terminé.",
      badge: "Automatisation native pour macOS",
      title: "Déposez un fichier. Choisissez une action. Terminé.",
      intro: "Winegold transforme le bord de votre écran en lanceur d'actions locales. Glissez vos fichiers, sélectionnez une recette et laissez la machine gérer la partie répétitive.",
      installButton: "Installer Winegold",
      install: "Installation",
      installTitle: "Une commande sur macOS.",
      installCopy: "Les versions communautaires sont locales et open source. macOS peut demander une validation dans Confidentialité et sécurité, parce qu'un seul clic aurait été trop paisible.",
      features: [
        ["Zone de dépôt latérale", "Glissez des fichiers vers le bord droit de l'écran et ouvrez un panneau d'actions sans fouiller dans les menus."],
        ["Recettes locales", "Créez ou importez des actions .wg.yml lisibles qui exécutent des commandes avec des fichiers et dossiers."],
        ["Application macOS native", "Fonctionne depuis la barre des menus, reste locale et se met à jour depuis des versions signées et vérifiées."],
      ],
      recipe: "Exemple de recette",
    },
  },
} as const
