import Header from "../../components/layout/header";
import {
  Activity,
  Bell,
  Video,
  BellRing,
  Info,
  ChevronDown,
} from "lucide-react";
import styles from "./styles.module.css";

const Settings = () => {
  return (
    <>
<Header
  title="Settings"
  subtitle="Manage detection, alerting, cameras, and notifications"
  customActions={
    <>
      <button className={`${styles.btn} ${styles.btn_secondary}`}>
        Discard changes
      </button>

      <button className={`${styles.btn} ${styles.btn_primary}`}>
        Save all changes
      </button>
    </>
  }
/>

      <div className={`content-area ${styles.settings_layout}`}>
        {/* Left Navigation Panel */}
        <div className={styles.settings_sidebar}>
          <nav className={styles.settings_nav}>
            <button
              className={`${styles.settings_nav_item} ${styles.active}`}
            >
              <Activity size={16} />
              Detection settings
            </button>

            <button className={styles.settings_nav_item}>
              <Bell size={16} />
              Alert settings
            </button>

            <button className={styles.settings_nav_item}>
              <Video size={16} />
              Camera settings
            </button>

            <button className={styles.settings_nav_item}>
              <BellRing size={16} />
              Notification settings
            </button>
          </nav>

          <div className={styles.config_scope_box}>
            <div className={styles.scope_header}>
              <Info size={16} className={styles.text_blue} />
              <span className={styles.fw_600_text_blue}>
                Configuration scope
              </span>
            </div>

            <p className={styles.scope_text}>
              Changes affect 48 cameras. Camera-level overrides remain
              unchanged.
            </p>
          </div>
        </div>

        {/* Right Content Area */}
        <div className={styles.settings_content}>
          <div className={styles.settings_content_header}>
            <h2>Operations settings</h2>
            <p>
              Defaults apply across Northline Distribution Center unless a
              camera override exists.
            </p>
          </div>

          {/* Section: Detection settings */}
          <div className={styles.settings_card}>
            <div className={styles.settings_card_header}>
              <div>
                <h3>Detection settings</h3>
                <p>
                  Global inference behavior and event creation defaults.
                </p>
              </div>

              <button className="btn btn-link btn-sm bg-blue-light">
                Global defaults
              </button>
            </div>

            <div className={styles.settings_grid_3}>
              <div className={styles.input_group}>
                <label>Default confidence threshold</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="80%">
                    <option>80%</option>
                    <option>85%</option>
                    <option>90%</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Events below this threshold are not created.
                </span>
              </div>

              <div className={styles.input_group}>
                <label>Inference frame rate</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="5">
                    <option value="5">5 frames per second</option>
                    <option value="10">10 frames per second</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Higher values use more compute capacity.
                </span>
              </div>

              <div className={styles.input_group}>
                <label>Minimum event duration</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="2">
                    <option value="2">2 seconds</option>
                    <option value="5">5 seconds</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Filters momentary or unstable detections.
                </span>
              </div>
            </div>

            <div className={styles.settings_toggles_list}>
              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Merge repeated detections
                  </div>

                  <div className={styles.toggle_desc}>
                    Group matching detections from the same camera within 30
                    seconds.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Store detection snapshots
                  </div>

                  <div className={styles.toggle_desc}>
                    Keep the highest-confidence frame with each detection
                    event.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Continuous object tracking
                  </div>

                  <div className={styles.toggle_desc}>
                    Track object IDs while they remain visible in a camera
                    stream.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Anonymous person analytics
                  </div>

                  <div className={styles.toggle_desc}>
                    Blur faces in stored snapshots while preserving person
                    detections.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Section: Alert settings */}
          <div className={styles.settings_card}>
            <div className={styles.settings_card_header}>
              <div>
                <h3>Alert settings</h3>
                <p>
                  Control how detections become operational alerts.
                </p>
              </div>

              <button className="btn btn-link btn-sm bg-blue-light">
                Manage escalation policy
              </button>
            </div>

            <div className={styles.settings_grid_3}>
              <div className={styles.input_group}>
                <label>Default alert severity</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="Medium">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Can be overridden per model or zone.
                </span>
              </div>

              <div className={styles.input_group}>
                <label>Auto-close inactive alerts</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="30">
                    <option value="30">After 30 minutes</option>
                    <option value="60">After 1 hour</option>
                  </select>                                  
                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Critical alerts always require manual resolution.
                </span>
              </div>

              <div className={styles.input_group}>
                <label>Duplicate suppression window</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="60">
                    <option value="60">60 seconds</option>
                    <option value="120">120 seconds</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Suppress matching alerts from one camera.
                </span>
              </div>
            </div>

            <div className={styles.settings_toggles_list}>
              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Require acknowledgement
                  </div>

                  <div className={styles.toggle_desc}>
                    Operators must acknowledge High and Critical alerts.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Escalate unattended critical alerts
                  </div>

                  <div className={styles.toggle_desc}>
                    Notify the on-call lead if unacknowledged for 3 minutes.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Create alerts for inactive models
                  </div>

                  <div className={styles.toggle_desc}>
                    Retain detections during a model's maintenance window.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Section: Camera settings */}
          <div className={styles.settings_card}>
            <div className={styles.settings_card_header}>
              <div>
                <h3>Camera settings</h3>
                <p>
                  Stream quality, retention, and health monitoring.
                </p>
              </div>

              <span className="badge badge-success">46 / 48 online</span>
            </div>

            <div className={styles.settings_grid_3}>
              <div className={styles.input_group}>
                <label>Preferred stream quality</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="1080p">
                    <option value="1080p">1080p - 24 FPS</option>
                    <option value="720p">720p - 15 FPS</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Adaptive streaming is used during congestion.
                </span>
              </div>

              <div className={styles.input_group}>
                <label>Video retention</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="30">
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Detection snapshots are retained for 90 days.
                </span>
              </div>

              <div className={styles.input_group}>
                <label>Camera timezone</label>

                <div className={styles.select_wrapper}>
                  <select defaultValue="America / Chicago">
                    <option value="America / Chicago">
                      America / Chicago
                    </option>
                    <option value="America / New_York">
                      America / New York
                    </option>
                  </select>

                  <ChevronDown
                    size={14}
                    className={styles.select_icon}
                  />
                </div>

                <span className={styles.help_text}>
                  Shown in all event timestamps.
                </span>
              </div>
            </div>

            <div className={styles.settings_toggles_list}>
              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Camera offline alerts
                  </div>

                  <div className={styles.toggle_desc}>
                    Create a warning after a camera is unavailable for 60
                    seconds.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className={styles.setting_toggle_row}>
                <div>
                  <div className={styles.toggle_title}>
                    Tamper detection
                  </div>

                  <div className={styles.toggle_desc}>
                    Alert if camera view is obstructed or significantly moved.
                  </div>
                </div>

                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;