package com.example.document_signing_system.security

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.jsonwebtoken.security.Keys
import java.util.Date
import javax.crypto.SecretKey

object JwtUtil {
    private val jwtSecret: SecretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256)
    private const val validity = 3600000 // 1h

    fun generateToken(username: String): String {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(Date())
            .setExpiration(Date(System.currentTimeMillis() + validity))
            .signWith(jwtSecret)
            .compact()
    }

    fun validateToken(token: String): Boolean =
        try {
            Jwts.parserBuilder().setSigningKey(jwtSecret).build().parseClaimsJws(token)
            true
        } catch (e: Exception) { false }

    fun getUsername(token: String): String =
        Jwts.parserBuilder().setSigningKey(jwtSecret).build().parseClaimsJws(token).body.subject
}