NIMPATH		= nim
FLAGS		= -d:release

SASS		= sass
SASS_DIR	= style
SASS_OUT	= docs
SASS_FLAGS	= --no-source-map

.PHONY:
build:
	$(NIMPATH) $(FLAGS) -o:docs/main.js js src/main.nim
	$(NIMPATH) $(FLAGS) -o:docs/about/main.js js src/about/about.nim

sass:
	$(SASS) $(SASS_DIR):$(SASS_OUT) $(SASS_FLAGS)

all:
	make build
	make sass
