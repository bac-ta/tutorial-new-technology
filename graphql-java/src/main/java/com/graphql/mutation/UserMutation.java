package com.graphql.mutation;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.graphql.entity.User;
import com.graphql.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

public class UserMutation implements GraphQLMutationResolver {
    private UserService userService;

    @Autowired
    public UserMutation(UserService userService) {
        this.userService = userService;
    }

    public void saveUser(User user) {
        userService.saveUser(user);
    }
}
