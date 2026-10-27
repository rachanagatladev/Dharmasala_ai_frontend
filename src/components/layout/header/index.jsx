import { Bell, Search, ChevronDown } from "lucide-react";
import styles from "./styles.module.css";

const Header = ({ title, subtitle, customActions }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <h1 className={styles.page_title}>{title}</h1>

        {subtitle && (
          <p className={styles.page_subtitle}>{subtitle}</p>
        )}
      </div>

      <div className={styles.header_right}>
        {customActions && (
          <div className={styles.header_custom_actions}>
            {customActions}
          </div>
        )}

        <div className={styles.search_bar}>
          <Search
            size={16}
            className={styles.search_icon}
          />

          <input
            type="text"
            placeholder="Search cameras, alerts..."
            className={styles.search_input}
          />

          <div className={styles.search_shortcut}>⌘ K</div>
        </div>

        <button
          type="button"
          className={styles.icon_btn}
        >
          <Bell size={20} />

          <span className={styles.notification_dot}></span>
        </button>

        <div className={styles.user_profile}>
          <div className={styles.avatar}>MP</div>

          <div className={styles.user_info}>
            <span className={styles.user_name}>Maya Patel</span>
            <span className={styles.user_role}>Security lead</span>
          </div>

          <ChevronDown
            size={16}
            className={styles.user_chevron}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;