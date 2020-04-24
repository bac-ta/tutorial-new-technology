package com.graphql.service;

import com.entropy.backend.model.entity.User;
import com.entropy.backend.enumeration.ApproveType;
import com.entropy.backend.enumeration.StatusType;
import com.entropy.backend.enumeration.UserType;
import com.entropy.backend.repository.UserRepository;
import com.entropy.backend.security.jwt.AccountPrincipal;
import com.entropy.backend.util.ResourceNotFoundExceptionHandler;
import com.graphql.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author bac-ta
 */
@Service
public class UserDetailsImplService implements UserDetailsService {
    private UserRepository userRepository;

    @Autowired
    public UserDetailsImplService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String emailOrUsername) throws UsernameNotFoundException {
        User user = userRepository.findUser(emailOrUsername, emailOrUsername, ApproveType.ACCEPTED, StatusType.ON, UserType.ADMINITRATOR);
        return AccountPrincipal.create(user);
    }

    @Transactional
    public UserDetails loadById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundExceptionHandler("Account", "id", id));
        return AccountPrincipal.create(user);
    }

}