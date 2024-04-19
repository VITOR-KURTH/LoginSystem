// AuthController.java
package com.example.login.controller;

import com.example.login.model.Usuario;
import com.example.login.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

 private final UsuarioRepository usuarioRepository;

 @Autowired
 public AuthController(UsuarioRepository usuarioRepository) {
 this.usuarioRepository = usuarioRepository;
 }

 @PostMapping("/login")
 public Boolean login(@RequestBody Usuario usuario) {
 List<Usuario> usuarios = usuarioRepository.findAll();
for(Usuario u:usuarios){
    if(u.getUsername().equals(usuario.getUsername()) &&
    u.getPassword().equals(usuario.getPassword())) {
        return true;
    }
}
return false;
}
}
