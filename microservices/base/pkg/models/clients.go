package models

import (
	"time"

	"github.com/jinzhu/gorm"
	uuid "github.com/satori/go.uuid"
)

type Client struct {
	ClientID   uuid.UUID `gorm:"primaryKey"`
	ClientName string
	Email      string
	Password   string
	IsUsed     bool
	CreatedAt  time.Time `gorm:"autoCreateTime"`
	UpdatedAt  time.Time `gorm:"autoUpdateTime"`
}

func (c *Client) TableName() string {
	return "clients"
}

func (c *Client) BeforeCreate(tx *gorm.DB) (err error) {
	c.ClientID = uuid.NewV4()
	return
}
