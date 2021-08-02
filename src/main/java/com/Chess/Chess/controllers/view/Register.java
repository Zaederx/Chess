package com.Chess.Chess.controllers.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Register
 */
@Controller
public class Register {

    @GetMapping("register")
    public String register() {
        return "register";
    }
}