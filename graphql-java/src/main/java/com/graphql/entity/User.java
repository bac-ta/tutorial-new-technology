package com.graphql.entity;

import com.graphql.enumeration.RoleType;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Data
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"email"}))
@Entity
public class User {
    @Column(nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(name = "role_type", nullable = false)
    @Enumerated(value = EnumType.STRING)
    private RoleType roleType = RoleType.GUEST;
}
