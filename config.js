// SUPABASE_URL: Project Settings > Data API > Project URL (ou botão Connect).
// SUPABASE_ANON_KEY: a chave PUBLISHABLE (sb_publishable_...) ou, no painel antigo, a "anon public".
// NUNCA coloque aqui a chave secret (sb_secret_...) ou service_role.
// Transcrições, sumários, tópicos da LLM e anotadores NÃO ficam neste repositório: ficam só no Supabase.
// O tópico da LLM só é enviado ao navegador DEPOIS que a pessoa envia o próprio tópico.
window.SUM_CONFIG = {
  SUPABASE_URL: "https://jdebnbwjfghoypmiyugb.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_ueQzPqed2ypQXMFz54vGgA_sT5cgPhy",
  // Telas que aparecem para cada transcrição, nesta ordem.
  // Agora: só o sumário. Para ligar as telas do tópico depois, troque por:
  //   ETAPAS: ["sumario", "topico", "nota"]
  ETAPAS: ["sumario"],
  TOPICO_MAX_PALAVRAS: 10   // (para a tela do tópico) mesmo limite de palavras usado no prompt da LLM
};
