package config

import "log"

type Logger interface {
	Warn(string, ...interface{})
	Debug(string, ...interface{})
}

type BasicLogger struct {
	Logger *log.Logger
}

func (l *BasicLogger) Warn(s string, v ...interface{}) {
	l.Logger.Printf(s, v...)
}

func (l *BasicLogger) Debug(s string, v ...interface{}) {
	l.Logger.Printf(s, v...)
}
