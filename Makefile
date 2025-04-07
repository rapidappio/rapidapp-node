PROTO_SRC_DIR := proto
PROTO_FILES := $(wildcard $(PROTO_SRC_DIR)/**/**/*.proto)
PROTO_OUT_DIR := generated
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

proto-gen:
	@echo "Generating proto files"
	# Generate TypeScript files
	protoc -I=$(PROTO_SRC_DIR) \
	    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-ts=$(PROTOC_GEN_TS_PATH) \
		--grpc_out=grpc_js:$(PROTO_OUT_DIR) \
		--js_out=import_style=commonjs,binary:$(PROTO_OUT_DIR) \
		--ts_out="${PROTO_OUT_DIR}" \
		$(shell find $(PROTO_SRC_DIR) -name '*.proto')
	@echo "Finished generating proto files"