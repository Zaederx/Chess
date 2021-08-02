package com.Chess.Chess.controllers.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Home
 */
@Controller
public class Home {

    @GetMapping({"/","/home"})
    public String home() {
        return "home";
    }
}