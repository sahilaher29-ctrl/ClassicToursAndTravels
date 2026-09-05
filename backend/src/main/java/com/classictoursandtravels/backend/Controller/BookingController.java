package com.classictoursandtravels.backend.Controller;

import com.classictoursandtravels.backend.Entity.Booking;
import com.classictoursandtravels.backend.Repository.BookingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = {
    "http://localhost:5173",
})
public class BookingController {

    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @DeleteMapping("/{id}")
public void deleteBooking(@PathVariable Long id) {
    bookingRepository.deleteById(id);
}
@PutMapping("/{id}")
public Booking updateBooking(
        @PathVariable Long id,
        @RequestBody Booking updatedBooking) {

    Booking existingBooking =
            bookingRepository.findById(id).orElseThrow();

    existingBooking.setName(updatedBooking.getName());
    existingBooking.setMobile(updatedBooking.getMobile());
    existingBooking.setDate(updatedBooking.getDate());
    existingBooking.setPassengers(updatedBooking.getPassengers());
    existingBooking.setPickup(updatedBooking.getPickup());
    existingBooking.setCar(updatedBooking.getCar());
    existingBooking.setTour(updatedBooking.getTour());

    return bookingRepository.save(existingBooking);
}
}