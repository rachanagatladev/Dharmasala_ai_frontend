import Header from "../../components/layout/header";
import {
  Clock,
  Plus,
  Flame,
  Trash2,
  Users,
  User,
  Car,
  Box,
  Settings2,
  SlidersHorizontal,
} from "lucide-react";
import styles from "./styles.module.css";

const DetectionModels = () => {
  const models = [
    {
      icon: Flame,
      name: "Fire Detection",
      desc: "Identifies flames, smoke, and early combustion patterns in monitored zones.",
      active: true,
      cameras: 46,
      threshold: 85,
      version: "v2.4.1 · Updated Sep 18",
      color: "red",
    },
    {
      icon: Trash2,
      name: "Garbage Detection",
      desc: "Detects loose waste and unauthorized dumping in operational areas.",
      active: false,
      cameras: 0,
      threshold: 80,
      version: "v2.4.1 · Updated Sep 18",
      color: "gray",
    },
    {
      icon: Trash2,
      name: "Garbage Overflow Detection",
      desc: "Flags waste containers reaching configured overflow capacity.",
      active: false,
      cameras: 0,
      threshold: 82,
      version: "v2.4.1 · Updated Sep 18",
      color: "gray",
    },
    {
      icon: User,
      name: "Person Detection",
      desc: "Locates people and tracks movement across protected facility zones.",
      active: true,
      cameras: 48,
      threshold: 75,
      version: "v2.4.1 · Updated Sep 18",
      color: "blue",
    },
    {
      icon: Users,
      name: "Crowd Detection",
      desc: "Monitors occupancy density and alerts when crowd limits are exceeded.",
      active: true,
      cameras: 12,
      threshold: 78,
      version: "v2.4.1 · Updated Sep 18",
      color: "blue",
    },
    {
      icon: Users,
      name: "Fight Detection",
      desc: "Recognizes aggressive motion patterns and physical altercations.",
      active: true,
      cameras: 18,
      threshold: 88,
      version: "v2.4.1 · Updated Sep 18",
      color: "red",
    },
    {
      icon: Car,
      name: "Vehicle Detection",
      desc: "Classifies vehicles and monitors movement through gates and yards.",
      active: true,
      cameras: 24,
      threshold: 72,
      version: "v2.4.1 · Updated Sep 18",
      color: "blue",
    },
    {
      icon: Box,
      name: "Number Plate Detection",
      desc: "Reads number plates for access logs, searches, and watchlist matching.",
      active: true,
      cameras: 8,
      threshold: 90,
      version: "v2.4.1 · Updated Sep 18",
      color: "green",
    },
  ];

  return (
    <>
      <Header
        title="Detection Models"
        subtitle="Configure AI behavior, coverage, and confidence thresholds"
      />

      <div className={`content-area ${styles.models_content}`}>
        {/* Top Header & Actions */}

        <div className={styles.models_header_row}>
          <div>
            <h2 className={styles.welcome_title}>
              AI detection library
            </h2>

            <p className={styles.welcome_subtitle}>
              Six active models are processing 48 live camera streams.
            </p>
          </div>

          <div className={styles.models_actions}>
            <button
              className={`${styles.btn} ${styles.btn_secondary}`}
            >
              <Clock size={16} />
              Model activity log
            </button>

            <button
              className={`${styles.btn} ${styles.btn_primary}`}
            >
              <Plus size={16} />
              Register model
            </button>
          </div>
        </div>

        {/* Global Stats Row */}

        <div className={styles.models_stats_grid}>
          <div className={styles.models_stat_card}>
            <div
              className={`${styles.stat_value} ${styles.text_green}`}
            >
              6
            </div>

            <div className={styles.stat_label}>
              Active models
            </div>
          </div>

          <div className={styles.models_stat_card}>
            <div className={styles.stat_value}>
              156
            </div>

            <div className={styles.stat_label}>
              Camera assignments
            </div>
          </div>

          <div className={styles.models_stat_card}>
            <div
              className={`${styles.stat_value} ${styles.text_blue}`}
            >
              91.4%
            </div>

            <div className={styles.stat_label}>
              Average precision
            </div>
          </div>

          <div className={styles.models_stat_card}>
            <div className={styles.stat_value}>
              38 ms
            </div>

            <div className={styles.stat_label}>
              Median inference
            </div>
          </div>
        </div>

        {/* List Header */}

        <div className={styles.section_header}>
          <div>
            <h3 className={styles.section_title}>
              All detection models
            </h3>

            <p className={styles.section_subtitle}>
              Toggle a model or open its configuration to manage
              per-camera rules.
            </p>
          </div>

          <div className={styles.models_count}>
            8 models
          </div>
        </div>

        {/* Models Grid */}

        <div className={styles.models_grid}>
          {models.map((model) => {
            const ModelIcon = model.icon;

            return (
              <div
                key={model.name}
                className={styles.model_card}
              >
                {/* Model Card Header */}

                <div className={styles.model_card_header}>
                  <div
                    className={`${styles.model_icon_lg} ${
                      model.active
                        ? styles[`text_${model.color}`]
                        : styles.text_neutral
                    } ${
                      model.active
                        ? styles[`bg_${model.color}_light`]
                        : styles.bg_neutral_light
                    }`}
                  >
                    <ModelIcon size={20} />
                  </div>

                  <div className={styles.model_toggle_container}>
                    <span
                      className={`${styles.toggle_label} ${
                        model.active
                          ? styles.text_green
                          : styles.text_secondary
                      }`}
                    >
                      {model.active ? "ON" : "OFF"}
                    </span>

                    <label className={styles.toggle_switch}>
                      <input
                        type="checkbox"
                        checked={model.active}
                        readOnly
                      />

                      <span className={styles.slider}></span>
                    </label>
                  </div>
                </div>

                {/* Model Details */}

                <div className={styles.model_details}>
                  <h4 className={styles.model_name}>
                    {model.name}
                  </h4>

                  <p className={styles.model_desc}>
                    {model.desc}
                  </p>

                  <div className={styles.model_status_row}>
                    <span
                      className={`${styles.badge} ${
                        model.active
                          ? styles.badge_success_subtle
                          : styles.badge_neutral_subtle
                      }`}
                    >
                      {model.active ? "Active" : "Inactive"}
                    </span>

                    <span className={styles.model_cameras_count}>
                      {model.cameras} cameras
                    </span>
                  </div>
                </div>

                {/* Configuration Row */}

                <div className={styles.model_config_row}>
                  <div className={styles.confidence_slider}>
                    <SlidersHorizontal
                      size={14}
                      className={styles.text_secondary}
                    />

                    <span className={styles.confidence_label}>
                      Confidence threshold
                    </span>
                  </div>

                  <div className={styles.confidence_value}>
                    {model.threshold}%
                  </div>
                </div>

                {/* Model Footer */}

                <div className={styles.model_footer}>
                  <span className={styles.model_version}>
                    {model.version}
                  </span>

                  <button
                    className={`${styles.btn} ${styles.btn_secondary} ${styles.btn_sm}`}
                  >
                    <Settings2 size={14} />
                    Configure
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DetectionModels;