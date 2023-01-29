package config

import (
	"log"
)

type Status uint64

const (
	StatusNotFound Status = 404
	ServerError    Status = 400
)

type Logger interface {
	Error(s Status, message string)
	Debug(v ...interface{})
}

type BasicLogger struct {
	Logger *log.Logger
}

func New() Logger {
	return &BasicLogger{
		Logger: log.Default(),
	}
}

func (l *BasicLogger) Error(s Status, message string) {
	l.Logger.Printf("[ERROR] status: %d detail: %s", s, message)
}

func (l *BasicLogger) Debug(v ...interface{}) {
	l.Logger.Printf("[DEBUG]: %v", v...)
}
