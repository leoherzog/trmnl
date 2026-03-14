# Background

The Background system creates the illusion of grayscale through carefully designed dither patterns. When rendered on 1-bit (black and white only) displays, these patterns create an illusion of different shades of gray by using specific arrangements of black and white pixels.

### Color Palette

The complete range of background shades available in the framework, from pure black to pure white.

black

bg--black

10

bg--gray-10

15

bg--gray-15

20

bg--gray-20

25

bg--gray-25

30

bg--gray-30

35

bg--gray-35

40

bg--gray-40

45

bg--gray-45

50

bg--gray-50

55

bg--gray-55

60

bg--gray-60

65

bg--gray-65

70

bg--gray-70

75

bg--gray-75

white

bg--white

**Dark Mode Notice:** The color palette appears inverted because TRMNL's dark mode inverts the entire screen, except the images.

### Usage

Use the `bg--{shade}` utility
 classes to apply these background patterns to any element. Choose from sixteen values: black, gray-10 through gray-75,
 and white.

black

10

15

20

25

30

35

40

45

50

55

60

65

70

75

white

Background shades

    <div class="bg--black">Black</div>
    <div class="bg--gray-10">Gray 10</div>
    <div class="bg--gray-15">Gray 15</div>
    <div class="bg--gray-20">Gray 20</div>
    <div class="bg--gray-25">Gray 25</div>
    <div class="bg--gray-30">Gray 30</div>
    <div class="bg--gray-35">Gray 35</div>
    <div class="bg--gray-40">Gray 40</div>
    <div class="bg--gray-45">Gray 45</div>
    <div class="bg--gray-50">Gray 50</div>
    <div class="bg--gray-55">Gray 55</div>
    <div class="bg--gray-60">Gray 60</div>
    <div class="bg--gray-65">Gray 65</div>
    <div class="bg--gray-70">Gray 70</div>
    <div class="bg--gray-75">Gray 75</div>
    <div class="bg--white">White</div>

### Backward Compatibility

For backward compatibility, the original shade names (`gray-1` through `gray-7`) are still supported but deprecated. These map to equivalent extended shades:

gray-1 (deprecated)

bg--gray-1

gray-2 (deprecated)

bg--gray-2

gray-3 (deprecated)

bg--gray-3

gray-4 (deprecated)

bg--gray-4

gray-5 (deprecated)

bg--gray-5

gray-6 (deprecated)

bg--gray-6

gray-7 (deprecated)

bg--gray-7

    <!-- Deprecated (but still works) -->
    <div class="bg--gray-1">Gray 1</div>
    <div class="bg--gray-2">Gray 2</div>

    <!-- Preferred (new naming) -->
    <div class="bg--gray-10">Gray 10</div>
    <div class="bg--gray-20">Gray 20</div>

Previous

[Visibility Control element visibility based on display bit depth](/framework/docs/visibility)

Next

[Border Apply border patterns that create the illusion of different border intensities](/framework/docs/border)
