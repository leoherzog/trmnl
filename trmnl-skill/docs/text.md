# Text

The Text Color system creates the illusion of grayscale text through carefully designed dither patterns. When rendered on 1-bit (black and white only) displays, these patterns create an illusion of different shades of gray by using specific arrangements of black and white pixels.

### Usage

Use the `text--{shade}` utility
 classes to apply these text color patterns to any element. Choose from sixteen values: black, gray-10 through gray-75,
 and white. See the [Responsive Features](#responsive-text) section for responsive variants.

Aa

black

Aa

gray-10

Aa

gray-15

Aa

gray-20

Aa

gray-25

Aa

gray-30

Aa

gray-35

Aa

gray-40

Aa

gray-45

Aa

gray-50

Aa

gray-55

Aa

gray-60

Aa

gray-65

Aa

gray-70

Aa

gray-75

Aa

white

Aa

black

Aa

gray-10

Aa

gray-15

Aa

gray-20

Aa

gray-25

Aa

gray-30

Aa

gray-35

Aa

gray-40

Aa

gray-45

Aa

gray-50

Aa

gray-55

Aa

gray-60

Aa

gray-65

Aa

gray-70

Aa

gray-75

Aa

white

Text color shades

**Dark Mode Notice:** The color palette appears inverted because TRMNL's dark mode inverts the entire screen, except the images.

    <div class="text--black">Black text</div>
    <div class="text--gray-10">Gray 10 text</div>
    <div class="text--gray-15">Gray 15 text</div>
    <div class="text--gray-20">Gray 20 text</div>
    <div class="text--gray-25">Gray 25 text</div>
    <div class="text--gray-30">Gray 30 text</div>
    <div class="text--gray-35">Gray 35 text</div>
    <div class="text--gray-40">Gray 40 text</div>
    <div class="text--gray-45">Gray 45 text</div>
    <div class="text--gray-50">Gray 50 text</div>
    <div class="text--gray-55">Gray 55 text</div>
    <div class="text--gray-60">Gray 60 text</div>
    <div class="text--gray-65">Gray 65 text</div>
    <div class="text--gray-70">Gray 70 text</div>
    <div class="text--gray-75">Gray 75 text</div>
    <div class="text--white">White text</div>

### Backward Compatibility

For backward compatibility, the original shade names (`gray-1` through `gray-7`) are still supported but deprecated. These map to equivalent extended shades:

    <!-- Deprecated (but still works) -->
    <div class="text--gray-1">Gray 1 text (deprecated)</div>
    <div class="text--gray-2">Gray 2 text (deprecated)</div>

    <!-- Preferred (new naming) -->
    <div class="text--gray-10">Gray 10 text (preferred)</div>
    <div class="text--gray-20">Gray 20 text (preferred)</div>

### Text Alignment

Control text alignment using the alignment utility classes. Options include left, center, right, and justify alignment.
 See the [Responsive Features](#responsive-text) section for breakpoint and orientation variants.

This text is left-aligned. This is the default alignment for most text content.

This text is center-aligned. Useful for headings and important content.

This text is right-aligned. Often used for numerical data or RTL languages.

This text is justified. Creates even text edges on both sides but affects readability. Useful for multi-column text layouts.

TextAlignment

    <p class="text--left">Left-aligned text</p>
    <p class="text--center">Center-aligned text</p>
    <p class="text--right">Right-aligned text</p>
    <p class="text--justify">Justified text</p>

### Responsive Features

Text utilities support responsive variants. Alignment classes (`text--left`, `text--center`, `text--right`, `text--justify`) support all three responsive systems: size-based, orientation-based, and bit-depth variants. Text color classes support size-based and orientation-based variants only.

#### Breakpoint Prefixes

Use breakpoint prefixes like `sm:`, `md:`, `lg:` to apply different alignment or colors at different screen widths.

Responsive alignment

Left by default, center on md+, right on lg+

Responsive color

Gray 50 by default, gray 30 on md+

TextResponsive

    <!-- Alignment: left by default, center on md+, right on lg+ -->
    <p class="description text--left md:text--center lg:text--right">Responsive alignment</p>

    <!-- Text color: different shades at different breakpoints -->
    <span class="value text--gray-50 md:text--gray-30">Responsive color</span>

    <!-- Progressive alignment scaling -->
    <p class="description text--left sm:text--center md:text--right lg:text--justify">Progressive alignment</p>

#### Orientation and Size+Orientation

Text alignment and colors can adapt to orientation with `portrait:` and `landscape:`, and can be combined
 with size breakpoints (e.g., `md:portrait:`).

Orientation variant

Left by default, center in portrait

TextOrientation

    <!-- Left by default, center in portrait -->
    <p class="description text--left portrait:text--center">Orientation variant</p>

    <!-- Combined size and orientation -->
    <p class="description text--left md:portrait:text--right">Left by default, right on md+ portrait</p>

#### Bit-Depth Responsive (Alignment Only)

Alignment classes support bit-depth prefixes like `1bit:`, `2bit:`, and `4bit:` to apply different alignment on different display color capabilities.

Bit-depth alignment

Center by default, right on 2-bit screens

TextBit-Depth Responsive

    <!-- Center by default, right on 2-bit screens -->
    <p class="description text--center 2bit:text--right">Bit-depth alignment</p>

    <!-- Combined: size + bit-depth -->
    <p class="description text--left lg:4bit:text--center">Left by default, center on lg+ 4-bit screens</p>

#### Combined Responsive Features

Combine size, orientation, and bit-depth modifiers for alignment. Use the pattern `size:orientation:bit-depth:utility` for highly targeted styling.

    <!-- Size + orientation + bit-depth (alignment only) -->
    <p class="description md:portrait:2bit:text--right">Right on md+ portrait 2-bit screens</p>

    <!-- Multiple responsive conditions -->
    <p class="description text--left sm:text--center lg:4bit:text--right">Progressive with bit-depth override</p>

Text color classes support size-based and orientation-based variants only. Bit-depth affects color rendering automatically based on the device (1-bit patterns, 2-bit patterns, 4-bit solid colors)—no bit-depth class prefixes are needed for colors.

Previous

[Outline Pixel-perfect rounded borders using border-image for 1-bit displays](/framework/docs/outline)

Next

[Image Optimize images using dithering techniques for 1-bit rendering](/framework/docs/image)
