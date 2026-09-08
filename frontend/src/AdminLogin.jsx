import React, { useState } from "react";
import lonavalaLake from "./assets/sightseeing/lonavala-lake.jpg";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
  event.preventDefault();

  if (!username || !password) {
    alert("Please enter username and password.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:8081/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    );

    const result = await response.text();

    if (result === "Login successful") {
  alert("Login successful!");

  localStorage.setItem("adminLoggedIn", "true");

  window.location.href = "/admin/bookings";
} else {
      alert("Invalid username or password.");
    }

  } catch (error) {
    console.error("Login error:", error);

    alert(
      "Unable to connect to the server. Please make sure the backend is running."
    );
  }
};
  return (
    <div
      style={{
        ...styles.page,
        backgroundImage: `url(${lonavalaLake})`
      }}
    >
      {/* Dark overlay */}
      <div style={styles.overlay}></div>

      {/* Top Branding */}
      <div style={styles.brand}>
        <div style={styles.brandIcon}>🚕</div>

        <div>
          <h1 style={styles.brandTitle}>
            Classic Tours And Travels
          </h1>

          <p style={styles.brandSubtitle}>
            Explore • Discover • Create Memories
          </p>
        </div>
      </div>

      {/* Left Travel Message */}
      <div style={styles.leftContent}>
        <div style={styles.carEmoji}>
          🚙
        </div>

        <h2 style={styles.travelTitle}>
          Your Journey
          <br />
          Our Priority
        </h2>

        <p style={styles.travelText}>
          Comfortable rides,
          <br />
          beautiful destinations
          <br />
          unforgettable memories.
        </p>

        <div style={styles.featureRow}>
          <span>🚗 Reliable Cabs</span>
          <span>📍 Local Tours</span>
          <span>🛡️ Safe Travel</span>
        </div>
      </div>

      {/* Login Card */}
      <div style={styles.loginBox}>

        {/* Admin Icon */}
        <div style={styles.adminIcon}>
          👤
          <span style={styles.lockIcon}>🔒</span>
        </div>

        <h2 style={styles.loginTitle}>
          Admin Login
        </h2>

        <p style={styles.loginSubtitle}>
          Classic Tours And Travels
        </p>

        <div style={styles.line}></div>

        <p style={styles.welcomeText}>
          Welcome back! Please login to access
          <br />
          your admin dashboard.
        </p>

        <form onSubmit={handleLogin}>

          {/* Username */}
          <div style={styles.inputContainer}>
            <span style={styles.inputIcon}>
              👤
            </span>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) =>
                setUsername(event.target.value)
              }
              style={styles.input}
            />
          </div>

          {/* Password */}
          <div style={styles.inputContainer}>
            <span style={styles.inputIcon}>
              🔒
            </span>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              style={styles.input}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={styles.loginButton}
          >
            Login
            <span style={styles.arrow}>
              →
            </span>
          </button>

        </form>

        {/* Bottom Text */}
        <div style={styles.bottomLine}></div>

        <div style={styles.bottomText}>
          <span>Manage Bookings</span>
          <span>•</span>
          <span>Serve Better</span>
          <span>•</span>
          <span>Grow Together</span>
        </div>

      </div>

      {/* Bottom Right Message */}
      <div style={styles.rightMessage}>
        <div style={styles.rightCar}>
          🚗
        </div>

        <h3>
          Better Roads
          <br />
          Bigger Dreams
        </h3>
      </div>

    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.42)"
  },

  /* BRAND */

  brand: {
    position: "absolute",
    top: "35px",
    left: "50px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    color: "#ffffff",
    zIndex: 2
  },

  brandIcon: {
    fontSize: "42px",
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: "10px",
    borderRadius: "50%"
  },

  brandTitle: {
    margin: 0,
    fontSize: "26px",
    fontWeight: "700"
  },

  brandSubtitle: {
    margin: "5px 0 0",
    fontSize: "14px",
    opacity: 0.9
  },

  /* LEFT CONTENT */

  leftContent: {
    position: "absolute",
    left: "55px",
    bottom: "70px",
    color: "#ffffff",
    zIndex: 2,
    maxWidth: "350px"
  },

  carEmoji: {
    fontSize: "60px",
    marginBottom: "5px"
  },

  travelTitle: {
    fontSize: "34px",
    lineHeight: "1.15",
    margin: "0 0 15px",
    fontWeight: "700"
  },

  travelText: {
    fontSize: "17px",
    lineHeight: "1.6",
    marginBottom: "20px"
  },

  featureRow: {
    display: "flex",
    flexDirection: "column",
    gap: "9px",
    fontSize: "14px"
  },

  /* LOGIN BOX */

  loginBox: {
    position: "relative",
    zIndex: 3,
    width: "430px",
    padding: "38px 45px",
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: "22px",
    boxShadow: "0 15px 45px rgba(0,0,0,0.35)",
    textAlign: "center"
  },

  adminIcon: {
    width: "82px",
    height: "82px",
    borderRadius: "50%",
    backgroundColor: "#075b9c",
    color: "#ffffff",
    margin: "0 auto 18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    position: "relative"
  },

  lockIcon: {
    position: "absolute",
    bottom: "-2px",
    right: "-3px",
    fontSize: "22px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    padding: "3px"
  },

  loginTitle: {
    margin: 0,
    fontSize: "34px",
    color: "#124d7d",
    fontWeight: "700"
  },

  loginSubtitle: {
    margin: "8px 0 15px",
    fontSize: "20px",
    color: "#1b527f"
  },

  line: {
    width: "85px",
    height: "3px",
    backgroundColor: "#1475b8",
    margin: "0 auto 20px",
    borderRadius: "10px"
  },

  welcomeText: {
    color: "#65758b",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "22px"
  },

  /* INPUTS */

  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #d2d9e0",
    borderRadius: "9px",
    marginBottom: "15px",
    backgroundColor: "#ffffff",
    height: "54px",
    boxSizing: "border-box"
  },

  inputIcon: {
    width: "45px",
    fontSize: "19px"
  },

  input: {
    flex: 1,
    height: "100%",
    border: "none",
    outline: "none",
    fontSize: "16px",
    color: "#333",
    backgroundColor: "transparent",
    paddingRight: "12px"
  },

  /* BUTTON */

  loginButton: {
    width: "100%",
    height: "55px",
    border: "none",
    borderRadius: "9px",
    backgroundColor: "#0868ad",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "5px",
    boxShadow: "0 5px 15px rgba(8,104,173,0.3)"
  },

  arrow: {
    marginLeft: "12px",
    fontSize: "23px"
  },

  /* BOTTOM */

  bottomLine: {
    height: "1px",
    backgroundColor: "#e4e7eb",
    marginTop: "28px",
    marginBottom: "18px"
  },

  bottomText: {
    display: "flex",
    justifyContent: "center",
    gap: "9px",
    fontSize: "12px",
    color: "#124d7d"
  },

  /* RIGHT */

  rightMessage: {
    position: "absolute",
    right: "55px",
    bottom: "60px",
    color: "#ffffff",
    zIndex: 2,
    textAlign: "center"
  },

  rightCar: {
    fontSize: "75px",
    marginBottom: "-5px"
  },

  rightMessageText: {
    fontSize: "16px"
  }
};

export default AdminLogin;