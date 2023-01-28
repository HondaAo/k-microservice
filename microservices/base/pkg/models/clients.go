package models

import "time"

type Client struct {
	ClientID   string `gorm:"primaryKey;default:uuid_generate_v4()"`
	ClientName string
	Email      string
	Password   string
	IsUsed     bool
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

func (c *Client) TableName() string {
	return "clients"
}
