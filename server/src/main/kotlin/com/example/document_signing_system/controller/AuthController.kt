package com.example.document_signing_system.controller

import com.example.document_signing_system.security.JwtUtil
import com.example.document_signing_system.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/auth")
class AuthController(
    private val userService: UserService
) {
    data class AuthRequest(val username: String, val password: String)

    @PostMapping("/register")
    fun register(@RequestBody req: AuthRequest): ResponseEntity<String> {
        userService.register(req.username, req.password)
        return ResponseEntity.ok("User registered")
    }

    @PostMapping("/login")
    fun login(@RequestBody req: AuthRequest): ResponseEntity<Any> {
        return if (userService.validateLogin(req.username, req.password)) {
            val token = JwtUtil.generateToken(req.username)
            ResponseEntity.ok(mapOf("token" to token))
        } else {
            ResponseEntity.badRequest().body("Invalid credentials")
        }
    }
}