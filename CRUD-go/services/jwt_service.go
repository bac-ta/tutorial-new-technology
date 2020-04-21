package services

import (
	"../conf"
	"../constant"
	"github.com/astaxie/beego/logs"
	"github.com/dgrijalva/jwt-go"
	"time"
)

var secretKey = conf.FetchJwtConfiguration()

type Claims struct {
	id   int    `json:"id"`
	name string `json:"name"`
	role string `json:"role"`
	jwt.StandardClaims
}

func MakeJwt(id int, name string, role string) string {
	jwtKey := []byte(secretKey)
	expirationTime := time.Now().Add(1 * time.Hour)

	claims := &Claims{
		id:   id,
		name: name,
		role: role,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}
	jwtToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString(jwtKey)
	if err != nil {
		logs.Error(constant.JWT_MAKE_ERROR)
		return ""
	}

	return jwtToken
}

func VerifyJwt(jwtToken string) bool {

	claims := &Claims{}

	tkn, err := jwt.ParseWithClaims(jwtToken, claims, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})
	if err != nil {
		return false
	}
	if !tkn.Valid {
		return false
	}
	return true
}
