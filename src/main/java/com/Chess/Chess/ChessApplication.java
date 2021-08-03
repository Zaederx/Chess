package com.Chess.Chess;

import javax.transaction.Transactional;

import com.Chess.Chess.domain.User;
import com.Chess.Chess.respositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChessApplication implements CommandLineRunner{

	@Autowired
	UserRepository userRepo;

	public static void main(String[] args) {
		SpringApplication.run(ChessApplication.class, args);
	}

	@Override
	@Transactional
	public void run (String ... strings) throws Exception {
		// testUsers();
	}

	public void testUsers() {
		User user = new User();
		user.setName("Zach");
		user.setUsername("user");
		user.setPassword("password");
		userRepo.save(user);
	}
}
