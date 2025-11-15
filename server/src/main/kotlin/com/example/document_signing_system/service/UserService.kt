package com.example.document_signing_system.service

import com.example.document_signing_system.entity.User
import com.example.document_signing_system.repository.UserRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder
) {
    fun register(username: String, password: String) {
        if (userRepository.findByUsername(username) != null) {
            throw RuntimeException("Username already exists")
        }
        val encoded = passwordEncoder.encode(password)
        require(encoded != null) { "Password encoding failed" }
        val user = User(username = username, password = encoded)
        userRepository.save(user)
    }

    fun validateLogin(username: String, password: String): Boolean {
        val user = userRepository.findByUsername(username) ?: return false
        return passwordEncoder.matches(password, user.password)
    }
}