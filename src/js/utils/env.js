export const ENV = {
    WHATSAPP_NUMBER: "5511999999999", 
    WHATSAPP_MESSAGE: "Olá, gostaria de saber mais sobre os serviços da BC Gestão Contábil.",
    INSTAGRAM_URL: "https://instagram.com/bcgestao",
    LINKEDIN_URL: "https://linkedin.com/company/bcgestao"
};

export function getWhatsAppUrl() {
    return `https://wa.me/${ENV.WHATSAPP_NUMBER}?text=${encodeURIComponent(ENV.WHATSAPP_MESSAGE)}`;
}
