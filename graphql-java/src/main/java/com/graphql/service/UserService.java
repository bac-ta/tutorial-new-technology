package com.graphql.service;

import com.graphql.entity.User;
import com.graphql.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    private UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Transactional(readOnly = true)
    public User getUserById(int id) {
        return repository.findUserById(id);
    }

    @Transactional
    public void saveUser(User user) {
        repository.save(user);
    }
}
