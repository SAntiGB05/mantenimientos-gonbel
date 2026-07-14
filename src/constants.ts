export const WHATSAPP_NUMBER = '573203444654';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappUrlWithText(text: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
