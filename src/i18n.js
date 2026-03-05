import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ngôn ngữ được hỗ trợ
const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "features": "Features",
        "projects": "Projects",
        "team": "Team"
      },
      "hero": {
        "badge": "NEW: MAJOR UPDATE JUST RELEASED!",
        "title1": "T-TEAM WEB",
        "title2": "FIVEM RESOURCES",
        "desc": "We provide optimal solutions for your FiveM Server. Professional, creative and dedicated technical team.",
        "btn_join": "JOIN DISCORD",
        "btn_project": "VIEW PROJECTS"
      },
      "skills": {
        "tag": "Professional Service",
        "subtitle": "These are the skills our team has learned and developed throughout our work process.",
        "title": "T-TEAM TECHNICAL SKILLS"
      },
      "projects": {
        "title": "LATEST PROJECTS",
        "view": "View Details"
      },
      "team": {
        "tag": "Our Team",
        "title": "THE T-TEAM"
      },
      "stats": {
        "products": "PRODUCTS",
        "licenses": "LICENSES",
        "members": "MEMBERS"
      },
      "footer": {
        "upgrade": "READY TO UPGRADE SERVER?",
        "contact_desc": "Contact us to start your project today.",
        "contact_btn": "CONTACT US",
        "desc": "Providing top FiveM Resources solutions in Vietnam. Prestige - Quality - Dedication.",
        "quick_links": "QUICK LINKS",
        "services": "SERVICES",
        "follow": "FOLLOW US"
      }
    }
  },
  vi: {
    translation: {
      "nav": {
        "home": "Trang chủ",
        "features": "Kỹ thuật",
        "projects": "Dự án",
        "team": "Đội ngũ"
      },
      "hero": {
        "badge": "MỚI: BẢN CẬP NHẬT LỚN VỪA PHÁT HÀNH!",
        "title1": "T-TEAM WEB",
        "title2": "FIVEM RESOURCES",
        "desc": "Chúng tôi cung cấp các giải pháp tối ưu cho Server FiveM của bạn. Đội ngũ kỹ thuật chuyên nghiệp, sáng tạo và tận tâm.",
        "btn_join": "THAM GIA DISCORD",
        "btn_project": "XEM DỰ ÁN"
      },
       "skills": {
        "tag": "Dịch vụ chuyên nghiệp",
        "subtitle": "Đây là những kỹ năng mà đội ngũ chúng tôi đã học hỏi và phát triển trong quá trình làm việc.",
        "title": "KỸ THUẬT T-TEAM"
      },
      "projects": {
        "title": "DỰ ÁN MỚI NHẤT",
        "view": "Xem Chi Tiết"
      },
      "team": {
        "tag": "Đội ngũ của chúng tôi",
        "title": "THE T-TEAM"
      },
       "stats": {
        "products": "SẢN PHẨM",
        "licenses": "BẢN QUYỀN",
        "members": "THÀNH VIÊN"
      },
      "footer": {
        "upgrade": "SẴN SÀNG NÂNG CẤP SERVER?",
        "contact_desc": "Liên hệ với chúng tôi để bắt đầu dự án của bạn ngay hôm nay.",
        "contact_btn": "LIÊN HỆ HỢP TÁC",
        "desc": "Cung cấp các giải pháp FiveM Resources hàng đầu tại Việt Nam. Uy tín - Chất lượng - Tận tâm.",
        "quick_links": "LINK NHANH",
        "services": "DỊCH VỤ",
        "follow": "THEO DÕI"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
