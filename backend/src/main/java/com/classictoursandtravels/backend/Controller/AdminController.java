package com.classictoursandtravels.backend.Controller;

import com.classictoursandtravels.backend.Entity.Admin;
import com.classictoursandtravels.backend.Repository.AdminRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5176"
})
public class AdminController {

    private final AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @PostMapping("/login")
    public String login(@RequestBody Admin loginRequest) {

        Optional<Admin> admin =
                adminRepository.findByUsername(loginRequest.getUsername());

        if (admin.isPresent() &&
                admin.get().getPassword().equals(loginRequest.getPassword())) {

            return "Login successful";
        }

        return "Invalid username or password";
    }
}