// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: proto/client.proto

package grpc

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ClientsServiceClient is the client API for ClientsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ClientsServiceClient interface {
	FindOne(ctx context.Context, in *FindClientRequest, opts ...grpc.CallOption) (*FindClientResponse, error)
	FindByEmail(ctx context.Context, in *FindByEmailRequest, opts ...grpc.CallOption) (*FindClientResponse, error)
	Create(ctx context.Context, in *CreateClientInput, opts ...grpc.CallOption) (*CreateClientResponse, error)
	Update(ctx context.Context, in *UpdateClientInput, opts ...grpc.CallOption) (*CreateClientResponse, error)
}

type clientsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewClientsServiceClient(cc grpc.ClientConnInterface) ClientsServiceClient {
	return &clientsServiceClient{cc}
}

func (c *clientsServiceClient) FindOne(ctx context.Context, in *FindClientRequest, opts ...grpc.CallOption) (*FindClientResponse, error) {
	out := new(FindClientResponse)
	err := c.cc.Invoke(ctx, "/client.ClientsService/findOne", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clientsServiceClient) FindByEmail(ctx context.Context, in *FindByEmailRequest, opts ...grpc.CallOption) (*FindClientResponse, error) {
	out := new(FindClientResponse)
	err := c.cc.Invoke(ctx, "/client.ClientsService/findByEmail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clientsServiceClient) Create(ctx context.Context, in *CreateClientInput, opts ...grpc.CallOption) (*CreateClientResponse, error) {
	out := new(CreateClientResponse)
	err := c.cc.Invoke(ctx, "/client.ClientsService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clientsServiceClient) Update(ctx context.Context, in *UpdateClientInput, opts ...grpc.CallOption) (*CreateClientResponse, error) {
	out := new(CreateClientResponse)
	err := c.cc.Invoke(ctx, "/client.ClientsService/update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ClientsServiceServer is the server API for ClientsService service.
// All implementations must embed UnimplementedClientsServiceServer
// for forward compatibility
type ClientsServiceServer interface {
	FindOne(context.Context, *FindClientRequest) (*FindClientResponse, error)
	FindByEmail(context.Context, *FindByEmailRequest) (*FindClientResponse, error)
	Create(context.Context, *CreateClientInput) (*CreateClientResponse, error)
	Update(context.Context, *UpdateClientInput) (*CreateClientResponse, error)
	mustEmbedUnimplementedClientsServiceServer()
}

// UnimplementedClientsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedClientsServiceServer struct {
}

func (UnimplementedClientsServiceServer) FindOne(context.Context, *FindClientRequest) (*FindClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindOne not implemented")
}
func (UnimplementedClientsServiceServer) FindByEmail(context.Context, *FindByEmailRequest) (*FindClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindByEmail not implemented")
}
func (UnimplementedClientsServiceServer) Create(context.Context, *CreateClientInput) (*CreateClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedClientsServiceServer) Update(context.Context, *UpdateClientInput) (*CreateClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedClientsServiceServer) mustEmbedUnimplementedClientsServiceServer() {}

// UnsafeClientsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ClientsServiceServer will
// result in compilation errors.
type UnsafeClientsServiceServer interface {
	mustEmbedUnimplementedClientsServiceServer()
}

func RegisterClientsServiceServer(s grpc.ServiceRegistrar, srv ClientsServiceServer) {
	s.RegisterService(&ClientsService_ServiceDesc, srv)
}

func _ClientsService_FindOne_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClientsServiceServer).FindOne(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/client.ClientsService/findOne",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClientsServiceServer).FindOne(ctx, req.(*FindClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClientsService_FindByEmail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindByEmailRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClientsServiceServer).FindByEmail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/client.ClientsService/findByEmail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClientsServiceServer).FindByEmail(ctx, req.(*FindByEmailRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClientsService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateClientInput)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClientsServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/client.ClientsService/create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClientsServiceServer).Create(ctx, req.(*CreateClientInput))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClientsService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateClientInput)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClientsServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/client.ClientsService/update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClientsServiceServer).Update(ctx, req.(*UpdateClientInput))
	}
	return interceptor(ctx, in, info, handler)
}

// ClientsService_ServiceDesc is the grpc.ServiceDesc for ClientsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ClientsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "client.ClientsService",
	HandlerType: (*ClientsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "findOne",
			Handler:    _ClientsService_FindOne_Handler,
		},
		{
			MethodName: "findByEmail",
			Handler:    _ClientsService_FindByEmail_Handler,
		},
		{
			MethodName: "create",
			Handler:    _ClientsService_Create_Handler,
		},
		{
			MethodName: "update",
			Handler:    _ClientsService_Update_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/client.proto",
}
