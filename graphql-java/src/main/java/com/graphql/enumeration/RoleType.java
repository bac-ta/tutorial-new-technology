package com.graphql.enumeration;

import com.graphql.constant.APIMessage;
import com.graphql.util.ResourceNotFoundExceptionHandler;
import lombok.Getter;

import java.util.Arrays;

public enum RoleType {
    GUEST(0, "GUEST"),
    ADMIN(1, "ADMIN");
    @Getter
    private int value;
    @Getter
    private String name;

    RoleType(int value, final String name) {
        this.value = value;
        this.name = name;
    }


    public static RoleType findByValue(int value) {
        return Arrays.stream(RoleType.values())
                .filter(approveType -> approveType.getValue() == value)
                .findFirst().orElseThrow(() -> new ResourceNotFoundExceptionHandler(APIMessage.APPROVE_TYPE_INVALID));
    }
}
