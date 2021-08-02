package com.Chess.Chess.controllers.view;


import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;

/**
 * Login
 */
@Controller
public class Login {

    @GetMapping("/login")
    public String viewLogin() {

        return "login";
    }
    
}