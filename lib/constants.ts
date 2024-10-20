import { SocialNome } from "@/types";

export const MAX_APELIDOS = 5;

export const SOCIAL_LINKS_PLACEHOLDERS: Record<SocialNome, string> = {
  EMAIL: "mailto:email@provedor.com.br",
  FACEBOOK: "https://www.facebook.com/perfil",
  INSTAGRAM: "https://www.instagram.com/perfil",
  WHATSAPP: "https://api.whatsapp.com/send?phone=######",
  TELEGRAM: "https://t.me/+#####",
};

export const INITIAL_SUGGESTIONS_CHAR = "_";

export const MAX_SUGGESTIONS = 8;
