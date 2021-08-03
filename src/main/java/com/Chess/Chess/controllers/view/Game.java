package com.Chess.Chess.controllers.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Game {
    
    @GetMapping("/game")
    public String game() {
        return "chess-game";
    }
}
