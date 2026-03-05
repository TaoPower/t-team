import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    // Khởi tạo AOS Animation
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Fetch Discord Member Count
    const fetchDiscordMembers = async () => {
      try {
        const response = await fetch('https://discord.com/api/v10/invites/CXCAQzH3k8?with_counts=true');
        const data = await response.json();
        if (data.approximate_member_count) {
          setMemberCount(data.approximate_member_count);
        }
      } catch (error) {
        console.error('Error fetching Discord member count:', error);
      }
    };

    fetchDiscordMembers();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="hero-bg-glow" style={{ top: '10%', left: '20%' }}></div>
      <div className="hero-bg-glow" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(126, 34, 206, 0.1) 0%, transparent 70%)' }}></div>

      {/* Navbar Mới */}
      <Navbar scrolled={scrolled} />

      <main>
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content" data-aos="fade-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.2rem' }}>
                    <div className="status-badge" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: '100px', padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', margin: '0' }}>
                        <i className="fas fa-sparkles" style={{ fontSize: '0.9rem' }}></i>
                        <span style={{ fontWeight: '500', textTransform: 'none' }}>Mới: Bản cập nhật lớn vừa được phát hành.</span>
                    </div>
                    
                    <h1 className="hero-title" style={{ fontFamily: '"MuseoModerno", cursive', fontSize: '3.5rem', fontWeight: '800', margin: '0', color: '#e4e4e7', textTransform: 'uppercase', lineHeight: '1', whiteSpace: 'nowrap' }}>
                        T-TEAM STUDIO - FIVEM
                    </h1>
                    
                    <p className="hero-description" style={{ color: '#a1a1aa', fontSize: '0.95rem', maxWidth: '400px', lineHeight: '1.6', margin: '0', textAlign: 'left' }}>
                        Một lập trình viên ứng dụng và web đầy đam mê, tận tâm tạo ra những trải nghiệm kỹ thuật số hiện đại, hiệu suất cao.
                    </p>
                    
                    <div className="hero-btns" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                        <a href="https://discord.gg/CXCAQzH3k8" className="btn-outline">
                            THAM GIA DISCORD
                        </a>
                        <a href="#projects" className="btn-outline">
                            THÔNG TIN DỰ ÁN
                        </a>
                    </div>
                </div>
                <div className="hero-image" data-aos="zoom-in" data-aos-delay="200">
                    <img src="/img/logo.png" alt="T-Team 3D Logo" />
                </div>
            </div>
        </section>

        {/* Skills Section */}
        <section id="features" className="features" style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'radial-gradient(circle at center, rgba(126, 34, 206, 0.03) 0%, transparent 70%)' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 className="section-title" data-aos="fade-up" style={{ fontFamily: '"MuseoModerno", cursive', fontSize: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>KỸ THUẬT T-TEAM - TEAM</h2>
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: '#71717a', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>Đây là những kỹ năng mà tôi đã học hỏi và phát triển trong quá trình làm việc.</p>
            </div>
            
            <div className="skills-grid" data-aos="fade-up" data-aos-delay="200" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
                {[
                    { name: 'Visual Studio Code', type: 'Code Editor', img: '/img/vscode.png' },
                    { name: 'React JS', type: 'Framework', img: '/img/reactjs.png' },
                    { name: 'Next JS', type: 'Framework', img: '/img/nextjs.png' },
                    { name: 'Tailwind CSS', type: 'Framework', img: '/img/tailwind.png' },
                    { name: 'Javascript', type: 'Language', img: '/img/js.png' },
                    { name: 'Node JS', type: 'Javascript Runtime', img: '/img/nodejs.png' },
                    { name: 'Github', type: 'Repository', img: '/img/github.png' },
                    { name: 'Figma', type: 'Design App', img: '/img/figma.png' },
                    { name: 'HTML', type: 'Language', img: '/img/html.png' },
                    { name: 'CSS', type: 'Language', img: '/img/css.png' },
                    { name: 'TypeScript', type: 'Language', img: '/img/ts.png' },
                    { name: 'Vite', type: 'Framework', img: '/img/vite.png' }
                ].map((skill, idx) => (
                    <div key={idx} className="skill-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                        <div className="skill-icon" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={skill.img} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div className="skill-info">
                            <h4 style={{ color: '#e4e4e7', fontSize: '1rem', margin: 0 }}>{skill.name}</h4>
                            <p style={{ color: '#71717a', fontSize: '0.8rem', margin: 0 }}>{skill.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Projects Section remains project1.png as it shows the server interface */}
        <section id="projects" className="features" style={{ paddingTop: '5rem', paddingBottom: '8rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 className="section-title" data-aos="fade-up" style={{ fontFamily: '"MuseoModerno", cursive', fontSize: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>DỰ ÁN</h2>
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: '#71717a', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>Giới thiệu một số dự án tiêu biểu thể hiện kỹ năng và sự sáng tạo.</p>
            </div>
            
            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                {[
                    { name: 'SÀI GÒN LIFE | ROLEPLAY', status: 'Coming Soon', color: '#eab308', img: '/img/project2.png', discord: 'https://discord.gg/mggPqhHN9k' },
                    { name: 'COCONUT CITY', status: 'Offline', color: '#ef4444', img: '/img/project1.png', discord: 'https://discord.gg/#' },
                    { name: 'CHERRY TOWN', status: 'Offline', color: '#ef4444', img: '/img/project3.png', discord: 'https://discord.gg/#' },
                ].map((project, idx) => (
                    <div key={idx} className="feature-card project-card" data-aos="fade-up" data-aos-delay={200 + (idx * 100)} style={{ background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '1.2rem' }}>
                        <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                            <img src={project.img} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
                            <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0, textTransform: 'uppercase', fontFamily: '"MuseoModerno", cursive' }}>{project.name}</h3>
                            <div style={{ background: `${project.color}15`, color: project.color, padding: '0.2rem 0.8rem', borderRadius: '100px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '5px', border: `1px solid ${project.color}30` }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.color }}></span>
                                {project.status}
                            </div>
                        </div>
                        <a 
                            href={project.discord} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ 
                                display: 'block', 
                                textAlign: 'center', 
                                background: 'rgba(255, 255, 255, 0.05)', 
                                color: '#fff', 
                                padding: '0.8rem', 
                                borderRadius: '100px', 
                                textDecoration: 'none', 
                                fontSize: '0.85rem', 
                                border: '1px solid rgba(255, 255, 255, 0.1)', 
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                position: 'relative',
                                zIndex: 10,
                                fontWeight: '600'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <i className="fab fa-discord" style={{ marginRight: '8px' }}></i>
                            Tham Gia Discord
                        </a>
                    </div>
                ))}
            </div>
        </section>

        {/* Team Section */}
        <section id="contact" className="features" style={{ paddingTop: '5rem', paddingBottom: '8rem', background: 'linear-gradient(to bottom, transparent, rgba(126, 34, 206, 0.02))' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 className="section-title" data-aos="fade-up" style={{ fontFamily: '"MuseoModerno", cursive', fontSize: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>THÔNG TIN & CÔNG VIỆC</h2>
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: '#71717a', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>Danh sách thành viên chính thức của T-TEAM TEAM Developer.</p>
            </div>
            
            <div className="team-grid" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
                {[
                    { name: 'ZENLONG', role: 'DEVELOPER · SCRIPTER', color: '#f43f5e', img: '/img/ZenLong.jpg' },
                    { name: 'PIXI', role: 'DESIGNER · EDITOR', color: '#d946ef', img: '/img/Pixi.jpg' },
                    { name: 'BLUE SHARK', role: 'DEVELOPER · FOUNDER · FIGMA', color: '#eab308', img: '/img/blueshark.png' },
                    { name: 'JAKE LEE', role: 'DEVELOPER · BACKEND', color: '#8b5cf6', img: '/img/JakeLee.jpg' },
                    { name: 'KUN', role: 'DESIGNER · CAR MOD · MAP', color: '#22c55e', img: '/img/Kun.jpg' },
                    { name: 'NE XÚ', role: 'DESIGNER · CAR MOD · MAP', color: '#0ea5e9', img: '/img/Nexu.jpg' },
                    { name: 'LONG TRẦN', role: 'T-TEAM', color: '#f97316', img: '/img/Tran.jpeg' },
                    { name: 'NICKT', role: 'CÀY THUÊ GAME', color: '#06b6d4', img: '/img/nick.png' },
                    { name: 'DUY', role: 'T-TEAM', color: '#f97316', img: '/img/Duy.jpg' },
                ].map((member, idx) => (
                    <div key={idx} className="member-card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '2rem 1.5rem', textAlign: 'center', width: '210px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', color: member.color, fontSize: '1rem' }}>
                            <i className={member.name === 'BLUE SHARK' ? "fas fa-crown" : "fas fa-user"}></i>
                        </div>
                        <div style={{ width: '90px', height: '90px', borderRadius: '15px', overflow: 'hidden', margin: '0.5rem auto 1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.8rem', letterSpacing: '0.5px' }}>{member.name}</h3>
                        <div style={{ background: member.color, color: '#fff', fontSize: '0.65rem', padding: '0.3rem 0.6rem', borderRadius: '5px', fontWeight: 'bold' }}>
                            {member.role}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </main>

    <footer style={{ background: '#111113', padding: '5rem 2rem' }}>
        <div className="footer-container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem', maxWidth: '1100px', margin: '0 auto' }}>
            
            {/* Brown Box */}
            <div data-aos="fade-up" style={{ background: 'linear-gradient(135deg, #4f250e 0%, #30180a 100%)', borderRadius: '16px', padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255, 140, 0, 0.2)', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ flex: '1 1 600px', paddingRight: '2rem', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                        <div style={{ background: '#f97316', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem' }}>
                            <i className="fas fa-sparkles"></i>
                        </div>
                        <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: 0, letterSpacing: '0.5px' }}>DỊCH VỤ HỢP TÁC & PHÁT TRIỂN</h3>
                    </div>
                    <p style={{ color: '#fed7aa', fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>Nhận thiết kế & phát triển dự án theo yêu cầu — từ server FiveM đến website chuyên nghiệp.</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {[
                            "Nhận thiết kế & setup server FiveM hoàn chỉnh",
                            "Phát triển website quản lý, giới thiệu server",
                            "Tối ưu hiệu năng & bảo mật máy chủ",
                            "Tùy chỉnh giao diện, logo và hệ thống UI",
                            "Cập nhật & bảo trì định kỳ theo yêu cầu",
                            "Ưu đãi đặc biệt cho đối tác liên hệ trực tiếp"
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#ffedd5', fontSize: '0.85rem' }}>
                                <i className="far fa-check-circle" style={{ color: '#f97316', marginTop: '3px' }}></i>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div style={{ flex: '1 1 200px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h4 style={{ color: '#fdba74', marginBottom: '0.5rem', fontSize: '1rem' }}>ƯU ĐÃI HỢP TÁC ĐẶC BIỆT</h4>
                    <p style={{ color: '#ffedd5', fontSize: '0.8rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>Liên hệ qua kênh chính thức để nhận gói khuyến mãi thiết kế & setup.</p>
                    <a href="https://discord.gg/CXCAQzH3k8" style={{ display: 'inline-block', background: '#f97316', color: '#fff', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem', transition: 'all 0.3s' }}>
                        LIÊN HỆ HỢP TÁC
                    </a>
                </div>
            </div>

            {/* Stats */}
            <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                {/* Stat 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', minWidth: '200px' }}>
                    <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #0ea5e9, #0369a1)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.8rem', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: '2px', background: '#082f49', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                           <img src="/img/icon-bag.png" alt="Products" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ color: '#fff', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: '600', letterSpacing: '0.5px' }}>SẢN PHẨM</div>
                        <div style={{ color: '#38bdf8', fontSize: '2rem', fontWeight: 'bold', lineHeight: '1', fontFamily: '"MuseoModerno", cursive' }}>10</div>
                        <div style={{ height: '3px', background: '#0ea5e9', width: '30px', marginTop: '5px' }}></div>
                    </div>
                </div>
                {/* Stat 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', minWidth: '200px' }}>
                    <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #22c55e, #15803d)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.8rem', position: 'relative' }}>
                         <div style={{ position: 'absolute', inset: '2px', background: '#064e3b', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                           <img src="/img/icon-file.png" alt="License" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ color: '#fff', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: '600', letterSpacing: '0.5px' }}>BẢN QUYỀN</div>
                        <div style={{ color: '#4ade80', fontSize: '2rem', fontWeight: 'bold', lineHeight: '1', fontFamily: '"MuseoModerno", cursive' }}>2026</div>
                        <div style={{ height: '3px', background: '#22c55e', width: '30px', marginTop: '5px' }}></div>
                    </div>
                </div>
                {/* Stat 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', minWidth: '200px' }}>
                    <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #65a30d, #3f6212)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.8rem', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: '2px', background: '#203209', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                           <img src="/img/icon-customer.png" alt="Members" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ color: '#fff', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: '600', letterSpacing: '0.5px' }}>THÀNH VIÊN</div>
                        <div style={{ color: '#a3e635', fontSize: '2rem', fontWeight: 'bold', lineHeight: '1', fontFamily: '"MuseoModerno", cursive' }}>{memberCount.toLocaleString()}</div>
                        <div style={{ height: '3px', background: '#65a30d', width: '30px', marginTop: '5px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    {/* Floating Copyright Pill */}
    <div className="floating-copyright">
        <span style={{ color: 'var(--text-dim)' }}>© 2026</span>
        <img src="/img/logo.png" alt="Logo" style={{ height: '16px', margin: '0 5px' }} />
        <span style={{ fontWeight: 800, letterSpacing: '1px' }}>T-Team</span>
        <span style={{ color: 'var(--text-dim)', margin: '0 8px' }}>·</span>
        <span style={{ color: 'var(--text-dim)' }}>Phát triển bởi </span>
        <span style={{ fontFamily: '"MuseoModerno", cursive', color: 'var(--primary-glow)', marginLeft: '5px' }}>&lt;/&gt; Blue Shark</span>
    </div>

    </div>
  );
}

export default App;
