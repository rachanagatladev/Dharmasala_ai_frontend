
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  MonitorPlay,
  Box,
  Bell,
  Settings,
  Shield,
  HelpCircle,
  Building2,
  ChevronDown,
} from "lucide-react";
import styles from "./styles.module.css";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Live Monitoring", path: "/live-monitoring", icon: MonitorPlay },
    { name: "Detection Models", path: "/detection-models", icon: Box },
    { name: "Alerts", path: "/alerts", icon: Bell, badge: 12 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <div className={styles.logo_container}>
          <div className={styles.logo_icon}>
            <Shield size={20} color="#ffffff" />
          </div>

          <div className={styles.logo_text}>
            <h2>VisionGuard AI</h2>
            <span>OPERATIONS CLOUD</span>
          </div>
        </div>
      </div>

      <div className={styles.sidebar_section}>
        <div className={styles.section_title}>WORKSPACE</div>

        <nav className={styles.nav_menu}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `${styles.nav_item} ${isActive ? styles.active : ""}`
              }
            >
              <item.icon size={20} />

              <span className={styles.nav_label}>{item.name}</span>

              {item.badge && (
                <span className={styles.nav_badge}>{item.badge}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className={styles.sidebar_bottom}>
        <div className={styles.system_status_card}>
          <div className={styles.status_header}>
            <span>System status</span>
            <span
              className={`${styles.status_badge} ${styles.healthy}`}
            >
              Healthy
            </span>
          </div>

          <div className={styles.status_row}>
            <span>Camera uptime</span>
            <span>99.98%</span>
          </div>

          <div className={styles.status_row}>
            <span>Models online</span>
            <span>6 of 8</span>
          </div>
        </div>

        <button type="button" className={styles.help_button}>
          <HelpCircle size={18} />
          <span>Help &amp; support</span>
        </button>

        <div className={styles.location_selector}>
          <div className={styles.location_info}>
            <div className={styles.location_icon}>
              <Building2 size={16} />
            </div>

            <div className={styles.location_text}>
              <span className={styles.location_name}>Northline DC</span>
              <span className={styles.location_city}>Dallas, TX</span>
            </div>
          </div>

          <ChevronDown size={16} className={styles.chevron} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
