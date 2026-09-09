import { useEffect, useState } from "react";

function AdminBookings() {
const handleLogout = () => {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "/admin/login";
};
const [bookings, setBookings] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [searchTerm, setSearchTerm] = useState("");
const [selectedDate, setSelectedDate] = useState("");
const [editingBooking, setEditingBooking] = useState(null);
const [editForm, setEditForm] = useState({
  name: "",
  mobile: "",
  date: "",
  passengers: "",
  pickup: "",
  car: "",
  tour: ""
});

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

  const filteredBookings = bookings.filter((booking) => {
  const search = searchTerm.toLowerCase();

  const matchesSearch =
    booking.name?.toLowerCase().includes(search) ||
    booking.mobile?.toLowerCase().includes(search) ||
    booking.pickup?.toLowerCase().includes(search) ||
    booking.car?.toLowerCase().includes(search) ||
    booking.tour?.toLowerCase().includes(search);

  const matchesDate =
    !selectedDate || booking.date === selectedDate;

  return matchesSearch && matchesDate;
});

const handleEdit = (booking) => {
  setEditingBooking(booking);

  setEditForm({
    name: booking.name || "",
    mobile: booking.mobile || "",
    date: booking.date || "",
    passengers: booking.passengers || "",
    pickup: booking.pickup || "",
    car: booking.car || "",
    tour: booking.tour || ""
  });
};

const handleUpdate = async () => {
  try {
    const response = await fetch(
      `http://localhost:8081/api/bookings/${editingBooking.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editForm)
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update booking.");
    }

    const updatedBooking = await response.json();

    setBookings((previous) =>
      previous.map((booking) =>
        booking.id === updatedBooking.id
          ? updatedBooking
          : booking
      )
    );

    setEditingBooking(null);

    alert("Booking updated successfully.");
  } catch (error) {
    console.error("Update error:", error);

    alert("Unable to update booking.");
  }
};

const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this booking?"
  );

  if (!confirmed) {
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:8081/api/bookings/${id}`,
      {
        method: "DELETE"
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete booking.");
    }

    setBookings((previous) =>
      previous.filter((booking) => booking.id !== id)
    );

    alert("Booking deleted successfully.");
  } catch (error) {
    console.error("Delete error:", error);

    alert("Unable to delete booking.");
  }
};

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>

        <div>
          <h1 style={styles.title}>
            Admin Dashboard
          </h1>

          <button
  onClick={handleLogout}
  style={{
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#dc3545",
    color: "#ffffff",
    cursor: "pointer",
    marginTop: "10px"
  }}
>
  🚪 Logout
</button>

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

  <div style={styles.searchContainer}>

    <span style={styles.searchIcon}>
      🔍
    </span>

    <input
      type="text"
      placeholder="Search name, mobile, pickup, car..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      style={styles.searchInput}
    />

  </div>

  <div style={styles.dateContainer}>

  <span style={styles.dateLabel}>
    📅
  </span>

  <input
    type="date"
    value={selectedDate}
    onChange={(event) => setSelectedDate(event.target.value)}
    style={styles.dateInput}
  />

  {selectedDate && (
    <button
      onClick={() => setSelectedDate("")}
      style={styles.clearButton}
    >
      ✕
    </button>
  )}

</div>

</div>


{/* Edit Booking Form */}
{editingBooking && (
  <div style={styles.editContainer}>

    <h2 style={styles.editTitle}>
      Edit Booking #{editingBooking.id}
    </h2>

    <div style={styles.editGrid}>

      <input
        type="text"
        placeholder="Name"
        value={editForm.name}
        onChange={(event) =>
          setEditForm({
            ...editForm,
            name: event.target.value
          })
        }
        style={styles.editInput}
      />

      <input
        type="text"
        placeholder="Mobile"
        value={editForm.mobile}
        onChange={(event) =>
          setEditForm({
            ...editForm,
            mobile: event.target.value
          })
        }
        style={styles.editInput}
      />

      <input
        type="date"
        value={editForm.date}
        onChange={(event) =>
          setEditForm({
            ...editForm,
            date: event.target.value
          })
        }
        style={styles.editInput}
      />

      <input
        type="text"
        placeholder="Passengers"
        value={editForm.passengers}
        onChange={(event) =>
          setEditForm({
            ...editForm,
            passengers: event.target.value
          })
        }
        style={styles.editInput}
      />

      <input
        type="text"
        placeholder="Pickup Location"
        value={editForm.pickup}
        onChange={(event) =>
          setEditForm({
            ...editForm,
            pickup: event.target.value
          })
        }
        style={styles.editInput}
      />

      <input
        type="text"
        placeholder="Car"
        value={editForm.car}
        onChange={(event) =>
          setEditForm({
            ...editForm,
            car: event.target.value
          })
        }
        style={styles.editInput}
      />

      <input
        type="text"
        placeholder="Tour"
        value={editForm.tour}
        onChange={(event) =>
          setEditForm({
            ...editForm,
            tour: event.target.value
          })
        }
        style={styles.editInput}
      />

    </div>

    <div style={styles.editButtons}>

      <button
        onClick={() => setEditingBooking(null)}
        style={styles.cancelButton}
      >
        Cancel
      </button>

      <button
        onClick={() => handleUpdate()}
        style={styles.saveButton}
      >
        Save Changes
      </button>

    </div>

  </div>
)}


{/* No bookings */}
{filteredBookings.length === 0 ? (
  <div style={styles.empty}>
    {bookings.length === 0
      ? "No bookings found."
      : "No bookings match your search."}
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

                    <th style={styles.th}>Action</th>

                  </tr>
                </thead>

                <tbody>

                  {filteredBookings.map((booking) => (

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

                      <td style={styles.td}>
    <button
  onClick={() => handleEdit(booking)}
  style={styles.editButton}
>
  Edit
</button>

<button
  onClick={() => handleDelete(booking.id)}
  style={styles.deleteButton}
>
  Delete
</button>
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

searchContainer: {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#ffffff",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "0 12px",
  width: "350px"
},

searchIcon: {
  fontSize: "18px",
  marginRight: "8px"
},

searchInput: {
  width: "100%",
  border: "none",
  outline: "none",
  padding: "12px 5px",
  fontSize: "14px"
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
  },

  editContainer: {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
},

editTitle: {
  marginTop: 0,
  marginBottom: "20px"
},

editGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "15px"
},

editInput: {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px"
},

editButtons: {
  marginTop: "20px",
  display: "flex",
  gap: "10px"
},

cancelButton: {
  padding: "10px 18px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#777",
  color: "#fff",
  cursor: "pointer"
},

saveButton: {
  padding: "10px 18px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#198754",
  color: "#fff",
  cursor: "pointer"
}

  

};

export default AdminBookings;