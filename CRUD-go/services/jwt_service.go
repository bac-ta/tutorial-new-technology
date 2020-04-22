package services

import (
	"../conf"
	"../constant"
	"../models/rest"
	"encoding/json"
	"fmt"
	"github.com/astaxie/beego/context"
	"github.com/astaxie/beego/logs"
	"github.com/dgrijalva/jwt-go"
	"net/http"
	"strings"
	"time"
)

var secretKey = conf.FetchJwtConfiguration()

func MakeJwt(id int, name string, role string) string {
	jwtKey := []byte(secretKey)
	expirationTime := time.Now().UTC().Add(1 * time.Hour).Unix()
	issueAt := time.Now().UTC().Unix()

	jwtToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub":  id,
		"name": name,
		"role": role,
		"iat":  issueAt,
		"exp":  expirationTime,
	}).SignedString(jwtKey)

	if err != nil {
		logs.Error(constant.JWT_MAKE_ERROR)
		return ""
	}

	return jwtToken
}

func JwtAuth(ctx *context.Context) {
	ctx.Output.Header("Content-Type", "application/json")
	uri := ctx.Input.URI()
	if uri == "/api/login" {
		return
	}
	accessToken := ctx.Input.Header("Authorization")
	accessToken = strings.Replace(accessToken, "Bearer ", "", 1)

	if accessToken == "" {
		ctx.Output.SetStatus(http.StatusForbidden)
		responseBody, err := json.Marshal(rest.APIMessage{http.StatusForbidden, constant.FORBIDEN})
		ctx.Output.Body(responseBody)
		if err != nil {
			panic(err)
		}
	}

	token, err := jwt.Parse(accessToken, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(secretKey), nil
	})

	if err != nil {
		ctx.Output.SetStatus(http.StatusForbidden)
		resBytes, err := json.Marshal(rest.APIMessage{http.StatusForbidden, constant.FORBIDEN})
		ctx.Output.Body(resBytes)
		if err != nil {
			panic(err)
		}
	}

	claims, ok := token.Claims.(jwt.MapClaims)

	if ok && token.Valid && claims != nil {
		return
	} else {
		ctx.Output.SetStatus(403)
		resBody, err := json.Marshal(rest.APIMessage{http.StatusForbidden, ctx.Input.Header("Authorization")})
		ctx.Output.Body(resBody)
		if err != nil {
			panic(err)
		}
	}
}