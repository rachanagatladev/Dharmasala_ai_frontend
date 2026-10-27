import Header from "../../components/layout/header";
import {
  Download,
  MonitorPlay,
  Video,
  Box,
  Activity,
  AlertTriangle,
  Users,
  Car,
} from "lucide-react";
import styles from "./styles.module.css";

const Dashboard = () => {
  const cameras = [
    {
    id: 1,
    stream: "camera1",
    name: "Loading Dock 03",
    desc: "Dock B - West bay",
    det: 4,
  },
  {
    id: 2,
    stream: "camera2",
    name: "Main Entrance 01",
    desc: "Administration - Level 1",
    det: 2,
  },
  {
    id: 3,
    stream: "camera3",
    name: "Warehouse Aisle 07",
    desc: "Zone A - Aisle 7",
    det: 6,
  },
  {
    id: 4,
    stream: "camera4",
    name: "North Parking 02",
    desc: "North lot - Row C",
    det: 1,
  },
  ];

  return (
    <>
      <Header
        title="Dashboard"
        subtitle="Monday, Sep 28 · Live operational overview"
      />

      <div className={`content-area ${styles.dashboard_content}`}>

        {/* Welcome Section */}
        <div className={styles.welcome_section}>
          <div>
            <h2 className={styles.welcome_title}>
              Good morning, Maya
            </h2>

            <p className={styles.welcome_subtitle}>
              12 active alerts require review across the Northline
              Distribution Center.
            </p>
          </div>

          <div className={styles.welcome_actions}>
            <button
              className={`${styles.btn} ${styles.btn_secondary}`}
            >
              <Download size={16} />
              Export report
            </button>

            <button
              className={`${styles.btn} ${styles.btn_primary}`}
            >
              <MonitorPlay size={16} />
              Open live monitoring
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.stats_grid}>

          {/* Total Cameras */}
          <div className={styles.stat_card}>
            <div className={styles.stat_header}>
              <div
                className={`${styles.stat_icon_wrapper} ${styles.text_green} ${styles.bg_green_light}`}
              >
                <Video size={18} />
              </div>

              <span
                className={`${styles.badge} ${styles.badge_success}`}
              >
                46 online
              </span>
            </div>

            <div className={styles.stat_value}>48</div>

            <div className={styles.stat_label}>
              Total cameras
            </div>
          </div>

          {/* Active Detection Models */}
          <div className={styles.stat_card}>
            <div className={styles.stat_header}>
              <div
                className={`${styles.stat_icon_wrapper} ${styles.text_blue} ${styles.bg_blue_light}`}
              >
                <Box size={18} />
              </div>

              <span
                className={`${styles.badge} ${styles.badge_info}`}
              >
                2 inactive
              </span>
            </div>

            <div className={styles.stat_value}>6</div>

            <div className={styles.stat_label}>
              Active detection models
            </div>
          </div>

          {/* Active Alerts */}
          <div className={styles.stat_card}>
            <div className={styles.stat_header}>
              <div
                className={`${styles.stat_icon_wrapper} ${styles.text_red} ${styles.bg_red_light}`}
              >
                <AlertTriangle size={18} />
              </div>

              <span
                className={`${styles.badge} ${styles.badge_critical}`}
              >
                3 critical
              </span>
            </div>

            <div className={styles.stat_value}>12</div>

            <div className={styles.stat_label}>
              Active alerts
            </div>
          </div>

          {/* Total Detections */}
          <div className={styles.stat_card}>
            <div className={styles.stat_header}>
              <div
                className={`${styles.stat_icon_wrapper} ${styles.text_green} ${styles.bg_green_light}`}
              >
                <Activity size={18} />
              </div>

              <span
                className={`${styles.badge} ${styles.badge_success}`}
              >
                +8.2%
              </span>
            </div>

            <div className={styles.stat_value}>1,284</div>

            <div className={styles.stat_label}>
              Total detections today
            </div>
          </div>
        </div>

        {/* Live Cameras Section */}
        <div className={styles.section_container}>
          <div className={styles.section_header}>
            <div>
              <h3 className={styles.section_title}>
                Live cameras
              </h3>

              <p className={styles.section_subtitle}>
                Priority feeds · All streams are recording
              </p>
            </div>

            <button className={styles.btn_link}>
              View all 48 cameras
            </button>
          </div>

          <div className={styles.cameras_grid}>
            {cameras.map((cam) => (
              <div
                key={cam.id}
                className={styles.camera_card}
              >

<div className={styles.camera_img_container}>
  <div className={styles.live_badge}>
    <span className={styles.live_dot}></span>
    LIVE
  </div>

  <iframe
    src={`http://localhost:8889/${cam.stream}`}
    title={cam.name}
    className={styles.camera_img}
    allow="autoplay; fullscreen"
    allowFullScreen
  />
</div>


                <div className={styles.camera_info}>
                  <div>
                    <div className={styles.camera_name}>
                      {cam.name}
                    </div>

                    <div className={styles.camera_desc}>
                      {cam.desc}
                    </div>
                  </div>

                  <div className={styles.camera_detections}>
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
        </div>

        {/* Recent Alerts Section */}
        <div
          className={`${styles.section_container} ${styles.mt_6}`}
        >
          <div className={styles.section_header}>
            <div>
              <h3 className={styles.section_title}>
                Recent alerts
              </h3>

              <p className={styles.section_subtitle}>
                Latest AI detections requiring attention
              </p>
            </div>

            <button className={styles.btn_link}>
              View all alerts
            </button>
          </div>

          <div className={styles.table_container}>
            <table className={styles.data_table}>
              <thead>
                <tr>
                  <th>DETECTION</th>
                  <th>CAMERA</th>
                  <th>CONFIDENCE</th>
                  <th>SEVERITY</th>
                  <th>TIME</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>

                {/* Fire Detection */}
                <tr>
                  <td>
                    <div className={styles.td_flex}>
                      <div
                        className={`${styles.icon_wrapper} ${styles.text_red} ${styles.bg_red_light}`}
                      >
                        <AlertTriangle size={14} />
                      </div>

                      Fire detected
                    </div>
                  </td>

                  <td>Loading Dock 03</td>

                  <td className={styles.fw_600}>
                    94%
                  </td>

                  <td>
                    <span
                      className={`${styles.badge} ${styles.badge_critical_subtle}`}
                    >
                      Critical
                    </span>
                  </td>

                  <td>
                    Today · 10:42:18
                  </td>

                  <td>
                    <button
                      className={styles.btn_outline_sm}
                    >
                      Review
                    </button>
                  </td>
                </tr>

                {/* Crowd Detection */}
                <tr>
                  <td>
                    <div className={styles.td_flex}>
                      <div
                        className={`${styles.icon_wrapper} ${styles.text_blue} ${styles.bg_blue_light}`}
                      >
                        <Users size={14} />
                      </div>

                      Crowd threshold
                    </div>
                  </td>

                  <td>Main Entrance 01</td>

                  <td className={styles.fw_600}>
                    89%
                  </td>

                  <td>
                    <span
                      className={`${styles.badge} ${styles.badge_warning_subtle}`}
                    >
                      High
                    </span>
                  </td>

                  <td>
                    Today · 10:36:04
                  </td>

                  <td>
                    <button
                      className={styles.btn_outline_sm}
                    >
                      Review
                    </button>
                  </td>
                </tr>

                {/* Person Detection */}
                <tr>
                  <td>
                    <div className={styles.td_flex}>
                      <div
                        className={`${styles.icon_wrapper} ${styles.text_blue} ${styles.bg_blue_light}`}
                      >
                        <Users size={14} />
                      </div>

                      Person in restricted zone
                    </div>
                  </td>

                  <td>Warehouse Aisle 07</td>

                  <td className={styles.fw_600}>
                    92%
                  </td>

                  <td>
                    <span
                      className={`${styles.badge} ${styles.badge_info_subtle}`}
                    >
                      Medium
                    </span>
                  </td>

                  <td>
                    Today · 10:28:51
                  </td>

                  <td>
                    <button
                      className={styles.btn_outline_sm}
                    >
                      Review
                    </button>
                  </td>
                </tr>

                {/* Vehicle Detection */}
                <tr>
                  <td>
                    <div className={styles.td_flex}>
                      <div
                        className={`${styles.icon_wrapper} ${styles.text_blue} ${styles.bg_blue_light}`}
                      >
                        <Car size={14} />
                      </div>

                      Vehicle after hours
                    </div>
                  </td>

                  <td>North Parking 02</td>

                  <td className={styles.fw_600}>
                    87%
                  </td>

                  <td>
                    <span
                      className={`${styles.badge} ${styles.badge_neutral_subtle}`}
                    >
                      Low
                    </span>
                  </td>

                  <td>
                    Today · 10:15:33
                  </td>

                  <td>
                    <button
                      className={styles.btn_outline_sm}
                    >
                      Review
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;