package com.graphql.security.jwt;

import com.graphql.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

/**
 * @author bac-ta
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountPrincipal implements UserDetails {
    private Integer id;
    private String email;
    private String name;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public static AccountPrincipal create(User user) {
        String roleType = user.getRoleType().name();
        Set<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(roleType));
        return new AccountPrincipal(user.getId(), user.getEmail(), user.getName(), user.getPassword(), authorities);
    }

    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
