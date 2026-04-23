import { Calendar, Flame, Heart, Users, CreditCard, Star, Bell, Shield, Sparkles, MapPin } from "lucide-react";
import config from "./demo.config.js";
import App from "./App.jsx";

const iconMap = {
  calendar: Calendar, flame: Flame, heart: Heart, users: Users,
  "credit-card": CreditCard, star: Star, bell: Bell, shield: Shield,
  sparkles: Sparkles, "map-pin": MapPin,
};

export default function DemoWrapper() {
  const ac = config.accentColor;

  const openAdmin = () => {
    window.dispatchEvent(new Event("lumi-open-admin"));
  };

  const nonAdminCards = config.salesCards.filter(c => c.icon !== "shield");

  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh", background: "#f5f4f1", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* LEFT SIDEBAR */}
      <aside className="demo-sidebar demo-sidebar-left" style={{
        width: 320, flexShrink: 0, position: "sticky", top: 0, height: "100vh",
        display: "flex", flexDirection: "column", overflow: "hidden",
        borderRight: "1px solid #e8e6e1", background: "#f5f4f1",
      }}>
        <div className="demo-sidebar-scroll" style={{ flex: 1, overflowY: "auto", padding: "40px 32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: ac, margin: "0 0 28px" }}>
            Prototype Demo
          </p>

          {/* Studio Identity */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            {config.logoUrl ? (
              <img src={config.logoUrl} alt={config.studioName} style={{ height: 40, width: "auto", objectFit: "contain", maxWidth: 40, borderRadius: 8 }} onError={e => e.target.style.display='none'} />
            ) : (
              <div style={{ width: 40, height: 40, borderRadius: 10, background: ac, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#fff" }}>{config.logoMark}</div>
            )}
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1a1e2e", lineHeight: 1.1 }}>{config.studioShortName}</div>
              <div style={{ fontSize: 12, color: "#7a7a7a" }}>{config.studioSubtitle}</div>
            </div>
          </div>

          {/* Feature List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingBottom: 24 }}>
            {config.features.map((f, i) => {
              const Icon = iconMap[f.icon] || Star;
              return (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Icon size={18} color={ac} style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1e2e" }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#7a7a7a", lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pinned Footer */}
        <div style={{
          position: "sticky", bottom: 0, padding: "16px 32px",
          background: "#f5f4f1", borderTop: "1px solid #eee", zIndex: 10,
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#b0ada6", margin: 0 }}>
            Built by LUMI — LumiClass.app
          </p>
        </div>
      </aside>

      {/* CENTER: PHONE FRAME */}
      <div style={{
        width: 390, flexShrink: 0, position: "relative",
        boxShadow: "0 8px 40px rgba(0,0,0,.12), 0 2px 12px rgba(0,0,0,.06)",
        borderRadius: 0, overflow: "hidden", height: 720,
        marginTop: 40, alignSelf: "flex-start",
        transform: "translateZ(0)",
      }}>
        <div className="phone-scroll" style={{ height: "100%", overflow: "auto" }}>
          <App />
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="demo-sidebar demo-sidebar-right" style={{
        width: 340, flexShrink: 0, position: "sticky", top: 0, height: "100vh",
        display: "flex", flexDirection: "column", overflow: "hidden",
        borderLeft: "1px solid #e8e6e1", background: "#f5f4f1",
      }}>
        <div className="demo-sidebar-scroll" style={{ flex: 1, overflowY: "auto", padding: "40px 32px 0", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Admin card — always present, with Shield icon + Open Admin button */}
          <div style={{
            background: "#fff", borderRadius: 14, padding: "24px 22px",
            border: "1px solid #e8e6e1",
          }}>
            <Shield size={28} color={ac} style={{ marginBottom: 12 }} />
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1e2e", margin: "0 0 8px", fontFamily: "'Playfair Display', serif" }}>Admin Dashboard</h3>
            <p style={{ fontSize: 14, color: "#5a5a5a", lineHeight: 1.55, margin: "0 0 14px" }}>
              Full analytics, member CRM, scheduling, and broadcast tools — all in one place.
            </p>
            <button onClick={openAdmin} style={{
              display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", borderRadius: 8,
              background: ac, color: "#fff", fontWeight: 700, fontSize: 13,
              border: "none", cursor: "pointer", fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.03em",
            }}>
              Open Admin
            </button>
          </div>

          {nonAdminCards.map((card, i) => {
            const Icon = iconMap[card.icon] || Star;
            return (
              <div key={i} style={{
                background: "#fff", borderRadius: 14, padding: "24px 22px",
                border: "1px solid #e8e6e1",
              }}>
                <Icon size={28} color={ac} style={{ marginBottom: 12 }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1e2e", margin: "0 0 8px", fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: "#5a5a5a", lineHeight: 1.55, margin: 0 }}>{card.desc}</p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div style={{
            background: "#1a1e2e", borderRadius: 14, padding: "24px 22px", color: "#fff",
            marginBottom: 24,
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px", fontFamily: "'Playfair Display', serif" }}>Ready to Launch?</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.55, margin: "0 0 16px" }}>
              Get a custom-branded loyalty app built for your studio — designed, populated, and ready to deploy.
            </p>
            <a href="https://lumiclass.app" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block", padding: "10px 24px", borderRadius: 8,
              background: ac, color: "#fff", fontWeight: 700, fontSize: 14,
              textDecoration: "none", fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.03em",
            }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Pinned Footer */}
        <div style={{
          position: "sticky", bottom: 0, padding: "16px 32px",
          background: "#f5f4f1", borderTop: "1px solid #eee", zIndex: 10,
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#b0ada6", margin: 0 }}>
            Built by LUMI — LumiClass.app
          </p>
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
