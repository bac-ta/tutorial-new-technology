package utils

import (
	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) []byte {
	// Hashing the password with the default cost of 10
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}
	return hashedPassword
}

func comparePassword(hashedPassword string, password string) error {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	return err
}
