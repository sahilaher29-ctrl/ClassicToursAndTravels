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

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            Admin Bookings
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

      {loading && (
        <p style={styles.message}>
          Loading bookings...
        </p>
      )}

      {error && (
        <p style={styles.error}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <div style={styles.summary}>
            <strong>Total Bookings:</strong>{" "}
            {bookings.length}
          </div>

          {bookings.length === 0 ? (
            <div style={styles.empty}>
              No bookings found.
            </div>
          ) : (
            <div style={styles.tableWrapper}>
              <table style={styles.table}>

                <thead>
                  <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Mobile</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Passengers</th>
                    <th style={styles.th}>Pickup</th>
                    <th style={styles.th}>Car</th>
                    <th style={styles.th}>Tour</th>
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
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px"
  },

  title: {
    margin: 0,
    fontSize: "32px"
  },

  subtitle: {
    marginTop: "8px",
    color: "#666"
  },

  refreshButton: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px"
  },

  summary: {
    backgroundColor: "white",
    padding: "18px",
    borderRadius: "10px",
    marginBottom: "20px"
  },

  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    backgroundColor: "white",
    borderRadius: "10px"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1000px"
  },

  th: {
    padding: "14px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    whiteSpace: "nowrap"
  },

  td: {
    padding: "14px",
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
    borderRadius: "8px"
  },

  empty: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px"
  }
};

export default AdminBookings;