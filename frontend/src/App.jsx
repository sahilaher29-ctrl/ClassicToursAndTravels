import { useState } from "react";
import "./index.css";

import ertigaImage from "./assets/cars/ertiga.png";
import celerioImage from "./assets/cars/celerio.png";

import lonavalaLakeImage from "./assets/sightseeing/lonavala-lake.jpg";
import bhushiDamImage from "./assets/sightseeing/bhushi-dam.jpg";
import dukesNoseImage from "./assets/sightseeing/dukes-nose.jpg";
import lionsPointImage from "./assets/sightseeing/lions-point.jpg";
import kuneWaterfallImage from "./assets/sightseeing/kune-waterfall.jpg";
import karlaCavesImage from "./assets/sightseeing/karla-caves.jpg";
import bhajaCavesImage from "./assets/sightseeing/bhaja-caves.jpg";
import lohagadFortImage from "./assets/sightseeing/lohagad-fort.jpg";
import pawnaLakeImage from "./assets/sightseeing/pawna-lake.jpg";
import narayaniDhamImage from "./assets/sightseeing/narayani-dham.jpg";
import monkeyPointImage from "./assets/sightseeing/monkey-point.jpg";
import rajmachiPointImage from "./assets/sightseeing/rajmachi-point.jpg";
import shootingPointImage from "./assets/sightseeing/shooting-point.jpg";
import visapurFortImage from "./assets/sightseeing/Visapur-fort.jpg";
import ryewoodParkImage from "./assets/sightseeing/ryewood-park.jpg"
import waxMuseumImage from "./assets/sightseeing/wax-museum.jpg";



/* =========================================================
   SIGHTSEEING PLACES
========================================================= */

const sightseeingPlaces = [
  {
    name: "Lonavala Lake",
    icon: "🌊",
    image: lonavalaLakeImage,
    description:
      "A peaceful lake surrounded by beautiful greenery, perfect for relaxing and enjoying the scenic beauty of Lonavala."
  },

  {
    name: "Lion's Point",
    icon: "⛰️",
    image: lionsPointImage,
    description:
      "A popular viewpoint offering beautiful valley views and spectacular scenery, especially during the monsoon."
  },

  {
    name: "Duke's Nose",
    icon: "🏔️",
    image: dukesNoseImage,
    description:
      "A famous hilltop viewpoint near Khandala, known for its distinctive shape and scenic Sahyadri mountain views."
  },

  {
    name: "Rajmachi Point",
    icon: "🌄",
    image: rajmachiPointImage,
    description:
      "A beautiful viewpoint offering scenic views of Rajmachi Fort and the surrounding Sahyadri mountains."
  },

  {
    name: "Shooting Point",
    icon: "📍",
    image: shootingPointImage,
    description:
      "A popular Khandala viewpoint known for its beautiful valley scenery and peaceful surroundings."
  },

  {
    name: "Bhushi Dam",
    icon: "💦",
    image: bhushiDamImage,
    description:
      "A popular monsoon destination surrounded by beautiful natural scenery and flowing water."
  },

  {
    name: "Kune Waterfalls",
    icon: "💧",
    image: kuneWaterfallImage,
    description:
      "A spectacular waterfall surrounded by lush green Sahyadri hills near Khandala."
  },

  {
    name: "Karla Caves",
    icon: "🏛️",
    image: karlaCavesImage,
    description:
      "Ancient rock-cut Buddhist caves known for their historic architecture and impressive Chaitya."
  },

  {
    name: "Bhaja Caves",
    icon: "🏛️",
    image: bhajaCavesImage,
    description:
      "An ancient group of rock-cut Buddhist caves near Malavli, surrounded by scenic hills."
  },

  {
    name: "Lohagad Fort",
    icon: "🏰",
    image: lohagadFortImage,
    description:
      "A historic hill fort offering beautiful views of the surrounding valleys and Pawna region."
  },

  {
    name: "Visapur Fort",
    icon: "🏰",
    image: visapurFortImage,
    description:
      "A historic hill fort near Malavli, popular with trekkers for its beautiful views and monsoon scenery."
  },

  {
    name: "Pawna Lake",
    icon: "🏞️",
    image: pawnaLakeImage,
    description:
      "A scenic reservoir surrounded by hills and forts, ideal for peaceful nature trips and sightseeing."
  },

  {
    name: "Ryewood Park",
    icon: "🌳",
    image: ryewoodParkImage,
    description:
      "A peaceful green park in Lonavala, ideal for relaxing walks and spending time in nature."
  },

  {
    name: "Narayani Dham",
    icon: "🛕",
    image: narayaniDhamImage,
    description:
      "A beautiful temple complex in Lonavala known for its peaceful atmosphere and attractive surroundings."
  },

  {
    name: "Celebrity Wax Museum",
    icon: "⭐",
    image: waxMuseumImage,
    description:
      "A popular Lonavala attraction featuring wax figures of well-known personalities."
  },

  {
  name: "Monkey Point",
  icon: "🐒",
  image: monkeyPointImage,
  description:
    "A scenic viewpoint in Khandala known for its beautiful mountain views, fresh air and peaceful surroundings."
}
];


/* =========================================================
   TOUR PACKAGES
========================================================= */

const tourPackages = [
  {
    name: "Waterfall Special",
    description:
      "Specially made for monsoon season, hillside and waterfall",
    hours: "4 Hour",

    weekdayPrice4: 1799,
    weekendPrice4: 1899,

    weekdayPrice7: 1999,
    weekendPrice7: 2099,

    places: [
      "Lonavala Lake Waterfall",
      "Bhushi Dam",
      "Eagle Waterfall",
      "Duke's Nose",
      "Shooting Point",
    ],
  },

  {
    name: "Full Sightseeing",
    description: "Lonavala & Khandala | 9X5 Pack",
    hours: "5 Hour",

    weekdayPrice4: 1999,
    weekendPrice4: 2099,

    weekdayPrice7: 2399,
    weekendPrice7: 2599,

    places: [
      "Lonavala Lake",
      "Bhushi Dam",
      "Duke's Nose",
      "Shooting Point",
      "Ryewood Park",
      "Wax Museum",
      "Narayani Dham",
      "Sunset Point",
      "Rajmachi Garden",
      "Khandala Lake",
      "Lonavala Market",
    ],
  },

  {
    name: "Deluxe Sightseeing",
    description: "Lonavala, Khandala & Karla Cave",
    hours: "6 Hour",

    weekdayPrice4: 2399,
    weekendPrice4: 2599,

    weekdayPrice7: 2699,
    weekendPrice7: 2899,

    places: [
      "Lonavala Lake",
      "Bhushi Dam",
      "Duke's Nose",
      "Shooting Point",
      "Ryewood Park",
      "Wax Museum",
      "Narayani Dham",
      "Mapro Garden",
      "Sunset Point",
      "Rajmachi Garden",
      "Khandala Lake",
      "Karla Cave",
      "Lonavala Market",
    ],
  },

  {
    name: "Lohagad Package",
    description: "Historical Mix",
    hours: "5 Hour",

    weekdayPrice4: 2299,
    weekendPrice4: 2499,

    weekdayPrice7: 2699,
    weekendPrice7: 2899,

    places: [
      "Lohgad Fort",
      "Pawna Lake",
      "Bhaja Caves",
    ],
  },

  {
    name: "Super Deluxe",
    description: "13X9 All in one package",
    hours: "9 Hour",

    weekdayPrice4: 3599,
    weekendPrice4: 3699,

    weekdayPrice7: 3899,
    weekendPrice7: 3999,

    places: [
      "Lonavala Lake",
      "Bhushi Dam",
      "Duke's Nose",
      "Shooting Point",
      "Wax Museum",
      "Narayani Dham",
      "Mapro Garden",
      "Sunset Point",
      "Rajmachi Garden",
      "Khandala Lake",
      "Bhaje Cave",
      "Lohgad Fort",
      "Dinosaur Park",
    ],
  },

  {
    name: "Premium Deluxe",
    description: "All in one package of 2 days | 15X12X2 Pack",
    hours: "12 Hour",

    weekdayPrice4: 5499,
    weekendPrice4: 5699,

    weekdayPrice7: 5899,
    weekendPrice7: 6099,

    places: [
      "Day 1",
      "Lonavala Lake",
      "Bhushi Dam",
      "Duke's Nose",
      "Shooting Point",
      "Wax Museum",
      "Narayani Dham",
      "Mapro Garden",
      "Sunset Point",
      "Rajmachi Garden",
      "Khandala Lake",
      "Lohgad Fort",
      "Bhaja Caves",
      "Karla Caves",
      "Pawna Lake",
      "Dinosaur Park",
    ],
  },
];

/* =========================================================
   APP
========================================================= */

function App() {

 const [selectedDays, setSelectedDays] = useState(
  tourPackages.map(() => "weekday")
);

const [selectedCars, setSelectedCars] = useState(
  tourPackages.map(() => "4")
);

  /* =======================================================
     WHATSAPP NUMBER
  ======================================================= */

  const whatsappNumber = "918830837117";


  /* =======================================================
     PACKAGE SELECTION STATE
  ======================================================= */

  const [packageSelections, setPackageSelections] = useState({});


  /* =======================================================
     BOOKING FORM STATE
  ======================================================= */

  const [bookingForm, setBookingForm] = useState({
    name: "",
    mobile: "",
    date: "",
    passengers: "1-2",
    pickup: "",
    car: "Maruti Suzuki Ertiga",
    tour: "Lonavala Sightseeing"
  });

  const [selectedPackageBooking, setSelectedPackageBooking] = useState(null);

  const openPackageBookingForm = (
  pkg,
  selectedDay,
  selectedCar,
  currentPrice
) => {
  setSelectedPackageBooking({
    name: pkg.name,
    day: selectedDay === "weekday" ? "Weekday" : "Weekend",
    car: selectedCar === "4" ? "4-Seater" : "7-Seater",
    price: currentPrice,
    hours: pkg.hours
  });

  setBookingForm((previous) => ({
    ...previous,
    tour: pkg.name
  }));

  setTimeout(() => {
    document
      .getElementById("booking")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  }, 100);
};


  /* =======================================================
     PACKAGE SELECTION
  ======================================================= */

  const selectPackageOption = (
    index,
    type,
    value
  ) => {

    setPackageSelections((previous) => ({

      ...previous,

      [index]: {

        ...previous[index],

        [type]: value

      }

    }));

  };


  /* =======================================================
     GET PACKAGE SELECTION
  ======================================================= */

  const getPackageSelection = (index) => {

    return {

      day:
        packageSelections[index]?.day ||
        "Weekday",

      car:
        packageSelections[index]?.car ||
        "4-Seater"

    };

  };


  /* =======================================================
     WHATSAPP
  ======================================================= */

  const openWhatsApp = (
  packageName = null,
  selectedDay = null,
  selectedCar = null,
  currentPrice = null,
  hours = null
) => {

  let message;

  if (packageName) {

    const dayText =
      selectedDay === "weekday"
        ? "Weekday"
        : "Weekend";

    const carText =
      selectedCar === "4"
        ? "4-Seater"
        : "7-Seater";

    message =
`🚕 *NEW CAB BOOKING*

📦 Package: ${packageName}
📅 Day: ${dayText}
🚗 Car: ${carText}
💰 Price: ₹${currentPrice}
⏱️ Duration: ${hours}

Hello Classic Tours And Travels,
I want to book this package.

Please confirm availability.`;

  } else {

    message =
`Hello Classic Tours And Travels,

I want to book a cab in Lonavala.`;

  }

  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


  /* =======================================================
     PACKAGE WHATSAPP BOOKING
  ======================================================= */

  const bookPackage = (
    pkg,
    index
  ) => {

    const selection =
      getPackageSelection(index);

    const message =
      `Hello Classic Tours And Travels,\n\n` +

      `I would like to book a sightseeing package.\n\n` +

      `Package: ${pkg.name}\n` +

      `Day: ${selection.day}\n` +

      `Car: ${selection.car}\n` +

      `Duration: ${pkg.hours}\n\n` +

      `Places:\n` +

      pkg.places
        .map(
          (place, placeIndex) =>
            `${placeIndex + 1}. ${place}`
        )
        .join("\n") +

      `\n\nPlease share the availability and final fare.`;

    openWhatsApp(message);

  };


  /* =======================================================
     CAR WHATSAPP BOOKING
  ======================================================= */

  const bookCar = (carName) => {

    const message =
      `Hello Classic Tours And Travels,\n\n` +

      `I would like to book a cab.\n\n` +

      `Car: ${carName}\n` +

      `Location: Lonavala\n\n` +

      `Please share the availability and fare.`;

    openWhatsApp(message);

  };


  /* =======================================================
     SIGHTSEEING WHATSAPP BOOKING
  ======================================================= */

  const bookSightseeing = (
    placeName
  ) => {

    const message =
      `Hello Classic Tours And Travels,\n\n` +

      `I would like to book a cab for sightseeing.\n\n` +

      `Place: ${placeName}\n` +

      `Location: Lonavala\n\n` +

      `Please share the availability and fare.`;

    openWhatsApp(message);

  };


  /* =======================================================
     BOOKING FORM CHANGE
  ======================================================= */

  const handleBookingChange = (
    event
  ) => {

    const {
      name,
      value
    } = event.target;

    setBookingForm(
      (previous) => ({

        ...previous,

        [name]: value

      })
    );

  };


  /* =======================================================
     BOOKING FORM WHATSAPP
  ======================================================= */

  const submitBooking = async () => {
  const {
    name,
    mobile,
    date,
    passengers,
    pickup,
    car,
    tour
  } = bookingForm;

  // Basic validation
  if (!name.trim()) {
    alert("Please enter your name.");
    return;
  }

  if (!mobile.trim()) {
    alert("Please enter your mobile number.");
    return;
  }

  if (!date) {
    alert("Please select your travel date.");
    return;
  }

  if (!pickup.trim()) {
    alert("Please enter your pickup location.");
    return;
  }

  // Prepare booking data for backend
  const bookingData = {
    name: name,
    mobile: mobile,
    date: date,
    passengers: passengers,
    pickup: pickup,
    car: selectedPackageBooking
      ? selectedPackageBooking.car
      : car,
    tour: selectedPackageBooking
      ? selectedPackageBooking.name
      : tour
  };

  try {
    // Save booking to Spring Boot + MySQL
    const response = await fetch(
      "http://localhost:8081/api/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      }
    );

    if (!response.ok) {
      throw new Error("Booking could not be saved.");
    }

    const savedBooking = await response.json();

    console.log("Booking saved successfully:", savedBooking);

    // WhatsApp message
    let message = `🚕 *NEW CAB BOOKING*

👤 Name: ${name}
📱 Mobile: ${mobile}
📅 Travel Date: ${date}
👥 Passengers: ${passengers}
📍 Pickup Location: ${pickup}`;

    // Package booking
    if (selectedPackageBooking) {
      message += `

📦 *PACKAGE DETAILS*

Package: ${selectedPackageBooking.name}
Day: ${selectedPackageBooking.day}
Car: ${selectedPackageBooking.car}
💰 Price: ₹${selectedPackageBooking.price}
⏱️ Duration: ${selectedPackageBooking.hours}`;
    } else {
      // Normal/general booking
      message += `

🚗 *CAB DETAILS*

Car: ${car}
Tour: ${tour}`;
    }

    message += `

Hello Classic Tours And Travels,
I would like to confirm this booking.

Please confirm availability.`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

  } catch (error) {
    console.error("Booking error:", error);

    alert(
      "Sorry, the booking could not be saved. Please make sure the backend server is running."
    );
  }
};


  /* =======================================================
     SCROLL TO BOOKING
  ======================================================= */

  const scrollToBooking = () => {

    document
      .getElementById("booking")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };


  return (

    <div className="website">


      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="navbar">

        <div className="logo">

          <div className="logo-icon">
            🚕
          </div>

          <div>

            <h2>
              CLASSIC
            </h2>

            <span>
              TOURS AND TRAVELS
            </span>

          </div>

        </div>


        <nav>

          <a
            href="#home"
            className="active"
          >
            Home
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#cars">
            Our Cars
          </a>

          <a href="#packages">
            Tour Packages
          </a>

          <a href="#sightseeing">
            Sightseeing
          </a>

          <a href="#faq">
            FAQ
          </a>

          <a href="#contact">
            Contact Us
          </a>

        </nav>


        <div className="navbar-right">

          <span className="phone">
            📞 +91 88308 37117
          </span>

          <button
            className="nav-book"
            onClick={scrollToBooking}
          >
            🚕 Book Your Cab
          </button>

        </div>

      </header>


      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-overlay"></div>


        <div className="hero-content">


          <div className="hero-text">

            <p className="small-title">
              WELCOME TO LONAVALA
            </p>


            <h1>

              Explore Lonavala

              <br />

              <span>
                & Khandala With Comfort
              </span>

            </h1>


            <p className="hero-description">

              Reliable Cab Service for Lonavala Sightseeing,
              Local Tours & Outstation Trips.

            </p>


            <div className="hero-features">

              <div>

                <strong>
                  🚕
                </strong>

                <span>
                  2 Cars
                  <br />
                  Available
                </span>

              </div>


              <div>

                <strong>
                  📍
                </strong>

                <span>
                  Lonavala &
                  <br />
                  Khandala
                </span>

              </div>


              <div>

                <strong>
                  ⭐
                </strong>

                <span>
                  Comfortable
                  <br />
                  & Reliable
                </span>

              </div>


              <div>

                <strong>
                  💬
                </strong>

                <span>
                  Easy WhatsApp
                  <br />
                  Booking
                </span>

              </div>

            </div>


            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={scrollToBooking}
              >
                📅 Book Your Cab
              </button>


              <button
                className="whatsapp-btn"
                onClick={() => openWhatsApp()}
              >
                💬 WhatsApp Us
              </button>

            </div>

          </div>


          {/* HERO CARS */}

          <div className="hero-cars">

            <div className="car-visual ertiga">

              <img
                src={ertigaImage}
                alt="Maruti Suzuki Ertiga"
              />

              <span>
                ERTIGA
              </span>

            </div>


            <div className="car-visual celerio">

              <img
                src={celerioImage}
                alt="Maruti Suzuki Celerio"
              />

              <span>
                CELERIO
              </span>

            </div>

          </div>


        </div>

      </section>


      {/* ===================================================
          WHY CHOOSE US
      =================================================== */}

      <section
        className="why-section"
        id="about"
      >

        <div className="section-heading">

          <p>
            WHY CHOOSE US
          </p>

          <h2>

            Travel Comfortably.

            <br />

            Explore Freely.

          </h2>

          <span>
            Your trusted cab partner for exploring
            Lonavala & Khandala.
          </span>

        </div>


        <div className="why-container">


          <div className="why-card">

            <div className="why-icon">
              🚕
            </div>

            <h3>
              Comfortable Cars
            </h3>

            <p>
              Travel in clean, air-conditioned and
              well-maintained cars for a comfortable journey.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              📍
            </div>

            <h3>
              Local Knowledge
            </h3>

            <p>
              Explore the best places in Lonavala and
              Khandala with local route knowledge.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              💰
            </div>

            <h3>
              Transparent Pricing
            </h3>

            <p>
              Clear and fair pricing with no unnecessary
              surprises during your journey.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              💬
            </div>

            <h3>
              Easy WhatsApp Booking
            </h3>

            <p>
              Contact us directly on WhatsApp and
              book your cab in just a few messages.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              ⭐
            </div>

            <h3>
              Reliable Service
            </h3>

            <p>
              We focus on punctuality, safety and
              comfortable travel for every customer.
            </p>

          </div>


        </div>

      </section>


      {/* ===================================================
          OUR CARS
      =================================================== */}

      <section
        className="cars-section"
        id="cars"
      >

        <div className="section-heading">

          <p>
            OUR FLEET
          </p>

          <h2>
            Choose Your Perfect Ride
          </h2>

          <span>
            Comfortable, well-maintained cars for your
            Lonavala journey.
          </span>

        </div>


        <div className="cars-container">


          {/* ERTIGA */}

          <div className="car-card">

            <div className="car-image ertiga-image">

              <span className="car-badge">
                ⭐ MOST POPULAR
              </span>

              <img
                src={ertigaImage}
                alt="Maruti Suzuki Ertiga"
              />

            </div>


            <div className="car-info">

              <div className="car-title-row">

                <div>

                  <p className="car-category">
                    FAMILY TOURING
                  </p>

                  <h3>
                    Maruti Suzuki Ertiga
                  </h3>

                </div>


                <div className="seat-badge">

                  👥 7

                  <small>
                    Seater
                  </small>

                </div>

              </div>


              <p className="car-description">

                A spacious and comfortable MPV, ideal for
                families and groups exploring Lonavala,
                Khandala and nearby attractions.

              </p>


              <div className="car-features">


                <div>

                  <span>
                    ❄️
                  </span>

                  <strong>
                    AC
                  </strong>

                  <small>
                    Comfortable Travel
                  </small>

                </div>


                <div>

                  <span>
                    👥
                  </span>

                  <strong>
                    7 Seats
                  </strong>

                  <small>
                    Family Friendly
                  </small>

                </div>


                <div>

                  <span>
                    🧳
                  </span>

                  <strong>
                    Luggage
                  </strong>

                  <small>
                    Space Available
                  </small>

                </div>


                <div>

                  <span>
                    📍
                  </span>

                  <strong>
                    Sightseeing
                  </strong>

                  <small>
                    Lonavala Tours
                  </small>

                </div>


              </div>


              <div className="car-bottom">

                <div className="car-suitable">

                  <span>
                    Best For
                  </span>

                  <strong>
                    Families • Groups • Sightseeing
                  </strong>

                </div>


                <button
                  className="car-book-btn"
                  onClick={() =>
                    bookCar("Maruti Suzuki Ertiga")
                  }
                >
                  Book Ertiga
                </button>

              </div>


            </div>

          </div>


          {/* CELERIO */}

          <div className="car-card">

            <div className="car-image celerio-image">

              <span className="car-badge budget">
                💰 BUDGET FRIENDLY
              </span>

              <img
                src={celerioImage}
                alt="Maruti Suzuki Celerio"
              />

            </div>


            <div className="car-info">

              <div className="car-title-row">

                <div>

                  <p className="car-category">
                    COMPACT & COMFORTABLE
                  </p>

                  <h3>
                    Maruti Suzuki Celerio
                  </h3>

                </div>


                <div className="seat-badge">

                  👥 5

                  <small>
                    Seater
                  </small>

                </div>

              </div>


              <p className="car-description">

                A compact and economical car, perfect for
                couples, small families and comfortable
                local sightseeing around Lonavala.

              </p>


              <div className="car-features">


                <div>

                  <span>
                    ❄️
                  </span>

                  <strong>
                    AC
                  </strong>

                  <small>
                    Comfortable Travel
                  </small>

                </div>


                <div>

                  <span>
                    👥
                  </span>

                  <strong>
                    5 Seats
                  </strong>

                  <small>
                    Small Groups
                  </small>

                </div>


                <div>

                  <span>
                    🧳
                  </span>

                  <strong>
                    Luggage
                  </strong>

                  <small>
                    Space Available
                  </small>

                </div>


                <div>

                  <span>
                    📍
                  </span>

                  <strong>
                    Sightseeing
                  </strong>

                  <small>
                    Lonavala Tours
                  </small>

                </div>


              </div>


              <div className="car-bottom">

                <div className="car-suitable">

                  <span>
                    Best For
                  </span>

                  <strong>
                    Couples • Small Families • Local Trips
                  </strong>

                </div>


                <button
                  className="car-book-btn"
                  onClick={() =>
                    bookCar("Maruti Suzuki Celerio")
                  }
                >
                  Book Celerio
                </button>

              </div>


            </div>

          </div>


        </div>


        {/* FLEET CTA */}

        <div className="fleet-cta">

          <div>

            <span>
              🚕
            </span>

            <div>

              <strong>
                Not sure which car to choose?
              </strong>

              <p>
                Tell us about your trip and we'll help
                you choose the right car.
              </p>

            </div>

          </div>


          <button
            onClick={() => openWhatsApp()}
          >
            💬 Ask on WhatsApp
          </button>

        </div>


      </section>


      {/* ===================================================
          SIGHTSEEING
      =================================================== */}

      <section
        className="sightseeing-section"
        id="sightseeing"
      >

        <div className="section-heading">

          <p>
            EXPLORE LONAVALA
          </p>

          <h2>
            Lonavala Sightseeing Places
          </h2>

          <span>
            Discover beautiful places around
            Lonavala & Khandala.
          </span>

        </div>


        <div className="sightseeing-grid">

          {sightseeingPlaces.map(
            (place, index) => (

              <div
                className="sightseeing-card"
                key={index}
              >

              <div className="sightseeing-image">

                {place.image ? (
                  <img
                    src={place.image}
                    alt={place.name}
                  />
                  ) : (
                  <div className="sightseeing-placeholder">
                  {place.icon}
              </div>
  )}

</div>


                <div className="sightseeing-content">

                  <h3>
                    {place.name}
                  </h3>

                  <p>
                    {place.description}
                  </p>


                  <button
                    onClick={() =>
                      bookSightseeing(
                        place.name
                      )
                    }
                    className="sightseeing-book"
                  >
                    🚕 Book Cab
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </section>


  {/* ================= TOUR PACKAGES ================= */}

<section
  className="tour-packages-section"
  id="packages"
>

  <div className="section-heading">

    <p>CLASSIC TOURS AND TRAVELS</p>

    <h2>Lonavala Sightseeing Packages →</h2>

    <span>
      Choose the perfect sightseeing package for your Lonavala trip
    </span>

  </div>


  <div className="tour-packages-grid">

    {tourPackages.map((pkg, index) => {

  const selectedDay = selectedDays[index];
  const selectedCar = selectedCars[index];

  let currentPrice;

  if (selectedCar === "4") {
    currentPrice =
      selectedDay === "weekday"
        ? pkg.weekdayPrice4
        : pkg.weekendPrice4;
  } else {
    currentPrice =
      selectedDay === "weekday"
        ? pkg.weekdayPrice7
        : pkg.weekendPrice7;
  }

  return (

        <div
          className="tour-package-card"
          key={index}
        >

          {/* PACKAGE NAME */}

          <h3>
            {pkg.name}
          </h3>


          {/* DESCRIPTION */}

          <p className="package-description">
            {pkg.description}
          </p>


          {/* ================= WEEKDAY / WEEKEND ================= */}

          <div className="package-days">

            <button
              className={
                selectedDay === "weekday"
                  ? "active"
                  : ""
              }
              onClick={() => {

                const updatedDays = [
                  ...selectedDays
                ];

                updatedDays[index] = "weekday";

                setSelectedDays(updatedDays);

              }}
            >
              Weekday
            </button>


            <button
              className={
                selectedDay === "weekend"
                  ? "active"
                  : ""
              }
              onClick={() => {

                const updatedDays = [
                  ...selectedDays
                ];

                updatedDays[index] = "weekend";

                setSelectedDays(updatedDays);

              }}
            >
              Weekend
            </button>

          </div>


          {/* ================= CAR OPTIONS ================= */}

          <div className="package-cars">

  <button
    className={selectedCar === "4" ? "active" : ""}
    onClick={() => {

      const updatedCars = [...selectedCars];

      updatedCars[index] = "4";

      setSelectedCars(updatedCars);

    }}
  >
    4-Seater
  </button>


  <button
    className={selectedCar === "7" ? "active" : ""}
    onClick={() => {

      const updatedCars = [...selectedCars];

      updatedCars[index] = "7";

      setSelectedCars(updatedCars);

    }}
  >
    7-Seater
  </button>

</div>

          {/* ================= PRICE + HOURS ================= */}

          <div className="package-info">

            <span>
              🏷️ ₹{currentPrice}
            </span>

            <span>
              ⏱️ {pkg.hours}
            </span>

          </div>


          {/* ================= PLACES ================= */}

          <div className="package-places">

            <h4>
              📍 Places
            </h4>

            <ol>

              {pkg.places.map(
                (place, placeIndex) => (

                  <li key={placeIndex}>
                    {place}
                  </li>

                )
              )}

            </ol>

          </div>


          {/* ================= BOOK NOW ================= */}

          <button
  className="package-book-btn"
  onClick={() =>
    openPackageBookingForm(
      pkg,
      selectedDay,
      selectedCar,
      currentPrice
    )
  }
>
  Book Now
</button>

        </div>

      );

    })}

  </div>

</section>

      {/* ===================================================
          BOOKING
      =================================================== */}

      <section
        className="booking-section"
        id="booking"
      >

        <div className="booking-container">


          <div className="booking-text">

            <p>
              PLAN YOUR JOURNEY
            </p>

            <h2>
              Book Your Cab
            </h2>

            <p>
              Tell us your travel details and we'll help
              you plan a comfortable Lonavala trip.
            </p>


            <div className="booking-contact">

              <div>
                📞 <strong>
                  +91 88308 37117
                </strong>
              </div>

              <div>
                💬 <strong>
                  WhatsApp Booking Available
                </strong>
              </div>

              <div>
                📍 <strong>
                  Lonavala, Maharashtra
                </strong>
              </div>

            </div>

          </div>


          <div className="booking-card">


            {/* NAME + MOBILE */}

            <div className="input-row">

              <div className="input-group">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleBookingChange}
                  placeholder="Enter your name"
                />

              </div>


              <div className="input-group">

                <label>
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={bookingForm.mobile}
                  onChange={handleBookingChange}
                  placeholder="Enter mobile number"
                />

              </div>

            </div>


            {/* DATE + PASSENGERS */}

            <div className="input-row">

              <div className="input-group">

                <label>
                  Travel Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={bookingForm.date}
                  onChange={handleBookingChange}
                />

              </div>


              <div className="input-group">

                <label>
                  Passengers
                </label>

                <select
                  name="passengers"
                  value={bookingForm.passengers}
                  onChange={handleBookingChange}
                >

                  <option value="1-2">
                    1-2
                  </option>

                  <option value="3-4">
                    3-4
                  </option>

                  <option value="5-7">
                    5-7
                  </option>

                </select>

              </div>

            </div>


            {/* PICKUP */}

            <div className="input-group">

              <label>
                Pickup Location
              </label>

              <input
                type="text"
                name="pickup"
                value={bookingForm.pickup}
                onChange={handleBookingChange}
                placeholder="Enter pickup location"
              />

            </div>


            {/* CAR + TOUR */}

            <div className="input-row">


              <div className="input-group">

                <label>
                  Select Car
                </label>

                <select
                  name="car"
                  value={bookingForm.car}
                  onChange={handleBookingChange}
                >

                  <option value="Maruti Suzuki Ertiga">
                    Maruti Suzuki Ertiga
                  </option>

                  <option value="Maruti Suzuki Celerio">
                    Maruti Suzuki Celerio
                  </option>

                </select>

              </div>


              <div className="input-group">

                <label>
                  Select Tour
                </label>

                <select
                  name="tour"
                  value={bookingForm.tour}
                  onChange={handleBookingChange}
                >

                  <option value="Lonavala Sightseeing">
                    Lonavala Sightseeing
                  </option>

                  <option value="Lonavala & Khandala">
                    Lonavala & Khandala
                  </option>

                  <option value="Karla Caves">
                    Karla Caves
                  </option>

                  <option value="Custom Tour">
                    Custom Tour
                  </option>

                </select>

              </div>


            </div>


            {/* BOOKING BUTTON */}

            <button
              className="booking-submit"
              onClick={submitBooking}
            >
              💬 BOOK VIA WHATSAPP
            </button>


          </div>


        </div>

      </section>


      {/* ===================================================
          FAQ ANCHOR
      =================================================== */}

      <section
        id="faq"
        style={{
          height: "1px",
          overflow: "hidden"
        }}
      >
      </section>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer id="contact">


        <div className="footer-content">


          <div className="footer-brand">

            <h2>
              CLASSIC
            </h2>

            <h4>
              TOURS AND TRAVELS
            </h4>

            <p>
              Explore Lonavala & Khandala With Comfort
            </p>

          </div>


          <div>

            <h3>
              Quick Links
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About Us
            </a>

            <a href="#cars">
              Our Cars
            </a>

            <a href="#packages">
              Tour Packages
            </a>

            <a href="#sightseeing">
              Sightseeing
            </a>

          </div>


          <div>

            <h3>
              Contact Us
            </h3>

            <p>
              📞 +91 8830837117
            </p>

            <p>
              💬 WhatsApp
            </p>

            <p>
              📍 Lonavala, Maharashtra
            </p>

          </div>


          <div>

            <h3>
              Follow Us
            </h3>

            <div className="social-icons">

              <span>
                📘
              </span>

              <span>
                📷
              </span>

              <span>
                💬
              </span>

            </div>

          </div>


        </div>


        <div className="copyright">

          © 2026 Classic Tours And Travels.
          All Rights Reserved.

        </div>


      </footer>


      {/* ===================================================
          FLOATING WHATSAPP
      =================================================== */}

      <button
        className="floating-whatsapp"
        onClick={() => openWhatsApp()}
        aria-label="Contact Classic Tours And Travels on WhatsApp"
      >
        💬
      </button>


    </div>

  );

}


export default App;