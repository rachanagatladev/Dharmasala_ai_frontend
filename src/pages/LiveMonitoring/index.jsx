import Header from "../../components/layout/header";
import {
  Camera,
  Maximize,
  Plus,
  Activity,
  ChevronDown,
  Video,
  Flame,
  Trash2,
  Users,
  User,
  Box,
  Car,
} from "lucide-react";
import styles from "./styles.module.css";
const LiveMonitoring = () => {
  const cameras = [
    {
      id: 1,
      name: "Loading Dock 03",
      desc: "Dock B - West bay",
      img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?auto=format&fit=crop&q=80&w=600&h=300",
      det: 4,
    },
    {
      id: 2,
      name: "Loading Dock 02",
      desc: "Dock B - East bay",
      img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?auto=format&fit=crop&q=80&w=600&h=300",
      det: 2,
    },
    {
      id: 3,
      name: "Gate Entrance A",
      desc: "North perimeter",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=300",
      det: 1,
    },
    {
      id: 4,
      name: "Gate Entrance B",
      desc: "South perimeter",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=300",
      det: 0,
    },
  ];

  const detectionModels = [
    {
      icon: Flame,
      name: "Fire Detection",
      active: true,
      color: "red",
    },
    {
      icon: Trash2,
      name: "Garbage Detection",
      active: false,
      color: "gray",
    },
    {
      icon: Trash2,
      name: "Garbage Overflow Detection",
      active: false,
      color: "gray",
    },
    {
      icon: User,
      name: "Person Detection",
      active: true,
      color: "blue",
    },
    {
      icon: Users,
      name: "Crowd Detection",
      active: false,
      color: "gray",
    },
    {
      icon: Users,
      name: "Fight Detection",
      active: false,
      color: "gray",
    },
    {
      icon: Car,
      name: "Vehicle Detection",
      active: true,
      color: "blue",
    },
    {
      icon: Box,
      name: "Number Plate Detection",
      active: false,
      color: "gray",
    },
  ];

  return (
    <>
      <Header
        title="Live Monitoring"
        subtitle="3 models active on this stream · 46 of 48 cameras online"
      />

      <div className={`content-area ${styles.live_monitoring_content}`}>
        {/* Top Controls */}

        <div className={styles.monitoring_controls}>
          <div className={styles.controls_left}>
            <div className={styles.camera_selector}>
              <Video
                size={16}
                className={styles.text_secondary}
              />

              <div className={styles.camera_selector_text}>
                <span className={styles.camera_selector_name}>
                  Loading Dock 03
                </span>

                <span className={styles.camera_selector_desc}>
                  Dock B - West bay
                </span>
              </div>

              <ChevronDown
                size={16}
                className={styles.text_secondary}
              />
            </div>

            <div
              className={`${styles.badge} ${styles.badge_neutral_subtle}`}
            >
              LIVE
            </div>

            <div className={styles.resolution_text}>
              1080p · 24 FPS
            </div>
          </div>

          <div className={styles.controls_right}>
            <button
              className={`${styles.btn} ${styles.btn_secondary}`}
            >
              <Camera size={16} />
              Snapshot
            </button>

            <button
              className={`${styles.btn} ${styles.btn_secondary}`}
            >
              <Maximize size={16} />
              Fullscreen
            </button>
          </div>
        </div>

        {/* View Toggles & Add Camera */}

        <div className={styles.view_toggles_bar}>
          <div className={styles.grid_toggles}>
            <button
              className={`${styles.grid_toggle} ${styles.active}`}
            >
              2×2
            </button>

            <button className={styles.grid_toggle}>
              3×3
            </button>

            <button className={styles.grid_toggle}>
              4×4
            </button>
          </div>

          <div className={styles.add_camera_group}>
            <span className={styles.camera_count}>
              46 cameras
            </span>

            <button
              className={`${styles.btn} ${styles.btn_secondary}`}
            >
              <Plus size={16} />
              Add Camera
            </button>
          </div>
        </div>

        {/* Small Cameras Grid (2x2) */}

        <div className={styles.small_cameras_grid}>
          {cameras.map((cam) => (
            <div
              key={cam.id}
              className={styles.small_camera_card}
            >
              <div className={styles.small_camera_img_wrapper}>
                <div className={styles.live_badge}>
                  <span className={styles.live_dot}></span>
                  LIVE
                </div>

                <img
                  src={cam.img}
                  alt={cam.name}
                />
              </div>

              <div className={styles.small_camera_info}>
                <div>
                  <div className={styles.camera_name}>
                    {cam.name}
                  </div>

                  <div className={styles.camera_desc}>
                    {cam.desc}
                  </div>
                </div>

                <div
                  className={`${styles.camera_detections} ${
                    cam.det > 0 ? "" : styles.zero
                  }`}
                >
                  <Activity size={14} />

                  {cam.det}{" "}
                  {cam.det === 1
                    ? "detection"
                    : "detections"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Feed and Sidebar */}

        <div className={styles.main_feed_container}>
          {/* Main Video */}

          <div className={styles.main_video_wrapper}>
            <div className={styles.live_badge_main}>
              <span className={styles.live_dot}></span>
              LIVE - CAM-DOCK-03
            </div>

            <div className={styles.video_timestamp}>
              2026-09-28 10:42:18 CDT
            </div>

            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?auto=format&fit=crop&q=80&w=1200&h=800"
              alt="Main Stream"
              className={styles.main_video_img}
            />

            {/* Mock Bounding Boxes */}

            <div
              className={`${styles.bounding_box} ${styles.bb_person}`}
            >
              <div
                className={`${styles.bb_label} ${styles.bb_label_person}`}
              >
                PERSON 92%
              </div>
            </div>

            <div
              className={`${styles.bounding_box} ${styles.bb_vehicle}`}
            >
              <div
                className={`${styles.bb_label} ${styles.bb_label_vehicle}`}
              >
                VEHICLE 87%
              </div>
            </div>

            <div
              className={`${styles.bounding_box} ${styles.bb_fire}`}
            >
              <div
                className={`${styles.bb_label} ${styles.bb_label_fire}`}
              >
                FIRE 94%
              </div>
            </div>

            {/* Video Controls */}

            <div className={styles.video_controls_bar}>
              <div className={styles.video_controls_left}>
                <div className={styles.play_icon_mock}>
                  ⏸
                </div>

                <div className={styles.vol_icon_mock}>
                  🔊
                </div>

                <span>Live - 180ms</span>
              </div>

              <div className={styles.video_controls_right}>
                <span
                  className={styles.video_live_dot}
                ></span>
              </div>
            </div>
          </div>

          {/* Detection Models Sidebar */}

          <div className={styles.detection_models_panel}>
            <div className={styles.panel_header}>
              <h3 className={styles.section_title}>
                Detection Models
              </h3>

              <span
                className={`${styles.badge} ${styles.badge_success}`}
              >
                3 ON
              </span>
            </div>

            <p
              className={`${styles.section_subtitle} ${styles.mb_4}`}
            >
              Toggle AI processing for this live stream.
            </p>

            <div className={styles.model_toggles_list}>
              {detectionModels.map((model) => {
                const ModelIcon = model.icon;

                return (
                  <div
                    key={model.name}
                    className={styles.model_toggle_item}
                  >
                    <div className={styles.model_toggle_info}>
                      <div
                        className={`${styles.model_icon_sm} ${
                          model.active
                            ? styles[`text_${model.color}`]
                            : styles.text_neutral
                        } ${
                          model.active
                            ? styles[`bg_${model.color}_light`]
                            : styles.bg_neutral_light
                        }`}
                      >
                        <ModelIcon size={14} />
                      </div>

                      <div>
                        <div className={styles.model_toggle_name}>
                          {model.name}
                        </div>

                        <div
                          className={`${styles.model_toggle_status} ${
                            model.active
                              ? styles.active_text
                              : styles.inactive_text
                          }`}
                        >
                          {model.active
                            ? "ON · Detecting"
                            : "OFF · Disabled"}
                        </div>
                      </div>
                    </div>

                    <label className={styles.toggle_switch}>
                      <input
                        type="checkbox"
                        checked={model.active}
                        readOnly
                      />

                      <span className={styles.slider}></span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveMonitoring;