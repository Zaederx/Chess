package com.Chess.Chess.respositories;
import com.Chess.Chess.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findUserById(int id);
    User findUserByUsername(String username);
    User findUserByName(String name);
}
