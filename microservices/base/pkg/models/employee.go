package models

import (
	"time"

	uuid "github.com/satori/go.uuid"
)

type Employee struct {
	ClientID       uuid.UUID `gorm:"primaryKey"`
	EmployeeID     uint64    `gorm:"primaryKey"`
	EmployeeCode   string
	JobCategoryID  uint64
	DepartmentID   uint64
	StartDate      time.Time
	RetirementDate time.Time
	CreatedAt      time.Time `gorm:"autoCreateTime"`
	UpdatedAt      time.Time `gorm:"autoUpdateTime"`
}

func (e *Employee) TableName() string {
	return "employees"
}
