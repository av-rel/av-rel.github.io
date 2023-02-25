# TPM - The Pixel Manager

## Description

TPM is a pixel renderer to be formatted and saved to image format or also be used for rendering images in Canvas like SDL or HTML Canvas (using Wasm)

## Perks
- Pure c
- No standard library
- Can be used by any std version of c
- Able to draw different geometrical shapes

## Example
```c
#include <src/tpm.c>
#include <deps/fs.c>	//for saving to file (dependency not part of lib)

#define WIDTH 900
#define HEIGHT 600

uint pixels[WIDTH * HEIGHT]; //pixels

int main(int argc, char** argv) {
    char* file = "./jpn_flag.png";

    Canvas canvas = tpm_canvas(pixels, WIDTH, HEIGHT); //initialize the canvas
    tpm_fill_canvas(&canvas, 0xFFFFFFFF); //fill the canvas with white color
    tpm_draw_circle(&canvas, canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) * 1/10, 0xFF000088);

    save_to_png(canvas, file); //save to file
    return 0;
}
```

![JAPAN](./assets/jpn_flag.png)

