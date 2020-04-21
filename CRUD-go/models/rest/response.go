package rest

type Message struct {
	Id      int64  "json:\"id\""
	Message string "json:\"message\""
}

type LoginMessage struct {
	Message     string "json:\"message\""
	AccessToken string "json:\"access_token\""
}
