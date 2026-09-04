import { useEffect, useState } from "react";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:8081/api/bookings"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch bookings.");
      }

      const data = await response.json();

      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);

      setError(
        "Unable to load bookings. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const today = getTodayDate();

  // Dashboard statistics
  const totalBookings = bookings.length;

  const todayBookings = bookings.filter(
    (booking) => booking.date === today
  ).length;

  const upcomingBookings = bookings.filter(
    (booking) => booking.date > today
  ).length;

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>

        <div>
          <h1 style={styles.title}>
            Admin Dashboard
          </h1>

          <p style={styles.subtitle}>
            Classic Tours And Travels
          </p>
        </div>

        <button
          onClick={fetchBookings}
          style={styles.refreshButton}
        >
          🔄 Refresh
        </button>

      </div>

      {/* Loading */}
      {loading && (
        <p style={styles.message}>
          Loading bookings...
        </p>
      )}

      {/* Error */}
      {error && (
        <p style={styles.error}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <>

          {/* Dashboard Cards */}
          <div style={styles.cards}>

            <div style={styles.card}>
              <div style={styles.cardIcon}>
                📋
              </div>

              <div>
                <p style={styles.cardLabel}>
                  Total Bookings
                </p>

                <h2 style={styles.cardNumber}>
                  {totalBookings}
                </h2>
              </div>
            </div>


            <div style={styles.card}>
              <div style={styles.cardIcon}>
                📅
              </div>

              <div>
                <p style={styles.cardLabel}>
                  Today's Bookings
                </p>

                <h2 style={styles.cardNumber}>
                  {todayBookings}
                </h2>
              </div>
            </div>


            <div style={styles.card}>
              <div style={styles.cardIcon}>
                🚕
              </div>

              <div>
                <p style={styles.cardLabel}>
                  Upcoming Bookings
                </p>

                <h2 style={styles.cardNumber}>
                  {upcomingBookings}
                </h2>
              </div>
            </div>

          </div>


          {/* Bookings Section */}
          <div style={styles.sectionHeader}>

            <div>
              <h2 style={styles.sectionTitle}>
                All Bookings
              </h2>

              <p style={styles.sectionSubtitle}>
                Customer booking records
              </p>
            </div>

          </div>


          {/* No bookings */}
          {bookings.length === 0 ? (

            <div style={styles.empty}>
              No bookings found.
            </div>

          ) : (

            <div style={styles.tableWrapper}>

              <table style={styles.table}>

                <thead>
                  <tr>

                    <th style={styles.th}>
                      ID
                    </th>

                    <th style={styles.th}>
                      Name
                    </th>

                    <th style={styles.th}>
                      Mobile
                    </th>

                    <th style={styles.th}>
                      Date
                    </th>

                    <th style={styles.th}>
                      Passengers
                    </th>

                    <th style={styles.th}>
                      Pickup
                    </th>

                    <th style={styles.th}>
                      Car
                    </th>

                    <th style={styles.th}>
                      Tour
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {bookings.map((booking) => (

                    <tr key={booking.id}>

                      <td style={styles.td}>
                        {booking.id}
                      </td>

                      <td style={styles.td}>
                        {booking.name}
                      </td>

                      <td style={styles.td}>
                        {booking.mobile}
                      </td>

                      <td style={styles.td}>
                        {booking.date}
                      </td>

                      <td style={styles.td}>
                        {booking.passengers}
                      </td>

                      <td style={styles.td}>
                        {booking.pickup}
                      </td>

                      <td style={styles.td}>
                        {booking.car}
                      </td>

                      <td style={styles.td}>
                        {booking.tour}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </>
      )}

    </div>
  );
}


const styles = {

  container: {
    minHeight: "100vh",
    padding: "30px",
    backgroundColor: "#f5f7f6",
    fontFamily: "Arial, sans-serif"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px"
  },

  title: {
    margin: 0,
    fontSize: "32px",
    color: "#123"
  },

  subtitle: {
    marginTop: "8px",
    color: "#666",
    fontSize: "15px"
  },

  refreshButton: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    backgroundColor: "#ffffff"
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "35px"
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "22px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },

  cardIcon: {
    fontSize: "32px"
  },

  cardLabel: {
    margin: 0,
    color: "#666",
    fontSize: "14px"
  },

  cardNumber: {
    margin: "6px 0 0",
    fontSize: "28px",
    color: "#123"
  },

  sectionHeader: {
    marginBottom: "15px"
  },

  sectionTitle: {
    margin: 0,
    fontSize: "24px",
    color: "#123"
  },

  sectionSubtitle: {
    margin: "6px 0 0",
    color: "#777"
  },

  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1000px"
  },

  th: {
    padding: "15px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    whiteSpace: "nowrap",
    backgroundColor: "#fafafa"
  },

  td: {
    padding: "15px",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap"
  },

  message: {
    padding: "30px",
    textAlign: "center"
  },

  error: {
    padding: "20px",
    backgroundColor: "#ffe5e5",
    borderRadius: "8px",
    color: "#b00020"
  },

  empty: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "12px"
  }

};

export default AdminBookings;