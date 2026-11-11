// SUPABASE_URL: Project Settings > Data API > Project URL (ou botão Connect).
// SUPABASE_ANON_KEY: a chave PUBLISHABLE (sb_publishable_...) ou, no painel antigo, a "anon public".
// NUNCA coloque aqui a chave secret (sb_secret_...) ou service_role.
// Transcrições, sumários, tópicos e anotadores NÃO ficam neste repositório: ficam só no Supabase.
window.SUM_CONFIG = {
  SUPABASE_URL: "https://jdebnbwjfghoypmiyugb.supabase.co",   // projeto "Questionários"
  SUPABASE_ANON_KEY: "sb_publishable_ueQzPqed2ypQXMFz54vGgA_sT5cgPhy",

  // Telas que aparecem para cada transcrição, nesta ordem. Tire uma da lista para desligá-la.
  // "tags" e "inadequado" só aparecem se a lista correspondente abaixo tiver pelo menos uma tag.
  ETAPAS: ["sumario", "principal", "secundarios", "tags", "inadequado"],

  // Marcações de conteúdo: uma pergunta Sim/Não por tag, mostradas uma a uma, nesta ordem.
  //   id        -> chave gravada no banco (sem espaços nem acentos; NÃO mude depois de começar a coleta)
  //   pergunta  -> texto da pergunta
  //   definicao -> texto mostrado abaixo da pergunta
  TAGS_CONTEUDO: [
    { id: "humor",
      pergunta: "Does the text contain humor?",
      definicao: "Content clearly intended to make the audience laugh, such as jokes, puns, irony, sarcasm, comic exaggeration or comic situations. Something that is only strange, without comic intent, is not humor." },
    { id: "absurdity",
      pergunta: "Does the text contain an absurd situation?",
      definicao: "An illogical or surreal situation that breaks logic, the laws of nature or common sense, and is central to the text. Fruits that talk or act like humans are the premise of the genre and are not absurd by themselves." },
    { id: "conflict",
      pergunta: "Is there a conflict between characters in the text?",
      definicao: "A confrontation between characters with opposing interests, opinions or goals, such as arguments, fights, insults, threats or betrayals. A purely internal struggle of one character is not conflict." },
    { id: "competition",
      pergunta: "Is there a competition in the text?",
      definicao: "A dispute, challenge or contest in which characters try to win or outperform others, with a clear way of deciding the winner, such as races, games, contests or bets. Rivalry without a defined contest is not competition." },
    { id: "transformation",
      pergunta: "Does a character go through a transformation in the text?",
      definicao: "A significant change in a character's identity, appearance or condition that happens within the text, whether physical, social (status or role) or behavioral. Fixed traits and passing emotions are not transformation." },
    { id: "romance",
      pergunta: "Is there romance in the text?",
      definicao: "A romantic relationship or romantic interest between characters, such as flirting, declaring love, dating, kissing, jealousy, marriage or breakup. Terms like \"honey\" or \"babe\" alone are not romance." },
    { id: "friendship",
      pergunta: "Is there friendship between characters in the text?",
      definicao: "Friendship, cooperation or support between characters who are not related or romantically involved, such as loyalty, mutual help or teamwork. Slang like \"bro\" or \"buddy\" alone is not friendship." },
    { id: "family",
      pergunta: "Are family relationships relevant in the text?",
      definicao: "Relationships or situations between relatives (parents, children, siblings, grandparents) that matter to the text, such as caregiving, family disputes or family secrets. A relative only mentioned, or slang like \"bro\" or \"sis\", is not family." },
    { id: "suspense",
      pergunta: "Does the text create suspense?",
      definicao: "Mystery, tension or anticipation created by uncertainty about what will happen, such as hidden secrets, imminent danger, plot twists or cliffhangers. Events told plainly, with no uncertainty, are not suspense." },
    { id: "moral_lesson",
      pergunta: "Does the text convey an explicit moral lesson?",
      definicao: "A message about values or behavior that is stated by a character or narrator, or a punishment or reward explicitly presented as the result of a character's behavior. A lesson that is only implicit or open to interpretation does not count." }
  ],

  // Conteúdo potencialmente inadequado: mesmo formato das marcações de conteúdo.
  TAGS_INADEQUADO: [
    { id: "violence",
      pergunta: "Does the transcript contain Violence?",
      definicao: "content contains violence, which can be War; Weapons; Terrorism; Police brutality; Motiveless killing; Sexual violence; Animal cruelty; Torture; Genocide and others" },
    { id: "sex",
      pergunta: "Does the transcript contain Sex?",
      definicao: "content contains sexual themes, including nudity, sexual content and relationships, which can be Nudity; Mild sexual content; Explicit sexual content; Relationship conflict; Reproductive health and others" },
    { id: "stigma",
      pergunta: "Does the transcript contain Stigma?",
      definicao: "content depicts negative stereotypes about or attitudes towards a specific group, such as racism or sexism, which can be Racism; Anti-religious; Anti-Semitic; Anti-Christian; Islamophobia; Colonialism; Slavery; Classism; Sexism; Misogyny; Misandry; Transphobia; Gender-identity; Sexuality; Homophobia; Anti-disability and others" },
    { id: "disturbing_content",
      pergunta: "Does the transcript contain Disturbing Content?",
      definicao: "content contains imagery, sounds, or effects that may frighten, disgust or scare, which can be Disturbing content with threat; Horror and terror; Disturbing imagery; Medical content; Human bodies and functions and others" },
    { id: "language",
      pergunta: "Does the transcript contain Language?",
      definicao: "content contains language which is sexual, crude or offensive, which can be Sexual language; Adult humour; Swearing; Offensive language and others" },
    { id: "risky_behaviours",
      pergunta: "Does the transcript contain Risky Behaviours?",
      definicao: "content depicts risky lifestyle behaviours, which can be Drug misuse; Alcohol misuse; Tobacco; Gambling and others" },
    { id: "mental_health",
      pergunta: "Does the transcript contain Mental Health?",
      definicao: "content relates to mental health issues, which can be Eating disorders; Trauma; Self-harm and suicide; Depression; OCD; Panic attacks; Anxiety; Spiders; Snakes; Insects; Needles; Eye contact; Irregular patterns; Hair pulling and others" },
    { id: "death",
      pergunta: "Does the transcript contain Death?",
      definicao: "content relates to human death or dying, which can be Accidents; Natural disasters and others" },
    { id: "parental_guidance",
      pergunta: "Does the transcript contain Parental Guidance?",
      definicao: "content may not be appropriate for children, which can be Online access; Cyber-bullying; Competitive content; Imitative content; Upsetting content; Non-realistic violence and others" },
    { id: "crime",
      pergunta: "Does the transcript contain Crime?",
      definicao: "content depicts or relates to criminal activity" },
    { id: "abuse",
      pergunta: "Does the transcript contain Abuse?",
      definicao: "content depicts or relates to abuse, which can be Child abuse; Emotional abuse; Physical/sexual abuse; Neglect and others" },
    { id: "sociopolitical",
      pergunta: "Does the transcript contain Sociopolitical?",
      definicao: "content includes social and political issues, which can be Injustice; Political issues; Nazism; Class issues and others" },
    { id: "flashing_lights",
      pergunta: "Does the transcript contain Flashing Lights?",
      definicao: "content includes strobe or flashing lighting" },
    { id: "objects",
      pergunta: "Does the transcript contain Objects?",
      definicao: "content contains specific objects" }
  ]
};