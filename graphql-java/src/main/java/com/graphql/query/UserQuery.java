package com.graphql.query;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.graphql.entity.User;
import com.graphql.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserQuery implements GraphQLQueryResolver {
    private UserService userService;

    @Autowired
    public UserQuery(UserService userService) {
        this.userService = userService;
    }

    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    public User getUserById(int id) {
        return userService.getUserById(id);
    }
}
