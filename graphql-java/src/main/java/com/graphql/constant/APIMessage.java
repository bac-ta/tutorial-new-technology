package com.graphql.constant;

/**
 * @author bac-ta
 */
public class APIMessage {
    //Common
    public static final String PASSWORD_NOT_MATCH = "Password and confirm password not match";
    public static final String PASSWORD_NOT_BLANK = "Password must not blank";
    public static final String EMAIL_NOT_BLANK = "Email must not blank";
    public static final String FIRST_NAME_NOT_BLANK = "First name must not blank";
    public static final String LAST_NAME_NOT_BLANK = "Last name must not blank";
    public static final String REPEAT_PASSWORD_NOT_BLANK = "Repeat password must not blank";
    public static final String USER_TYPE_NOT_EMPTY = "User type must not empty";
    public static final String USER_NAME_NOT_BLANK = "User name must not blank";
    public static final String CREATE_FILEDIR_ERROR = "Could not create the directory where the uploaded files will be stored.";
    public static final String FILE_INVALID_PATH_SEQUENCE = "Sorry! Filename contains invalid path sequence ";
    public static final String FILE_NOT_STORE = "Could not store file &s . Please try again!";
    public static final String FILE_NOT_FOUND = "File not found &s";
    public static final String STATUS_TYPE_INVALID = "Status type invalid";
    public static final String NOT_DETERMINE_FILE_TYPE = "Could not determine file type";
    public static final String FILE_TYPE_INVALID = "File type invalid";

    //Authenticate
    public static String RESOURCE_NOT_FOUND = "%s not found with %s : '%s'";
    public static String LOGIN_SUCCESSFUL = "Login successful";
    public static String ENDTRY_POINT_UNAUTHORIZED = "Responding with unauthorized error. Message - {}";
    public static String ACCOUNT_INVALID = "Account invalid, please try again !";

    //User
    public static final String REGIST_USER_SUCCESSFUL = "Regist user succesful";
    public static final String REGIST_USER_FAIL = "Regist user fail";
    public static final String APPROVE_TYPE_INVALID = "Approve type invalid";
    public static final String GENDER_TYPE_INVALID = "Gender type invalid";
    public static final String USER_TYPE_INVALID = "User type invalid";


}
