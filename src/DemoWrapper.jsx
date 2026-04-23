import { Calendar, Flame, Heart, Users, CreditCard, Star, Bell, Shield, Sparkles, MapPin, ChevronRight, Layers } from "lucide-react";
import config from "./demo.config.js";
import App from "./App.jsx";

const iconMap = {
  calendar: Calendar, flame: Flame, heart: Heart, users: Users,
  "credit-card": CreditCard, star: Star, bell: Bell, shield: Shield,
  sparkles: Sparkles, "map-pin": MapPin, layers: Layers,
};

export default function DemoWrapper() {
  const ac = config.accentColor;

  const openAdmin = () => {
    window.dispatchEvent(new Event("lumi-open-admin"));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f4f1", fontFamily: "'DM Sans', system-ui, sans-serif", color: "#1a1a1a" }}>

      {/* LEFT SIDEBAR */}
      <aside className="demo-sidebar demo-sidebar-left" style={{
        width: 320, flexShrink: 0, background: "#fdfbf6",
        borderRight: "1px solid #e8e6e1",
        position: "sticky", top: 0, height: "100vh",
        display: "flex", flexDirection: "column", overflow: "hidden",
      }}>
        <div className="demo-sidebar-scroll" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {/* Prototype Label */}
          <div style={{ padding: "20px 24px 0" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: ac, background: `${ac}14`, padding: "5px 10px", borderRadius: 4 }}>
              Prototype Demo
            </span>
          </div>

          {/* Studio Identity */}
          <div style={{ padding: "20px 24px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: ac, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                {config.logoMark}
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, letterSpacing: "0.02em", color: "#1a1e2e", lineHeight: 1.1 }}>{config.studioShortName}</div>
                <div style={{ fontSize: 12, color: "#7a7a7a", marginTop: 2 }}>{config.studioSubtitle}</div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div style={{ padding: "0 24px 20px", flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a8a298", marginBottom: 12 }}>App Features</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {config.features.map((f, i) => {
                const Icon = iconMap[f.icon] || Star;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 14, borderRadius: 10, background: "#f5f4f1" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${ac}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <Icon size={16} color={ac} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1e2e" }}>{f.title}</div>
                      <div style={{ fontSize: 12, color: "#7a7a7a", marginTop: 2, lineHeight: 1.4 }}>{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* CENTER: PHONE FRAME WITH BEZEL */}
      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: 32, paddingBottom: 32 }}>
        <div style={{ position: "relative" }}>
          <div style={{
            width: 414, background: "#1a1a24", borderRadius: 44, padding: 12,
            boxShadow: `0 0 0 1px #2a2a34, 0 20px 60px rgba(0,0,0,.3), 0 0 120px ${ac}14`,
          }}>
            {/* Notch */}
            <div style={{ width: 120, height: 6, background: "#2a2a34", borderRadius: 3, margin: "0 auto 8px" }} />
            {/* Screen */}
            <div className="phone-scroll" style={{
              width: 390, height: 720, borderRadius: 28, overflow: "auto", background: "#fff",
              position: "relative",
            }}>
              <App />
            </div>
            {/* Home indicator */}
            <div style={{ width: 134, height: 5, background: "#3a3a44", borderRadius: 3, margin: "8px auto 4px" }} />
          </div>
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="demo-sidebar demo-sidebar-right" style={{
        width: 340, flexShrink: 0, background: "#fdfbf6",
        borderLeft: "1px solid #e8e6e1",
        position: "sticky", top: 0, height: "100vh",
        display: "flex", flexDirection: "column", overflow: "hidden",
      }}>
        <div className="demo-sidebar-scroll" style={{ flex: 1, overflowY: "auto", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
          {config.salesCards.map((card, i) => {
            const Icon = iconMap[card.icon] || Star;
            const isAdminCard = card.icon === "shield";
            return (
              <div key={i} style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 14, padding: "18px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${ac}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} color={ac} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: "#1a1e2e", margin: 0 }}>{card.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.55, margin: 0 }}>{card.desc}</p>
                {isAdminCard && (
                  <button onClick={openAdmin} style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                    width: "100%", padding: "10px 0", marginTop: 14, borderRadius: 8,
                    border: "none", background: ac, color: "#fff", fontWeight: 700, fontSize: 14,
                    cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <Shield size={16} /> Open Admin
                  </button>
                )}
              </div>
            );
          })}

          {/* CTA Card */}
          <div style={{ background: `linear-gradient(135deg, ${ac}15, ${ac}08)`, border: `1px solid ${ac}30`, borderRadius: 14, padding: "22px 18px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#1a1e2e", margin: "0 0 6px" }}>Ready to Launch?</h3>
            <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 16px", lineHeight: 1.45 }}>
              Get a custom-branded loyalty app built for your studio — designed, populated, and ready to deploy.
            </p>
            <a href="https://lumiclass.app" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px",
              borderRadius: 10, background: ac, color: "#fff", fontWeight: 700, fontSize: 14,
              textDecoration: "none", letterSpacing: "0.02em",
            }}>
              Learn More <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Pinned Footer */}
        <div style={{
          position: "sticky", bottom: 0, padding: "16px 24px",
          background: "#fdfbf6", borderTop: "1px solid #eee", zIndex: 10,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b0ada6", textAlign: "center" }}>
            Built by <span style={{ color: ac }}>LUMI</span> — LumiClass.app
          </div>
        </div>
      </aside>

      <style>{`
        .demo-sidebar,
        .demo-sidebar-scroll,
        .phone-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .demo-sidebar::-webkit-scrollbar,
        .demo-sidebar-scroll::-webkit-scrollbar,
        .phone-scroll::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        @media (max-width: 1100px) {
          .demo-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
