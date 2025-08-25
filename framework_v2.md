# aspect_ratio

# Aspect Ratio

Beta

The Aspect Ratio utility uses the native CSS `aspect-ratio` property to maintain consistent proportions for elements. Perfect for images, videos, and containers that need to maintain specific width-to-height ratios across different screen sizes. 

[#](https://usetrmnl.com/framework_v2/aspect_ratio#common-aspect-ratios)

### Common Aspect Ratios

Use predefined aspect ratio classes to constrain element dimensions to specific proportions. These utilities apply the CSS `aspect-ratio` property directly to elements. 

[#](https://usetrmnl.com/framework_v2/aspect_ratio#auto-aspect-ratio)

#### Auto Aspect Ratio

Use `aspect--auto` to remove aspect ratio constraints and let content determine the dimensions naturally. 

Auto (no constraints)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Aspect Ratio Auto

Copy  Copied  Show more  Show less 
    
    
    <div class="aspect--auto">
      <!-- Content determines dimensions -->
    </div>

[#](https://usetrmnl.com/framework_v2/aspect_ratio#square-ratio)

#### Square Ratio

Use `aspect--1/1` for perfect squares. Ideal for profile pictures, thumbnails, and icon containers. 

1:1

1:1

1:1

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Aspect Ratio Square

Copy  Copied  Show more  Show less 
    
    
    <div class="aspect--1/1">
      <img src="profile.jpg" />
    </div>

[#](https://usetrmnl.com/framework_v2/aspect_ratio#landscape-ratios)

### Landscape Ratios

Common landscape aspect ratios for horizontal content like videos, hero images, and media players. 

4:3 (Standard)

3:2 (Classic)

16:9 (Widescreen)

21:9 (Ultra-wide)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Aspect Ratio Landscape

Copy  Copied  Show more  Show less 
    
    
    <!-- Standard TV/Monitor ratio -->
    <div class="aspect--4/3">
      <video src="video.mp4" />
    </div>
    
    <!-- Classic 35mm film -->
    <div class="aspect--3/2">
      <img src="photo.jpg" />
    </div>
    
    <!-- HD Video/Modern displays -->
    <div class="aspect--16/9">
      <iframe src="youtube.com/embed/..." />
    </div>
    
    <!-- Cinematic ultra-wide -->
    <div class="aspect--21/9">
      <video src="movie.mp4" />
    </div>

[#](https://usetrmnl.com/framework_v2/aspect_ratio#portrait-ratios)

### Portrait Ratios

Portrait aspect ratios for vertical content like mobile screens, story formats, and portrait photography. 

3:4

2:3

9:16

9:21

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Aspect Ratio Portrait

Copy  Copied  Show more  Show less 
    
    
    <!-- Vertical standard -->
    <div class="aspect--3/4">
      <img src="portrait.jpg" />
    </div>
    
    <!-- Vertical classic -->
    <div class="aspect--2/3">
      <img src="photo.jpg" />
    </div>
    
    <!-- Mobile/Story format -->
    <div class="aspect--9/16">
      <video src="story.mp4" />
    </div>
    
    <!-- Tall mobile format -->
    <div class="aspect--9/21">
      <img src="mobile-screenshot.png" />
    </div>

[#](https://usetrmnl.com/framework_v2/aspect_ratio#responsive-size-orientation-size-orientation)

### Responsive (Size, Orientation, Size + Orientation)

Aspect ratio utilities support size-based breakpoints, orientation variants, and their combination. This lets you adapt content proportions based on both screen size and orientation. 

Responsive Aspect

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Aspect Ratio Responsive

Copy  Copied  Show more  Show less 
    
    
    <!-- Size + orientation variants -->
    <div class="aspect--1/1 md:aspect--16/9 lg:aspect--21/9 portrait:aspect--3/4 md:portrait:aspect--2/3">
      <img src="responsive-image.jpg" />
    </div>
    
    <!-- Portrait on mobile, landscape on larger screens -->
    <div class="aspect--9/16 md:aspect--16/9 portrait:aspect--2/3">
      <video src="adaptive-video.mp4" />
    </div>

[#](https://usetrmnl.com/framework_v2/aspect_ratio#working-with-images)

### Working with Images

Aspect ratio utilities use the native CSS `aspect-ratio` property to constrain element dimensions. Apply these classes directly to images or containers as needed. 

![PBS Logo](https://usetrmnl.com/images/plugins/commercial_pbs--render.svg) Direct on image

![PBS Logo](https://usetrmnl.com/images/plugins/commercial_pbs--render.svg)

Container approach

![PBS Logo](https://usetrmnl.com/images/plugins/commercial_pbs--render.svg) Square aspect

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Aspect Ratio Image Usage

Copy  Copied  Show more  Show less 
    
    
    <!-- Apply directly to image -->
    <img src="image.jpg" class="aspect--16/9 w--full image--cover" />
    
    <!-- Use container for more control -->
    <div class="aspect--16/9 overflow-hidden">
      <img src="image.jpg" class="w--full h--full image--contain" />
    </div>
    
    <!-- Square aspect ratio -->
    <img src="image.jpg" class="aspect--1/1 w--full image--cover" />

[#](https://usetrmnl.com/framework_v2/aspect_ratio#available-aspect-ratios)

## Available Aspect Ratios

Complete reference of all available aspect ratio utilities. 

Class | Ratio | Common Use | Responsive  
---|---|---|---  
aspect--auto | No constraints | Natural dimensions |  âœ“ Yes   
aspect--1/1 | 1:1 | Square images, avatars |  âœ“ Yes   
aspect--4/3 | 4:3 | Standard TV, presentations |  âœ“ Yes   
aspect--3/2 | 3:2 | Classic 35mm photography |  âœ“ Yes   
aspect--16/9 | 16:9 | HD video, YouTube |  âœ“ Yes   
aspect--21/9 | 21:9 | Cinematic, ultra-wide displays |  âœ“ Yes   
aspect--3/4 | 3:4 | Portrait standard |  âœ“ Yes   
aspect--2/3 | 2:3 | Portrait photography |  âœ“ Yes   
aspect--9/16 | 9:16 | Mobile screens, Stories |  âœ“ Yes   
aspect--9/21 | 9:21 | Tall mobile format |  âœ“ Yes   
  
[ Scale Scale interface to affect content density and readability Previous  ](/framework_v2/scale)

[ Overflow Handle column items overflow Next  ](/framework_v2/overflow)

[ Framework Index  ](/framework_v2)

---

# background

# Background

The Background system creates the illusion of grayscale through carefully designed dither patterns. When rendered on 1-bit (black and white only) displays, these patterns create an illusion of different shades of gray by using specific arrangements of black and white pixels. 

[#](https://usetrmnl.com/framework_v2/background#color-palette)

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

[#](https://usetrmnl.com/framework_v2/background#usage)

### Usage

Use the `bg--{shade}` utility classes to apply these background patterns to any element. Choose from sixteen values: black, gray-10 through gray-75, and white. 

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

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Background shades

Copy  Copied  Show more  Show less 
    
    
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

[#](https://usetrmnl.com/framework_v2/background#backward-compatibility)

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

Copy  Copied  Show more  Show less 
    
    
    <!-- Deprecated (but still works) -->
    <div class="bg--gray-1">Gray 1</div>
    <div class="bg--gray-2">Gray 2</div>
    
    <!-- Preferred (new naming) -->
    <div class="bg--gray-10">Gray 10</div>
    <div class="bg--gray-20">Gray 20</div>

[ Grid Create grid layouts with predefined column structures Previous  ](/framework_v2/grid)

[ Border Apply border patterns that create the illusion of different border intensities Next  ](/framework_v2/border)

[ Framework Index  ](/framework_v2)

---

# border

# Border

The Border system creates the illusion of grayscale borders through carefully designed dither patterns. When rendered on 1-bit displays, these patterns create varying border intensities using alternating black and white pixels. 

[#](https://usetrmnl.com/framework_v2/border#usage)

### Usage

Apply borders using `border--h-{n}` for horizontal borders and `border--v-{n}` for vertical borders, where n ranges from 1 (black) to 7 (white), with dithered values in between. 

[#](https://usetrmnl.com/framework_v2/border#horizontal-borders)

#### Horizontal Borders

1

2

3

4

5

6

7

1

2

3

4

5

6

7

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Horizontal Borders

**Dark Mode Notice:** The color palette appears inverted because TRMNL's dark mode inverts the entire screen, except the images. 

Copy  Copied  Show more  Show less 
    
    
    <div class="border--h-1">Horizontal Border 1</div>
    <div class="border--h-2">Horizontal Border 2</div>
    <div class="border--h-3">Horizontal Border 3</div>
    <div class="border--h-4">Horizontal Border 4</div>
    <div class="border--h-5">Horizontal Border 5</div>
    <div class="border--h-6">Horizontal Border 6</div>
    <div class="border--h-7">Horizontal Border 7</div>

[#](https://usetrmnl.com/framework_v2/border#vertical-borders)

#### Vertical Borders

1

2

3

4

5

6

7

1

2

3

4

5

6

7

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Vertical Borders

Copy  Copied  Show more  Show less 
    
    
    <div class="border--v-1">Vertical Border 1</div>
    <div class="border--v-2">Vertical Border 2</div>
    <div class="border--v-3">Vertical Border 3</div>
    <div class="border--v-4">Vertical Border 4</div>
    <div class="border--v-5">Vertical Border 5</div>
    <div class="border--v-6">Vertical Border 6</div>
    <div class="border--v-7">Vertical Border 7</div>

[#](https://usetrmnl.com/framework_v2/border#backward-compatibility)

### Backward Compatibility

The Border utility in Framework v2 is **not backward compatible** with the legacy v1 Border utility. This is the only non-backward compatible utility in the new framework. 

[#](https://usetrmnl.com/framework_v2/border#what-changed)

#### What changed?

  * The visual scale has been redefined to a full-spectrum grayscale that works on _any_ background shade: `1` = black â€¦ `7` = white. 
  * In v1, borders only produced a faux grayscale on white surfaces and appeared solid black (invisible) on black surfaces. In v2, borders render consistently on both light and dark backgrounds. 
  * Class names remain the same (`border--h-{n}`, `border--v-{n}`), but the visual output for a given `{n}` looks different. 



[#](https://usetrmnl.com/framework_v2/border#how-to-upgrade-existing-plugins)

#### How to upgrade existing plugins

  * Keep your markup unchanged. Continue using `border--h-{n}` and `border--v-{n}`. 
  * Re-evaluate the chosen `{n}` values based on the new scale. 



[ Background Grayscale dithered patterns optimized for 1-bit rendering Previous  ](/framework_v2/background)

[ Rounded Control element rounding with predefined values Next  ](/framework_v2/rounded)

[ Framework Index  ](/framework_v2)

---

# chart

# Chart

With careful, minimal styling choices, TRMNL can display a variety of numerical or time centric content as charts and graphs. 

[#](https://usetrmnl.com/framework_v2/chart#usage)

### Usage

Any CDN-enabled JavaScript library may be used to develop charting interfaces, however the examples below leverage [Highcharts](https://highcharts.com) and [Chartkick](https://chartkick.com). 

Take care to disable animation effects, otherwise your chart may be only partially captured by TRMNL's screenshot rendering service. 

[#](https://usetrmnl.com/framework_v2/chart#line-chart)

#### Line Chart

Line charts effectively display trends over time. This example shows a simple line chart with customized styling to match the TRMNL aesthetic. 

25,388 Pageviews

4,771 Visitors

2.23 Mins on Page

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Charts Line Chart

Copy  Copied  Show more  Show less 
    
    
    <!-- import Highcharts + Chartkick libraries -->
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/highcharts.js"></script>
    <script src="https://usetrmnl.com/js/chartkick/5.0.1/chartkick.min.js"></script>
    
    <!-- markup with empty, ID'd element for chart injection -->
    <div class="view view--full">
      <div class="layout layout--col gap--space-between">
        <div class="grid grid--cols-3">
          <div class="item">
            <div class="meta"></div>
            <div class="content">
              <span class="value value--tnums">25,388</span>
              <span class="label">Pageviews</span>
            </div>
          </div>
          <div class="item">
            <div class="meta"></div>
            <div class="content">
              <span class="value value--tnums">4,771</span>
              <span class="label">Visitors</span>
            </div>
          </div>
          <div class="item">
            <div class="meta"></div>
            <div class="content">
              <span class="value value--tnums">2.23</span>
              <span class="label">Mins on Page</span>
            </div>
          </div>
        </div>
    
        <div id="chart-123" style="width: 100%"></div>
      </div>
    
      <div class="title_bar">
        <img class="image" src="https://usetrmnl.com/images/plugins/simple-analytics--render.svg" />
        <span class="title">Simple Analytics</span>
        <span class="instance">usetrmnl.com</span>
      </div>
    </div>
    
    <script type="text/javascript">
      var data = [["2024-06-09", 975],["2024-06-10", 840],["2024-06-11", 1004],["2024-06-12", 1308],["2024-06-13", 753],["2024-06-14", 600],["2024-06-15", 710],
                  ["2024-06-16", 489],["2024-06-17", 510],["2024-06-18", 590],["2024-06-19", 610],["2024-06-20", 671],["2024-06-21", 512],["2024-06-22", 550],
                  ["2024-06-23", 421],["2024-06-24", 315],["2024-06-25", 604],["2024-06-26", 672],["2024-06-27", 601],["2024-06-28", 705],["2024-06-29", 800],
                  ["2024-06-30", 912],["2024-07-01", 1503],["2024-07-02", 1273],["2024-07-03", 1250],["2024-07-04", 1198],["2024-07-05", 1005],["2024-07-06", 1300],
                  ["2024-07-07", 1103],["2024-07-08", 1004],["2024-07-09", 600]];
    
      // recommended configs to achieve the TRMNL Framework aesthetic
      var createChart = function() {
        new Chartkick["LineChart"](
        "chart-123",
        data,
        {
          adapter: "highcharts", // chartjs, google, etc available
          prefix: "",
          thousands: ",",
          points: false,
          colors: ["black"],
          curve: true,
          library: {
            chart: {
              height: 260
            },
            plotOptions: {
              series: {
                animation: false,
                lineWidth: 4
              }
            },
            yAxis: {
              labels: {
                style: {
                  fontSize: "16px",
                  color:"#000000"
                }
              },
              gridLineDashStyle: "shortdot",
              gridLineWidth: 1,
              gridLineColor: "#000000",
              tickAmount: 5
            },
            xAxis: {
              type: "daytime",
              labels: {
                style: {
                  fontSize: "16px",
                  color: "#000000"
                }
              },
              lineWidth: 0,
              gridLineDashStyle: "dot",
              tickWidth: 1,
              tickLength: 0,
              gridLineWidth: 1,
              gridLineColor: "#000000",
              tickPixelInterval: 120
            }
          }
        });
      };
    
      // ensure your chart loads before plugin render is generated
      if ("Chartkick" in window) {
        createChart();
      } else {
        window.addEventListener("chartkick:load", createChart, true);
      }
    </script>

[#](https://usetrmnl.com/framework_v2/chart#multi-series-line-chart)

#### Multi-Series Line Chart

For comparing data across multiple time periods or categories, multi-series line charts are ideal. This example demonstrates a comparison between current and previous period data with distinct styling for each series. 

$85,240 Total Sales

32 Pending Orders

Jul 01 - Jul 15  Current

$128 AOV

665 Fulfilled Orders

Jun 15 - Jun 30  Previous

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Charts Multi-Series Line Chart

Copy  Copied  Show more  Show less 
    
    
    <!-- import required libraries -->
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/highcharts.js"></script>
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/highcharts-more.js"></script>
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/pattern-fill.js"></script>
    
    <div class="view view--full">
      <div class="layout layout--col gap--space-between">
        <!-- Optional data metrics displayed above chart -->
        <div class="grid">
          <div class="row">
            <div class="grid">
              <div class="item col--span-2">
                <div class="meta"></div>
                <div class="content">
                  <span class="value value--large value--tnums">$85,240</span>
                  <span class="label">Total Sales</span>
                </div>
              </div>
    
              <div class="item col--span-1">
                <div class="meta"></div>
                <div class="content">
                  <span class="value value--small value--tnums">32</span>
                  <span class="label">Pending Orders</span>
                </div>
              </div>
    
              <div class="item col--span-1">
                <div class="meta"></div>
                <div class="content">
                  <span class="value value--xsmall value--tnums">
                    <div class="w--14 h--1.5 mb--2 bg--black" style="border-radius: 20px;"></div>
                    Jul 01 - Jul 15
                  </span>
                  <span class="label">Current</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div class="border--h-5 w--full"></div>
    
        <!-- More metrics if needed -->
        <div class="grid">
          <div class="row">
            <div class="grid">
              <div class="item col--span-2">
                <div class="meta"></div>
                <div class="content">
                  <span class="value value--tnums">$128</span>
                  <span class="label">AOV</span>
                </div>
              </div>
    
              <div class="item col--span-1">
                <div class="meta"></div>
                <div class="content">
                  <span class="value value--small value--tnums">665</span>
                  <span class="label">Fulfilled Orders</span>
                </div>
              </div>
    
              <div class="item col--span-1">
                <div class="meta"></div>
                <div class="content">
                  <span class="value value--xsmall value--tnums">
                    <div class="w--14 h--1.5 mb--2 bg--gray-5"></div>
                    Jun 15 - Jun 30
                  </span>
                  <span class="label">Previous</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Chart container with unique ID -->
        <div id="multi-series-chart" class="w--full"></div>
    
        <script type="text/javascript">
          // Using same date range for both series to ensure proper overlap
          var currentPeriod = [
            ["2024-07-01", 3500], ["2024-07-02", 4200], ["2024-07-03", 3800],
            ["2024-07-04", 5100], ["2024-07-05", 4800], ["2024-07-06", 3600],
            ["2024-07-07", 2900], ["2024-07-08", 4300], ["2024-07-09", 5200],
            ["2024-07-10", 6100], ["2024-07-11", 5700], ["2024-07-12", 4900],
            ["2024-07-13", 5300], ["2024-07-14", 5800], ["2024-07-15", 6500]
          ];
    
          // Using same date range but different values for comparison
          var previousPeriod = [
            ["2024-07-01", 2800], ["2024-07-02", 3100], ["2024-07-03", 3400],
            ["2024-07-04", 3900], ["2024-07-05", 4500], ["2024-07-06", 4100],
            ["2024-07-07", 3700], ["2024-07-08", 3300], ["2024-07-09", 4200],
            ["2024-07-10", 4800], ["2024-07-11", 5100], ["2024-07-12", 4700],
            ["2024-07-13", 5400], ["2024-07-14", 5800], ["2024-07-15", 5600]
          ];
    
          var formattedData = [
            { name: "Current", data: currentPeriod },
            { name: "Previous", data: previousPeriod }
          ];
    
          // Initialize chart with multiple series
          Highcharts.chart("multi-series-chart", {
            chart: {
              type: "spline",
              height: 203,
              width: null,
              animation: false,
              spacing: [10, 10, 5, 10]
            },
            title: {
              text: null
            },
            plotOptions: {
              series: {
                animation: false,
                enableMouseTracking: false,
                states: {
                  hover: { enabled: false }
                },
                marker: {
                  enabled: false
                }
              }
            },
            // Define series with different styles
            series: [{
              data: formattedData[0].data,
              lineWidth: 4,
              color: "#000000",
              name: formattedData[0].name,
              zIndex: 2  // Higher zIndex brings this series to front
            }, {
              data: formattedData[1].data,
              lineWidth: 5,
              name: formattedData[1].name,
              zIndex: 1,
              // Pattern fill for second series
              color: {
                pattern: {
                  image: "https://usetrmnl.com/images/grayscale/gray-5.png",
                  width: 12,
                  height: 12
                }
              }
            }],
            tooltip: { enabled: false },
            legend: { enabled: false },
            yAxis: {
              labels: {
                style: { fontSize: "16px", color: "#000000" }
              },
              gridLineDashStyle: "shortdot",
              gridLineWidth: 1,
              gridLineColor: "#000000",
              tickAmount: 5,
              title: {
                text: null
              }
            },
            xAxis: {
              type: "datetime",
              labels: {
                style: { fontSize: "16px", color: "#000000" },
                padding: 5,
                y: 25
              },
              lineWidth: 0,
              gridLineDashStyle: "dot",
              tickWidth: 1,
              tickLength: 0,
              gridLineWidth: 1,
              gridLineColor: "#000000",
              tickPixelInterval: 120,
              title: {
                text: null
              }
            },
            credits: {
              enabled: false
            }
          });
        </script>
      </div>
    
      <div class="title_bar">
        <img class="image" src="https://usetrmnl.com/images/plugins/trmnl--render.svg" />
        <span class="title">Charts</span>
        <span class="instance">Multi-Series Line Chart</span>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/chart#bar-chart)

#### Bar Chart

Bar charts are ideal for comparing discrete categories side by side. This example displays four different metrics across multiple time periods. 

$31,883 Revenue

$22,910 Expenses

$8,990 Marketing

$14,930 Operations

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Charts Bar Chart

Copy  Copied  Show more  Show less 
    
    
    <!-- import Highcharts library -->
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/highcharts.js"></script>
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/pattern-fill.js"></script>
    
    <div class="view view--full">
      <div class="layout layout--col gap--space-between">
        <!-- Business metrics displayed above chart -->
        <div class="grid grid--cols-4">
          <div class="item">
            <div class="meta"></div>
            <div class="content">
              <div class="w--14 h--1.5 mb--2 bg--black" style="border-radius: 20px;"></div>
              <span class="value value--tnums">$31,883</span>
              <span class="label">Revenue</span>
            </div>
          </div>
          <div class="item">
            <div class="meta"></div>
            <div class="content">
              <div class="w--14 h--1.5 mb--2 bg--gray-3"></div>
              <span class="value value--tnums">$22,910</span>
              <span class="label">Expenses</span>
            </div>
          </div>
          <div class="item">
            <div class="meta"></div>
            <div class="content">
              <div class="w--14 h--1.5 mb--2 bg--gray-5"></div>
              <span class="value value--tnums">$8,990</span>
              <span class="label">Marketing</span>
            </div>
          </div>
          <div class="item">
            <div class="meta"></div>
            <div class="content">
              <div class="w--14 h--1.5 mb--2 bg--gray-7"></div>
              <span class="value value--tnums">$14,930</span>
              <span class="label">Operations</span>
            </div>
          </div>
        </div>
    
        <div class="border--h-5 w--full"></div>
    
        <!-- Chart container with unique ID -->
        <div id="example-bar-chart" class="w--full"></div>
    
        <script type="text/javascript">
          // Simplified regional data across four quarters
          var revenueData = [
            ["Jan", 5883],
            ["Feb", 5260],
            ["Mar", 4760],
            ["Apr", 5120],
            ["May", 5540],
            ["Jun", 6320]
          ];
    
          var expensesData = [
            ["Jan", 3580],
            ["Feb", 3210],
            ["Mar", 3620],
            ["Apr", 3950],
            ["May", 4120],
            ["Jun", 4430]
          ];
    
          var marketingData = [
            ["Jan", 1120],
            ["Feb", 980],
            ["Mar", 1320],
            ["Apr", 1650],
            ["May", 1820],
            ["Jun", 2100]
          ];
    
          var operationsData = [
            ["Jan", 2240],
            ["Feb", 2170],
            ["Mar", 2380],
            ["Apr", 2520],
            ["May", 2730],
            ["Jun", 2890]
          ];
    
          var formattedBarData = [
            { name: "Revenue", data: revenueData },
            { name: "Expenses", data: expensesData },
            { name: "Marketing", data: marketingData },
            { name: "Operations", data: operationsData }
          ];
    
          // Initialize chart with bar/column configuration for 4 series
          Highcharts.chart("example-bar-chart", {
            chart: {
              type: "column",
              height: 284,
              width: null,
              animation: false,
              spacing: [10, 10, 5, 10]
            },
            title: {
              text: null
            },
            plotOptions: {
              series: {
                animation: false,
                enableMouseTracking: false,
                states: {
                  hover: { enabled: false }
                },
                pointPadding: 0.05,  // Reduced padding for more bars
                groupPadding: 0.1,
                borderWidth: 0
              }
            },
            // Define all four series with different styles
            series: [{
              data: formattedBarData[0].data,
              color: "#000000",
              name: formattedBarData[0].name,
              zIndex: 4  // Highest zIndex to keep this in front
            }, {
              data: formattedBarData[1].data,
              name: formattedBarData[1].name,
              zIndex: 3,
              color: {
                pattern: {
                  image: "https://usetrmnl.com/images/grayscale/gray-3.png",
                  width: 12,
                  height: 12
                }
              }
            }, {
              data: formattedBarData[2].data,
              name: formattedBarData[2].name,
              zIndex: 2,
              color: {
                pattern: {
                  image: "https://usetrmnl.com/images/grayscale/gray-5.png",
                  width: 12,
                  height: 12
                }
              }
            }, {
              data: formattedBarData[3].data,
              name: formattedBarData[3].name,
              zIndex: 1,
              color: {
                pattern: {
                  image: "https://usetrmnl.com/images/grayscale/gray-7.png",
                  width: 12,
                  height: 12
                }
              }
            }],
            tooltip: { enabled: false },
            legend: { enabled: false },
            yAxis: {
              labels: {
                style: { fontSize: "16px", color: "#000000" }
              },
              gridLineDashStyle: "shortdot",
              gridLineWidth: 1,
              gridLineColor: "#000000",
              tickAmount: 5,
              title: {
                text: null
              }
            },
            xAxis: {
              type: "category",
              labels: {
                style: { fontSize: "16px", color: "#000000" },
                padding: 5,
                y: 25
              },
              lineWidth: 0,
              gridLineDashStyle: "dot",
              tickWidth: 0,
              tickLength: 0,
              gridLineWidth: 1,
              gridLineColor: "#000000",
              title: {
                text: null
              }
            },
            credits: {
              enabled: false
            }
          });
        </script>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/chart#gauge-chart)

#### Gauge Chart

Gauge charts can effectively display single metrics or scores. This example shows multiple gauges in a row with a main summary gauge, perfect for displaying daily and weekly metrics like sleep quality scores. 

Monday

Tuesday

Wednesday

Thursday

Friday

Saturday

Sunday

18% REM Sleep

23% Deep Sleep

12m Time to Sleep

7h 32min Sleep Duration

8 Toss & Turns

0.5% Snoring

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Charts Gauge Chart

Copy  Copied  Show more  Show less 
    
    
    <!-- import Highcharts libraries -->
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/highcharts.js"></script>
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/highcharts-more.js"></script>
    <script src="https://usetrmnl.com/js/highcharts/12.3.0/pattern-fill.js"></script>
    
    <div class="view view--full">
      <div class="layout layout--col gap--none">
        <div class="grid grid--cols-7 mb--5">
          <div class="h--32">
            <div id="day_0" class="h--24"></div>
            <span class="description text--center">Monday</span>
          </div>
          <div class="h--32">
            <div id="day_1" class="h--24"></div>
            <span class="description text--center">Tuesday</span>
          </div>
          <div class="h--32">
            <div id="day_2" class="h--24"></div>
            <span class="description text--center">Wednesday</span>
          </div>
          <div class="h--32">
            <div id="day_3" class="h--24"></div>
            <span class="description text--center">Thursday</span>
          </div>
          <div class="h--32">
            <div id="day_4" class="h--24"></div>
            <span class="description text--center">Friday</span>
          </div>
          <div class="h--32">
            <div id="day_5" class="h--24"></div>
            <span class="description text--center">Saturday</span>
          </div>
          <div class="h--32">
            <div id="day_6" class="h--24"></div>
            <span class="description text--center">Sunday</span>
          </div>
        </div>
    
        <div class="w-full b-h-gray-5"></div>
    
        <div class="grid">
          <div class="col--span-1 col--center">
            <div id="day_all" class="w-[340px] mt--5"></div>
          </div>
          <div class="col--span-1 gap--large">
            <div class="flex flex--col gap--medium w--full flex--center">
              <div class="grid grid--cols-2">
                <div class="item">
                <div class="meta"></div>
                <div class="content">
                    <span class="value value--tnums">18%</span>
                    <span class="label">REM Sleep</span>
                </div>
              </div>
                <div class="item">
                  <div class="meta"></div>
                  <div class="content">
                    <span class="value value--tnums">23%</span>
                    <span class="label">Deep Sleep</span>
            </div>
          </div>
        </div>
              <div class="b-h-gray-5 w-full"></div>
              <div class="grid grid--cols-2">
                <div class="item">
                  <div class="meta"></div>
                  <div class="content">
                    <span class="value value--small value--tnums">12m</span>
                    <span class="label">Time to Sleep</span>
      </div>
              </div>
                <div class="item">
                  <div class="meta"></div>
                  <div class="content">
                    <span class="value value--small value--tnums">7h 32min</span>
                    <span class="label">Sleep Duration</span>
            </div>
              </div>
              </div>
              <div class="b-h-gray-5 w-full"></div>
              <div class="grid grid--cols-2">
                <div class="item">
                                <div class="meta"></div>
                                <div class="content">
                    <span class="value value--small value--tnums">8</span>
                    <span class="label">Toss & Turns</span>
                                </div>
                              </div>
                <div class="item">
                  <div class="meta"></div>
                  <div class="content">
                    <span class="value value--small value--tnums">0.5%</span>
                    <span class="label">Snoring</span>
                                </div>
                                </div>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
    
                        <script type="text/javascript">
      var dailyScores = [92, 95, 81, 56, 81, 72, 85];
      var weeklyScore = 82;
    
      function createGauge(score, day, opts) {
        opts ||= {
          title: null,
          height: "80%",
          labels: {
            distance: 15,
            style: {
              fontSize: "16px"
            }
          },
          series: {
            fontSize: "3em"
          },
          yAxis: {
            title: textRating(score)
          }
        };
    
        Highcharts.chart(`day_${day}`, {
                            chart: {
            type: "gauge",
            height: opts.height,
            animation: false
          },
    
                            title: {
            text: opts.title
          },
    
          pane: {
            startAngle: -150,
            endAngle: 150,
            background: {
              backgroundColor: "transparent",
              borderWidth: 0
            }
          },
    
                            plotOptions: {
            gauge: {
                                animation: false,
              pivot: {
                backgroundColor: "transparent"
              },
              dial: {
                backgroundColor: "transparent",
                baseWidth: 0,
              },
            }
          },
    
          yAxis: {
            min: 0,
            max: 100,
            minorTickInterval: 0,
            tickColor: "#ffffff",
            tickLength: 40,
            tickPixelInterval: 40,
            tickWidth: 0,
            lineWidth: 0,
            title: {
              text: opts.yAxis.title,
              style: {
                color: "#000000",
                fontFamily: "NicoPups",
                fontSize: "16px"
              }
            },
            labels: {
              ...opts.labels,
              style: {
                fontSize: "16px"
              }
            },
            plotBands: [{
              from: 1,
              to: score,
                              color: {
                                pattern: {
                  image: "https://usetrmnl.com/images/grayscale/gray-2.png",
                                  width: 12,
                                  height: 12
                                }
              },
              innerRadius: "82%",
              borderRadius: "50%"
                            }, {
              from: score + 1,
              to: 100,
                              color: {
                                pattern: {
                  image: "https://usetrmnl.com/images/grayscale/gray-5.png",
                                  width: 12,
                                  height: 12
                }
              },
              innerRadius: "82%",
              borderRadius: "50%",
            }]
          },
    
          series: [{
            name: "Score",
            data: [score],
            dataLabels: {
              borderWidth: 0,
              style: {
                fontSize: opts.series.fontSize,
                fontWeight: opts.series.fontWeight || "400",
                fontFamily: opts.series.fontFamily || "inherit"
                                }
                              }
                            }],
    
          credits: {
            enabled: false
          }
        });
      }
    
      function textRating(score) {
        if (score <= 50) {
          return "Low";
        } else if (score <= 65) {
          return "Pay Attention";
        } else if (score < 80) {
          return "Fair";
        } else {
          return "Good";
        }
      }
    
      // Create small daily gauges
      dailyScores.forEach((score, idx) => {
        let opts = {
          title: null,
          labels: { enabled: false },
          series: {
            fontSize: "16px",
            fontWeight: "400",
            fontFamily: "NicoClean"
          },
                            yAxis: {
            title: null
          }
        }
        createGauge(score, idx, opts);
      });
    
      // Create main weekly gauge
      createGauge(weeklyScore, "all", {
        title: null,
        height: "80%",
                              labels: {
          distance: 15
        },
        series: {
          fontSize: "3em",
          fontWeight: "550"
        },
        yAxis: {
          title: textRating(weeklyScore)
        }
      });
    </script>

[ Table Create data tables optimized for 1-bit rendering Previous  ](/framework_v2/table)

[ Progress Display progress bars in different styles Next  ](/framework_v2/progress)

[ Framework Index  ](/framework_v2)

---

# clamp

# Clamp

The Clamp engine truncates text to a specified number of lines using word-based ellipsis. It preserves the original text, measures available width, and re-applies clamping whenever layouts change. Inside `.columns`, clamping is handled automatically per column width by the Overflow engine; outside, use `data-clamp` directly. 

[#](https://usetrmnl.com/framework_v2/clamp#standalone-clamp)

### Standalone Clamp

Apply `data-clamp` to any text element. The engine stores the original text in `data-clamp-original` and clamps to the requested line count. 

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Clamp Standalone: Descriptions 1â€“4 lines

Copy  Copied  Show more  Show less 
    
    
    <div class="item">
      <div class="meta"></div>
      <div class="content">
        <span class="title title--small">Example Title</span>
        <span class="description" data-clamp="2">Example description text that will be truncated to two linesâ€¦</span>
        <div class="flex gap--small">
          <span class="label label--small label--underline">9:00 AM - 10:00 AM</span>
          <span class="label label--small label--underline">Confirmed</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/clamp#clamp-within-overflow-columns)

### Clamp Within Overflow Columns

When used inside `.columns`, the Overflow engine re-clamps the same content for each column width. You can clamp titles, descriptions, or both. 

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Clamp Titles clamped to 1 â€¢ Max 2 Columns

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="2">
      <div class="column">
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small" data-clamp="1">A fairly long title that will be clamped to a single line</span>
            <span class="description">Supporting description textâ€¦</span>
            <div class="flex gap--small">
              <span class="label label--small label--underline">2:00 PM - 3:30 PM</span>
              <span class="label label--small label--underline">Tentative</span>
            </div>
          </div>
        </div>
      </div>
    </div>

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Clamp Descriptions clamped to 2 â€¢ Max 3 Columns

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="3">
      <div class="column">
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small">Item Title</span>
            <span class="description" data-clamp="2">A longer description that will be clamped to two lines inside a column.</span>
            <div class="flex gap--small">
              <span class="label label--small label--underline">9:30 AM - 11:30 AM</span>
              <span class="label label--small label--underline">Required</span>
            </div>
          </div>
        </div>
      </div>
    </div>

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Clamp Title 1 â€¢ Description 3 â€¢ Max 2 Columns

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="2">
      <div class="column">
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small" data-clamp="1">Title textâ€¦</span>
            <span class="description" data-clamp="3">Description textâ€¦</span>
            <div class="flex gap--small">
              <span class="label label--small label--underline">11:00 PM - 12:00 AM</span>
              <span class="label label--small label--underline">Maintenance</span>
            </div>
          </div>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/clamp#notes)

#### Notes

  * Class-based `clamp--N` remains for backward compatibility; prefer `data-clamp`.
  * Responsive variants (size/orientation) are supported via attributes, but inside `.columns` the engine determines the final clamp based on measured width.



[#](https://usetrmnl.com/framework_v2/clamp#backward-compatibility)

### Backward Compatibility

Legacy class tokens are supported and mapped to the Clamp engine automatically: `clamp--none` disables clamping, and `clamp--1` through `clamp--50` request N lines. Responsive legacy class tokens (e.g., `md:clamp--N`) are not supported. Use responsive data attributes instead if needed. 

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Clamp (Legacy) Descriptions: clamp--1, clamp--2, clamp--3, clamp--none

Copy  Copied  Show more  Show less 
    
    
    <div class="item">
      <div class="meta"></div>
      <div class="content">
        <span class="title title--small">Example Title</span>
        <span class="description clamp--2">Example description with legacy class clamped to two lines of text.</span>
      </div>
    </div>

[ Table Overflow Handle table rows overflow Previous  ](/framework_v2/table_overflow)

[ Format Value Format numbers and values with consistent styling Next  ](/framework_v2/format_value)

[ Framework Index  ](/framework_v2)

---

# columns

# Columns

The Columns system provides a simple way to create balanced column layouts that look great on the device. For more complex layouts, check out our [Grid system](/framework_v2/grid). You can use both systems together - the Columns system for your overall layout, and the Grid system within columns when you need more layout control - or use either system independently. 

[#](https://usetrmnl.com/framework_v2/columns#basic-column-layout)

### Basic Column Layout

The basic column layout is flexible - you can add as many columns as needed depending on your content needs. 

Column 1

Item

Item

Item

Item

Column 2

Item

Item

Column 3

Item

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Columns

Copy  Copied  Show more  Show less 
    
    
    <div class="columns">
      <div class="column">
        {{ Content for column 1 }}
      </div>
      <div class="column">
        {{ Content for column 2 }}
      </div>
      <div class="column">
        {{ Content for column 3 }}
      </div>
    </div>

[ Title Bar Standardized title bar with plugin information and instance details Previous  ](/framework_v2/title_bar)

[ Mashup Assemble multiple plugin views into a single interface Next  ](/framework_v2/mashup)

[ Framework Index  ](/framework_v2)

---

# content_limiter

# Content Limiter

The Content Limiter system automatically restricts the height of content areas based on the view type. When content exceeds the height threshold, it applies smaller typography and automatically truncates overflowing text using the Clamp Engine to fit the available space. It should be used together with the Content component for proper formatting. 

[#](https://usetrmnl.com/framework_v2/content_limiter#basic-usage)

### Basic Usage

To enable automatic content limiting, add the `data-content-limiter="true"` attribute to your content element. 

Dinner Party

Michael finally manages to trick Jim and Pam into coming over to his condo for a couplesâ€™ dinner with him and Jan. He has been begging them for ages, and they finally run out of excuses.

The first thing Michael shows off is his pride and joy: a plasma TV mounted on the living room wall. The problem is that it is laughably tiny, barely larger than a computer monitor. Michael beams with pride as he demonstrates how it can â€œpush right back against the wallâ€� to save space, while Jim and Pam exchange polite smiles that barely conceal their disbelief.

Things take a sharper turn when Jan puts on a CD. The music is recorded by her former assistant, Hunter, and the lyrics make it sound like the two of them were more than just colleagues. Jan sways to the music with a dreamy smile, while Michael tries to ignore the implication. Jim and Pam sit frozen, realizing they have front-row seats to a relationship meltdown.

Dinner itself is no relief. Janâ€™s cooking is nowhere near ready, so the group is stuck nibbling on appetizers for what feels like hours. When the food does arrive, Jan scolds Michael for trying to eat early, and their bickering turns openly hostile. Andy and Angela, the other guests, sit uncomfortably as the couple jabs at each other across the table. Every sarcastic comment cuts deeper, and the laughter that should fill a dinner party never comes.

Michael, in a desperate attempt to lighten the mood, suggests games. They try charades, but even that devolves into more fighting. Jan mocks Michaelâ€™s answers, Michael whines back, and suddenly it feels less like a game and more like another round of public humiliation. The tiny condo seems to shrink with every cutting remark.

It all finally explodes when Jan accuses Michael of being childish and Michael lashes out in return. In her fury, Jan grabs one of his beloved Dundie trophies and hurls it at the plasma TV, shattering it. For Michael, this little TV was his greatest treasure, and now it lies in pieces on the floor. The room falls into stunned silence as everyone realizes the night has gone completely off the rails.

The guests slowly make their exit while Jan and Michael continue to argue in the background. Jim and Pam are relieved just to escape with their sanity intact. What started as a simple dinner party turned into one of the most uncomfortable nights anyone could imagine. For viewers, it is both painful and hilarious, a perfect storm of Michaelâ€™s desperate need to impress and Janâ€™s seething resentment. And right at the center of it all, that ridiculous little plasma TV never stood a chance.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Content Limiter Text Exceeding Threshold

Worldâ€™s Best Boss

Michael sits proudly at his desk, sipping from his 'Worldâ€™s Best Boss' mug - a mug he bought for himself at Spencerâ€™s Gifts. He points it out to the documentary crew, insisting that itâ€™s not just a mug, but an irrefutable piece of evidence of his leadership skills.

The cameras meet the Scranton branch: Jim, casually wry; Dwight, rigid and overzealous; Pam, quietly patient at reception; and Ryan, the new temp, still figuring out the terrain. Michael parades the crew through introductions, performing for them as much as managing his team.

News of possible downsizing blows in with Jan from corporate. Michael tries to project calm and control, but he dodges straight answers and leans on bad jokes, more concerned with optics than clarity. The unease trickles through the bullpen.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Content Limiter Text Within Threshold

Copy  Copied  Show more  Show less 
    
    
    <div class="content" data-content-limiter="true">
      <p>Contrary to what one might think, the Lorem ipsum text, despite being meaningless, has noble...</p>
    </div>

When content exceeds the height threshold, the limiter adds the `content--small` class and automatically truncates the first overflowing block using the Clamp Engine so it fits the remaining space. Subsequent blocks are hidden. 

[#](https://usetrmnl.com/framework_v2/content_limiter#custom-height-threshold)

### Custom Height Threshold

You can specify a custom maximum height using the `data-content-max-height` attribute. 

George Foreman Grill Accident

Michael explains to the office that every morning he wakes up to the smell of sizzling bacon. His method is both elaborate and illâ€‘advised: he sets a George Foreman Grill at the foot of his bed the night before, lays out strips of bacon, and switches it on so he can rise to the aroma like a king. He frames it as selfâ€‘care; everyone else hears 'fire hazard.'

One morning, the fantasy meets physics. Halfâ€‘asleep, he swings his legs out of bed and plants his bare foot directly onto the hot metal. There is a hiss, a yelp, and a chaotic dance around the bedroom as he tries to untangle himself from the cord. By the time he calls in, the drama has grown from 'burn' to 'catastrophic workplace injury.'

He arrives at the office limping with exaggerated gravitas, demanding sympathy, rides, and special parking, and comparing his situation to permanent disability. He asks HR about accommodations, requests that meetings be moved closer to his desk, and insists that no one truly understands the daily challenges he now faces.

Pam offers ice and a ride to the clinic, Jim suggests - deadpan - that perhaps bacon should not be cooked in bed, and Dwight prescribes a bizarre regimen of ointments and battlefield procedures. The staff cycle between concern and disbelief as Michael narrates the incident like an inspirational keynote about resilience.

Throughout the day he milks the moment for attention, turning routine tasks into obstacles that require applause when completed. He stages slow, heroic walks through the bullpen, interrupts conversations to retell the story, and peppers in phrases like 'bravery' and 'adversity' as though he has survived a mountaineering accident.

Prison Mike

When the office staff complain that work feels like prison, Michael decides the only responsible thing to do is educate them - by transforming into a cautionary tale. He frames it as a necessary intervention, the kind of hard truth only a courageous leader can deliver, and you can see the excitement building as he prepares to debut his latest persona.

He strides back in with a purple bandana tied tight, drops his voice into a cartoonish growl, and declares himself 'Prison Mike.' He prowls the floor between desks, demanding attention like a substitute teacher who has watched one too many crime dramas, punctuating every other sentence with dramatic pauses and fingerâ€‘pointing as if heâ€™s narrating a documentary only he can see.

What follows is a torrent of wildly inconsistent 'facts' about prison life. Michael talks about hardened criminals and gangs, then veers into a menu of gruel, gruel sandwiches, and gruel omelets, insisting that dessert is 'sometimes more gruel' delivered by 'mean guards' who hate birthdays. The contradictions pile up with every step as he tries to sell a world he clearly only knows from pop culture and halfâ€‘remembered movie trailers.

The infamous moment arrives when he proclaims that the very worst part of prison was 'the Dementors' - a dead giveaway that his knowledge is borrowed from Harry Potter. The room goes silent. Eyes shift. Someone smirks, someone coughs, and even Michael seems to realize heâ€™s said something unfixable, yet he barrels ahead as though this were privileged information from a maximumâ€‘security wizarding wing.

Undeterred, Michael adds threats and warnings that sound like Mad Libs toughâ€‘guy talk: no birthday cake, no daylight, cement pillows, and constant danger. He paints the air with big, frightening shapes, then pivots into a lecture about gratitude for fluorescent lights, ergonomic chairs, and the bounty of the vending machine, as if Snickers bars and swivel bases are societyâ€™s thin line against chaos.

Jan and Toby try to intervene from the sidelines, steering him toward something resembling a real HR conversation, but Michael only doubles down. He declares this a 'teachable moment,' commands silence with a raised hand, and instructs everyone to thank him for his service as an educator, as though applause could retroactively turn improv into policy.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Content Limiter Custom Max Height: 140px

Copy  Copied  Show more  Show less 
    
    
    <div class="content" data-content-limiter="true" data-content-max-height="140">
      <p>Contrary to what one might think, the Lorem ipsum text, despite being meaningless, has noble...</p>
    </div>
    
    <div class="content" data-content-limiter="true" data-content-max-height="140">
      <p>Contrary to what one might think, the Lorem ipsum text, despite being meaningless, has noble...</p>
    </div>
    

[#](https://usetrmnl.com/framework_v2/content_limiter#mashup-example)

### Mashup Example

This demonstrates content limiting within a multiâ€‘view mashup. 

CPR Training

After a scare that puts office safety under the microscope, a CPR instructor arrives with a plastic mannequin and a stack of laminated handouts. The room is supposed to be quiet and focused; it never is, because Michael treats 'training' like a stage and 'protocol' like a suggestion.

Within minutes, Michael hijacks the lesson with questions that are neither helpful nor on topic. He is equal parts class clown and selfâ€‘appointed coâ€‘instructor, correcting the professional with confidence born of zero expertise, leaning on phrases like 'best practices' and 'synergy' as though corporate jargon could resuscitate a heartbeat.

When the instructor suggests keeping rhythm to the Bee Geesâ€™ 'Stayinâ€™ Alive,' Michael hears an invitation to perform. He claps, sings too loudly, and turns compressions into choreography. Andy, never one to resist a harmony, joins in until the room resembles a karaoke night held in a firstâ€‘aid class, with Kevin attempting a bass line and Phyllis swaying like itâ€™s a slow dance.

Dwight, determined to demonstrate 'real' preparedness, starts issuing commands and measuring breaths with militaristic seriousness. His eagerness to escalate quickly outpaces his understanding of whatâ€™s appropriate in any setting, let alone a medical one, and he begins inventing scenarios that require handcuffs and a field promotion.

The instructor tries to regain control, but the demonstration has become a Michael Scott production. He monologues about leadership, teamwork, and the importance of morale, somehow managing to miss every actual learning objective while drawing a flowchart that labels 'CPR' as 'Celebrate Positive Resilience.'

Then comes the unforgettable turn: Dwight produces a knife, slices the face from the mannequin, and wears it like a mask. The room recoils in a synchronized gasp as the instructorâ€™s expression travels from confusion to horror, and Michael declares, inexplicably, that this is 'advanced tactics' they will not be tested on.

By the end, no one can say they learned CPR, though everyone can keep time to 'Stayinâ€™ Alive' and will forever remember what not to do with training equipment. The chaos is so complete it loops back into comedy, a memory that will haunt the break room for months every time the song plays on the radio.

I Declare Bankruptcy!

As bills stack up and the numbers stop making sense, Michael does what he always does when adulthood becomes overwhelming - he looks for a grand gesture that will make the problem disappear. He imagines a clean slate delivered not by accountants or courts, but by the sheer force of a bold announcement.

Oscar tries to help, carefully explaining what bankruptcy actually is: a legal process, forms, courts, a plan. Michael nods, absorbing none of it, because he has already decided on a solution that feels simpler and much more theatrical, the financial equivalent of cutting a ribbon and calling it a day.

He walks into the bullpen, squares his shoulders like a man about to make history, clears his throat, and bellows at full volume: 'I DECLARE BANKRUPTCY!' The final word echoes against the ceiling tiles as if volume alone could reset his bank account, and he looks around expectantly, awaiting the bureaucratic magic he believes he has just triggered.

Silence follows. A few heads pop up over monitors. Confused looks ripple through the room. Kevin wonders out loud if thatâ€™s actually how it works; Creed nods as though heâ€™s tried it in three countries. Michael stands tall, waiting for the visible relief that never arrives - no confetti, no instant credit score bump, just awkward quiet and the hum of the copier.

Oscar pulls him aside again, gently clarifying that bankruptcy is not an incantation. It is paperwork, not pageantry. Michael seems genuinely stunned, as if someone told him that wishing on a star requires a notary, and he repeats the word 'forms' like itâ€™s a personal insult.

Refusing to let the moment die, he pivots to halfâ€‘baked fixes: whiteboard budgets with arrows and underlines, promises to 'tighten belts,' and a plan that mostly consists of other people making sacrifices. He proposes eliminating 'nonâ€‘essential' expenditures that suspiciously exclude novelty mugs and a rotating snack budget, none of which addresses the actual math.

Back in his office, he stares at bank statements with the intensity of a person trying to will the numbers into alignment. He whispers 'I declare bankruptcy' one more time under his breath, as if a quieter version might be legally binding, then practices saying it in a more official tone for the camera.

Scottâ€™s Tots

Michael proudly struts into a high school classroom filled with expectant seniors, all of whom have been promised by him years earlier that he would pay for their college tuition. The moment is set up like a triumphant return; the students cheer and clap as Michael enters, and for a fleeting second, he basks in the illusion of being a hero. Their excitement is palpable, with handmade signs and chants of 'Thank you, Mr. Scott!' ringing in his ears.

But underneath Michaelâ€™s forced smile lies sheer panic. As he begins his speech, his voice quivers ever so slightly, betraying his nerves. He tries to stretch out his introduction with jokes and awkward pauses, desperately searching for a way to soften the devastating truth he has to deliver. The students, however, hang on his every word, their faces glowing with hope and admiration for the man they believe has single-handedly secured their futures.

When the truth finally comes out - that Michael does not, in fact, have the money to pay for their tuition - the atmosphere in the room collapses instantly. Gasps and groans replace the cheers, and disbelief spreads across the room like a wave. Michael attempts to salvage the moment by offering to pay for everyoneâ€™s laptop batteries, a pathetic gesture that only highlights the absurdity of his promise. The crushing disappointment on the studentsâ€™ faces makes the scene almost unbearable to watch.

The pain of the moment is amplified by how sincerely Michael believed in his original promise. Years earlier, he had genuinely thought he would become wealthy enough to follow through, blinded by his own optimism and detachment from reality. Now, forced to confront the impossibility of his pledge, he tries to laugh it off and hide behind humor, but the room is heavy with betrayal and crushed dreams.

As the students press him with questions and accusations, Michael becomes visibly smaller, almost shrinking into himself. His usual bravado evaporates as he stammers and dodges eye contact. The power dynamic has shifted completely - no longer the adored benefactor, he is now the object of ridicule and anger. The laughter in this scene comes not from jokes, but from the unbearable awkwardness of Michaelâ€™s failed attempt to maintain dignity in an impossible situation.

What makes 'Scottâ€™s Tots' legendary is the raw, secondhand embarrassment it evokes. Viewers squirm in discomfort as Michael struggles, yet it is impossible to look away. Itâ€™s a perfect example of how The Office blends comedy and tragedy, creating a scene so painful that it loops back around into being hilarious. The genius lies in how Michaelâ€™s delusions of grandeur are shattered not with slapstick, but with the crushing weight of reality.

By the time Michael leaves the classroom, he is utterly defeated, his reputation destroyed in front of dozens of hopeful young people. For the students, itâ€™s the death of a dream. For Michael, itâ€™s yet another reminder of how his desperate need to be loved and admired leads him into catastrophic decisions. And for the audience, itâ€™s a masterclass in cringe comedy, one of the most excruciating yet unforgettable moments in television history.

[ Fit Value Automatically resize numbers and values to fit within their containers Previous  ](/framework_v2/fit_value)

[ Pixel Perfect Ensure text renders with crisp edges by aligning to the pixel grid Next  ](/framework_v2/pixel_perfect)

[ Framework Index  ](/framework_v2)

---

# description

# Description

The Description component provides a standardized way to display descriptive text content with consistent styling. 

[#](https://usetrmnl.com/framework_v2/description#basic-usage)

### Basic Usage

Use the `description` class to style your descriptive text. 

This is a sample description text that demonstrates how the Description component renders content.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Description

Copy  Copied  Show more  Show less 
    
    
    <span class="description">This is a sample description text.</span>

[ Label Create clear labels for unified content identification Previous  ](/framework_v2/label)

[ Divider Create horizontal or vertical dividers between elements Next  ](/framework_v2/divider)

[ Framework Index  ](/framework_v2)

---

# divider

# Divider

The Divider element provides a simple, standalone way to create visual separations in your layouts. Dividers automatically adapt to their background color for optimal visibility across four background types: white, light, dark, and black. 

[#](https://usetrmnl.com/framework_v2/divider#usage)

### Usage

Use `divider` or `divider--h` for horizontal dividers, and `divider--v` for vertical dividers. Dividers automatically detect their background and adjust their appearance for optimal contrast. 

[#](https://usetrmnl.com/framework_v2/divider#automatic-background-detection)

#### Automatic Background Detection

By default, dividers automatically detect whether they're on a white, light, dark, or black background and adjust their appearance accordingly. The system categorizes backgrounds into four types for optimal contrast: 

  * **White:** Very light backgrounds (gray-70 to gray-75 and pure white)
  * **Light:** Light gray backgrounds (gray-50 to gray-65)
  * **Dark:** Dark gray backgrounds (gray-30 to gray-45)
  * **Black:** Very dark backgrounds (gray-10 to gray-25 and pure black)



White Background

Divider uses darkest style (level 7)

Light Background (gray-70)

Divider uses dark style (level 6)

Dark Background (gray-30)

Divider uses light style (level 3)

Black Background

Divider uses lightest style (level 1)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Auto Background Detection

Copy  Copied  Show more  Show less 
    
    
    <!-- Dividers automatically detect their background -->
    <div class="bg--white">
      <div class="divider"></div> <!-- Automatically becomes divider--on-white -->
    </div>
    
    <div class="bg--gray-20">
      <div class="divider"></div> <!-- Automatically becomes divider--on-light -->
    </div>
    
    <div class="bg--gray-50">
      <div class="divider"></div> <!-- Automatically becomes divider--on-dark -->
    </div>
    
    <div class="bg--black">
      <div class="divider"></div> <!-- Automatically becomes divider--on-black -->
    </div>

[#](https://usetrmnl.com/framework_v2/divider#manual-background-control)

#### Manual Background Control

You can manually specify the background type using `divider--on-white`, `divider--on-light`, `divider--on-dark`, or `divider--on-black` classes when automatic detection isn't suitable. 

All variants on white

on-white (optimal)

on-light

on-dark

on-black (poor contrast)

All variants on black

on-white (poor contrast)

on-light

on-dark

on-black (optimal)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Manual Background Control

Copy  Copied  Show more  Show less 
    
    
    <!-- Manually specify background type -->
    <div class="divider--on-white"></div>  <!-- For white backgrounds -->
    <div class="divider--on-light"></div>  <!-- For light backgrounds -->
    <div class="divider--on-dark"></div>   <!-- For dark backgrounds -->
    <div class="divider--on-black"></div>  <!-- For black backgrounds -->
    
    <!-- Works with vertical dividers too -->
    <div class="divider--v divider--on-white"></div>
    <div class="divider--v divider--on-light"></div>
    <div class="divider--v divider--on-dark"></div>
    <div class="divider--v divider--on-black"></div>

[#](https://usetrmnl.com/framework_v2/divider#vertical-dividers)

#### Vertical Dividers

Vertical dividers work the same way as horizontal dividers, with automatic background detection for all four background types. 

Left Side White background

Right Side Auto-detected

Left Side Black background

Right Side Auto-detected

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Vertical Dividers

Copy  Copied  Show more  Show less 
    
    
    <!-- Vertical divider with auto background detection -->
    <div class="divider--v"></div>
    
    <!-- Manually specified vertical dividers -->
    <div class="divider--v divider--on-white"></div>
    <div class="divider--v divider--on-light"></div>
    <div class="divider--v divider--on-dark"></div>
    <div class="divider--v divider--on-black"></div>

[#](https://usetrmnl.com/framework_v2/divider#common-usage-patterns)

#### Common Usage Patterns

$1,234 Revenue

42 Orders

$29.38 AOV

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Section Separation

Copy  Copied  Show more  Show less 
    
    
    <!-- Replacing common border--h-x w--full pattern -->
    <!-- Old way: -->
    <div class="border--h-6 w--full"></div>
    
    <!-- New way (with auto background detection): -->
    <div class="divider"></div>
    
    <!-- Or with manual specification: -->
    <div class="divider--on-light"></div>

[ Description Format descriptive text with standardized styles Previous  ](/framework_v2/description)

[ Rich Text Display formatted paragraphs with alignment and size variants Next  ](/framework_v2/rich_text)

[ Framework Index  ](/framework_v2)

---

# enhancement_guide

# Enhancement Guide

This guide explains how to enhance plugins with Framework v2.0â€™s expanded responsive capabilities. For a quick migration checklist, see the [Upgrade Guide](/framework_v2/upgrade_guide). 

[#](https://usetrmnl.com/framework_v2/enhancement_guide#what-changed-in-framework-v2-0)

### What changed in Framework v2.0

[#](https://usetrmnl.com/framework_v2/enhancement_guide#bit-depth-variants-1-bit-2-bit-4-bit)

#### Bit-depth variants (1-bit, 2-bit, 4-bit)

Write a safe default that looks great on 1-bit displays, then layer enhancements for richer devices using `2bit:` and `4bit:` prefixes. Common use cases include deeper background shades, enabling additional structure, or revealing supplementary content only when contrast permits. 

  * Background layering: `bg--gray-20 2bit:bg--gray-35 4bit:bg--gray-50`
  * Conditional visibility: `hidden 4bit:block`
  * Legibility on patterns: use [Text Stroke](/framework_v2/text_stroke) and [Image Stroke](/framework_v2/image_stroke)



See [Visibility](/framework_v2/visibility) and [Background](/framework_v2/background). 

[#](https://usetrmnl.com/framework_v2/enhancement_guide#automatic-bit-depth-adaptation-background-border-text)

#### Automatic bitâ€‘depth adaptation (Background, Border, Text)

The [Background](/framework_v2/background), [Border](/framework_v2/border), and [Text](/framework_v2/text) utilities are automatically responsive to device bitâ€‘depth. The applied shade adapts to the deviceâ€™s capabilities so your default looks balanced on 1â€‘bit, 2â€‘bit, and 4â€‘bit displays. 

  * Defaults are safe: a single token (e.g., `bg--gray-30`, `border--h-4`, `text--gray-45`) renders appropriately across devices.
  * You can still take control using responsive prefixes to tune behavior for size, orientation, and bitâ€‘depth (e.g., `md:portrait:2bit:bg--gray-40`, `4bit:text--gray-35`).



[#](https://usetrmnl.com/framework_v2/enhancement_guide#orientation-variants-portrait-landscape)

#### Orientation variants (portrait, landscape)

Adjust density and flow based on device orientation without branching your markup. Apply orientation prefixes to any class to tune structure, alignment, and spacing. 

  * Columns: `portrait:grid--cols-2 landscape:grid--cols-4`
  * Direction: `portrait:flex--col landscape:flex--row`
  * Spacing: `portrait:gap--small landscape:gap--space-between`



See [Responsive](/framework_v2/responsive) and [Layout](/framework_v2/layout). 

[#](https://usetrmnl.com/framework_v2/enhancement_guide#responsive-breakpoints-sm-md-lg-xl)

#### Responsive breakpoints (sm, md, lg, xl)

Use size breakpoints to scale complexity and density. Combine with orientation and bit-depth for precise control, keeping your default minimal and layering enhancements for larger screens. 

  * Progressive layout: `sm:flex md:grid lg:portrait:grid--cols-4`
  * Composed conditions: `md:portrait:2bit:gap--medium`, `lg:4bit:rounded--medium`



See [Responsive](/framework_v2/responsive) and [Responsive Test](/framework_v2/responsive_test). 

[#](https://usetrmnl.com/framework_v2/enhancement_guide#utilities-and-elements-added-in-v2)

### Utilities and elements added in v2

  * New utilities: [Aspect Ratio](/framework_v2/aspect_ratio), [Scale](/framework_v2/scale), [Visibility](/framework_v2/visibility).
  * New elements/components: [Divider](/framework_v2/divider) (element), [Progress](/framework_v2/progress) (component).
  * Palette expansion: Background/Text now support `gray-10` â€¦ `gray-75`; legacy `gray-1..7` remain for compatibility.
  * Border redesign: new fullâ€‘spectrum scale; see [Border](/framework_v2/border) for upgrade notes.



[ Upgrade Guide Steps to upgrade your plugins to Framework v2 Previous  ](/framework_v2/upgrade_guide)

[ Size Define exact width and height dimensions for elements Next  ](/framework_v2/size)

[ Framework Index  ](/framework_v2)

---

# fit_value

# Fit Value

The Text Fitting system automatically adjusts the font size, weight, and line height of text elements so that they fit within their containers. This dynamic resizing is especially useful for responsive layouts where available space may vary, ensuring that content is always legible. 

[#](https://usetrmnl.com/framework_v2/fit_value#basic-usage)

### Basic Usage

To enable automatic text resizing, add the `data-value-fit="true"` attribute to your element. For numeric values, this is all you need - the system will automatically adjust the element's font size and weight to fit the container width. Text content requires additional configuration (see Text Fitting below). 

$1,000  XXXLarge

$1,000,000  XXXLarge

$1,000,000,000  XXXLarge

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Fit Value Number Formatting

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xxxlarge" data-value-fit="true">$1,000</span>
    
    <span class="value value--xxxlarge" data-value-fit="true">$1,000,000</span>
    
    <span class="value value--xxxlarge" data-value-fit="true">$1,000,000,000</span>

[#](https://usetrmnl.com/framework_v2/fit_value#text-fitting)

### Text Fitting

When fitting text content, you must specify a maximum height constraint using the `data-value-fit-max-height` attribute (in pixels). This ensures text content stays within both width and height constraints while maintaining readability through automatic font size and weight adjustments. 

Hello. This is a really long headline that will need to adjust significantly to fit within its container space and look good in a layout.  XXXLarge

Hello. This is a medium length headline that fits nicely.  XXXLarge

Hello.  XXXLarge

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Fit Value Text Formatting

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xxxlarge" data-value-fit="true" data-value-fit-max-height="340">
      Hello. This is a really long headline that will need to adjust significantly to fit within its container space and look good in a layout.
    </span>
    
    <span class="value value--xxxlarge" data-value-fit="true" data-value-fit-max-height="340">
      This is a medium length headline that fits nicely.
    </span>
    
    <span class="value value--xxxlarge" data-value-fit="true" data-value-fit-max-height="340">
      Hello.
    </span>

[ Format Value Format numbers and values with consistent styling Previous  ](/framework_v2/format_value)

[ Content Limiter Change font size when content overflows to fit within the container Next  ](/framework_v2/content_limiter)

[ Framework Index  ](/framework_v2)

---

# flex

# Flex

The Flex system provides utility classes for creating flexible layouts using Flexbox. It supports both row and column directions with various alignment, centering, and stretching options. 

[#](https://usetrmnl.com/framework_v2/flex#base-structure)

### Base Structure

The Flex system provides two fundamental ways to organize content: horizontal (row) and vertical (column) arrangements. These base structures can be combined with alignment and stretch modifiers for complex layouts. 

[#](https://usetrmnl.com/framework_v2/flex#row-direction)

#### Row Direction

Use `flex flex--row` to create a horizontal layout: 

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Row Direction

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--row">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/flex#column-direction)

#### Column Direction

Use `flex flex--col` to create a vertical layout: 

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Column Direction

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--col">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/flex#alignment-modifiers)

### Alignment Modifiers

Once you've chosen a base direction, you can apply alignment modifiers to control how items are positioned within their container. The system provides directional alignment (left/right/top/bottom) and centering options. 

[#](https://usetrmnl.com/framework_v2/flex#row-horizontal-alignment)

#### Row Horizontal Alignment

For row layouts, use `flex--left`, `flex--center-x`, or `flex--right` to control horizontal alignment: 

Left

Center X

Right

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Row Horizontal Alignment

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--row flex--left">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>
    
    <div class="flex flex--row flex--center-x">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>
    
    <div class="flex flex--row flex--right">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>

[#](https://usetrmnl.com/framework_v2/flex#row-vertical-alignment)

#### Row Vertical Alignment

For row layouts, use `flex--top`, `flex--center-y`, or `flex--bottom` to control vertical alignment: 

Top

Center Y

Bottom

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Row Vertical Alignment

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--row flex--top">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>
    
    <div class="flex flex--row flex--center-y">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>
    
    <div class="flex flex--row flex--bottom">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>

[#](https://usetrmnl.com/framework_v2/flex#column-horizontal-alignment)

#### Column Horizontal Alignment

For column layouts, use `flex--left`, `flex--center-x`, or `flex--right` to control horizontal alignment: 

Left

Center X

Right

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Column Horizontal Alignment

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--col flex--left">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>
    
    <div class="flex flex--col flex--center-x">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>
    
    <div class="flex flex--col flex--right">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>

[#](https://usetrmnl.com/framework_v2/flex#column-vertical-alignment)

#### Column Vertical Alignment

For column layouts, use `flex--top`, `flex--center-y`, or `flex--bottom` to control vertical alignment: 

Top

Center Y

Bottom

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Column Vertical Alignment

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--col flex--top">
      {{ Item }}
    </div>
    
    <div class="flex flex--col flex--center">
      {{ Item }}
    </div>
    
    <div class="flex flex--col flex--bottom">
      {{ Item }}
    </div>

[#](https://usetrmnl.com/framework_v2/flex#stretch-modifiers)

### Stretch Modifiers

The Flex system provides both container-level and individual item stretch controls. Container modifiers affect all children, while item classes only affect the specific element they're applied to. 

[#](https://usetrmnl.com/framework_v2/flex#container-stretch)

#### Container Stretch

Use `flex--stretch`, `flex--stretch-x`, or `flex--stretch-y` to control how children fill the container: 

Stretch All

Stretch X

Stretch Y

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Container Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--row flex--stretch">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>
    
    <div class="flex flex--row flex--stretch-x">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>
    
    <div class="flex flex--row flex--stretch-y">
      {{ Item }}
      {{ Item }}
      {{ Item }}
    </div>

[#](https://usetrmnl.com/framework_v2/flex#individual-item-stretch-row)

#### Individual Item Stretch (Row)

Use `stretch`, `stretch-x`, or `stretch-y` on individual items in a row layout: 

Stretch

Normal

Stretch

Stretch X

Normal

Stretch X

Stretch Y

Normal

Stretch Y

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Item Stretch (Row)

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--row">
      <div class="stretch">Stretches in cross-axis</div>
      <div>Normal item</div>
      <div class="stretch">Stretches in cross-axis</div>
    </div>
    
    <div class="flex flex--row">
      <div class="stretch-x">Stretches horizontally</div>
      <div>Normal item</div>
      <div class="stretch-x">Stretches horizontally</div>
    </div>
    
    <div class="flex flex--row">
      <div class="stretch-y">Stretches vertically</div>
      <div>Normal item</div>
      <div class="stretch-y">Stretches vertically</div>
    </div>

[#](https://usetrmnl.com/framework_v2/flex#individual-item-stretch-column)

#### Individual Item Stretch (Column)

Use `stretch`, `stretch-x`, or `stretch-y` on individual items in a column layout: 

Stretch

Normal

Stretch

Stretch X

Normal

Stretch X

Stretch Y

Normal

Stretch Y

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Item Stretch (Column)

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--col">
      <div class="stretch">Stretches in cross-axis</div>
      <div>Normal item</div>
      <div class="stretch">Stretches in cross-axis</div>
    </div>
    
    <div class="flex flex--col">
      <div class="stretch-x">Stretches horizontally</div>
      <div>Normal item</div>
      <div class="stretch-x">Stretches horizontally</div>
    </div>
    
    <div class="flex flex--col">
      <div class="stretch-y">Stretches vertically</div>
      <div>Normal item</div>
      <div class="stretch-y">Stretches vertically</div>
    </div>

[#](https://usetrmnl.com/framework_v2/flex#preventing-item-shrinkage)

#### Preventing Item Shrinkage

Use `no-shrink` on flex children to prevent them from shrinking when other items try to take up more space: 

Can Shrink

Stretching Content That Pushes Others

Won't Shrink

Stretching Content That Pushes Others

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Prevent Shrinking

Copy  Copied  Show more  Show less 
    
    
    <div class="flex flex--row">
      <div class="no-shrink">Maintains its width</div>
      <div class="stretch">Stretches but won't squish the no-shrink item</div>
    </div>

[#](https://usetrmnl.com/framework_v2/flex#orientation-responsive-layouts)

### Orientation-Responsive Layouts

Flexbox utilities support orientation-responsive variants, allowing you to change layouts when the screen is rotated. This is particularly useful for adapting navigation bars, toolbars, and content grids. 

[#](https://usetrmnl.com/framework_v2/flex#adaptive-direction)

#### Adaptive Direction

Use `portrait:` prefix to change flex direction or alignment when the screen is in portrait orientation. Try rotating the device preview to see the effect. 

Nav Item 1

Nav Item 2

Nav Item 3

Row in landscape, column in portrait

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Flex Orientation Responsive

Copy  Copied  Show more  Show less 
    
    
    <!-- Navigation that adapts to orientation -->
    <div class="flex flex--row portrait:flex--col gap">
      <div class="stretch">Nav Item 1</div>
      <div class="stretch">Nav Item 2</div>
      <div class="stretch">Nav Item 3</div>
    </div>
    
    <!-- Combined with size breakpoints -->
    <div class="flex flex--col md:flex--row md:portrait:flex--col">
      <!-- Column on small screens -->
      <!-- Row on medium+ landscape screens -->
      <!-- Column on medium+ portrait screens -->
    </div>

[ Gap Set precise spacing between elements with predefined gap values Previous  ](/framework_v2/gap)

[ Grid Create grid layouts with predefined column structures Next  ](/framework_v2/grid)

[ Framework Index  ](/framework_v2)

---

# format_value

# Format Value

The Value Formatting system automatically formats numeric values to fit within their containers while maintaining readability. It supports various formatting options including abbreviations (K, M, B), dynamic precision adjustment, and currency values with proper symbol placement. 

[#](https://usetrmnl.com/framework_v2/format_value#basic-usage)

### Basic Usage

To enable automatic value formatting, add the `data-value-format="true"` attribute to your element. 

2345678 XLarge

2345678 Regular

2345678 Small

456789 XLarge

456789 Regular

456789 Small

34562 XLarge

34562 Regular

34562 Small

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Formatting Size Comparison

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xlarge value--tnums" data-value-format="true">2345678</span>
    
    <span class="value value--large value--tnums" data-value-format="true">456789</span>
    
    <span class="value value--small value--tnums" data-value-format="true">34562</span>

To add a delimiter to large numbers, for example 1234 => 1,234, see [custom filters](https://intercom.help/trmnl/en/articles/10347358-custom-plugin-filters). 

[#](https://usetrmnl.com/framework_v2/format_value#currency-values)

### Currency Values

Values with currency symbols are automatically formatted while maintaining the symbol placement. 

$2345678 XLarge

$2345678 Regular

$2345678 Small

$456789 XLarge

$456789 Regular

$456789 Small

$34562 XLarge

$34562 Regular

$34562 Small

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Formatting Currency Example

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xlarge value--tnums" data-value-format="true" data-fit-value="true">$2345678</span>
    
    <span class="value value--large value--tnums" data-value-format="true" data-fit-value="true">$456789</span>
    
    <span class="value value--small value--tnums" data-value-format="true" data-fit-value="true">$34562</span>

To add a currency symbol, for example 1234 => $1,234, see [custom filters](https://intercom.help/trmnl/en/articles/10347358-custom-plugin-filters). 

Supported currency symbols include: 

`$` US Dollar

`â‚¬` Euro

`Â£` British Pound

`Â¥` Japanese Yen / Chinese Yuan

`â‚´` Ukrainian Hryvnia

`â‚¹` Indian Rupee

`â‚ª` Israeli Shekel

`â‚©` Korean Won

`â‚«` Vietnamese Dong

`â‚±` Philippine Peso

`â‚½` Russian Ruble

`â‚¿` Bitcoin

[#](https://usetrmnl.com/framework_v2/format_value#regional-number-formats)

### Regional Number Formats

Numbers can be formatted according to different regional standards using the `data-value-locale` attribute. 

$123456.78 United States (en-US)

$123456.78 United States (en-US)

â‚¬123456.78 German (de-DE)

â‚¬123456.78 German (de-DE)

â‚¬123456.78 French (fr-FR)

â‚¬123456.78 French (fr-FR)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Formatting Regional Formats

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xlarge value--tnums" data-value-format="true" data-value-locale="en-US">$123456.78</span>
    
    <span class="value value--large value--tnums" data-value-format="true" data-value-locale="de-DE">â‚¬123456.78</span>
    
    <span class="value value--small value--tnums" data-value-format="true" data-value-locale="fr-FR">â‚¬123456.78</span>

Common locale options include: 

`en-US` United States (123,456.78)

`de-DE` German (123.456,78)

`fr-FR` French (123 456,78)

`en-GB` British English (123,456.78)

`ja-JP` Japanese (123,456.78)

If no locale is specified, numbers will be formatted using US format (en-US) by default. 

[ Clamp Manage text overflow with single and multi-line truncation Previous  ](/framework_v2/clamp)

[ Fit Value Automatically resize numbers and values to fit within their containers Next  ](/framework_v2/fit_value)

[ Framework Index  ](/framework_v2)

---

# framework_runtime

# Framework Runtime

Different devices have different, fixed amounts of screen space. The Framework Runtime fills that space the best way it can when a plugin layout renders. It follows a few simple rules and does the heavy, repetitive calculations for you, so the result is clean and reliable every time. You can inspect it from the â€œFramework Runtimeâ€� panel in the top navigation. 

[#](https://usetrmnl.com/framework_v2/framework_runtime#what-it-does)

### What it does

At a high level, it measures the space you have and then plans columns, clamps text, formats and fits values, and adjusts gaps and index widths - so everything fits neatly without manual tweaking.

  * Normalizes screen context (size, orientation, bit depth, scale)
  * Maps legacy responsive classes to data attributes for consistency
  * Formats values and fits numbers into their containers
  * Adjusts gaps so columns/grids land on integer pixel widths
  * Plans multi-column layouts, re-clamps text per column, and adds â€œand N moreâ€� labels
  * Applies standalone clamping where needed outside columns
  * Limits overly tall content and schedules pixel-perfect text processing



[#](https://usetrmnl.com/framework_v2/framework_runtime#runtime-steps-and-stats)

### Runtime steps and stats

When the runtime executes, it performs these steps in order.

#### Clamp

Clamps text to N lines.

  * Wordâ€‘based ellipsis
  * Preserves original text
  * Reâ€‘clamps when widths change
  * Supports responsive data attributes (size/orientation)
  * Maps legacy class utilities to `data-clamp`
  * Applies outside and inside columns (perâ€‘column reâ€‘clamp handled by Overflow)



#### Overflow

Plans 1..N columns with offâ€‘screen staging and commits the best fit, then reâ€‘clamps per real column width.

  * Duplicates group headers across columns when needed
  * Adds trailing â€œand N moreâ€� label for hidden items
  * Enforces final fit by hiding trailing items if necessary



#### Value Formatting

Formats numbers to fit available space and abbreviates as needed (k, M, B).

  * Respects `data-value-locale`
  * Works with `data-fit-value` for autoâ€‘sizing



#### Fit Value

Adjusts font size, lineâ€‘height, and weight to fit numbers within their containers.

  * Minimum font size safeguard (default 8px)
  * Accepts `data-fit-value` or `data-value-fit`



#### Grid Gaps

Tweaks CSS gaps so grid column widths resolve to integer pixels.

  * Disable with `data-adjust-grid-gaps="false"`
  * Falls back to measuring child positions when `gap` is not explicitly set



#### Column Gaps

Normalizes gaps between `.column` elements so column widths are integers.

  * Disable with `data-adjust-column-gaps="false"`
  * Runs as a preâ€‘pass for nonâ€‘overflow columns and a final pass after Overflow



#### Pixelâ€‘Perfect Fonts

Wraps lines in spans and enforces even/odd widths for crisp rendering; scheduled in idle time.

  * Skipped on higher bitâ€‘depth modes
  * Respects centered alignment



#### Content Limiter

Constrains content height by view type or explicit threshold and flags small content.

  * Override via `data-content-max-height`
  * Adds `content--small` and `clamp--N` classes



#### Index Widths

Ensures item index badges render at even widths to avoid artifacts.

  * Observes width changes and adjusts without feedback loops
  * Runs after column layouts commit to cover inâ€‘column indices



[#](https://usetrmnl.com/framework_v2/framework_runtime#why-this-exists)

### Why this exists

Plugins need to fit source data into a static layout space that is deviceâ€‘defined and varies by model, orientation, and density. While this resembles responsive web design, the runtime provides purposeâ€‘built toolsâ€”overflow planning, perâ€‘column clamping, integer pixel alignment, and value fittingâ€”tailored specifically for TRMNL devices.

[ Pixel Perfect Ensure text renders with crisp edges by aligning to the pixel grid Previous  ](/framework_v2/pixel_perfect)

[ Screen Device screen dimensions, orientation, and display properties Next  ](/framework_v2/screen)

[ Framework Index  ](/framework_v2)

---

# gap

# Gap

The Gap system provides consistent spacing between elements using CSS gap property. It offers predefined sizes, responsive spacing, and custom values to maintain visual rhythm throughout your interface. 

[#](https://usetrmnl.com/framework_v2/gap#base-sizes)

### Base Sizes

The gap system includes seven predefined sizes, from xsmall to xxlarge. These standardized spaces help maintain consistent spacing across your application's grid and flex layouts. 

[#](https://usetrmnl.com/framework_v2/gap#standard-gaps)

#### Standard Gaps

Use `gap--xsmall` for tight spacing, `gap` for default spacing, and larger variants for more generous spacing needs. 

gap--xsmall

gap--xsmall

gap--xsmall

gap--small

gap--small

gap--small

gap

gap

gap

gap--medium

gap--medium

gap--medium

gap--large

gap--large

gap--large

gap--xlarge

gap--xlarge

gap--xlarge

gap--xxlarge

gap--xxlarge

gap--xxlarge

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Predefined Gaps Design System

Copy  Copied  Show more  Show less 
    
    
    <!-- Available gap sizes from smallest to largest -->
    <div class="grid grid--cols-3 gap--xsmall">...</div>
    <div class="grid grid--cols-3 gap--small">...</div>
    <div class="grid grid--cols-3 gap">...</div>
    <div class="grid grid--cols-3 gap--medium">...</div>
    <div class="grid grid--cols-3 gap--large">...</div>
    <div class="grid grid--cols-3 gap--xlarge">...</div>
    <div class="grid grid--cols-3 gap--xxlarge">...</div>

[#](https://usetrmnl.com/framework_v2/gap#distribution-modifiers)

### Distribution Modifiers

Beyond fixed gaps, you can use special modifiers to control how space is distributed between elements. These modifiers are particularly useful for creating flexible, dynamic layouts. 

[#](https://usetrmnl.com/framework_v2/gap#space-between)

#### Space Between

The `gap--space-between` modifier distributes available space evenly between elements, pushing them to the edges of their container. 

gap--space-between

gap--space-between

gap--space-between

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Space Between Gap Design System

Copy  Copied  Show more  Show less 
    
    
    <!-- Space between elements in a flex container -->
    <div class="flex flex--col gap--space-between h--52">
      <div>...</div>
      <div>...</div>
      <div>...</div>
    </div>

[#](https://usetrmnl.com/framework_v2/gap#responsive-size-orientation-size-orientation)

### Responsive (Size, Orientation, Size + Orientation)

Gap utilities support size-based breakpoints, orientation variants, and their combination. Use prefixes like `md:`, `portrait:`, and `md:portrait:` to target conditions. 

[#](https://usetrmnl.com/framework_v2/gap#responsive-gap-examples)

#### Responsive Gap Examples

Apply different gap values at different breakpoints using the size-based responsive system. The framework follows a mobile-first approach where larger breakpoints inherit smaller ones. 

Responsive Gap

Responsive Gap

Responsive Gap

Small by default, large on md+, xlarge on lg+, default gap in portrait, xlarge in md+ portrait

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Responsive Gaps Size-Based

Copy  Copied  Show more  Show less 
    
    
    <!-- Size + orientation examples -->
    <div class="grid grid--cols-3 gap--small md:gap--large lg:gap--xlarge portrait:gap md:portrait:gap--xlarge">
      <div>...</div>
      <div>...</div>
      <div>...</div>
    </div>
    
    <!-- Examples of different responsive patterns -->
    <div class="flex flex--col gap md:gap--large portrait:gap--small">...</div>
    <div class="grid grid--cols-2 gap--xsmall lg:gap--medium md:portrait:gap--large">...</div>

Gap utilities only support size-based responsive variants. Bit-depth variants (like `1bit:` or `4bit:`) are not available for gap classes. 

[#](https://usetrmnl.com/framework_v2/gap#custom-values)

### Custom Values

When predefined gaps don't meet your specific needs, you can use custom pixel values. This provides precise control over spacing while maintaining the consistent gap syntax. 

[#](https://usetrmnl.com/framework_v2/gap#arbitrary-pixel-values)

#### Arbitrary Pixel Values

Use `gap--[Npx]` syntax to specify exact pixel values. This works with both grid and flex layouts, but does not support responsive variants. 

gap--[5px]

gap--[5px]

gap--[5px]

gap--[10px]

gap--[10px]

gap--[10px]

gap--[15px]

gap--[15px]

gap--[15px]

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Custom Pixel Gaps Design System

Copy  Copied  Show more  Show less 
    
    
    <!-- Custom gap values (no responsive support) -->
    <div class="grid grid--cols-3 gap--[5px]">...</div>
    <div class="grid grid--cols-3 gap--[10px]">...</div>
    <div class="grid grid--cols-3 gap--[15px]">...</div>
    
    <!-- Works with flex containers too -->
    <div class="flex flex--col gap--[20px]">...</div>

Arbitrary gap values using the `gap--[Npx]` syntax do not support responsive variants. Use predefined gap classes if you need responsive behavior. 

[ Spacing Control element spacing with fixed margin and padding values Previous  ](/framework_v2/spacing)

[ Flex Arrange elements with flexible layouts and alignment options Next  ](/framework_v2/flex)

[ Framework Index  ](/framework_v2)

---

# grid

# Grid

The Grid system provides a flexible way to create both column-based and row-based layouts. It supports various column counts, column spans, and responsive behaviors to create complex layouts easily. 

[#](https://usetrmnl.com/framework_v2/grid#ways-to-define-the-grid)

### Ways to Define the Grid

The grid system provides two ways to define column layouts: 

  * **Column Count:** Set `grid--cols-{number}` on the parent to create equal-width columns 
  * **Column Spans:** Set `col--span-{number}` on individual columns to control their width 



[#](https://usetrmnl.com/framework_v2/grid#column-count)

#### Column Count

Use `grid--cols-{number}` to specify any number of columns. Here are examples with 4 and 3 columns: 

Col 1/4

Col 1/4

Col 1/4

Col 1/4

Col 1/3

Col 1/3

Col 1/3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Grid Column Count

Copy  Copied  Show more  Show less 
    
    
    <div class="grid grid--cols-4">
      <div>1/4</div>
      <div>1/4</div>
      <div>1/4</div>
      <div>1/4</div>
    </div>
    
    <div class="grid grid--cols-3">
      <div>1/3</div>
      <div>1/3</div>
      <div>1/3</div>
    </div>

[#](https://usetrmnl.com/framework_v2/grid#column-spans)

#### Column Spans

Use `col--span-{number}` to make a column span multiple grid columns. In a grid row, the sum of all column spans should equal the total number of grid columns. For example, you might have spans of 1 and 2, or spans of 3, 6, and 2. 

Col Span 1

Col Span 2

Col Span 3

Col Span 6

Col Span 2

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Grid Column Spans

Copy  Copied  Show more  Show less 
    
    
    <div class="grid">
      <div class="col--span-1">Span 1</div>
      <div class="col--span-2">Span 2</div>
    </div>
    
    <div class="grid">
      <div class="col--span-3">Span 3</div>
      <div class="col--span-6">Span 6</div>
      <div class="col--span-2">Span 2</div>
    </div>

[#](https://usetrmnl.com/framework_v2/grid#column-layouts)

### Column Layouts

Use columns to create vertical layouts within the grid. Columns can be positioned and aligned using modifier classes. 

[#](https://usetrmnl.com/framework_v2/grid#basic-column-layout)

#### Basic Column Layout

Use the `col` class to create vertical layouts. 

Item 1

Item 2

Item 3

Item 4

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Grid Column Layout

Copy  Copied  Show more  Show less 
    
    
    <div class="grid">
      <div class="col">
        {{ Item }}
        {{ Item }}
        {{ Item }}
        {{ Item }}
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/grid#column-positioning)

#### Column Positioning

Use `col--{position}` where position can be `start`, `center`, or `end` to control vertical alignment: 

Start

Center

End

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Grid Column Positioning

Copy  Copied  Show more  Show less 
    
    
    <div class="grid grid--cols-3">
      <div class="col col--start">
        {{ Item }}
      </div>
      <div class="col col--center">
        {{ Item }}
      </div>
      <div class="col col--end">
        {{ Item }}
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/grid#row-layouts)

### Row Layouts

Use rows to create horizontal layouts within the grid. Rows can be positioned and aligned using modifier classes. 

[#](https://usetrmnl.com/framework_v2/grid#basic-row-layout)

#### Basic Row Layout

Use the `row` class to create horizontal layouts. 

Item 1

Item 2

Item 3

Item 4

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Grid Row Layout

Copy  Copied  Show more  Show less 
    
    
    <div class="grid">
      <div class="row">
        {{ Item }}
        {{ Item }}
        {{ Item }}
        {{ Item }}
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/grid#row-positioning)

#### Row Positioning

Use `row--{position}` where position can be `start`, `center`, or `end` to control horizontal alignment: 

Start

Center

End

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Grid Row Positioning

Copy  Copied  Show more  Show less 
    
    
    <div class="grid grid--cols-1">
      <div class="row row--start">
        {{ Item }}
      </div>
      <div class="row row--center">
        {{ Item }}
      </div>
      <div class="row row--end">
        {{ Item }}
      </div>
    </div>

[ Flex Arrange elements with flexible layouts and alignment options Previous  ](/framework_v2/flex)

[ Background Grayscale dithered patterns optimized for 1-bit rendering Next  ](/framework_v2/background)

[ Framework Index  ](/framework_v2)

---

# image

# Image

Image creates the illusion of grayscale through carefully designed dither patterns. When rendered on 1-bit (black and white only) displays, these patterns create an illusion of different shades of gray by using specific arrangements of black and white pixels. 

[#](https://usetrmnl.com/framework_v2/image#dithering)

### Dithering

Use the class `image--dither` to dither an image. 

![](/images/framework/image/image--1bit.png) ![](/images/framework/image/image--2bit.png) ![](/images/framework/image/image--4bit.png)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Image

Copy  Copied  Show more  Show less 
    
    
    <img class="image image--dither rounded" src="path to the image file">

[#](https://usetrmnl.com/framework_v2/image#object-fit)

### Object Fit

Control how images are displayed when not shown in their original aspect ratio. 

[#](https://usetrmnl.com/framework_v2/image#options)

#### Options

  * **Fill (Default):** The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit.
  * **Contain:** The image keeps its aspect ratio, but is resized to fit within the given dimension.
  * **Cover:** The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit.



![](/images/screensaver/rover.bmp)

Fill

![](/images/screensaver/rover.bmp)

Contain

![](/images/screensaver/rover.bmp)

Cover

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Object Fit Options

Copy  Copied  Show more  Show less 
    
    
    <img class="image image--fill" src="path to image">
    <img class="image image--contain" src="path to image">
    <img class="image image--cover" src="path to image">

[ Text Control text color, alignment and formatting Previous  ](/framework_v2/text)

[ Image Stroke Legible images when displayed on shaded backgrounds Next  ](/framework_v2/image_stroke)

[ Framework Index  ](/framework_v2)

---

# image_stroke

# Image Stroke

The Image Stroke system allows you to add an outline to a vector or transparent raster images with customizable stroke width and color. This is useful for creating images that stand out against shaded backgrounds. 

[#](https://usetrmnl.com/framework_v2/image_stroke#usage)

### Usage

The Image Stroke system includes preset size modifiers that allow you to quickly apply different stroke widths to your images. The default stroke is 1.5px white, with additional options for small (1px), medium (2px), large (2.5px), and extra large (3px). 

![](https://usetrmnl.com/assets/trmnl--glyph-black-0ded5ffe9393499f19263e54902d79c50191f83d46149d2f99da253cd3bd92e1.svg) No Stroke

![](https://usetrmnl.com/assets/trmnl--glyph-black-0ded5ffe9393499f19263e54902d79c50191f83d46149d2f99da253cd3bd92e1.svg) Small

![](https://usetrmnl.com/assets/trmnl--glyph-black-0ded5ffe9393499f19263e54902d79c50191f83d46149d2f99da253cd3bd92e1.svg) Default

![](https://usetrmnl.com/assets/trmnl--glyph-black-0ded5ffe9393499f19263e54902d79c50191f83d46149d2f99da253cd3bd92e1.svg) Medium

![](https://usetrmnl.com/assets/trmnl--glyph-black-0ded5ffe9393499f19263e54902d79c50191f83d46149d2f99da253cd3bd92e1.svg) Large

![](https://usetrmnl.com/assets/trmnl--glyph-black-0ded5ffe9393499f19263e54902d79c50191f83d46149d2f99da253cd3bd92e1.svg) Extra Large

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Image Stroke Preset Sizes

Copy  Copied  Show more  Show less 
    
    
    <img src="/images/trmnl--glyph-black.svg" />
    <img class="image-stroke image-stroke--small" src="/images/trmnl--glyph-black.svg" />
    <img class="image-stroke" src="/images/trmnl--glyph-black.svg" />
    <img class="image-stroke image-stroke--medium" src="/images/trmnl--glyph-black.svg" />
    <img class="image-stroke image-stroke--large" src="/images/trmnl--glyph-black.svg" />
    <img class="image-stroke image-stroke--xlarge" src="/images/trmnl--glyph-black.svg" />

[#](https://usetrmnl.com/framework_v2/image_stroke#stroke-colors)

### Stroke Colors

Use the black modifier for images on dark backgrounds. 

![](https://usetrmnl.com/assets/trmnl--glyph-white-d1f3a42f05af7a81e26f8d0715349b08c8d45039b88c3885481713e8e4f46ab6.svg) No Stroke

![](https://usetrmnl.com/assets/trmnl--glyph-white-d1f3a42f05af7a81e26f8d0715349b08c8d45039b88c3885481713e8e4f46ab6.svg) Small

![](https://usetrmnl.com/assets/trmnl--glyph-white-d1f3a42f05af7a81e26f8d0715349b08c8d45039b88c3885481713e8e4f46ab6.svg) Default

![](https://usetrmnl.com/assets/trmnl--glyph-white-d1f3a42f05af7a81e26f8d0715349b08c8d45039b88c3885481713e8e4f46ab6.svg) Medium

![](https://usetrmnl.com/assets/trmnl--glyph-white-d1f3a42f05af7a81e26f8d0715349b08c8d45039b88c3885481713e8e4f46ab6.svg) Large

![](https://usetrmnl.com/assets/trmnl--glyph-white-d1f3a42f05af7a81e26f8d0715349b08c8d45039b88c3885481713e8e4f46ab6.svg) Extra Large

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Image Stroke Color Variants

Copy  Copied  Show more  Show less 
    
    
    <img src="/images/trmnl--glyph-white.svg" />
    <img class="image-stroke image-stroke--black image-stroke--small" src="/images/trmnl--glyph-white.svg" />
    <img class="image-stroke image-stroke--black" src="/images/trmnl--glyph-white.svg" />
    <img class="image-stroke image-stroke--black image-stroke--medium" src="/images/trmnl--glyph-white.svg" />
    <img class="image-stroke image-stroke--black image-stroke--large" src="/images/trmnl--glyph-white.svg" />
    <img class="image-stroke image-stroke--black image-stroke--xlarge" src="/images/trmnl--glyph-white.svg" />

[ Image Optimize images using dithering techniques for 1-bit rendering Previous  ](/framework_v2/image)

[ Text Stroke Legible text when displayed on shaded backgrounds Next  ](/framework_v2/text_stroke)

[ Framework Index  ](/framework_v2)

---

# item

# Item

The Item component provides a flexible container for displaying content with optional metadata and indexing. It's commonly used for lists, schedules, and other content that needs consistent formatting. 

[#](https://usetrmnl.com/framework_v2/item#item-variants)

### Item Variants

Items can be displayed in four variants: with meta and index, with meta only, with meta emphasis levels, or in a simple format. Each variant provides different levels of visual hierarchy and information density. 

[#](https://usetrmnl.com/framework_v2/item#with-meta)

#### With Meta

This variant includes a meta section without an index, providing space for optional metadata while maintaining a clean appearance. 

Team Meeting Weekly team sync-up

9:00 AM - 10:00 AM Confirmed

Client Presentation Quarterly review with XYZ Corp

2:00 PM - 3:30 PM Tentative

Project Deadline Submit final deliverables for Project Alpha

11:59 PM Important

Code Review Review pull requests for Project Beta

3:30 PM - 4:30 PM High Priority

Team Meeting Weekly team sync-up

9:00 AM - 10:00 AM Confirmed

Client Presentation Quarterly review with XYZ Corp

2:00 PM - 3:30 PM Tentative

Project Deadline Submit final deliverables for Project Alpha

11:59 PM Important

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Item With Meta

Copy  Copied  Show more  Show less 
    
    
    <div class="item">
      <div class="meta"></div>
      <div class="content">
        <span class="title title--small">Team Meeting</span>
        <span class="description">Weekly team sync-up</span>
        <div class="flex gap--small">
          <span class="label label--small label--underline">9:00 AM - 10:00 AM</span>
          <span class="label label--small label--underline">Confirmed</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/item#with-meta-emphasis)

#### With Meta Emphasis

Apply `item--emphasis-1`, `item--emphasis-2` or `item--emphasis-3` to progressively darken the meta bar and draw attention. Level 1 is the default styling. 

Team Meeting Weekly team sync-up

9:00 AM - 10:00 AM Confirmed

Client Presentation Quarterly review with XYZ Corp

2:00 PM - 3:30 PM Tentative

Project Deadline Submit final deliverables for Project Alpha

11:59 PM Important

Code Review Review pull requests for Project Beta

3:30 PM - 4:30 PM High Priority

Team Meeting Weekly team sync-up

9:00 AM - 10:00 AM Confirmed

Client Presentation Quarterly review with XYZ Corp

2:00 PM - 3:30 PM Tentative

Project Deadline Submit final deliverables for Project Alpha

11:59 PM Important

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Item Emphasis Levels

Copy  Copied  Show more  Show less 
    
    
    <div class="item item--emphasis-1">
      <div class="meta"></div>
      <div class="content">
        <span class="title title--small">Team Meeting</span>
        <span class="description">Weekly team sync-up</span>
        <div class="flex gap--small">
          <span class="label label--small label--underline">9:00 AM - 10:00 AM</span>
          <span class="label label--small label--underline">Confirmed</span>
        </div>
      </div>
    </div>
    
    <div class="item item--emphasis-2">
      <div class="meta"></div>
      <div class="content">
        <span class="title title--small">Client Presentation</span>
        <span class="description">Quarterly review with XYZ Corp</span>
        <div class="flex gap--small">
          <span class="label label--small label--underline">2:00 PM - 3:30 PM</span>
          <span class="label label--small label--underline">Tentative</span>
        </div>
      </div>
    </div>
    
    <div class="item item--emphasis-3">
      <div class="meta"></div>
      <div class="content">
        <span class="title title--small">Project Deadline</span>
        <span class="description">Submit final deliverables for Project Alpha</span>
        <div class="flex gap--small">
          <span class="label label--small label--underline">11:59 PM</span>
          <span class="label label--small label--underline">Important</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/item#with-meta-and-index)

#### With Meta and Index

The most detailed variant includes both a meta section and an index number, useful for ordered lists or when additional context is needed. 

1

Team Meeting Weekly team sync-up

9:00 AM - 10:00 AM Confirmed

2

Client Presentation Quarterly review with XYZ Corp

2:00 PM - 3:30 PM Tentative

3

Project Deadline Submit final deliverables for Project Alpha

11:59 PM Important

4

Code Review Review pull requests for Project Beta

3:30 PM - 4:30 PM High Priority

1

Team Meeting Weekly team sync-up

9:00 AM - 10:00 AM Confirmed

2

Client Presentation Quarterly review with XYZ Corp

2:00 PM - 3:30 PM Tentative

3

Project Deadline Submit final deliverables for Project Alpha

11:59 PM Important

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Item With Meta and Index

Copy  Copied  Show more  Show less 
    
    
    <div class="item">
      <div class="meta">
        <span class="index">1</span>
      </div>
      <div class="content">
        <span class="title title--small">Team Meeting</span>
        <span class="description">Weekly team sync-up</span>
        <div class="flex gap--small">
          <span class="label label--small label--underline">9:00 AM - 10:00 AM</span>
          <span class="label label--small label--underline">Confirmed</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/item#simple)

#### Simple

The simplest variant focuses purely on content, ideal for basic lists or when metadata isn't needed. 

Team Meeting Weekly team sync-up

9:00 AM - 10:00 AM Confirmed

Client Presentation Quarterly review with XYZ Corp

2:00 PM - 3:30 PM Tentative

Project Deadline Submit final deliverables for Project Alpha

11:59 PM Important

Code Review Review pull requests for Project Beta

3:30 PM - 4:30 PM High Priority

Team Meeting Weekly team sync-up

9:00 AM - 10:00 AM Confirmed

Client Presentation Quarterly review with XYZ Corp

2:00 PM - 3:30 PM Tentative

Project Deadline Submit final deliverables for Project Alpha

11:59 PM Important

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Item Simple

Copy  Copied  Show more  Show less 
    
    
    <div class="item">
      <div class="content">
        <span class="title title--small">Team Meeting</span>
        <span class="description">Weekly team sync-up</span>
        <div class="flex gap--small">
          <span class="label label--small label--underline">9:00 AM - 10:00 AM</span>
          <span class="label label--small label--underline">Confirmed</span>
        </div>
      </div>
    </div>

[ Rich Text Display formatted paragraphs with alignment and size variants Previous  ](/framework_v2/rich_text)

[ Table Create data tables optimized for 1-bit rendering Next  ](/framework_v2/table)

[ Framework Index  ](/framework_v2)

---

# label

# Label

The Label system provides various styles for displaying text labels, with options for different visual treatments and sizes. Labels can be used to highlight text, show status, or create visual hierarchy in your interface. 

[#](https://usetrmnl.com/framework_v2/label#label-variants)

### Label Variants

Labels come in several variants to suit different use cases. Each variant provides a distinct visual style while maintaining consistent spacing and sizing. 

Label

Outline Label

Underline Label

Gray Out Label

Inverted Label

Label

Outline Label

Underline Label

Gray Out Label

Inverted Label

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Label Variants

Copy  Copied  Show more  Show less 
    
    
    <!-- Default Labels -->
    <span class="label">Label</span>
    <span class="label label--outline">Outline Label</span>
    <span class="label label--underline">Underline Label</span>
    <span class="label label--gray-out">Gray Out Label</span>
    <span class="label label--inverted">Inverted Label</span>
    
    <!-- Small Labels -->
    <span class="label label--small">Label</span>
    <span class="label label--small label--outline">Outline Label</span>
    <span class="label label--small label--underline">Underline Label</span>
    <span class="label label--small label--gray-out">Gray Out Label</span>
    <span class="label label--small label--inverted">Inverted Label</span>

[#](https://usetrmnl.com/framework_v2/label#text-overflow-behavior)

### Text Overflow Behavior

Labels can handle longer text content through natural wrapping or text clamping. Understanding how labels behave with overflow content helps ensure your interface remains readable and visually balanced. 

[#](https://usetrmnl.com/framework_v2/label#multi-line-wrapping)

#### Multi-line Wrapping

By default, labels will wrap to multiple lines when content exceeds the available width, maintaining readability for longer text. 

This longer label will wrap to multiple lines when it exceeds the width

This longer label will wrap to multiple lines when it exceeds the width

This longer label will wrap to multiple lines when it exceeds the width

This longer label will wrap to multiple lines when it exceeds the width

This longer label will wrap to multiple lines when it exceeds the width

This longer label will wrap to multiple lines when it exceeds the width

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Label Multi-line

Copy  Copied  Show more  Show less 
    
    
    <!-- Labels with longer text will wrap naturally -->
    <span class="label">This longer label will wrap to multiple lines when it exceeds the width</span>

[#](https://usetrmnl.com/framework_v2/label#text-clamping)

#### Text Clamping

Use the framework's `data-clamp` attribute to limit labels to a specific number of lines with ellipsis overflow. 

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

This is a very long label text that would normally wrap to many lines but demonstrates how clamping behavior works with different variants and line limits to show ellipsis overflow

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Label Clamped

Copy  Copied  Show more  Show less 
    
    
    <!-- Single line clamping with data attribute -->
    <span class="label" data-clamp="1">
      This text will be clamped to one line
    </span>
    
    <!-- Two line clamping -->
    <span class="label" data-clamp="2">
      This text will be clamped to exactly two lines with ellipsis
    </span>

[#](https://usetrmnl.com/framework_v2/label#responsive-features)

### Responsive Features

Label components support all three responsive systems: size-based, orientation-based, and bit-depth variants. This enables precise control over label appearance across different device configurations. 

[#](https://usetrmnl.com/framework_v2/label#size-based-responsive)

#### Size-Based Responsive

Apply different label variants at different screen sizes using breakpoint prefixes like `md:` and `lg:`. 

Responsive Label Default â†’ Outline (md) â†’ Inverted (lg)

Progressive Styles Small â†’ Outline (sm) â†’ Underline (md)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Label Size Responsive

Copy  Copied  Show more  Show less 
    
    
    <!-- Progressive label styling across screen sizes -->
    <span class="label md:label--outline lg:label--inverted">
      Responsive Label
    </span>
    
    <!-- Multiple breakpoint combinations -->
    <span class="label label--small sm:label--outline md:label--underline">
      Progressive Styles
    </span>

[#](https://usetrmnl.com/framework_v2/label#orientation-based-responsive)

#### Orientation-Based Responsive

Use `portrait:` prefix to apply different label styles when the screen is in portrait orientation. 

Orientation Aware Outline (landscape) â†’ Inverted (portrait)

Portrait Enhancement Plain â†’ Underline (portrait)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Label Orientation Responsive

Copy  Copied  Show more  Show less 
    
    
    <!-- Different styles for landscape vs portrait -->
    <span class="label label--outline portrait:label--inverted">
      Orientation Aware
    </span>
    
    <!-- Portrait-only styling -->
    <span class="label portrait:label--underline">
      Portrait Enhancement
    </span>

[#](https://usetrmnl.com/framework_v2/label#bit-depth-responsive)

#### Bit-Depth Responsive

Use bit-depth prefixes like `1bit:`, `2bit:`, and `4bit:` to optimize label appearance for different display color capabilities. 

Display Optimized Inverted (1bit) â†’ Outline (2bit) â†’ Underline (4bit)

Selective Styling Outline (1bit) â†’ Gray-out (4bit)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Label Bit-Depth Responsive

Copy  Copied  Show more  Show less 
    
    
    <!-- Different styles for different bit-depth displays -->
    <span class="label 1bit:label--inverted 2bit:label--outline 4bit:label--underline">
      Display Optimized
    </span>
    
    <!-- Selective bit-depth targeting -->
    <span class="label 1bit:label--outline 4bit:label--gray-out">
      Selective Styling
    </span>

[#](https://usetrmnl.com/framework_v2/label#combined-responsive-features)

#### Combined Responsive Features

Combine multiple responsive systems for highly targeted label styling. Use size, orientation, and bit-depth modifiers together following the pattern: `size:orientation:bit-depth:utility`. 

Advanced Targeting Complex responsive combinations

Multi-Condition Multiple responsive conditions

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Label Combined Responsive

Copy  Copied  Show more  Show less 
    
    
    <!-- Highly targeted responsive combinations -->
    <span class="label md:portrait:2bit:label--inverted lg:4bit:label--outline">
      Advanced Targeting
    </span>
    
    <!-- Multiple responsive conditions -->
    <span class="label sm:1bit:label--underline md:portrait:label--outline lg:4bit:label--gray-out">
      Multi-Condition
    </span>

[ Value Display data values with consistent formatting Previous  ](/framework_v2/value)

[ Description Format descriptive text with standardized styles Next  ](/framework_v2/description)

[ Framework Index  ](/framework_v2)

---

# layout

# Layout

The Layout system provides flexible containers for organizing content either horizontally or vertically, with various alignment options. It uses CSS Flexbox under the hood to create consistent and responsive layouts. 

[#](https://usetrmnl.com/framework_v2/layout#base-structure)

### Base Structure

The Layout system provides two fundamental ways to organize content: horizontal and vertical arrangements. These base structures form the foundation for more complex layouts. 

[#](https://usetrmnl.com/framework_v2/layout#row-layout)

#### Row Layout

The `layout layout--row` classes create a horizontal layout. Items are arranged horizontally from left to right, with center alignment as the default positioning. 

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Layout Horizontal

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--row">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/layout#column-layout)

#### Column Layout

The `layout layout--col` classes create a vertical layout. Items are arranged vertically from top to bottom, with center alignment as the default positioning. 

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Layout Vertical

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--col">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/layout#alignment-modifiers)

### Alignment Modifiers

Once you've chosen a base layout structure, you can apply these modifier classes to control how items are aligned within their container. The system provides both directional alignment (top/bottom/left/right) and centering options. 

[#](https://usetrmnl.com/framework_v2/layout#horizontal-alignment)

#### Horizontal Alignment

Use `layout--left`, `layout--center-x`, or `layout--right` to control horizontal alignment. 

Left

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Layout Left Alignment

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--left">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/layout#vertical-alignment)

#### Vertical Alignment

Use `layout--top`, `layout--center-y`, or `layout--bottom` to control vertical alignment. 

Top

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Layout Top Alignment

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--row layout--top">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/layout#center-alignment)

#### Center Alignment

Use `layout--center` to center items both horizontally and vertically, or use `layout--center-x` and `layout--center-y` for individual axis control. 

Center

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Layout Center Alignment

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--row layout--center">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>
    
    <!-- Or with individual axis control -->
    <div class="layout layout--row layout--center-x layout--center-y">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/layout#stretch-modifiers)

### Stretch Modifiers

Stretch modifiers allow you to control how child elements fill the available space within a layout. You can apply these modifiers either to the layout container or to individual child elements. 

[#](https://usetrmnl.com/framework_v2/layout#container-stretch)

#### Container Stretch

Use `layout--stretch` to make all children stretch in both directions. You can also use `layout--stretch-x` and `layout--stretch-y` for individual axis control. These modifiers work with both row and column layouts. 

[#](https://usetrmnl.com/framework_v2/layout#row-layout-stretch)

#### Row Layout Stretch

Examples of stretch behavior in row layouts. Use `layout--stretch` for both directions, `layout--stretch-x` for horizontal, or `layout--stretch-y` for vertical stretch. 

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Row Layout Full Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--row layout--stretch">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Row Layout Horizontal Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--row layout--stretch-x">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Row Layout Vertical Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--row layout--stretch-y">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/layout#column-layout-stretch)

#### Column Layout Stretch

Examples of stretch behavior in column layouts. The same modifiers work consistently regardless of layout direction. 

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Column Layout Full Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--col layout--stretch">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Column Layout Horizontal Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--col layout--stretch-x">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Column Layout Vertical Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--col layout--stretch-y">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/layout#child-element-stretch)

#### Child Element Stretch

Use `stretch-x` and `stretch-y` classes on individual elements to control their stretch behavior within row or column layouts. 

Item 1

Item 2 (stretched)

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Layout Row + Individual Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--row">
      {{ Item 1 }}
      <div class="stretch-x">{{ Stretched Item }}</div>
      {{ Item 3 }}
    </div>

Item 1

Item 2   
(stretched)

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Layout Column + Individual Stretch

Copy  Copied  Show more  Show less 
    
    
    <div class="layout layout--col">
      {{ Item 1 }}
      <div class="stretch-y">{{ Stretched Item }}</div>
      {{ Item 3 }}
    </div>

[ View Show your plugin in different sizes with Mashup view containers Previous  ](/framework_v2/view)

[ Title Bar Standardized title bar with plugin information and instance details Next  ](/framework_v2/title_bar)

[ Framework Index  ](/framework_v2)

---

# mashup

# Mashup

The Mashup system provides gridâ€‘based containers for assembling multiple plugin views within a single interface. 

[#](https://usetrmnl.com/framework_v2/mashup#mashup-layouts)

### Mashup Layouts

Each mashup layout provides a specific arrangement of plugin views. By applying modifier classes, you can position plugins in various configurations. 

[#](https://usetrmnl.com/framework_v2/mashup#1-left-1-right)

#### 1 Left, 1 Right

In the 1Lx1R layout, the first plugin occupies the left column while the second occupies the right column. 

Plugin A

Plugin B

Copy  Copied  Show more  Show less 
    
    
    <div class="mashup mashup--1Lx1R">
      <div class="view view--half_vertical">
        <div class="layout">
          <span class="label">Plugin A</span>
        </div>
      </div>
      <div class="view view--half_vertical">
        <div class="layout">
          <span class="label">Plugin B</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/mashup#1-top-1-bottom)

#### 1 Top, 1 Bottom

In the 1Tx1B layout, one plugin spans the top row while the other occupies the bottom row. 

Plugin A

Plugin B

Copy  Copied  Show more  Show less 
    
    
    <div class="mashup mashup--1Tx1B">
      <div class="view view--half_horizontal">
        <div class="layout">
          <span class="label">Plugin A</span>
        </div>
      </div>
      <div class="view view--half_horizontal">
        <div class="layout">
          <span class="label">Plugin B</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/mashup#1-left-2-right)

#### 1 Left, 2 Right

In the 1Lx2R layout, one plugin occupies the left column while two plugins stack in the right column. 

Plugin A

Plugin B

Plugin C

Copy  Copied  Show more  Show less 
    
    
    <div class="mashup mashup--1Lx2R">
      <div class="view view--half_vertical">
        <div class="layout">
          <span class="label">Plugin A</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin B</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin C</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/mashup#2-left-1-right)

#### 2 Left, 1 Right

The 2Lx1R layout stacks two plugins in the left column, with a single plugin in the right column. 

Plugin A

Plugin B

Plugin C

Copy  Copied  Show more  Show less 
    
    
    <div class="mashup mashup--2Lx1R">
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin A</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin B</span>
        </div>
      </div>
      <div class="view view--half_vertical">
        <div class="layout">
          <span class="label">Plugin C</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/mashup#2-top-1-bottom)

#### 2 Top, 1 Bottom

In the 2Tx1B layout, two plugins are presented side by side in the top row, with a single plugin in the bottom row. 

Plugin A

Plugin B

Plugin C

Copy  Copied  Show more  Show less 
    
    
    <div class="mashup mashup--2Tx1B">
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin A</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin B</span>
        </div>
      </div>
      <div class="view view--half_horizontal">
        <div class="layout">
          <span class="label">Plugin C</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/mashup#1-top-2-bottom)

#### 1 Top, 2 Bottom

The 1Tx2B layout places one plugin in the top row, with two plugins side by side in the bottom row. 

Plugin A

Plugin B

Plugin C

Copy  Copied  Show more  Show less 
    
    
    <div class="mashup mashup--1Tx2B">
      <div class="view view--half_horizontal">
        <div class="layout">
          <span class="label">Plugin A</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin B</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin C</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/mashup#2-x-2-grid)

#### 2 x 2 Grid

The 2x2 grid arranges four plugins in a grid pattern. 

Plugin A

Plugin B

Plugin C

Plugin D

Copy  Copied  Show more  Show less 
    
    
    <div class="mashup mashup--2x2">
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin A</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin B</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin C</span>
        </div>
      </div>
      <div class="view view--quadrant">
        <div class="layout">
          <span class="label">Plugin D</span>
        </div>
      </div>
    </div>

[ Columns Implement zero-config column layouts for content organization Previous  ](/framework_v2/columns)

[ Title Style headings with consistent typography Next  ](/framework_v2/title)

[ Framework Index  ](/framework_v2)

---

# overflow

# Overflow

The Overflow engine automatically lays out items into up to N columns and adds an â€œand X moreâ€� label when content exceeds the available height. It also applies text clamping per-column width and handles grouped headers without leaving orphaned headings. 

[#](https://usetrmnl.com/framework_v2/overflow#basic-usage)

### Basic Usage

Place items inside a `.columns` container and set the maximum columns on the container with `data-max-columns`. The engine computes the height from the parent container and manages hidden items automatically. 

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Overflow Max 1 Column

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="1">
      <div class="column">
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small">Title goes here</span>
            <span class="description">Description goes here</span>
            <div class="flex gap--small">
              <span class="label label--small label--underline">Time</span>
              <span class="label label--small label--underline">Status</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small">Title goes here</span>
            <span class="description">Description goes here</span>
            <div class="flex gap--small">
              <span class="label label--small label--underline">Time</span>
              <span class="label label--small label--underline">Status</span>
            </div>
          </div>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/overflow#automatic-multi-column-layout)

### Automatic Multi-Column Layout

Increase `data-max-columns` to allow the engine to distribute visible items across more columns when beneficial. 

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Overflow Max 2 Columns

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="2">
      <div class="column">
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small">Title goes here</span>
            <span class="description">Description goes here</span>
            <div class="flex gap--small">
              <span class="label label--small label--underline">Time</span>
              <span class="label label--small label--underline">Status</span>
            </div>
          </div>
        </div>
      </div>
    </div>

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Overflow Max 3 Columns

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="3">
      <div class="column">
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small">Title goes here</span>
            <span class="description">Description goes here</span>
            <div class="flex gap--small">
              <span class="label label--small label--underline">Time</span>
              <span class="label label--small label--underline">Status</span>
            </div>
          </div>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/overflow#clamp-aware-overflow)

### Clamp-aware Overflow

The engine re-clamps text for the actual column width. Apply `data-clamp` on titles or descriptions as needed. 

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Overflow + Clamp Title 1 â€¢ Description 3 â€¢ Max 2 Columns

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="2">
      <div class="column">
        <div class="item">
          <span class="title" data-clamp="1">Title textâ€¦</span>
          <span class="description" data-clamp="3">Description textâ€¦</span>
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/overflow#group-headers)

### Group Headers

Mark headers with `group-header`. The engine avoids orphaned headers and duplicates a header at the start of the next column when a group spills over. 

Today

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

Tomorrow

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

This Week

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Group Headers Smart Distribution

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="3">
      <div class="column">
        <span class="label label--medium group-header" data-group-header="true">Today</span>
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small" data-clamp="1">Title goes here</span>
            <span class="description" data-clamp="2">Description goes here</span>
          </div>
        </div>
        <span class="label label--medium group-header" data-group-header="true">Tomorrow</span>
        <div class="item">
          <div class="meta"></div>
          <div class="content">
            <span class="title title--small" data-clamp="1">Title goes here</span>
            <span class="description" data-clamp="2">Description goes here</span>
          </div>
        </div>
      </div>
    </div>

  * Headers are never left as the last visible element in a column.
  * When a group spills, a gray duplicate header is added to the next column for context.



[#](https://usetrmnl.com/framework_v2/overflow#harmonious-group-columns)

### Harmonious Group Columns

When the number of group headers equals the maximum columns and there's enough space, the engine places each group in its own column for a more harmonious layout. 

Today

1

Morning MeetingTeam sync and updates

9:00 AM - 9:30 AMDaily

2

Code ReviewReview feature branch

10:30 AM - 11:30 AMReview

Tomorrow

1

Sprint PlanningPlan next two weeks

10:00 AM - 12:00 PMPlanning

2

Client DemoShow new features

2:00 PM - 3:00 PMDemo

3

Architecture ReviewDiscuss system design

4:00 PM - 5:00 PMTechnical

This Week

1

Security AuditQuarterly security review

WednesdaySecurity

2

Team RetrospectiveSprint reflection

FridayRetrospective

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Overflow Harmonious Groups 3 Columns (2/3/2)

Copy  Copied  Show more  Show less 
    
    
    <div class="columns" data-max-columns="3">
      <div class="column">
        <span class="label label--medium group-header" data-group-header="true">Today</span>
        <!-- 2 items -->
        <div class="item"><div class="meta"></div><div class="content"><span class="title title--small">Title</span><span class="description">Description</span><div class="flex gap--small"><span class="label label--small label--underline">Time</span><span class="label label--small label--underline">Status</span></div></div></div>
        <div class="item"><div class="meta"></div><div class="content"><span class="title title--small">Title</span><span class="description">Description</span><div class="flex gap--small"><span class="label label--small label--underline">Time</span><span class="label label--small label--underline">Status</span></div></div></div>
    
        <span class="label label--medium group-header" data-group-header="true">Tomorrow</span>
        <!-- 3 items -->
        <div class="item"><div class="meta"></div><div class="content"><span class="title title--small">Title</span><span class="description">Description</span><div class="flex gap--small"><span class="label label--small label--underline">Time</span><span class="label label--small label--underline">Status</span></div></div></div>
        <div class="item"><div class="meta"></div><div class="content"><span class="title title--small">Title</span><span class="description">Description</span><div class="flex gap--small"><span class="label label--small label--underline">Time</span><span class="label label--small label--underline">Status</span></div></div></div>
        <div class="item"><div class="meta"></div><div class="content"><span class="title title--small">Title</span><span class="description">Description</span><div class="flex gap--small"><span class="label label--small label--underline">Time</span><span class="label label--small label--underline">Status</span></div></div></div>
    
        <span class="label label--medium group-header" data-group-header="true">This Week</span>
        <!-- 2 items -->
        <div class="item"><div class="meta"></div><div class="content"><span class="title title--small">Title</span><span class="description">Description</span><div class="flex gap--small"><span class="label label--small label--underline">Time</span><span class="label label--small label--underline">Status</span></div></div></div>
        <div class="item"><div class="meta"></div><div class="content"><span class="title title--small">Title</span><span class="description">Description</span><div class="flex gap--small"><span class="label label--small label--underline">Time</span><span class="label label--small label--underline">Status</span></div></div></div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/overflow#backwards-compatibility)

### Backwards compatibility

The Overflow engine remains compatible with legacy list attributes used in older plugins. When these attributes are present on a descendant `.column` or `.list`, the engine will promote them onto the enclosing `.columns` container at runtime. 

[#](https://usetrmnl.com/framework_v2/overflow#supported-legacy-attributes)

#### Supported legacy attributes

  * `data-list-limit="true"`: opts the list into Overflow. If the enclosing `.columns` lacks `data-max-columns`, it will default to `1`.
  * `data-list-max-columns`: sets the maximum column count. Responsive variants (e.g., `-sm`, `-md`) on the legacy element are honored when present; the base value is used for the engine.
  * `data-list-max-height`: sets the height budget for the columns. Use a pixel value (e.g., `340`) or `auto` to inherit from the parent container.
  * `data-list-hidden-count`: when set to `false`, suppresses the trailing â€œand N moreâ€� label.



[#](https://usetrmnl.com/framework_v2/overflow#legacy-example-still-works)

#### Legacy example (still works)

1

Team Meeting Strategy Alignment and Cross-Functional Planning SessionWeekly team sync-up covering priorities, blockers, budget considerations, and stakeholder communications to ensure alignment across engineering, design, and product. Includes a short roundtable to identify risks and action items for the upcoming sprint.

9:00 AM - 10:00 AMConfirmed

2

Client Presentation and Roadmap Discussion for Strategic AccountsQuarterly review with XYZ Corp including performance metrics, feature delivery timelines, risk mitigation strategies, and next quarter initiatives. Emphasis on outcomes, demos, and a feedback capture to inform prioritization.

2:00 PM - 3:30 PMTentative

3

Project Deadline and Final Deliverables Submission for Project AlphaSubmit final deliverables for Project Alpha, finalize documentation, complete acceptance criteria sign-off, and communicate release notes to stakeholders and customer success. Coordinate rollout and post-release monitoring.

11:59 PMImportant

4

Code Review and Quality Gate for Project BetaReview pull requests for Project Beta focusing on architectural consistency, readability, performance implications, and test coverage. Capture comments, coordinate pairing sessions, and merge to staging upon approval.

3:30 PM - 4:30 PMHigh Priority

5

Database Backup and Recovery DrillPerform weekly database maintenance, validate backup integrity, and conduct a restoration drill to verify recovery procedures. Update runbooks, document RPO/RTO metrics, and notify stakeholders of status.

6:00 PM - 7:00 PMAutomated

6

Security Audit and Vulnerability AssessmentMonthly security assessment including dependency scanning, penetration test review, policy updates, and remediation planning. Document findings and circulate action items with target dates.

10:00 AM - 12:00 PMCritical

7

Performance Review and Growth PlanQuarterly team performance evaluation with peer feedback, OKR check-ins, and growth plan alignment. Capture strengths, areas for improvement, and define measurable development goals.

1:00 PM - 2:30 PMScheduled

8

System Update and Patch ManagementApply latest security patches, perform canary releases, validate compatibility, and monitor post-deployment metrics. Coordinate with infra and support to minimize downtime.

11:00 PM - 12:00 AMMaintenance

9

Training Session and Onboarding WorkshopNew employee onboarding covering environment setup, coding standards, product architecture, and support processes. Includes hands-on labs and a Q&A block for new joiners.

9:30 AM - 11:30 AMRequired

10

Budget Planning and Resource AllocationQ4 financial planning meeting focusing on resource allocation, cost optimization, vendor contracts, and ROI analysis. Review forecasts, risks, and contingency scenarios.

3:00 PM - 5:00 PMPlanning

11

Vendor Meeting and Partnership ReviewQuarterly vendor review covering SLAs, pricing models, roadmap alignment, and joint marketing opportunities. Capture follow-ups and draft renewal recommendations.

2:00 PM - 3:00 PMBusiness

12

Documentation Update and Knowledge Base RefreshUpdate project documentation with recent architectural decisions, API changes, and onboarding guides. Clean up outdated sections and consolidate best practices.

4:00 PM - 5:30 PMDocumentation

13

Infrastructure Check and Capacity PlanningMonitor server health and performance; analyze utilization trends, error budgets, and scaling thresholds. Propose capacity adjustments and track action items.

8:00 AM - 9:00 AMMonitoring

14

Coffee Chat and Team BondingInformal team bonding session to share wins, learnings, and shout-outs. Encourage cross-functional engagement and discuss non-critical topics in a relaxed format.

10:15 AM - 10:45 AMSocial

15

API Testing and Contract ValidationValidate new API endpoints including schemas, error handling, pagination, and backward compatibility. Update test harnesses and publish changelogs.

11:00 AM - 12:30 PMTesting

16

Customer Feedback Review and PrioritizationAnalyze user feedback and feature requests; categorize themes, score impact vs. effort, and propose a prioritized list to inform roadmap decisions.

1:30 PM - 2:30 PMResearch

17

Sprint Planning and Capacity AlignmentPlan upcoming development sprint, confirm capacity, refine stories, and align on definitions of done. Identify dependencies and assign owners.

3:00 PM - 4:00 PMPlanning

18

Deployment Pipeline and Release AutomationSet up automated deployment process with CI/CD enhancements, environment promotion strategies, and rollback procedures. Measure lead time and change failure rate.

4:30 PM - 6:00 PMDevOps

19

Learning Session and Technology Deep-DiveTechnology deep-dive presentation on frameworks, design patterns, and recent experiments. Encourage knowledge sharing and propose next steps for adoption.

5:00 PM - 6:00 PMEducation

20

Retrospective and Continuous ImprovementTeam reflection on past sprint, analyze what went well, what didnâ€™t, and actions to try next. Focus on measurable outcomes and shared accountability.

6:00 PM - 7:00 PMReview

21

Mobile App Testing and Cross-Platform ValidationCross-platform compatibility testing across devices and OS versions; validate performance, accessibility, and feature parity. File issues and track resolutions.

7:30 PM - 8:30 PMQA

22

Data Analytics and Monthly Usage ReportsGenerate monthly usage reports, review funnel performance, retention cohorts, and top user journeys. Identify insights and recommend experiments.

9:00 PM - 10:00 PMAnalytics

23

Emergency Response and Incident ProtocolOn-call incident response protocol review including paging configuration, escalation charts, and postmortem templates. Run a tabletop exercise and document gaps.

12:00 AM - 12:00 AMEmergency

24

Testing and Quality AssuranceUnit and integration testing focused on critical paths, error handling, and edge cases. Improve coverage, parallelize suites, and reduce flakiness.

4:00 PM - 5:30 PMConfirmed

25

Roadmap Review and Stakeholder AlignmentReview product roadmap, confirm priorities with stakeholders, align cross-functional timelines, and identify risks and dependencies for the next release train.

10:00 AM - 11:30 AMAlignment

26

Incident Postmortem and Action ItemsWalk through recent incident timeline, document contributing factors, define preventative measures, assign owners, and schedule follow-up validations.

1:00 PM - 2:00 PMPostmortem

27

Codebase Refactoring SessionTarget high-complexity modules for refactoring, reduce technical debt, improve readability and testability, and establish guardrails for future changes.

2:30 PM - 4:00 PMRefactor

28

Cross-Region Failover DrillPractice disaster recovery by simulating regional outage, validate failover procedures, measure recovery time objectives, and capture improvement opportunities.

7:00 PM - 8:00 PMDR Drill

29

Feature Flag Rollout PlanningDefine phased enablement strategy for new capabilities, configure targeting rules, plan monitoring and rollback, and document success criteria.

11:00 AM - 12:00 PMFeature Flags

30

Partner Integration TestingCoordinate end-to-end tests with external partner APIs, validate contract assumptions, handle error scenarios, and sign off on production readiness.

3:00 PM - 4:30 PMIntegration

31

Data Privacy Compliance ReviewAudit data collection and retention policies against regulatory requirements, update DPIAs, verify user consent flows, and schedule remediation tasks.

9:00 AM - 10:00 AMCompliance

32

Hiring Panel InterviewsConduct technical and behavioral interviews, calibrate scoring rubric with panelists, debrief on candidates, and determine next steps.

12:30 PM - 3:00 PMHiring

33

Community AMA and Product Q&ALive Q&A with community members to discuss product direction, address questions, gather feedback, and share upcoming improvements.

5:00 PM - 6:00 PMCommunity

34

Finance Reconciliation and ReportingMonthly financial reconciliation covering invoices, payouts, refunds, and accruals. Prepare summary report and circulate to stakeholders.

4:30 PM - 6:00 PMFinance

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Overflow Legacy attributes

Copy  Copied  Show more  Show less 
    
    
    <div class="columns">
      <div class="column"
           data-list-limit="true"
           data-list-max-height="340"
           data-list-hidden-count="true"
           data-list-max-columns="2">
        <!-- Items go here -->
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/overflow#notes)

#### Notes

  * If both legacy and new attributes are present, the explicit `.columns[data-max-columns]` takes precedence for column count.
  * When only `data-list-limit` is present, the engine defaults to 1 column.
  * When `data-list-hidden-count` is omitted, the hidden count label is shown.



[ Aspect Ratio Maintain consistent proportions for elements regardless of their content Previous  ](/framework_v2/aspect_ratio)

[ Table Overflow Handle table rows overflow Next  ](/framework_v2/table_overflow)

[ Framework Index  ](/framework_v2)

---

# pixel_perfect

# Pixel Perfect

The Pixel Perfect system ensures text renders with crisp edges by aligning text precisely to the pixel grid. We use specialized pixel fonts designed to work at specific pixel sizes, producing the sharpest possible rendering and preventing sub-pixel rendering issues that cause text to appear blurry or inconsistently bold in final renders when converting layouts to a 1-bit color space for e-ink displays. 

[#](https://usetrmnl.com/framework_v2/pixel_perfect#usage)

### Usage

To enable pixel perfect text rendering, add the `data-pixel-perfect="true"` attribute to your text element. 

Pixel Perfect Title

This text is rendered with pixel perfect alignment, ensuring that each line falls exactly on the pixel grid. Depending on the parent width, the system automatically breaks text into lines and adjusts each line's width.

This produces crisp, sharp text edges that renders perfectly in a 1-bit color space.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Pixel Perfect With Pixel Perfect Applied

Copy  Copied  Show more  Show less 
    
    
    <span class="title" data-pixel-perfect="true">Pixel Perfect Title</span>
    <div class="content" data-pixel-perfect="true">
      <p>This text will be aligned to the pixel grid for crisp rendering.</p>
    </div>

[#](https://usetrmnl.com/framework_v2/pixel_perfect#why)

### Why?

Text rendering on digital displays involves complex anti-aliasing techniques to make text appear smooth at various sizes. This process creates partially opaque pixels (gray pixels) at the edges of characters to create the illusion of smoothness. 

When text isn't perfectly aligned to the pixel grid, these anti-aliased pixels can appear inconsistently, particularly with centered text. This is especially problematic for e-ink displays that use a 1-bit color space (just black and white, no grays), where anti-aliased gray pixels are forced to become either fully black or fully white. The result is text that appears randomly bold or distorted in final renders, creating an unprofessional and difficult-to-read presentation. 

Our system uses pixel fonts that are specifically designed to work at particular pixel sizes and their multipliers. These fonts are meticulously crafted to perfectly align with the pixel grid, ensuring each character renders with maximum sharpness and clarity. By combining these specialized fonts with our pixel-perfect alignment technique, we achieve optimal text rendering for e-ink displays. 

[#](https://usetrmnl.com/framework_v2/pixel_perfect#how-it-works)

### How It Works

The Pixel Perfect system works by applying the following techniques to elements with `data-pixel-perfect="true"`: 

  * The system measures the parent element's width to determine whether it's odd or even
  * The text content is broken into individual lines
  * Each line is wrapped in a span element
  * Each span's width is adjusted to match the parent's pattern: even widths for even-width parents, odd widths for odd-width parents



By analyzing the parent container's dimensions and adjusting each line accordingly, the system ensures text falls precisely on the pixel grid. This precise adjustment ensures text is perfectly aligned to the pixel grid, eliminating sub-pixel rendering issues on 1-bit displays. 

[#](https://usetrmnl.com/framework_v2/pixel_perfect#cross-platform-consistency)

### Cross-Platform Consistency

Different browsers render text differently across operating systems. For example, Chrome on macOS handles font rendering differently than Chrome on Linux or Windows. This means developers see different results depending on their development environment. 

The Pixel Perfect system unifies the developer experience across platforms by enforcing consistent rendering rules regardless of the browser or operating system. This ensures that text renders with the same crispness and weight consistency on the final e-ink display, regardless of where it was developed or previewed. 

[ Content Limiter Change font size when content overflows to fit within the container Previous  ](/framework_v2/content_limiter)

[ Framework Runtime How the runtime applies layout, clamping, overflow, and presentation adjustments at render time Next  ](/framework_v2/framework_runtime)

[ Framework Index  ](/framework_v2)

---

# progress

# Progress

The Progress component provides visual indicators for completion status and step-based processes. Optimized for e-ink displays with bitmap patterns for 1-bit displays and solid colors for 4-bit+ displays. 

[#](https://usetrmnl.com/framework_v2/progress#progress-variants)

### Progress Variants

Progress indicators come in two variants: bar for continuous progress and dots for discrete steps. Each variant supports three sizes (small, default, large) and three emphasis levels. 

[#](https://usetrmnl.com/framework_v2/progress#bar-progress)

#### Bar Progress

The bar variant displays progress as a horizontal filled bar. Use the `fill` element with inline width styling to set the progress percentage. 

Download Progress 75%

Battery Level 90%

Storage Used 50%

Default Emphasis 60%

Emphasis 2 60%

Emphasis 3 60%

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Progress Bar Variant

Copy  Copied  Show more  Show less 
    
    
    <!-- Default bar -->
    <div class="progress-bar">
      <div class="label">
        <span class="label">Download Progress</span>
        <span class="value value--xxsmall">75%</span>
      </div>
      <div class="track">
        <div class="fill" style="width: 75%"></div>
      </div>
    </div>
    
    <!-- Small variant -->
    <div class="progress-bar progress-bar--small">
      <div class="label">
        <span class="label label--small">Battery Level</span>
        <span class="value value--xxsmall">90%</span>
      </div>
      <div class="track">
        <div class="fill" style="width: 90%"></div>
      </div>
    </div>
    
    <!-- With emphasis -->
    <div class="progress-bar progress-bar--emphasis-2">
      <div class="label">
        <span class="label">Storage Used</span>
        <span class="value value--xxsmall">50%</span>
      </div>
      <div class="track">
        <div class="fill" style="width: 50%"></div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/progress#dots-progress)

#### Dots Progress

The dots variant shows discrete steps. Use `dot--filled` for completed steps and `dot--current` for the active step. 

Setup Progress 3 of 5

Week Progress Wed

Onboarding 2/4

Default Emphasis 2/3

Emphasis 2 2/3

Emphasis 3 2/3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Progress Dots Variant

Copy  Copied  Show more  Show less 
    
    
    <!-- Default dots -->
    <div class="progress-dots">
      <div class="label">
        <span class="label">Setup Progress</span>
        <span class="value value--xxsmall">3 of 5</span>
      </div>
      <div class="track">
        <div class="dot dot--filled"></div>
        <div class="dot dot--filled"></div>
        <div class="dot dot--filled"></div>
        <div class="dot dot--current"></div>
        <div class="dot"></div>
      </div>
    </div>
    
    <!-- Small variant -->
    <div class="progress-dots progress-dots--small">
      <div class="label">
        <span class="label label--small">Week Progress</span>
        <span class="value value--xxsmall">Wed</span>
      </div>
      <div class="track">
        <div class="dot dot--filled"></div>
        <div class="dot dot--filled"></div>
        <div class="dot dot--filled"></div>
        <div class="dot dot--current"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>

[ Chart Visualize data optimized for 1-bit rendering Previous  ](/framework_v2/chart)

[ Framework Index  ](/framework_v2)

---

# responsive

# Responsive

Beta

The Responsive system provides two complementary approaches for creating adaptive layouts: **Size-based** breakpoints that respond to screen dimensions, and **Bit-depth** variants that adapt to color capabilities. Together, they enable precise control over how your content appears across TRMNL's diverse range of devices. 

[#](https://usetrmnl.com/framework_v2/responsive#component-support)

## Component Support

Not all framework components support responsive variants. We're trying to keep the framework as minimal as we can while offering the features you need. 

This table shows which responsive features each framework component supports. Use this reference to understand what's possible with each component type. 

Component | Size | Orientation | Bit-Depth | Example Usage  
---|---|---|---|---  
Background  |  Yes  |  Yes  |  Auto  |  `md:bg--gray-50`  
Border  |  No  |  No  |  Auto  |  `border--h-3 (auto adapts)`  
Text  |  Yes  |  Yes  |  Auto  |  `lg:2bit:text--center`  
Visibility  |  Yes  |  Yes  |  Yes  |  `sm:1bit:hidden`  
Value  |  Yes  |  Yes  |  No  |  `md:value--large`  
Label  |  Yes  |  Yes  |  Yes  |  `md:portrait:2bit:label--inverted`  
Spacing  |  Yes  |  Yes  |  No  |  `md:p--large, lg:m--xlarge, md:portrait:my--24`  
Layout  |  Yes  |  Yes  |  No  |  `md:layout--row, lg:layout--col`  
Gap  |  Yes  |  Yes  |  No  |  `md:gap--large, lg:gap--xlarge`  
Flexbox  |  Yes  |  Yes  |  No  |  `md:flex--center, portrait:flex--col`  
Rounded  |  Yes  |  Yes  |  No  |  `md:rounded--large, lg:rounded--xlarge`  
Size  |  Yes  |  Yes  |  No  |  `md:w--large, lg:h--full`  
Grid  |  Yes  |  Yes  |  No  |  `md:grid--cols-3, md:portrait:col--span-2`  
Clamp  |  No  |  No  |  No  |  Not available  
Effects  |  No  |  No  |  No  |  `crisp-edges`  
Image  |  No  |  No  |  No  |  `image--fit-cover`  
  
[#](https://usetrmnl.com/framework_v2/responsive#legend)

### Legend

Auto  Built-in adaptive behavior

Yes  Full support

No  Not supported

[#](https://usetrmnl.com/framework_v2/responsive#size-based-responsive)

## Size-Based Responsive

[#](https://usetrmnl.com/framework_v2/responsive#how-it-works)

### How It Works

Each device automatically sets a size class (e.g., `screen--md`) based on its width, activating the appropriate responsive utilities. 

The system follows a mobile-first approach. When you use `md:value--large`, it applies on medium screens and larger. 

[#](https://usetrmnl.com/framework_v2/responsive#basic-usage)

### Basic Usage

Prefix any utility class with a breakpoint name followed by a colon. The style applies at that breakpoint and all larger sizes. 

Responsive Value

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Responsive Size Based

This example shows progressive sizing: the text starts at regular size, becomes large on medium screens (md:) and larger, then becomes xlarge on large screens (lg:) and larger. 

Copy  Copied  Show more  Show less 
    
    
    <!-- Regular by default, large on medium and above, xlarge on large and above -->
    <span class="value md:value--large lg:value--xlarge">
      Responsive Value
    </span>

[#](https://usetrmnl.com/framework_v2/responsive#available-breakpoints)

### Available Breakpoints

Three standard breakpoints cover all current supported TRMNL devices. Each breakpoint represents a minimum screen width. 

Prefix | Screen Class | Min Width | Example Devices  
---|---|---|---  
`sm:` |  `screen--sm` | 600px |  Kindle 2024   
`md:` |  `screen--md` | 800px |  TRMNL OG, TRMNL OG V2   
`lg:` |  `screen--lg` | 1024px |  TRMNL V2   
  
[#](https://usetrmnl.com/framework_v2/responsive#bit-depth-responsive)

## Bit-Depth Responsive

[#](https://usetrmnl.com/framework_v2/responsive#how-it-works-1)

### How It Works

Bit-depth responsiveness adapts styles based on the display's color capabilities. Unlike size-based breakpoints, bit-depth variants are not progressive - each variant targets a specific bit-depth only. 

When you use `4bit:bg--gray-65`, it applies only on 4-bit screens, not on 1-bit or 2-bit screens. 

[#](https://usetrmnl.com/framework_v2/responsive#basic-usage-1)

### Basic Usage

Prefix utilities with bit-depth values to create display-specific styles. This is especially useful for optimizing appearance across monochrome and grayscale screens. 

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Responsive Bit Depth

This example demonstrates bit-depth adaptation: the square appears black on 1-bit displays, gray-45 on 2-bit displays, and gray-75 on 4-bit displays. Each bit-depth variant targets only that specific display type. 

Copy  Copied  Show more  Show less 
    
    
    <!-- black on 1-bit, gray-45 on 2-bit, gray-75 on 4-bit screens -->
    <div class="h--36 w--36 rounded--large 1bit:bg--black 2bit:bg--gray-45 4bit:bg--gray-75"></div>

[#](https://usetrmnl.com/framework_v2/responsive#available-bit-depths)

### Available Bit-Depths

The framework supports three bit-depth variants corresponding to TRMNL's display technologies. Each targets specific color capabilities. 

Prefix | Screen Class | Color Support | Example Devices  
---|---|---|---  
`1bit:` |  `screen--1bit` |  Monochrome (2 shades)  |  TRMNL OG   
`2bit:` |  `screen--2bit` |  Grayscale (4 shades)  |  TRMNL OG V2   
`4bit:` |  `screen--4bit` |  Grayscale (16 shades)  |  TRMNL V2, Kindle 2024   
  
[#](https://usetrmnl.com/framework_v2/responsive#orientation-based-responsive)

## Orientation-Based Responsive

[#](https://usetrmnl.com/framework_v2/responsive#how-it-works-2)

### How It Works

Orientation variants adapt styles based on whether the screen is in landscape or portrait mode. Since landscape is the default, only `portrait:` variants are provided to avoid redundancy. 

Portrait variants are particularly useful for layout utilities like Flexbox, where you might want different flex directions or alignments when the screen is rotated. 

[#](https://usetrmnl.com/framework_v2/responsive#basic-usage-2)

### Basic Usage

Use the `portrait:` prefix to apply styles only when the screen is in portrait orientation: 

Item 1

Item 2

Item 3

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Responsive Orientation Based

This example shows orientation-responsive layout: items are arranged in a row by default (landscape), but automatically switch to a column layout when the screen is in portrait orientation using `portrait:flex--col`. 

Copy  Copied  Show more  Show less 
    
    
    <!-- Row layout in landscape, column layout in portrait -->
    <div class="flex flex--row portrait:flex--col gap">
      {{ Item 1 }}
      {{ Item 2 }}
      {{ Item 3 }}
    </div>

[#](https://usetrmnl.com/framework_v2/responsive#combining-all-systems)

## Combining All Systems

The responsive system lets you combine size, orientation, and bit-depth variants. This enables highly targeted designs that adapt to screen dimensions, orientation, and color capabilities. 

Aa

TRMNL OG

Aa

TRMNL OG V2

Aa

TRMNL V2

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Responsive Advanced Targeting

This advanced example combines size and bit-depth variants to target specific device configurations: `md:1bit:` targets medium+ 1-bit screens, `md:2bit:` targets medium+ 2-bit screens, and `lg:4bit:` targets large+ 4-bit screens. 

Copy  Copied  Show more  Show less 
    
    
    <!-- Simple orientation variant -->
    <div class="flex flex--row portrait:flex--col">...</div>
    
    <!-- Size + orientation -->
    <div class="text--center md:portrait:text--left">...</div>
    
    <!-- All three combined: size + orientation + bit-depth -->
    <div class="flex flex--row md:portrait:4bit:flex--col">
      <!-- Row layout by default -->
      <!-- Column layout on medium+ screens, in portrait, with 4-bit display -->
    </div>

[#](https://usetrmnl.com/framework_v2/responsive#pattern-and-order)

### Pattern and Order

When combining variants, follow this pattern: `size:orientation:bit-depth:utility`. This order flows from general layout concerns to specific display characteristics. 

Each modifier is optional and can be used independently. You might use just `portrait:flex--col` for orientation-specific layouts, or `md:value--large` for size-responsive typography, depending on your design needs. 

[#](https://usetrmnl.com/framework_v2/responsive#specificity-hierarchy)

### Specificity Hierarchy

When multiple responsive variants target the same property, CSS specificity determines which style applies. The framework follows a clear hierarchy: the more modifiers in a class, the higher its specificity. 

For example, `portrait:2bit:value--small` will override both `portrait:value--large` and `2bit:value--medium` when all conditions are met, because it has the most specific combination of modifiers. 

[#](https://usetrmnl.com/framework_v2/responsive#available-combinations)

### Available Combinations

The responsive system supports flexible modifier combinations, allowing you to target specific device configurations. The table below shows all available patterns, from simple single modifiers to complex multi-modifier combinations. Each combination becomes active only when all its conditions are met. 

Pattern | Example | When Active | Use Case  
---|---|---|---  
`size:` |  `md:value--large` |  Medium screens and larger  |  Responsive sizing based on screen width   
`orientation:` |  `portrait:flex--col` |  Portrait orientation only  |  Layout adjustments for vertical screens   
`bit-depth:` |  `4bit:bg--gray-75` |  4-bit displays only  |  Color optimization for specific displays   
`size:orientation:` |  `md:portrait:text--center` |  Medium+ screens in portrait  |  Size-aware orientation layouts   
`size:bit-depth:` |  `lg:2bit:value--xlarge` |  Large+ screens with 2-bit display  |  Display-specific sizing on larger screens   
`orientation:bit-depth:` |  `portrait:2bit:value--small` |  Portrait with 2-bit display  |  Orientation-aware display optimization   
`size:orientation:bit-depth:` |  `md:portrait:4bit:gap--large` |  Medium+ screens, portrait, 4-bit display  |  Highly specific device targeting   
  
[ Visibility Control element visibility based on display bit depth Previous  ](/framework_v2/visibility)

[ Responsive Test Test responsive utilities and compare SCSS mixins with CSS classes Next  ](/framework_v2/responsive_test)

[ Framework Index  ](/framework_v2)

---

# responsive_test

# Responsive Test

Beta

This page tests responsive utilities by comparing SCSS mixins with CSS classes across different screen conditions. Each test row shows an element styled with SCSS mixins alongside the same element styled with CSS utility classes. Both columns should look identical when the conditions are met, demonstrating that mixins and classes produce equivalent results. 

[#](https://usetrmnl.com/framework_v2/responsive_test#utilities)

### Utilities

[#](https://usetrmnl.com/framework_v2/responsive_test#background)

#### Background

Test Case

SCSS Mixin Result

CSS Class Result

md:bg--gray-50

@include screen.screen('md')

Gray bg on md+ screens

portrait:bg--gray-50

@include screen.screen('portrait')

Gray bg in portrait

2bit:bg--gray-50

@include screen.screen('2bit')

Gray bg on 2-bit screens

md:portrait:bg--gray-50

@include screen.screen('md', 'portrait')

Gray bg on md+ portrait

md:2bit:bg--gray-50

@include screen.screen('md', '2bit')

Gray bg on md+ 2-bit

portrait:2bit:bg--gray-50

@include screen.screen('portrait', '2bit')

Gray bg on portrait 2-bit

md:portrait:2bit:bg--gray-50

@include screen.screen('md', 'portrait', '2bit')

Gray bg on md+ portrait 2-bit

[#](https://usetrmnl.com/framework_v2/responsive_test#visibility)

#### Visibility

Test Case

SCSS Mixin Result

CSS Class Result

sm:hidden

@include screen.screen('sm')

Hidden on sm+ screens

portrait:hidden

@include screen.screen('portrait')

Hidden on portrait screens

4bit:hidden

@include screen.screen('4bit')

Hidden on 4-bit screens

md:portrait:hidden

@include screen.screen('md', 'portrait')

Hidden on md+ portrait screens

lg:2bit:hidden

@include screen.screen('lg', '2bit')

Hidden on lg+ 2-bit screens

portrait:4bit:hidden

@include screen.screen('portrait', '4bit')

Hidden on portrait 4-bit screens

md:portrait:2bit:hidden

@include screen.screen('md', 'portrait', '2bit')

Hidden on md+ portrait 2-bit screens

[#](https://usetrmnl.com/framework_v2/responsive_test#text)

#### Text

Test Case

SCSS Mixin Result

CSS Class Result

lg:text--center

@include screen.screen('lg')

Centered text on lg+ screens

Aa

Aa

portrait:text--center

@include screen.screen('portrait')

Centered text in portrait

Aa

Aa

2bit:text--center

@include screen.screen('2bit')

Centered text on 2-bit screens

Aa

Aa

md:portrait:text--center

@include screen.screen('md', 'portrait')

Centered on md+ portrait

Aa

Aa

lg:4bit:text--center

@include screen.screen('lg', '4bit')

Centered on lg+ 4-bit screens

Aa

Aa

portrait:2bit:text--center

@include screen.screen('portrait', '2bit')

Centered on portrait 2-bit screens

Aa

Aa

md:portrait:2bit:text--right

@include screen.screen('md', 'portrait', '2bit')

Right-aligned on md+ portrait 2-bit

Aa

Aa

[#](https://usetrmnl.com/framework_v2/responsive_test#flex)

#### Flex

Test Case

SCSS Mixin Result

CSS Class Result

md:flex--center

@include screen.screen('md')

Centered on md+ screens

portrait:flex--col

@include screen.screen('portrait')

Column layout in portrait

lg:portrait:flex--center

@include screen.screen('lg', 'portrait')

Centered on lg+ portrait

[#](https://usetrmnl.com/framework_v2/responsive_test#spacing)

#### Spacing

Test Case

SCSS Mixin Result

CSS Class Result

md:p--24

@include screen.screen('md')

Padding 24 on md+ screens

portrait:mx--20

@include screen.screen('portrait')

Horizontal margin 20 in portrait

[#](https://usetrmnl.com/framework_v2/responsive_test#gap)

#### Gap

Test Case

SCSS Mixin Result

CSS Class Result

lg:gap--xlarge

@include screen.screen('lg')

Gap xlarge on lg+ screens

portrait:gap--large

@include screen.screen('portrait')

Large gap in portrait

[#](https://usetrmnl.com/framework_v2/responsive_test#size)

#### Size

Test Case

SCSS Mixin Result

CSS Class Result

md:w--36

@include screen.screen('md')

Large width on md+ screens

[#](https://usetrmnl.com/framework_v2/responsive_test#rounded)

#### Rounded

Test Case

SCSS Mixin Result

CSS Class Result

md:rounded--xlarge

@include screen.screen('md')

Rounded xlarge on md+ screens

[#](https://usetrmnl.com/framework_v2/responsive_test#grid)

#### Grid

Test Case

SCSS Mixin Result

CSS Class Result

md:grid--cols-3

@include screen.screen('md')

3 columns on md+ screens

[#](https://usetrmnl.com/framework_v2/responsive_test#base)

### Base

[#](https://usetrmnl.com/framework_v2/responsive_test#layout)

#### Layout

Test Case

SCSS Mixin Result

CSS Class Result

md:layout--col

@include screen.screen('md')

Column layout on md+ screens

portrait:layout--bottom

@include screen.screen('portrait')

Bottom alignment in portrait

lg:portrait:layout--bottom

@include screen.screen('lg', 'portrait')

Bottom alignment on lg+ portrait

[#](https://usetrmnl.com/framework_v2/responsive_test#elements)

### Elements

[#](https://usetrmnl.com/framework_v2/responsive_test#value)

#### Value

Test Case

SCSS Mixin Result

CSS Class Result

md:value--large

Large value on md+ screens

Aa

portrait:value--large

Large value in portrait

Aa

4bit:value--large

Large value on 4-bit screens

Aa

lg:portrait:value--large

Large value on lg+ portrait

Aa

md:2bit:value--large

Large value on md+ 2-bit screens

Aa

portrait:4bit:value--large

Large value on portrait 4-bit

Aa

lg:portrait:4bit:value--xlarge

XLarge on lg+ portrait 4-bit

Aa

[#](https://usetrmnl.com/framework_v2/responsive_test#label)

#### Label

Test Case

SCSS Mixin Result

CSS Class Result

md:label--small

Small label on md+ screens

Label

portrait:label--outline

Outlined label in portrait

Label

2bit:label--inverted

Inverted label on 2-bit screens

Label

md:portrait:label--underline

Underlined label on md+ portrait

Label

md:2bit:label--gray-out

Gray-out label on md+ 2-bit

Label

portrait:2bit:label--small

Small label on portrait 2-bit

Label

md:portrait:2bit:label--inverted

Inverted label on md+ portrait 2-bit

Label

[#](https://usetrmnl.com/framework_v2/responsive_test#components)

### Components

No component tests have been implemented yet 

[ Responsive Adapt styles based on screen width using breakpoint prefixes Previous  ](/framework_v2/responsive)

[ Text Control text color, alignment and formatting Next  ](/framework_v2/text)

[ Framework Index  ](/framework_v2)

---

# rich_text

# Rich Text

The Rich Text component provides a flexible container for displaying text content with consistent styling and layout options. It's commonly used for paragraphs, articles, and other formatted text content that needs to maintain readability and visual hierarchy. 

[#](https://usetrmnl.com/framework_v2/rich_text#understanding-richtext-components)

### Understanding Richtext Components

The richtext system consists of two key parts working together: the parent `.richtext` container and its natural child `.content` component. 

The parent `.richtext` container is designed for flexibility and can hold any content. It controls the overall placement and spacing of the component within your layout. 

The `.content` component is where your actual text content lives. It provides additional styling and formatting options specific to text. 

Both components have separate alignment modifiers that serve different purposes: 

  * `richtext--left/center/right`: Controls how the richtext container is positioned within its parent
  * `content--left/center/right`: Controls how the content component is positioned within the richtext container
  * `text--left/center/right`: Controls the actual text alignment within the content component



This multi-level alignment system provides maximum flexibility for positioning both the component and its content independently. 

[#](https://usetrmnl.com/framework_v2/rich_text#rich-text-alignment)

### Rich Text Alignment

The Rich Text component can be aligned in three different ways: left, center, or right. Each alignment option provides different text positioning to suit various design needs. 

[#](https://usetrmnl.com/framework_v2/rich_text#left-aligned)

#### Left Aligned

Left alignment is the default and most readable format for longer text content, ideal for paragraphs and articles. 

![](https://usetrmnl.com/assets/trmnl--glyph-black-large-cf18e05a1dfa4e1ebaec41b4fa226ae6259eb756a099be3f51b3e204f594ffd5.svg)

This is an example of left-aligned rich text content. This alignment is generally best for readability with longer paragraphs of text.

Multiple paragraphs will maintain the same alignment, making it easy to read through longer content while maintaining visual consistency.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Rich Text Left Aligned

Copy  Copied  Show more  Show less 
    
    
    <div class="richtext richtext--left gap--large">
      <img class="image" src="/assets/trmnl--glyph-black-large.svg" />
      <div class="content content--left gap text--left">
        <p>This is an example of left-aligned rich text content.</p>
        <p>Multiple paragraphs will maintain the same alignment.</p>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/rich_text#center-aligned)

#### Center Aligned

Center alignment is ideal for headings, quotes, or shorter text that needs to be highlighted or visually balanced within the layout. 

![](https://usetrmnl.com/assets/trmnl--glyph-black-large-cf18e05a1dfa4e1ebaec41b4fa226ae6259eb756a099be3f51b3e204f594ffd5.svg)

This is an example of center-aligned rich text content.

Centered text works well for quotes, headings, or highlighted information that needs visual emphasis.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Rich Text Center Aligned

Copy  Copied  Show more  Show less 
    
    
    <div class="richtext richtext--center gap--large">
      <img class="image" src="/assets/trmnl--glyph-black-large.svg" />
      <div class="content content--center gap text--center">
        <p>This is an example of center-aligned rich text content.</p>
        <p>Centered text works well for quotes or highlighted information.</p>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/rich_text#right-aligned)

#### Right Aligned

Right alignment is less common but can be useful for specific design scenarios or to create visual tension in layouts. 

![](https://usetrmnl.com/assets/trmnl--glyph-black-large-cf18e05a1dfa4e1ebaec41b4fa226ae6259eb756a099be3f51b3e204f594ffd5.svg)

This is an example of right-aligned rich text content.

Right alignment can be used for captions, sidebars, or to create visual interest through contrasting alignments.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Rich Text Right Aligned

Copy  Copied  Show more  Show less 
    
    
    <div class="richtext richtext--right gap--large">
      <img class="image" src="/assets/trmnl--glyph-black-large.svg" />
      <div class="content content--right gap text--right">
        <p>This is an example of right-aligned rich text content.</p>
        <p>Right alignment can be used for captions or sidebars.</p>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/rich_text#content-size-variants)

### Content Size Variants

The Rich Text component offers different content size variants to accommodate various text hierarchies and emphasis needs. 

This is large size rich text content.  
Perfect for headings and emphasis.

This is the default size for rich text content.  
Optimized for readability and general use.

This is small size rich text content.  
Ideal for captions and secondary information.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Rich Text Size Variants

Copy  Copied  Show more  Show less 
    
    
    <div class="richtext gap--large">
      <!-- Large Size -->
      <div class="content content--large">
        <p>This is large size rich text content.<br>
        Perfect for headings and emphasis.</p>
      </div>
    
      <!-- Default Size -->
      <div class="content">
        <p>This is the default size for rich text content.<br>
        Optimized for readability and general use.</p>
      </div>
    
      <!-- Small Size -->
      <div class="content content--small">
        <p>This is small size rich text content.<br>
        Ideal for captions and secondary information.</p>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/rich_text#controlling-width)

### Controlling Width

By default, the Rich Text content takes up as much space as it needs and is centered in the layout, expanding up to a maximum width. However, you can precisely control the width of content using Size utility classes. 

Control exact width and height dimensions with size utilities 

[ View Size Documentation  ](/framework_v2/size)

This Rich Text content has a fixed width of 240 pixels using utility classes.

Notice how the text is constrained to this specific width regardless of the container size.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Rich Text Fixed Width: 240px

Copy  Copied  Show more  Show less 
    
    
    <div class="richtext richtext--center gap--large">
      <div class="content w--[240px] text--center gap">
        <p>This Rich Text content has a fixed width of 240 pixels using utility classes.</p>
        <p>Notice how the text is constrained to this specific width regardless of the container size.</p>
      </div>
    </div>

You can use any of the Size system's fixed sizes (`w--32`, `w--64`, etc.), arbitrary sizes (`w--[250px]`), or responsive sizes (`w--full`, `w--auto`). This flexibility lets you create perfectly sized text blocks for any layout need. 

[#](https://usetrmnl.com/framework_v2/rich_text#integration-with-content-limiter)

### Integration with Content Limiter

The Rich Text component works seamlessly with the Content Limiter utility to handle overflowing text. When combined, it automatically adjusts text size to fit the available space, which is particularly useful in constrained layouts. 

Simply add the `data-content-limiter="true"` attribute to your richtext content element. You can also specify a custom maximum height using the `data-content-max-height` attribute (e.g., `data-content-max-height="140"`). 

When `data-content-limiter="true"` is present, the limiter auto-measures the available height in the nearest container and adjusts text to fit. You can override the auto height by specifying `data-content-max-height` with a pixel value. 

Automatically resize text when content exceeds height limits 

[ View Content Limiter Documentation  ](/framework_v2/content_limiter)

The Rich Text component with Content Limiter will automatically adjust text size when content exceeds the auto-measured available height. This is particularly useful for views with limited vertical space such as quadrants or half-horizontal layouts.   
  
Notice how this text is rendered smaller to fit within the quadrant view. Without Content Limiter, this text would overflow the container. 

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Rich Text With Content Limiter

Copy  Copied  Show more  Show less 
    
    
    <div class="richtext richtext--left gap--large">
      <div class="content" data-content-limiter="true">
        <p class="text--left">
          The Rich Text component with Content Limiter will automatically
          adjust text size when content exceeds the height threshold.
          This is particularly useful for views with limited vertical space.
        </p>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/rich_text#integration-with-pixel-perfect)

### Integration with Pixel Perfect

For optimal text rendering on e-ink displays, the Rich Text component can be enhanced with the Pixel Perfect utility. This ensures text is rendered with crisp edges by aligning precisely to the pixel grid, preventing blurry or inconsistent text weight. 

Simply add the `data-pixel-perfect="true"` attribute to your richtext content element. 

Ensure crisp text rendering on 1-bit displays 

[ View Pixel Perfect Documentation  ](/framework_v2/pixel_perfect)

This text is rendered with pixel perfect alignment, ensuring that each character aligns precisely with the pixel grid. Notice how the text appears crisp and clear with consistent weight.

Pixel Perfect is especially important for e-ink displays that use a 1-bit color space (just black and white), where anti-aliased gray pixels are forced to become either fully black or fully white.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Rich Text With Pixel Perfect

Copy  Copied  Show more  Show less 
    
    
    <div class="richtext richtext--left gap">
      <div class="content" data-pixel-perfect="true">
        <p>
          This text is rendered with pixel perfect alignment, ensuring that each character aligns precisely with the pixel grid. Notice how the text appears crisp and clear with consistent weight.
        </p>
      </div>
      <div class="content" data-pixel-perfect="true">
        <p>
          Pixel Perfect is especially important for e-ink displays that use a 1-bit color space (just black and white), where anti-aliased gray pixels are forced to become either fully black or fully white.
        </p>
      </div>
    </div>

[ Divider Create horizontal or vertical dividers between elements Previous  ](/framework_v2/divider)

[ Item Build standardized list items and content blocks Next  ](/framework_v2/item)

[ Framework Index  ](/framework_v2)

---

# rounded

# Rounded

The Rounded system provides consistent border radius values for creating smooth corners on elements. It offers predefined sizes, corner-specific controls, and custom values to maintain visual consistency throughout your interface. 

[#](https://usetrmnl.com/framework_v2/rounded#base-sizes)

### Base Sizes

The rounded system includes nine predefined sizes, from none to full. These standardized radii help maintain consistent corner rounding across your application's components. 

[#](https://usetrmnl.com/framework_v2/rounded#standard-rounded)

#### Standard Rounded

Use `rounded--none` for sharp corners, `rounded` for default rounding, and larger variants for more pronounced curves. 

rounded--none

rounded--xsmall

rounded--small

rounded

rounded--medium

rounded--large

rounded--xlarge

rounded--xxlarge

rounded--full

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Predefined Rounded Design System

Copy  Copied  Show more  Show less 
    
    
    <!-- Available rounded sizes from sharp to pill -->
    <div class="rounded--none">...</div>     <!-- 0px -->
    <div class="rounded--xsmall">...</div>   <!-- 5px -->
    <div class="rounded--small">...</div>    <!-- 7px -->
    <div class="rounded">...</div>           <!-- 10px (default) -->
    <div class="rounded--medium">...</div>   <!-- 15px -->
    <div class="rounded--large">...</div>    <!-- 20px -->
    <div class="rounded--xlarge">...</div>   <!-- 25px -->
    <div class="rounded--xxlarge">...</div>  <!-- 30px -->
    <div class="rounded--full">...</div>     <!-- 9999px (pill shape) -->

[#](https://usetrmnl.com/framework_v2/rounded#corner-specific-rounding)

### Corner-Specific Rounding

Apply border radius to specific corners or sides of an element. This allows for more complex shapes and asymmetric designs while maintaining consistency. 

[#](https://usetrmnl.com/framework_v2/rounded#individual-corners)

#### Individual Corners

Target specific corners with `rounded-{corner}{-size}` where corner can be tl (top-left), tr (top-right), br (bottom-right), or bl (bottom-left). 

rounded-tl--large

rounded-tr--large

rounded-bl--large

rounded-br--large

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Corner-Specific Rounding Design System

[#](https://usetrmnl.com/framework_v2/rounded#side-rounding)

#### Side Rounding

Round entire sides with `rounded-{side}{-size}` where side can be t (top), r (right), b (bottom), or l (left). 

rounded-t--large

rounded-r--large

rounded-b--large

rounded-l--large

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Side Rounding Design System

Copy  Copied  Show more  Show less 
    
    
    <!-- Individual corners -->
    <div class="rounded-tl--large">Top left corner</div>
    <div class="rounded-tr--large">Top right corner</div>
    <div class="rounded-br--large">Bottom right corner</div>
    <div class="rounded-bl--large">Bottom left corner</div>
    
    <!-- Entire sides -->
    <div class="rounded-t--large">Top corners</div>
    <div class="rounded-r--large">Right corners</div>
    <div class="rounded-b--large">Bottom corners</div>
    <div class="rounded-l--large">Left corners</div>

[#](https://usetrmnl.com/framework_v2/rounded#responsive-size-orientation-size-orientation)

### Responsive (Size, Orientation, Size + Orientation)

Rounded utilities support size-based breakpoints, orientation variants, and their combination. This allows you to adapt border radii to screen size and orientation. 

Size + Orientation

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Rounded Responsive

Copy  Copied  Show more  Show less 
    
    
    <!-- Rounded that adapts by size and orientation -->
    <div class="rounded md:rounded--large portrait:rounded--small md:portrait:rounded--xlarge">...</div>

Copy  Copied  Show more  Show less 
    
    
    <!-- Different rounding for different bit depths -->
    <div class="rounded--none 1bit:rounded--sm 4bit:rounded--xl">
      <!-- Sharp on default, subtle on monochrome, pronounced on grayscale/color -->
    </div>
    
    <!-- Responsive corner rounding -->
    <div class="1bit:rounded--none 24bit:rounded--full">
      <!-- Sharp corners on monochrome, pill shape on full color -->
    </div>

[#](https://usetrmnl.com/framework_v2/rounded#custom-values)

### Custom Values

When predefined rounded values don't meet your specific needs, you can use custom pixel values. This provides precise control over border radius while maintaining the consistent rounded syntax. 

[#](https://usetrmnl.com/framework_v2/rounded#arbitrary-pixel-values)

#### Arbitrary Pixel Values

Use `rounded--[Npx]` syntax to specify exact pixel values for border radius. 

rounded--[3px]

rounded--[8px]

rounded--[12px]

rounded--[18px]

rounded--[24px]

rounded--[32px]

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Custom Pixel Rounded Design System

Copy  Copied  Show more  Show less 
    
    
    <!-- Custom rounded values -->
    <div class="rounded--[3px]">...</div>
    <div class="rounded--[8px]">...</div>
    <div class="rounded--[12px]">...</div>
    <div class="rounded--[24px]">...</div>
    
    <!-- Works with corner-specific too -->
    <div class="rounded-t--[16px]">...</div>

[ Border Apply border patterns that create the illusion of different border intensities Previous  ](/framework_v2/border)

[ Visibility Control element visibility based on display bit depth Next  ](/framework_v2/visibility)

[ Framework Index  ](/framework_v2)

---

# scale

# Scale

The Scale system provides utility classes to scale the entire interface by adjusting the UI scale factor. This is useful for adapting content density for different viewing distances or user preferences. 

[#](https://usetrmnl.com/framework_v2/scale#basic-usage)

### Basic Usage

Apply scale modifiers to the `screen` element to scale all interface elements proportionally. The scale affects fonts, spacing, dimensions, and other UI elements that use the `--ui-scale` CSS variable. 

[#](https://usetrmnl.com/framework_v2/scale#available-scale-levels)

#### Available Scale Levels

The framework provides six predefined scale levels: 

Class | Scale Factor | Use Case  
---|---|---  
`screen--scale-xsmall` |  0.75 (75%)  |  Maximum content density   
`screen--scale-small` |  0.875 (87.5%)  |  Increased content density   
`screen--scale-regular` |  1.0 (100%)  |  Default scale, no scaling applied   
`screen--scale-large` |  1.125 (112.5%)  |  Increased size for better readability   
`screen--scale-xlarge` |  1.25 (125%)  |  Large scale for increased readability   
`screen--scale-xxlarge` |  1.5 (150%)  |  Maximum scale for accessibility needs   
  
[#](https://usetrmnl.com/framework_v2/scale#scale-examples)

### Scale Examples

The following examples demonstrate how scale levels affect the same content layout. Notice how all elements scale proportionally. 

[#](https://usetrmnl.com/framework_v2/scale#extra-small-scale-75)

#### Extra Small Scale (75%)

Maximum content density - useful when viewing up close or when you need to fit more information on screen. 

Today

1

Morning MeetingTeam sync and updates

9:00 AM - 9:30 AMDaily

2

Code ReviewReview feature branch

10:30 AM - 11:30 AMReview

3

Lunch BreakTeam lunch at downtown

12:30 PM - 1:30 PMBreak

4

Client CallWeekly check-in with stakeholders

2:00 PM - 3:00 PMClient

5

Bug TriagePrioritize reported issues

3:30 PM - 4:30 PMBugs

6

Documentation UpdateUpdate API documentation

4:30 PM - 5:30 PMDocs

7

End of Day SyncReview progress and blockers

5:30 PM - 6:00 PMSync

Tomorrow

1

Sprint PlanningPlan next two weeks

10:00 AM - 12:00 PMPlanning

2

Client DemoShow new features

2:00 PM - 3:00 PMDemo

3

Architecture ReviewDiscuss system design

4:00 PM - 5:00 PMTechnical

4

Stakeholder MeetingProject milestone review

9:00 AM - 10:00 AMStakeholder

5

QA TestingRegression test suite

1:00 PM - 2:00 PMQA

6

Design WorkshopUI/UX design session

3:00 PM - 4:00 PMDesign

7

Technical Debt ReviewAssess code quality issues

5:00 PM - 6:00 PMTechnical

This Week

1

Security AuditQuarterly security review

WednesdaySecurity

2

Team RetrospectiveSprint reflection

FridayRetrospective

3

Performance TestingLoad test new features

ThursdayTesting

4

Database OptimizationQuery performance tuning

WednesdayDatabase

5

Code CleanupRefactor legacy modules

FridayRefactor

6

Deployment PrepPrepare release candidate

FridayDeploy

7

Knowledge TransferOnboard new team member

ThursdayTraining

8

Sprint ReviewDemo completed work

FridayReview

9

API DocumentationUpdate endpoint specifications

WednesdayDocumentation

10

User TestingConduct usability studies

ThursdayUX Research

11

Infrastructure ReviewAssess server capacity needs

MondayInfrastructure

12

Bug PrioritizationTriage reported issues

TuesdayBug Triage

13

Feature PlanningRoadmap discussion for Q2

ThursdayPlanning

14

Third-party IntegrationImplement payment gateway

WednesdayIntegration

15

Accessibility AuditWCAG compliance review

FridayAccessibility

16

Monitoring SetupConfigure alerting systems

TuesdayDevOps

17

Data MigrationMove legacy customer data

WeekendMigration

18

License RenewalUpdate software licenses

MondayLegal

19

Team TrainingNew framework workshop

FridayEducation

20

Release NotesDocument feature changes

ThursdayCommunication

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Scale Level Extra Small (75%)

Copy  Copied  Show more  Show less 
    
    
    <div class="screen screen--scale-xsmall">
      <!-- Your content here -->
    </div>

[#](https://usetrmnl.com/framework_v2/scale#small-scale-87-5)

#### Small Scale (87.5%)

Reduced scale for fitting more content while maintaining good readability. 

Today

1

Morning MeetingTeam sync and updates

9:00 AM - 9:30 AMDaily

2

Code ReviewReview feature branch

10:30 AM - 11:30 AMReview

3

Lunch BreakTeam lunch at downtown

12:30 PM - 1:30 PMBreak

4

Client CallWeekly check-in with stakeholders

2:00 PM - 3:00 PMClient

5

Bug TriagePrioritize reported issues

3:30 PM - 4:30 PMBugs

6

Documentation UpdateUpdate API documentation

4:30 PM - 5:30 PMDocs

7

End of Day SyncReview progress and blockers

5:30 PM - 6:00 PMSync

Tomorrow

1

Sprint PlanningPlan next two weeks

10:00 AM - 12:00 PMPlanning

2

Client DemoShow new features

2:00 PM - 3:00 PMDemo

3

Architecture ReviewDiscuss system design

4:00 PM - 5:00 PMTechnical

4

Stakeholder MeetingProject milestone review

9:00 AM - 10:00 AMStakeholder

5

QA TestingRegression test suite

1:00 PM - 2:00 PMQA

6

Design WorkshopUI/UX design session

3:00 PM - 4:00 PMDesign

7

Technical Debt ReviewAssess code quality issues

5:00 PM - 6:00 PMTechnical

This Week

1

Security AuditQuarterly security review

WednesdaySecurity

2

Team RetrospectiveSprint reflection

FridayRetrospective

3

Performance TestingLoad test new features

ThursdayTesting

4

Database OptimizationQuery performance tuning

WednesdayDatabase

5

Code CleanupRefactor legacy modules

FridayRefactor

6

Deployment PrepPrepare release candidate

FridayDeploy

7

Knowledge TransferOnboard new team member

ThursdayTraining

8

Sprint ReviewDemo completed work

FridayReview

9

API DocumentationUpdate endpoint specifications

WednesdayDocumentation

10

User TestingConduct usability studies

ThursdayUX Research

11

Infrastructure ReviewAssess server capacity needs

MondayInfrastructure

12

Bug PrioritizationTriage reported issues

TuesdayBug Triage

13

Feature PlanningRoadmap discussion for Q2

ThursdayPlanning

14

Third-party IntegrationImplement payment gateway

WednesdayIntegration

15

Accessibility AuditWCAG compliance review

FridayAccessibility

16

Monitoring SetupConfigure alerting systems

TuesdayDevOps

17

Data MigrationMove legacy customer data

WeekendMigration

18

License RenewalUpdate software licenses

MondayLegal

19

Team TrainingNew framework workshop

FridayEducation

20

Release NotesDocument feature changes

ThursdayCommunication

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Scale Level Small (87.5%)

Copy  Copied  Show more  Show less 
    
    
    <div class="screen screen--scale-small">
      <!-- Your content here -->
    </div>

[#](https://usetrmnl.com/framework_v2/scale#regular-scale-100)

#### Regular Scale (100%)

Default scale - this is the baseline that all other scale levels are relative to. 

Today

1

Morning MeetingTeam sync and updates

9:00 AM - 9:30 AMDaily

2

Code ReviewReview feature branch

10:30 AM - 11:30 AMReview

3

Lunch BreakTeam lunch at downtown

12:30 PM - 1:30 PMBreak

4

Client CallWeekly check-in with stakeholders

2:00 PM - 3:00 PMClient

5

Bug TriagePrioritize reported issues

3:30 PM - 4:30 PMBugs

6

Documentation UpdateUpdate API documentation

4:30 PM - 5:30 PMDocs

7

End of Day SyncReview progress and blockers

5:30 PM - 6:00 PMSync

Tomorrow

1

Sprint PlanningPlan next two weeks

10:00 AM - 12:00 PMPlanning

2

Client DemoShow new features

2:00 PM - 3:00 PMDemo

3

Architecture ReviewDiscuss system design

4:00 PM - 5:00 PMTechnical

4

Stakeholder MeetingProject milestone review

9:00 AM - 10:00 AMStakeholder

5

QA TestingRegression test suite

1:00 PM - 2:00 PMQA

6

Design WorkshopUI/UX design session

3:00 PM - 4:00 PMDesign

7

Technical Debt ReviewAssess code quality issues

5:00 PM - 6:00 PMTechnical

This Week

1

Security AuditQuarterly security review

WednesdaySecurity

2

Team RetrospectiveSprint reflection

FridayRetrospective

3

Performance TestingLoad test new features

ThursdayTesting

4

Database OptimizationQuery performance tuning

WednesdayDatabase

5

Code CleanupRefactor legacy modules

FridayRefactor

6

Deployment PrepPrepare release candidate

FridayDeploy

7

Knowledge TransferOnboard new team member

ThursdayTraining

8

Sprint ReviewDemo completed work

FridayReview

9

API DocumentationUpdate endpoint specifications

WednesdayDocumentation

10

User TestingConduct usability studies

ThursdayUX Research

11

Infrastructure ReviewAssess server capacity needs

MondayInfrastructure

12

Bug PrioritizationTriage reported issues

TuesdayBug Triage

13

Feature PlanningRoadmap discussion for Q2

ThursdayPlanning

14

Third-party IntegrationImplement payment gateway

WednesdayIntegration

15

Accessibility AuditWCAG compliance review

FridayAccessibility

16

Monitoring SetupConfigure alerting systems

TuesdayDevOps

17

Data MigrationMove legacy customer data

WeekendMigration

18

License RenewalUpdate software licenses

MondayLegal

19

Team TrainingNew framework workshop

FridayEducation

20

Release NotesDocument feature changes

ThursdayCommunication

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Scale Level Regular (100%)

Copy  Copied  Show more  Show less 
    
    
    <div class="screen screen--scale-regular">
      <!-- Your content here -->
    </div>

[#](https://usetrmnl.com/framework_v2/scale#large-scale-112-5)

#### Large Scale (112.5%)

Increased size for better readability 

Today

1

Morning MeetingTeam sync and updates

9:00 AM - 9:30 AMDaily

2

Code ReviewReview feature branch

10:30 AM - 11:30 AMReview

3

Lunch BreakTeam lunch at downtown

12:30 PM - 1:30 PMBreak

4

Client CallWeekly check-in with stakeholders

2:00 PM - 3:00 PMClient

5

Bug TriagePrioritize reported issues

3:30 PM - 4:30 PMBugs

6

Documentation UpdateUpdate API documentation

4:30 PM - 5:30 PMDocs

7

End of Day SyncReview progress and blockers

5:30 PM - 6:00 PMSync

Tomorrow

1

Sprint PlanningPlan next two weeks

10:00 AM - 12:00 PMPlanning

2

Client DemoShow new features

2:00 PM - 3:00 PMDemo

3

Architecture ReviewDiscuss system design

4:00 PM - 5:00 PMTechnical

4

Stakeholder MeetingProject milestone review

9:00 AM - 10:00 AMStakeholder

5

QA TestingRegression test suite

1:00 PM - 2:00 PMQA

6

Design WorkshopUI/UX design session

3:00 PM - 4:00 PMDesign

7

Technical Debt ReviewAssess code quality issues

5:00 PM - 6:00 PMTechnical

This Week

1

Security AuditQuarterly security review

WednesdaySecurity

2

Team RetrospectiveSprint reflection

FridayRetrospective

3

Performance TestingLoad test new features

ThursdayTesting

4

Database OptimizationQuery performance tuning

WednesdayDatabase

5

Code CleanupRefactor legacy modules

FridayRefactor

6

Deployment PrepPrepare release candidate

FridayDeploy

7

Knowledge TransferOnboard new team member

ThursdayTraining

8

Sprint ReviewDemo completed work

FridayReview

9

API DocumentationUpdate endpoint specifications

WednesdayDocumentation

10

User TestingConduct usability studies

ThursdayUX Research

11

Infrastructure ReviewAssess server capacity needs

MondayInfrastructure

12

Bug PrioritizationTriage reported issues

TuesdayBug Triage

13

Feature PlanningRoadmap discussion for Q2

ThursdayPlanning

14

Third-party IntegrationImplement payment gateway

WednesdayIntegration

15

Accessibility AuditWCAG compliance review

FridayAccessibility

16

Monitoring SetupConfigure alerting systems

TuesdayDevOps

17

Data MigrationMove legacy customer data

WeekendMigration

18

License RenewalUpdate software licenses

MondayLegal

19

Team TrainingNew framework workshop

FridayEducation

20

Release NotesDocument feature changes

ThursdayCommunication

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Scale Level Large (112.5%)

Copy  Copied  Show more  Show less 
    
    
    <div class="screen screen--scale-large">
      <!-- Your content here -->
    </div>

[#](https://usetrmnl.com/framework_v2/scale#extra-large-scale-125)

#### Extra Large Scale (125%)

Large scale for increased readability 

Today

1

Morning MeetingTeam sync and updates

9:00 AM - 9:30 AMDaily

2

Code ReviewReview feature branch

10:30 AM - 11:30 AMReview

3

Lunch BreakTeam lunch at downtown

12:30 PM - 1:30 PMBreak

4

Client CallWeekly check-in with stakeholders

2:00 PM - 3:00 PMClient

5

Bug TriagePrioritize reported issues

3:30 PM - 4:30 PMBugs

6

Documentation UpdateUpdate API documentation

4:30 PM - 5:30 PMDocs

7

End of Day SyncReview progress and blockers

5:30 PM - 6:00 PMSync

Tomorrow

1

Sprint PlanningPlan next two weeks

10:00 AM - 12:00 PMPlanning

2

Client DemoShow new features

2:00 PM - 3:00 PMDemo

3

Architecture ReviewDiscuss system design

4:00 PM - 5:00 PMTechnical

4

Stakeholder MeetingProject milestone review

9:00 AM - 10:00 AMStakeholder

5

QA TestingRegression test suite

1:00 PM - 2:00 PMQA

6

Design WorkshopUI/UX design session

3:00 PM - 4:00 PMDesign

7

Technical Debt ReviewAssess code quality issues

5:00 PM - 6:00 PMTechnical

This Week

1

Security AuditQuarterly security review

WednesdaySecurity

2

Team RetrospectiveSprint reflection

FridayRetrospective

3

Performance TestingLoad test new features

ThursdayTesting

4

Database OptimizationQuery performance tuning

WednesdayDatabase

5

Code CleanupRefactor legacy modules

FridayRefactor

6

Deployment PrepPrepare release candidate

FridayDeploy

7

Knowledge TransferOnboard new team member

ThursdayTraining

8

Sprint ReviewDemo completed work

FridayReview

9

API DocumentationUpdate endpoint specifications

WednesdayDocumentation

10

User TestingConduct usability studies

ThursdayUX Research

11

Infrastructure ReviewAssess server capacity needs

MondayInfrastructure

12

Bug PrioritizationTriage reported issues

TuesdayBug Triage

13

Feature PlanningRoadmap discussion for Q2

ThursdayPlanning

14

Third-party IntegrationImplement payment gateway

WednesdayIntegration

15

Accessibility AuditWCAG compliance review

FridayAccessibility

16

Monitoring SetupConfigure alerting systems

TuesdayDevOps

17

Data MigrationMove legacy customer data

WeekendMigration

18

License RenewalUpdate software licenses

MondayLegal

19

Team TrainingNew framework workshop

FridayEducation

20

Release NotesDocument feature changes

ThursdayCommunication

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Scale Level Extra Large (125%)

Copy  Copied  Show more  Show less 
    
    
    <div class="screen screen--scale-xlarge">
      <!-- Your content here -->
    </div>

[#](https://usetrmnl.com/framework_v2/scale#extra-extra-large-scale-150)

#### Extra Extra Large Scale (150%)

Maximum scale for accessibility needs 

Today

1

Morning MeetingTeam sync and updates

9:00 AM - 9:30 AMDaily

2

Code ReviewReview feature branch

10:30 AM - 11:30 AMReview

3

Lunch BreakTeam lunch at downtown

12:30 PM - 1:30 PMBreak

4

Client CallWeekly check-in with stakeholders

2:00 PM - 3:00 PMClient

5

Bug TriagePrioritize reported issues

3:30 PM - 4:30 PMBugs

6

Documentation UpdateUpdate API documentation

4:30 PM - 5:30 PMDocs

7

End of Day SyncReview progress and blockers

5:30 PM - 6:00 PMSync

Tomorrow

1

Sprint PlanningPlan next two weeks

10:00 AM - 12:00 PMPlanning

2

Client DemoShow new features

2:00 PM - 3:00 PMDemo

3

Architecture ReviewDiscuss system design

4:00 PM - 5:00 PMTechnical

4

Stakeholder MeetingProject milestone review

9:00 AM - 10:00 AMStakeholder

5

QA TestingRegression test suite

1:00 PM - 2:00 PMQA

6

Design WorkshopUI/UX design session

3:00 PM - 4:00 PMDesign

7

Technical Debt ReviewAssess code quality issues

5:00 PM - 6:00 PMTechnical

This Week

1

Security AuditQuarterly security review

WednesdaySecurity

2

Team RetrospectiveSprint reflection

FridayRetrospective

3

Performance TestingLoad test new features

ThursdayTesting

4

Database OptimizationQuery performance tuning

WednesdayDatabase

5

Code CleanupRefactor legacy modules

FridayRefactor

6

Deployment PrepPrepare release candidate

FridayDeploy

7

Knowledge TransferOnboard new team member

ThursdayTraining

8

Sprint ReviewDemo completed work

FridayReview

9

API DocumentationUpdate endpoint specifications

WednesdayDocumentation

10

User TestingConduct usability studies

ThursdayUX Research

11

Infrastructure ReviewAssess server capacity needs

MondayInfrastructure

12

Bug PrioritizationTriage reported issues

TuesdayBug Triage

13

Feature PlanningRoadmap discussion for Q2

ThursdayPlanning

14

Third-party IntegrationImplement payment gateway

WednesdayIntegration

15

Accessibility AuditWCAG compliance review

FridayAccessibility

16

Monitoring SetupConfigure alerting systems

TuesdayDevOps

17

Data MigrationMove legacy customer data

WeekendMigration

18

License RenewalUpdate software licenses

MondayLegal

19

Team TrainingNew framework workshop

FridayEducation

20

Release NotesDocument feature changes

ThursdayCommunication

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Scale Level Extra Extra Large (150%)

Copy  Copied  Show more  Show less 
    
    
    <div class="screen screen--scale-xxlarge">
      <!-- Your content here -->
    </div>

[#](https://usetrmnl.com/framework_v2/scale#how-it-works)

### How It Works

The scale system works by modifying the `--ui-scale` CSS variable, which is used throughout the framework to calculate sizes. 

[#](https://usetrmnl.com/framework_v2/scale#affected-properties)

#### Affected Properties

When you apply a scale modifier, it scales the following properties: 

  * Font sizes (all text elements)
  * Line heights
  * Component dimensions (title bar height, progress bar sizes, etc.)
  * Spacing that uses the ui-scale multiplier
  * Any custom properties that reference `var(--ui-scale)`



**Note:** The scale utility only affects elements that use the `--ui-scale` variable in their calculations. Fixed pixel values and screen dimensions remain unchanged. 

[#](https://usetrmnl.com/framework_v2/scale#combining-with-device-configurations)

### Combining with Device Configurations

Scale modifiers can be combined with device-specific classes to override the default UI scale for particular devices. 

Class Combination | Description  
---|---  
`screen screen--v2` |  Uses device default scale   
`screen screen--v2 screen--scale-small` |  Overrides to 87.5% scale   
`screen screen--amazon_kindle_2024 screen--scale-large` |  Overrides to 112.5% scale   
  
Copy  Copied  Show more  Show less 
    
    
    <!-- Use device default UI scale -->
    <div class="screen screen--v2">
      <!-- Content -->
    </div>
    
    <!-- Override device scale with scale modifier -->
    <div class="screen screen--v2 screen--scale-small">
      <!-- Content at 87.5% scale -->
    </div>
    
    <!-- Combine with any device configuration -->
    <div class="screen screen--amazon_kindle_2024 screen--scale-large">
      <!-- Kindle device with 112.5% scale -->
    </div>

[ Text Stroke Legible text when displayed on shaded backgrounds Previous  ](/framework_v2/text_stroke)

[ Aspect Ratio Maintain consistent proportions for elements regardless of their content Next  ](/framework_v2/aspect_ratio)

[ Framework Index  ](/framework_v2)

---

# screen

# Screen

The Screen component is the outermost container that defines the device dimensions and provides global settings for your content. 

[#](https://usetrmnl.com/framework_v2/screen#base-structure)

### Base Structure

The Screen component serves as the root container for all content. It establishes the viewport dimensions, padding, and provides CSS variables that cascade throughout the framework. 

[#](https://usetrmnl.com/framework_v2/screen#default-screen)

#### Default Screen

The base `screen` class creates a container with default dimensions (800x480px landscape). It includes padding controlled by the `--gap` variable. 

Default Screen

Copy  Copied  Show more  Show less 
    
    
    <div class="screen">
      <div class="view view--full">
        <div class="layout">
          <!-- Your content here -->
        </div>
      </div>
    </div>

[#](https://usetrmnl.com/framework_v2/screen#orientation)

### Orientation

Screens can be displayed in landscape (default) or portrait orientation. Use the orientation toggle in the navigation bar to preview how your content adapts to different orientations. 

[#](https://usetrmnl.com/framework_v2/screen#orientation-toggle)

#### Orientation Toggle

The `screen--portrait` modifier swaps the width and height dimensions. All layout calculations automatically adjust to the new dimensions. Try toggling the orientation using the button in the navigation bar above. 

Orientation Demo

Toggle orientation in nav bar

Copy  Copied  Show more  Show less 
    
    
    <!-- Landscape (default) -->
    <div class="screen">
      <!-- 800x480 dimensions -->
    </div>
    
    <!-- Portrait orientation -->
    <div class="screen screen--portrait">
      <!-- 480x800 dimensions (swapped) -->
    </div>

[#](https://usetrmnl.com/framework_v2/screen#device-variants)

### Device Variants

The Screen component supports device-specific configurations that adjust dimensions, scaling, and color depth. These variants ensure content displays correctly across different TRMNL devices. 

[#](https://usetrmnl.com/framework_v2/screen#available-devices)

#### Available Devices

Each device variant sets specific dimensions and scaling factors. Combine with orientation and bit-depth modifiers for complete control. Use the device selector in the navigation bar to switch between devices. 

Device Demo

Use device selector in nav bar

Copy  Copied  Show more  Show less 
    
    
    <!-- Original TRMNL -->
    <div class="screen screen--og screen--1bit">
      <!-- 800x480, 1-bit depth -->
    </div>
    
    <!-- TRMNL V2 -->
    <div class="screen screen--v2 screen--4bit">
      <!-- 1040x780, 4-bit depth -->
    </div>
    
    <!-- Amazon Kindle 2024 -->
    <div class="screen screen--amazon_kindle_2024 screen--4bit">
      <!-- 718x540, 4-bit depth -->
    </div>
    
    <!-- Combined modifiers -->
    <div class="screen screen--v2 screen--portrait screen--4bit">
      <!-- All modifiers work together -->
    </div>

[#](https://usetrmnl.com/framework_v2/screen#modifiers)

### Modifiers

Screen modifiers provide additional control over display properties and behavior. 

[#](https://usetrmnl.com/framework_v2/screen#no-bleed)

#### No Bleed

The `screen--no-bleed` modifier removes default padding, allowing content to extend to the screen edges. This is useful for full-bleed backgrounds or edge-to-edge layouts. 

No Bleed - Content extends to edges

[#](https://usetrmnl.com/framework_v2/screen#dark-mode)

#### Dark Mode

The `screen--dark-mode` modifier inverts the display colors, with special handling for images to maintain their original appearance. Toggle dark mode using the button in the navigation bar. 

Dark Mode Demo

![](https://usetrmnl.com/images/plugins/trmnl--render.svg)

Copy  Copied  Show more  Show less 
    
    
    <!-- No bleed modifier -->
    <div class="screen screen--no-bleed">
      <!-- Content extends to edges -->
    </div>
    
    <!-- Dark mode -->
    <div class="screen screen--dark-mode">
      <!-- Colors are inverted, images preserved -->
    </div>
    
    <!-- Combined modifiers -->
    <div class="screen screen--v2 screen--portrait screen--no-bleed screen--dark-mode">
      <!-- All modifiers work together -->
    </div>

[#](https://usetrmnl.com/framework_v2/screen#css-variables)

### CSS Variables

The Screen component provides CSS variables that cascade throughout the framework. These variables automatically recalculate when device variants or orientation modifiers are applied. 

Variable | Description | Default Value  
---|---|---  
`--screen-w` | Screen width | 800px  
`--screen-h` | Screen height | 480px  
`--full-w` | Full width minus padding | calc(--screen-w - --gap * 2)  
`--full-h` | Full height minus padding | calc(--screen-h - --gap * 2)  
`--ui-scale` | UI scaling factor | 1  
`--gap-scale` | Gap scaling factor | 1  
`--color-depth` | Display color depth (bits) | 1  
  
[ Framework Runtime How the runtime applies layout, clamping, overflow, and presentation adjustments at render time Previous  ](/framework_v2/framework_runtime)

[ View Show your plugin in different sizes with Mashup view containers Next  ](/framework_v2/view)

[ Framework Index  ](/framework_v2)

---

# size

# Size

The Size system provides utility classes for controlling width and height dimensions. It includes both fixed sizes and responsive utilities to handle various layout needs. 

[#](https://usetrmnl.com/framework_v2/size#fixed-sizes)

### Fixed Sizes

Control element widths and heights using predefined size classes. Use `w--{size}` and `h--{size}` class names with these size values: 

`w/h--0`

`w/h--0.5`

`w/h--1`

`w/h--1.5`

`w/h--2`

`w/h--2.5`

`w/h--3`

`w/h--3.5`

`w/h--4`

`w/h--5`

`w/h--6`

`w/h--7`

`w/h--8`

`w/h--9`

`w/h--10`

`w/h--11`

`w/h--12`

`w/h--14`

`w/h--16`

`w/h--20`

`w/h--24`

`w/h--28`

`w/h--32`

`w/h--36`

`w/h--40`

`w/h--44`

`w/h--48`

`w/h--52`

`w/h--56`

`w/h--60`

`w/h--64`

`w/h--72`

`w/h--80`

`w/h--96`

`0px`

`2px`

`4px`

`6px`

`8px`

`10px`

`12px`

`14px`

`16px`

`20px`

`24px`

`28px`

`32px`

`36px`

`40px`

`44px`

`48px`

`56px`

`64px`

`80px`

`96px`

`112px`

`128px`

`144px`

`160px`

`176px`

`192px`

`208px`

`224px`

`240px`

`256px`

`288px`

`320px`

`384px`

[#](https://usetrmnl.com/framework_v2/size#arbitrary-sizes)

### Arbitrary Sizes

Need a specific dimension? Use arbitrary size classes for precise pixel values with `w--[Npx]` and `h--[Npx]` syntax, where N can be any value from 0 to 1000. 

`w/h--[150px]`

`w/h--[225px]`

`w/h--[300px]`

`150px`

`225px`

`300px`

[#](https://usetrmnl.com/framework_v2/size#min-max-dimensions)

### Min/Max Dimensions

Control minimum and maximum element dimensions independently using `w--min-{size}`, `w--max-{size}`, `h--min-{size}`, and `h--max-{size}` classes. 

[#](https://usetrmnl.com/framework_v2/size#min-max-width)

#### Min/Max Width

Set minimum and maximum width constraints independently from the base width value. 

Min Width 72 (288px)

Max Width 32 (128px)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Size Min/Max Widths

Copy  Copied  Show more  Show less 
    
    
    <div class="w--auto w--min-72">Min Width 72 (288px)</div>
    <div class="w--full w--max-32">Max Width 32 (128px)</div>

[#](https://usetrmnl.com/framework_v2/size#min-max-height)

#### Min/Max Height

Set minimum and maximum height constraints independently. Min-height ensures elements are at least a certain height, max-height prevents them from growing beyond a limit. 

Min Height 72 (288px)

Max Height 8 (32px)

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Size Min/Max Heights

Copy  Copied  Show more  Show less 
    
    
    <div class="h--min-12">Min Height 72 (288px)</div>
    <div class="h--max-8">Max Height 8 (32px)</div>

[#](https://usetrmnl.com/framework_v2/size#arbitrary-min-max-dimensions)

#### Arbitrary Min/Max Dimensions

Use arbitrary min/max dimensions with `w--min-[Npx]`, `w--max-[Npx]`, `h--min-[Npx]`, and `h--max-[Npx]` syntax. 

`w--min-[100px]`

`w--max-[200px]`

`h--min-[50px]`

`min-width: 100px`

`max-width: 200px`

`min-height: 50px`

[#](https://usetrmnl.com/framework_v2/size#dynamic-sizes)

### Dynamic Sizes

Dynamic sizes allow you to set width and height values relative to the container or content, rather than using fixed pixel values. 

[#](https://usetrmnl.com/framework_v2/size#dynamic-width)

#### Dynamic Width

Use `w--full` for full width or `w--auto` for automatic width. 

Full Width

Auto Width

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Size Dynamic Widths

Copy  Copied  Show more  Show less 
    
    
    <div class="w--full">Full width</div>
    <div class="w--auto">Auto width</div>

[#](https://usetrmnl.com/framework_v2/size#dynamic-height)

#### Dynamic Height

Use `h--full` for full height or `h--auto` for automatic height. 

Full Height

Auto Height

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Size Dynamic Heights

Copy  Copied  Show more  Show less 
    
    
    <div class="h--full">Full height</div>
    <div class="h--auto">Auto height</div>

[#](https://usetrmnl.com/framework_v2/size#responsive-sizes)

## Responsive Sizes

Size utilities support responsive variants, allowing you to set different dimensions at different screen breakpoints. Use the pattern `breakpoint:size-class` to apply sizes conditionally. 

[#](https://usetrmnl.com/framework_v2/size#size-based-responsive)

### Size-Based Responsive

Apply different width and height values at different screen sizes using responsive prefixes. The framework follows a mobile-first approach where styles apply to the target breakpoint and larger. 

Responsive Width

Responsive Height

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Size Responsive Sizes

Copy  Copied  Show more  Show less 
    
    
    <!-- Width: 8 (32px) by default, 16 (64px) on md and up, 24 (96px) on lg and up -->
    <div class="w--8 md:w--16 lg:w--24">Responsive Width</div>
    
    <!-- Height: 8 (32px) by default, 16 (64px) on md and up, 24 (96px) on lg and up -->
    <div class="h--8 md:h--16 lg:h--24">Responsive Height</div>

[#](https://usetrmnl.com/framework_v2/size#supported-responsive-classes)

### Supported Responsive Classes

Responsive variants are available for most size utilities. Arbitrary dimensions (using the `[Npx]` syntax) do not support responsive variants. 

Category | Responsive Support | Example Usage  
---|---|---  
Fixed Sizes  |  âœ“ Supported  |  `md:w--16, lg:h--24`  
Full/Auto Dimensions  |  âœ“ Supported  |  `md:w--full, lg:h--auto`  
Min/Max Dimensions  |  âœ“ Supported  |  `md:w--min-16, lg:h--max-full`  
Arbitrary Dimensions  |  âœ— Not Supported  |  `w--[150px], h--[225px]`  
  
**Note:** Size utilities only support size-based responsive variants (sm:, md:, lg:). They do not support bit-depth responsive variants (1bit:, 2bit:, 4bit:) or combined responsive variants. 

[ Enhancement Guide How to enhance your plugins with device-aware, bit-depth-aware, and orientation-responsive patterns Previous  ](/framework_v2/enhancement_guide)

[ Spacing Control element spacing with fixed margin and padding values Next  ](/framework_v2/spacing)

[ Framework Index  ](/framework_v2)

---

# spacing

# Spacing

The Spacing system provides utility classes for controlling margins and padding. It includes both fixed sizes and decimal values to handle precise spacing needs. 

Available spacing sizes and their pixel values 

[ View Size Documentation  ](/framework_v2/size)

[#](https://usetrmnl.com/framework_v2/spacing#margin-utilities)

### Margin Utilities

Control element margins using these utility classes. Each class follows the pattern `{property}--{size}` and supports responsive modifiers for **Size** , **Orientation** , and **Size + Orientation**. 

`m--{size}` All sides margin

`mt--{size}` Top margin

`mr--{size}` Right margin

`mb--{size}` Bottom margin

`ml--{size}` Left margin

`mx--{size}` Horizontal margin

`my--{size}` Vertical margin

`md:my--{size}` Size-based example

`portrait:mx--{size}` Orientation-based example

`lg:portrait:mt--{size}` Size + Orientation example

[#](https://usetrmnl.com/framework_v2/spacing#padding-utilities)

### Padding Utilities

Control element padding using these utility classes. Each class follows the pattern `{property}--{size}`. 

`p--{size}` All sides padding

`pt--{size}` Top padding

`pr--{size}` Right padding

`pb--{size}` Bottom padding

`pl--{size}` Left padding

`px--{size}` Horizontal padding

`py--{size}` Vertical padding

`sm:px--{size}` Size-based example

`portrait:pb--{size}` Orientation-based example

`md:portrait:pt--{size}` Size + Orientation example

[ Size Define exact width and height dimensions for elements Previous  ](/framework_v2/size)

[ Gap Set precise spacing between elements with predefined gap values Next  ](/framework_v2/gap)

[ Framework Index  ](/framework_v2)

---

# table

# Table

The Table system provides structured data presentation with consistent styling and various size options. It's designed to display information in a clear, scannable format while maintaining visual hierarchy. 

[#](https://usetrmnl.com/framework_v2/table#base-structure)

### Base Structure

Tables are built using standard HTML table elements with additional classes for styling. The base structure includes headers and data cells with consistent spacing and typography. 

[#](https://usetrmnl.com/framework_v2/table#default-table)

#### Default Table

The `table` class provides the standard table styling with comfortable spacing and clear visual hierarchy. 

| Employee| Role| Pranks| Sales| Score| Fun Fact  
---|---|---|---|---|---|---  
1| Dwight Schrute| Assistant to the Regional Manager| 24| 44| 12.91| Owns a beet farm  
2| Jim Halpert| Sales Rep| 42| 21| 8.69| Dwight hates him  
3| Stanley Hudson| Sales Rep| 0| 28| 5.83| Only smiles on Pretzel Day  
4| Phyllis Vance| Sales Rep| 0| 18| 3.79| Married to Bob Vance  
5| Andy Bernard| Sales Rep| 2| 14| 3.18| Cornell graduate  
6| Creed Bratton| Quality Assurance| ???| ???| ???| ???  
7| Karen Filippelli| Sales / Utica Manager| 0| 12| 2.57| Jimâ€™s ex from Stamford  
8| Michael Scott| Regional Manager| 15| 0| 1.65| Worldâ€™s Best Boss mug  
9| Todd Packer| Traveling Salesman| 0| 6| 1.34| Terrible human being  
10| Ryan Howard| Temp / VP / Janitor| 1| 2| 0.63| Pitched the Sabre Pyramid  
11| Pam Beesly| Receptionist / Office Admin| 3| 0| 0.43| Art school dreamer  
12| Meredith Palmer| Supplier Relations| 0| 1| 0.32| Exchanged paper for steak  
13| Holly Flax| HR (Nashua)| 2| 0| 0.32| Michaelâ€™s soulmate  
14| Darryl Philbin| Warehouse Foreman| 1| 0| 0.22| Started a band  
15| Kevin Malone| Accountant| 1| 0| 0.22| Spilled the chili  
16| Erin Hannon| Receptionist| 1| 0| 0.22| Dates Gabe, then Andy  
17| Kelly Kapoor| Customer Service| 0| 0| 0.00| Obsessed with Ryan  
18| Angela Martin| Accountant| 0| 0| 0.00| Owns 12 cats  
19| Oscar Martinez| Accountant| 0| 0| 0.00| â€œActually...â€� guy  
20| Roy Anderson| Warehouse| 0| 0| 0.00| Pamâ€™s ex-fiancÃ©  
21| Toby Flenderson| HR| 0| 0| 0.00| Michael hates him  
22| Jan Levinson| Corporate| 0| 0| 0.00| Serenity by Jan  
23| David Wallace| CFO| 0| 0| 0.00| Invented â€œSuck Itâ€�  
24| Robert California| CEO| 0| 0| 0.00| The Lizard King  
25| Nellie Bertram| Special Projects Manager| 0| 0| 0.00| Took Andyâ€™s job  
26| Deangelo Vickers| Regional Manager| 0| 0| 0.00| Juggled invisible balls  
27| Charles Miner| Corporate VP| 0| 0| 0.00| Hated Jimâ€™s pranks  
28| Gabe Lewis| Sabre Liaison| 0| 0| 0.00| Tall, awkward, hates horror movies  
29| Clark Green| Sales| 0| 0| 0.00| Mini Dwight  
30| Pete Miller| Sales| 0| 0| 0.00| Nickname: Plop  
  
![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Table Regular

Copy  Copied  Show more  Show less 
    
    
    <table class="table" data-table-limit="true">
      <thead>
        <tr>
          <th><span class="title">#</span></th>
          <th><span class="title">Employee</span></th>
          <th><span class="title">Role</span></th>
          <th><span class="title">Pranks</span></th>
          <th><span class="title">Sales</span></th>
          <th><span class="title">Score</span></th>
          <th><span class="title">Fun Fact</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="label label--small">Row 1, Cell 1</span></td>
          <td><span class="label">Row 1, Cell 2</span></td>
          <td><span class="label label--small">Row 1, Cell 3</span></td>
        </tr>
      </tbody>
    </table>

[#](https://usetrmnl.com/framework_v2/table#size-variants)

### Size Variants

Tables support four sizes: Large, Regular (default), Small, and XSmall. Use modifier classes to change row heights.

[#](https://usetrmnl.com/framework_v2/table#large-table)

#### Large Table

Use `table--large` to increase row heights for more spacious tables.

| Employee| Role| Pranks| Sales| Score| Fun Fact  
---|---|---|---|---|---|---  
1| Dwight Schrute| Assistant to the Regional Manager| 24| 44| 12.91| Owns a beet farm  
2| Jim Halpert| Sales Rep| 42| 21| 8.69| Dwight hates him  
3| Stanley Hudson| Sales Rep| 0| 28| 5.83| Only smiles on Pretzel Day  
4| Phyllis Vance| Sales Rep| 0| 18| 3.79| Married to Bob Vance  
5| Andy Bernard| Sales Rep| 2| 14| 3.18| Cornell graduate  
6| Creed Bratton| Quality Assurance| ???| ???| ???| ???  
7| Karen Filippelli| Sales / Utica Manager| 0| 12| 2.57| Jimâ€™s ex from Stamford  
8| Michael Scott| Regional Manager| 15| 0| 1.65| Worldâ€™s Best Boss mug  
9| Todd Packer| Traveling Salesman| 0| 6| 1.34| Terrible human being  
10| Ryan Howard| Temp / VP / Janitor| 1| 2| 0.63| Pitched the Sabre Pyramid  
11| Pam Beesly| Receptionist / Office Admin| 3| 0| 0.43| Art school dreamer  
12| Meredith Palmer| Supplier Relations| 0| 1| 0.32| Exchanged paper for steak  
13| Holly Flax| HR (Nashua)| 2| 0| 0.32| Michaelâ€™s soulmate  
14| Darryl Philbin| Warehouse Foreman| 1| 0| 0.22| Started a band  
15| Kevin Malone| Accountant| 1| 0| 0.22| Spilled the chili  
16| Erin Hannon| Receptionist| 1| 0| 0.22| Dates Gabe, then Andy  
17| Kelly Kapoor| Customer Service| 0| 0| 0.00| Obsessed with Ryan  
18| Angela Martin| Accountant| 0| 0| 0.00| Owns 12 cats  
19| Oscar Martinez| Accountant| 0| 0| 0.00| â€œActually...â€� guy  
20| Roy Anderson| Warehouse| 0| 0| 0.00| Pamâ€™s ex-fiancÃ©  
21| Toby Flenderson| HR| 0| 0| 0.00| Michael hates him  
22| Jan Levinson| Corporate| 0| 0| 0.00| Serenity by Jan  
23| David Wallace| CFO| 0| 0| 0.00| Invented â€œSuck Itâ€�  
24| Robert California| CEO| 0| 0| 0.00| The Lizard King  
25| Nellie Bertram| Special Projects Manager| 0| 0| 0.00| Took Andyâ€™s job  
26| Deangelo Vickers| Regional Manager| 0| 0| 0.00| Juggled invisible balls  
27| Charles Miner| Corporate VP| 0| 0| 0.00| Hated Jimâ€™s pranks  
28| Gabe Lewis| Sabre Liaison| 0| 0| 0.00| Tall, awkward, hates horror movies  
29| Clark Green| Sales| 0| 0| 0.00| Mini Dwight  
30| Pete Miller| Sales| 0| 0| 0.00| Nickname: Plop  
  
![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Table Large

Copy  Copied  Show more  Show less 
    
    
    <table class="table table--large" data-table-limit="true">
      <thead>
        <tr>
          <th><span class="title">#</span></th>
          <th><span class="title">Employee</span></th>
          <th><span class="title">Role</span></th>
          <th><span class="title">Pranks</span></th>
          <th><span class="title">Sales</span></th>
          <th><span class="title">Score</span></th>
          <th><span class="title">Fun Fact</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="label label--small">Row 1, Cell 1</span></td>
          <td><span class="label">Row 1, Cell 2</span></td>
          <td><span class="label label--small">Row 1, Cell 3</span></td>
        </tr>
      </tbody>
    </table>

[#](https://usetrmnl.com/framework_v2/table#small-table)

#### Small Table

Use `table--small` for a compact table with reduced row heights. The older `table--condensed` class remains supported as a backward-compatible alias.

| Employee| Role| Pranks| Sales| Score| Fun Fact  
---|---|---|---|---|---|---  
1| Dwight Schrute| Assistant to the Regional Manager| 24| 44| 12.91| Owns a beet farm  
2| Jim Halpert| Sales Rep| 42| 21| 8.69| Dwight hates him  
3| Stanley Hudson| Sales Rep| 0| 28| 5.83| Only smiles on Pretzel Day  
4| Phyllis Vance| Sales Rep| 0| 18| 3.79| Married to Bob Vance  
5| Andy Bernard| Sales Rep| 2| 14| 3.18| Cornell graduate  
6| Creed Bratton| Quality Assurance| ???| ???| ???| ???  
7| Karen Filippelli| Sales / Utica Manager| 0| 12| 2.57| Jimâ€™s ex from Stamford  
8| Michael Scott| Regional Manager| 15| 0| 1.65| Worldâ€™s Best Boss mug  
9| Todd Packer| Traveling Salesman| 0| 6| 1.34| Terrible human being  
10| Ryan Howard| Temp / VP / Janitor| 1| 2| 0.63| Pitched the Sabre Pyramid  
11| Pam Beesly| Receptionist / Office Admin| 3| 0| 0.43| Art school dreamer  
12| Meredith Palmer| Supplier Relations| 0| 1| 0.32| Exchanged paper for steak  
13| Holly Flax| HR (Nashua)| 2| 0| 0.32| Michaelâ€™s soulmate  
14| Darryl Philbin| Warehouse Foreman| 1| 0| 0.22| Started a band  
15| Kevin Malone| Accountant| 1| 0| 0.22| Spilled the chili  
16| Erin Hannon| Receptionist| 1| 0| 0.22| Dates Gabe, then Andy  
17| Kelly Kapoor| Customer Service| 0| 0| 0.00| Obsessed with Ryan  
18| Angela Martin| Accountant| 0| 0| 0.00| Owns 12 cats  
19| Oscar Martinez| Accountant| 0| 0| 0.00| â€œActually...â€� guy  
20| Roy Anderson| Warehouse| 0| 0| 0.00| Pamâ€™s ex-fiancÃ©  
21| Toby Flenderson| HR| 0| 0| 0.00| Michael hates him  
22| Jan Levinson| Corporate| 0| 0| 0.00| Serenity by Jan  
23| David Wallace| CFO| 0| 0| 0.00| Invented â€œSuck Itâ€�  
24| Robert California| CEO| 0| 0| 0.00| The Lizard King  
25| Nellie Bertram| Special Projects Manager| 0| 0| 0.00| Took Andyâ€™s job  
26| Deangelo Vickers| Regional Manager| 0| 0| 0.00| Juggled invisible balls  
27| Charles Miner| Corporate VP| 0| 0| 0.00| Hated Jimâ€™s pranks  
28| Gabe Lewis| Sabre Liaison| 0| 0| 0.00| Tall, awkward, hates horror movies  
29| Clark Green| Sales| 0| 0| 0.00| Mini Dwight  
30| Pete Miller| Sales| 0| 0| 0.00| Nickname: Plop  
  
![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Table Small

Copy  Copied  Show more  Show less 
    
    
    <table class="table table--small" data-table-limit="true">
      <thead>
        <tr>
          <th><span class="title title--small">#</span></th>
          <th><span class="title title--small">Employee</span></th>
          <th><span class="title title--small">Role</span></th>
          <th><span class="title title--small">Pranks</span></th>
          <th><span class="title title--small">Sales</span></th>
          <th><span class="title title--small">Score</span></th>
          <th><span class="title title--small">Fun Fact</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="label label--small">Row 1, Cell 1</span></td>
          <td><span class="label">Row 1, Cell 2</span></td>
          <td><span class="label label--small">Row 1, Cell 3</span></td>
        </tr>
      </tbody>
    </table>

[#](https://usetrmnl.com/framework_v2/table#xsmall-table)

#### XSmall Table

Use `table--xsmall` for the most compact row heights.

| Employee| Role| Pranks| Sales| Score| Fun Fact  
---|---|---|---|---|---|---  
1| Dwight Schrute| Assistant to the Regional Manager| 24| 44| 12.91| Owns a beet farm  
2| Jim Halpert| Sales Rep| 42| 21| 8.69| Dwight hates him  
3| Stanley Hudson| Sales Rep| 0| 28| 5.83| Only smiles on Pretzel Day  
4| Phyllis Vance| Sales Rep| 0| 18| 3.79| Married to Bob Vance  
5| Andy Bernard| Sales Rep| 2| 14| 3.18| Cornell graduate  
6| Creed Bratton| Quality Assurance| ???| ???| ???| ???  
7| Karen Filippelli| Sales / Utica Manager| 0| 12| 2.57| Jimâ€™s ex from Stamford  
8| Michael Scott| Regional Manager| 15| 0| 1.65| Worldâ€™s Best Boss mug  
9| Todd Packer| Traveling Salesman| 0| 6| 1.34| Terrible human being  
10| Ryan Howard| Temp / VP / Janitor| 1| 2| 0.63| Pitched the Sabre Pyramid  
11| Pam Beesly| Receptionist / Office Admin| 3| 0| 0.43| Art school dreamer  
12| Meredith Palmer| Supplier Relations| 0| 1| 0.32| Exchanged paper for steak  
13| Holly Flax| HR (Nashua)| 2| 0| 0.32| Michaelâ€™s soulmate  
14| Darryl Philbin| Warehouse Foreman| 1| 0| 0.22| Started a band  
15| Kevin Malone| Accountant| 1| 0| 0.22| Spilled the chili  
16| Erin Hannon| Receptionist| 1| 0| 0.22| Dates Gabe, then Andy  
17| Kelly Kapoor| Customer Service| 0| 0| 0.00| Obsessed with Ryan  
18| Angela Martin| Accountant| 0| 0| 0.00| Owns 12 cats  
19| Oscar Martinez| Accountant| 0| 0| 0.00| â€œActually...â€� guy  
20| Roy Anderson| Warehouse| 0| 0| 0.00| Pamâ€™s ex-fiancÃ©  
21| Toby Flenderson| HR| 0| 0| 0.00| Michael hates him  
22| Jan Levinson| Corporate| 0| 0| 0.00| Serenity by Jan  
23| David Wallace| CFO| 0| 0| 0.00| Invented â€œSuck Itâ€�  
24| Robert California| CEO| 0| 0| 0.00| The Lizard King  
25| Nellie Bertram| Special Projects Manager| 0| 0| 0.00| Took Andyâ€™s job  
26| Deangelo Vickers| Regional Manager| 0| 0| 0.00| Juggled invisible balls  
27| Charles Miner| Corporate VP| 0| 0| 0.00| Hated Jimâ€™s pranks  
28| Gabe Lewis| Sabre Liaison| 0| 0| 0.00| Tall, awkward, hates horror movies  
29| Clark Green| Sales| 0| 0| 0.00| Mini Dwight  
30| Pete Miller| Sales| 0| 0| 0.00| Nickname: Plop  
  
![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Table XSmall

Copy  Copied  Show more  Show less 
    
    
    <table class="table table--xsmall" data-table-limit="true">
      <thead>
        <tr>
          <th><span class="title title--small">#</span></th>
          <th><span class="title title--small">Employee</span></th>
          <th><span class="title title--small">Role</span></th>
          <th><span class="title title--small">Pranks</span></th>
          <th><span class="title title--small">Sales</span></th>
          <th><span class="title title--small">Score</span></th>
          <th><span class="title title--small">Fun Fact</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="label label--small">Row 1, Cell 1</span></td>
          <td><span class="label label--small">Row 1, Cell 2</span></td>
          <td><span class="label label--small">Row 1, Cell 3</span></td>
        </tr>
      </tbody>
    </table>

[#](https://usetrmnl.com/framework_v2/table#overflow-engine)

### Overflow Engine

Demonstrates the overflow behavior and trailing â€œand X moreâ€� row when content exceeds the height budget.

| Employee| Role| Pranks| Sales| Score| Fun Fact  
---|---|---|---|---|---|---  
1| Dwight Schrute| Assistant to the Regional Manager| 24| 44| 12.91| Owns a beet farm  
2| Jim Halpert| Sales Rep| 42| 21| 8.69| Dwight hates him  
3| Stanley Hudson| Sales Rep| 0| 28| 5.83| Only smiles on Pretzel Day  
4| Phyllis Vance| Sales Rep| 0| 18| 3.79| Married to Bob Vance  
5| Andy Bernard| Sales Rep| 2| 14| 3.18| Cornell graduate  
6| Creed Bratton| Quality Assurance| ???| ???| ???| ???  
7| Karen Filippelli| Sales / Utica Manager| 0| 12| 2.57| Jimâ€™s ex from Stamford  
8| Michael Scott| Regional Manager| 15| 0| 1.65| Worldâ€™s Best Boss mug  
9| Todd Packer| Traveling Salesman| 0| 6| 1.34| Terrible human being  
10| Ryan Howard| Temp / VP / Janitor| 1| 2| 0.63| Pitched the Sabre Pyramid  
11| Pam Beesly| Receptionist / Office Admin| 3| 0| 0.43| Art school dreamer  
12| Meredith Palmer| Supplier Relations| 0| 1| 0.32| Exchanged paper for steak  
13| Holly Flax| HR (Nashua)| 2| 0| 0.32| Michaelâ€™s soulmate  
14| Darryl Philbin| Warehouse Foreman| 1| 0| 0.22| Started a band  
15| Kevin Malone| Accountant| 1| 0| 0.22| Spilled the chili  
16| Erin Hannon| Receptionist| 1| 0| 0.22| Dates Gabe, then Andy  
17| Kelly Kapoor| Customer Service| 0| 0| 0.00| Obsessed with Ryan  
18| Angela Martin| Accountant| 0| 0| 0.00| Owns 12 cats  
19| Oscar Martinez| Accountant| 0| 0| 0.00| â€œActually...â€� guy  
20| Roy Anderson| Warehouse| 0| 0| 0.00| Pamâ€™s ex-fiancÃ©  
21| Toby Flenderson| HR| 0| 0| 0.00| Michael hates him  
22| Jan Levinson| Corporate| 0| 0| 0.00| Serenity by Jan  
23| David Wallace| CFO| 0| 0| 0.00| Invented â€œSuck Itâ€�  
24| Robert California| CEO| 0| 0| 0.00| The Lizard King  
25| Nellie Bertram| Special Projects Manager| 0| 0| 0.00| Took Andyâ€™s job  
26| Deangelo Vickers| Regional Manager| 0| 0| 0.00| Juggled invisible balls  
27| Charles Miner| Corporate VP| 0| 0| 0.00| Hated Jimâ€™s pranks  
28| Gabe Lewis| Sabre Liaison| 0| 0| 0.00| Tall, awkward, hates horror movies  
29| Clark Green| Sales| 0| 0| 0.00| Mini Dwight  
30| Pete Miller| Sales| 0| 0| 0.00| Nickname: Plop  
  
![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Table Overflow

Copy  Copied  Show more  Show less 
    
    
    <table class="table" data-table-limit="true">
      <thead>
        <tr>
          <th><span class="title">#</span></th>
          <th><span class="title">Employee</span></th>
          <th><span class="title">Role</span></th>
          <th><span class="title">Pranks</span></th>
          <th><span class="title">Sales</span></th>
          <th><span class="title">Score</span></th>
          <th><span class="title">Fun Fact</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="label label--small">Row 1, Cell 1</span></td>
          <td><span class="label">Row 1, Cell 2</span></td>
          <td><span class="label label--small">Row 1, Cell 3</span></td>
        </tr>
      </tbody>
    </table>

[#](https://usetrmnl.com/framework_v2/table#clamp-engine)

### Clamp Engine

Apply `data-clamp` to each cellâ€™s content to ensure consistent single-line truncation with ellipsis. This works with the Table Overflow behavior and is handled by the Clamp engine. 

| Employee| Role| Pranks| Sales| Score| Fun Fact  
---|---|---|---|---|---|---  
1| Dwight Schrute| Assistant to the Regional Manager| 24| 44| 12.91| Owns a beet farm  
2| Jim Halpert| Sales Rep| 42| 21| 8.69| Dwight hates him  
3| Stanley Hudson| Sales Rep| 0| 28| 5.83| Only smiles on Pretzel Day  
4| Phyllis Vance| Sales Rep| 0| 18| 3.79| Married to Bob Vance  
5| Andy Bernard| Sales Rep| 2| 14| 3.18| Cornell graduate  
6| Creed Bratton| Quality Assurance| ???| ???| ???| ???  
7| Karen Filippelli| Sales / Utica Manager| 0| 12| 2.57| Jimâ€™s ex from Stamford  
8| Michael Scott| Regional Manager| 15| 0| 1.65| Worldâ€™s Best Boss mug  
9| Todd Packer| Traveling Salesman| 0| 6| 1.34| Terrible human being  
10| Ryan Howard| Temp / VP / Janitor| 1| 2| 0.63| Pitched the Sabre Pyramid  
11| Pam Beesly| Receptionist / Office Admin| 3| 0| 0.43| Art school dreamer  
12| Meredith Palmer| Supplier Relations| 0| 1| 0.32| Exchanged paper for steak  
13| Holly Flax| HR (Nashua)| 2| 0| 0.32| Michaelâ€™s soulmate  
14| Darryl Philbin| Warehouse Foreman| 1| 0| 0.22| Started a band  
15| Kevin Malone| Accountant| 1| 0| 0.22| Spilled the chili  
16| Erin Hannon| Receptionist| 1| 0| 0.22| Dates Gabe, then Andy  
17| Kelly Kapoor| Customer Service| 0| 0| 0.00| Obsessed with Ryan  
18| Angela Martin| Accountant| 0| 0| 0.00| Owns 12 cats  
19| Oscar Martinez| Accountant| 0| 0| 0.00| â€œActually...â€� guy  
20| Roy Anderson| Warehouse| 0| 0| 0.00| Pamâ€™s ex-fiancÃ©  
21| Toby Flenderson| HR| 0| 0| 0.00| Michael hates him  
22| Jan Levinson| Corporate| 0| 0| 0.00| Serenity by Jan  
23| David Wallace| CFO| 0| 0| 0.00| Invented â€œSuck Itâ€�  
24| Robert California| CEO| 0| 0| 0.00| The Lizard King  
25| Nellie Bertram| Special Projects Manager| 0| 0| 0.00| Took Andyâ€™s job  
26| Deangelo Vickers| Regional Manager| 0| 0| 0.00| Juggled invisible balls  
27| Charles Miner| Corporate VP| 0| 0| 0.00| Hated Jimâ€™s pranks  
28| Gabe Lewis| Sabre Liaison| 0| 0| 0.00| Tall, awkward, hates horror movies  
29| Clark Green| Sales| 0| 0| 0.00| Mini Dwight  
30| Pete Miller| Sales| 0| 0| 0.00| Nickname: Plop  
  
![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Table Clamp: 1 line

Copy  Copied  Show more  Show less 
    
    
    <table class="table" data-table-limit="true">
      <thead>
        <tr>
          <th><span class="title">#</span></th>
          <th><span class="title">Employee</span></th>
          <th><span class="title">Role</span></th>
          <th><span class="title">Pranks</span></th>
          <th><span class="title">Sales</span></th>
          <th><span class="title">Score</span></th>
          <th><span class="title">Fun Fact</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="label label--small" data-clamp="1">Row 1, Cell 1</span></td>
          <td><span class="label" data-clamp="1">Row 1, Cell 2</span></td>
          <td><span class="label label--small" data-clamp="1">Row 1, Cell 3</span></td>
        </tr>
      </tbody>
    </table>

[ Item Build standardized list items and content blocks Previous  ](/framework_v2/item)

[ Chart Visualize data optimized for 1-bit rendering Next  ](/framework_v2/chart)

[ Framework Index  ](/framework_v2)

---

# table_overflow

# Table Overflow

Beta

Limit table height and automatically append a trailing â€œand X moreâ€� row when there are more rows than can fit. Opt in with `data-table-limit="true"` and set a height with `data-table-max-height` or use `auto` to inherit from the parent container. 

[#](https://usetrmnl.com/framework_v2/table_overflow#table-overflow)

### Table Overflow

A regular-sized table demonstrating the overflow behavior within a fixed height budget.

| Employee| Role| Pranks| Sales| Score| Fun Fact  
---|---|---|---|---|---|---  
1| Dwight Schrute| Assistant to the Regional Manager| 24| 44| 12.91| Owns a beet farm  
2| Jim Halpert| Sales Rep| 42| 21| 8.69| Dwight hates him  
3| Stanley Hudson| Sales Rep| 0| 28| 5.83| Only smiles on Pretzel Day  
4| Phyllis Vance| Sales Rep| 0| 18| 3.79| Married to Bob Vance  
5| Andy Bernard| Sales Rep| 2| 14| 3.18| Cornell graduate  
6| Creed Bratton| Quality Assurance| ???| ???| ???| ???  
7| Karen Filippelli| Sales / Utica Manager| 0| 12| 2.57| Jimâ€™s ex from Stamford  
8| Michael Scott| Regional Manager| 15| 0| 1.65| Worldâ€™s Best Boss mug  
9| Todd Packer| Traveling Salesman| 0| 6| 1.34| Terrible human being  
10| Ryan Howard| Temp / VP / Janitor| 1| 2| 0.63| Pitched the Sabre Pyramid  
11| Pam Beesly| Receptionist / Office Admin| 3| 0| 0.43| Art school dreamer  
12| Meredith Palmer| Supplier Relations| 0| 1| 0.32| Exchanged paper for steak  
13| Holly Flax| HR (Nashua)| 2| 0| 0.32| Michaelâ€™s soulmate  
14| Darryl Philbin| Warehouse Foreman| 1| 0| 0.22| Started a band  
15| Kevin Malone| Accountant| 1| 0| 0.22| Spilled the chili  
16| Erin Hannon| Receptionist| 1| 0| 0.22| Dates Gabe, then Andy  
17| Kelly Kapoor| Customer Service| 0| 0| 0.00| Obsessed with Ryan  
18| Angela Martin| Accountant| 0| 0| 0.00| Owns 12 cats  
19| Oscar Martinez| Accountant| 0| 0| 0.00| â€œActually...â€� guy  
20| Roy Anderson| Warehouse| 0| 0| 0.00| Pamâ€™s ex-fiancÃ©  
21| Toby Flenderson| HR| 0| 0| 0.00| Michael hates him  
22| Jan Levinson| Corporate| 0| 0| 0.00| Serenity by Jan  
23| David Wallace| CFO| 0| 0| 0.00| Invented â€œSuck Itâ€�  
24| Robert California| CEO| 0| 0| 0.00| The Lizard King  
25| Nellie Bertram| Special Projects Manager| 0| 0| 0.00| Took Andyâ€™s job  
26| Deangelo Vickers| Regional Manager| 0| 0| 0.00| Juggled invisible balls  
27| Charles Miner| Corporate VP| 0| 0| 0.00| Hated Jimâ€™s pranks  
28| Gabe Lewis| Sabre Liaison| 0| 0| 0.00| Tall, awkward, hates horror movies  
29| Clark Green| Sales| 0| 0| 0.00| Mini Dwight  
30| Pete Miller| Sales| 0| 0| 0.00| Nickname: Plop  
  
![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Table Overflow Regular â€¢ Auto height

Copy  Copied  Show more  Show less 
    
    
    <table class="table" data-table-limit="true">
      <thead>
        <tr>
          <th><span class="title">#</span></th>
          <th><span class="title">Employee</span></th>
          <th><span class="title">Role</span></th>
          <th><span class="title">Pranks</span></th>
          <th><span class="title">Sales</span></th>
          <th><span class="title">Score</span></th>
          <th><span class="title">Fun Fact</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="label label--small">Row 1, Cell 1</span></td>
          <td><span class="label">Row 1, Cell 2</span></td>
          <td><span class="label label--small">Row 1, Cell 3</span></td>
        </tr>
      </tbody>
    </table>

[ Overflow Handle column items overflow Previous  ](/framework_v2/overflow)

[ Clamp Manage text overflow with single and multi-line truncation Next  ](/framework_v2/clamp)

[ Framework Index  ](/framework_v2)

---

# text

# Text

The Text Color system creates the illusion of grayscale text through carefully designed dither patterns. When rendered on 1-bit (black and white only) displays, these patterns create an illusion of different shades of gray by using specific arrangements of black and white pixels. 

[#](https://usetrmnl.com/framework_v2/text#usage)

### Usage

Use the `text--{shade}` utility classes to apply these text color patterns to any element. Choose from sixteen values: black, gray-10 through gray-75, and white. 

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

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Text color shades

**Dark Mode Notice:** The color palette appears inverted because TRMNL's dark mode inverts the entire screen, except the images. 

Copy  Copied  Show more  Show less 
    
    
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

[#](https://usetrmnl.com/framework_v2/text#backward-compatibility)

### Backward Compatibility

For backward compatibility, the original shade names (`gray-1` through `gray-7`) are still supported but deprecated. These map to equivalent extended shades: 

Copy  Copied  Show more  Show less 
    
    
    <!-- Deprecated (but still works) -->
    <div class="text--gray-1">Gray 1 text (deprecated)</div>
    <div class="text--gray-2">Gray 2 text (deprecated)</div>
    
    <!-- Preferred (new naming) -->
    <div class="text--gray-10">Gray 10 text (preferred)</div>
    <div class="text--gray-20">Gray 20 text (preferred)</div>

[#](https://usetrmnl.com/framework_v2/text#text-alignment)

### Text Alignment

Control text alignment using the alignment utility classes. Options include left, center, right, and justify alignment. 

This text is left-aligned. This is the default alignment for most text content.

This text is center-aligned. Useful for headings and important content.

This text is right-aligned. Often used for numerical data or RTL languages.

This text is justified. Creates even text edges on both sides but affects readability. Useful for multi-column text layouts.

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Text Alignment

Copy  Copied  Show more  Show less 
    
    
    <p class="text--left">Left-aligned text</p>
    <p class="text--center">Center-aligned text</p>
    <p class="text--right">Right-aligned text</p>
    <p class="text--justify">Justified text</p>

[ Responsive Test Test responsive utilities and compare SCSS mixins with CSS classes Previous  ](/framework_v2/responsive_test)

[ Image Optimize images using dithering techniques for 1-bit rendering Next  ](/framework_v2/image)

[ Framework Index  ](/framework_v2)

---

# text_stroke

# Text Stroke

The Text Stroke system allows you to add outlined text with customizable stroke width and color. This is useful for creating text that stands out against shaded backgrounds. 

[#](https://usetrmnl.com/framework_v2/text_stroke#usage)

### Usage

The Text Stroke system includes preset size modifiers that allow you to quickly apply different stroke widths to your text. The default stroke is 3.5px white, with additional options for small (2px), medium (4.5px), large (6px), and extra large (7.5px). 

Aa No Stroke

Aa Small

Aa Default

Aa Medium

Aa Large

Aa Extra Large

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Text Stroke Preset Sizes

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--large">Aa</span>
    <span class="value value--large text-stroke text-stroke--small">Aa</span>
    <span class="value value--large text-stroke">Aa</span>
    <span class="value value--large text-stroke text-stroke--medium">Aa</span>
    <span class="value value--large text-stroke text-stroke--large">Aa</span>
    <span class="value value--large text-stroke text-stroke--xlarge">Aa</span>

[#](https://usetrmnl.com/framework_v2/text_stroke#stroke-colors)

### Stroke Colors

Use the black modifier for text on dark backgrounds. 

Aa No Stroke

Aa Small

Aa Default

Aa Medium

Aa Large

Aa Extra Large

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Text Stroke Color Variants

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--large text--white">Aa</span>
    <span class="value value--large text--white text-stroke text-stroke--small text-stroke--black">Aa</span>
    <span class="value value--large text--white text-stroke text-stroke--black">Aa</span>
    <span class="value value--large text--white text-stroke text-stroke--medium text-stroke--black">Aa</span>
    <span class="value value--large text--white text-stroke text-stroke--large text-stroke--black">Aa</span>
    <span class="value value--large text--white text-stroke text-stroke--xlarge text-stroke--black">Aa</span>

[ Image Stroke Legible images when displayed on shaded backgrounds Previous  ](/framework_v2/image_stroke)

[ Scale Scale interface to affect content density and readability Next  ](/framework_v2/scale)

[ Framework Index  ](/framework_v2)

---

# title_bar

# Title Bar

The Title Bar component provides a consistent header for terminal-like interfaces, displaying application information such as icons, titles, and instance details. 

[#](https://usetrmnl.com/framework_v2/title_bar#base-structure)

### Base Structure

The Title Bar consists of three main elements: an icon, a title, and an optional instance label. These elements are arranged horizontally and automatically spaced. 

[#](https://usetrmnl.com/framework_v2/title_bar#basic-title-bar)

#### Basic Title Bar

The basic Title Bar includes an icon and title. Use the `title_bar` class for the container. 

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Basic Title Bar

Copy  Copied  Show more  Show less 
    
    
    <div class="title_bar">
      <img class="image" src="/images/plugins/trmnl--render.svg" />
      <span class="title">Basic Title Bar</span>
    </div>

[#](https://usetrmnl.com/framework_v2/title_bar#title-bar-with-instance)

#### Title Bar with Instance

Add an instance label using the `instance` class to display additional context. 

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Title Bar with Instance Production

Copy  Copied  Show more  Show less 
    
    
    <div class="title_bar">
      <img class="image" src="/images/plugins/trmnl--render.svg" />
      <span class="title">Title Bar with Instance</span>
      <span class="instance">Production</span>
    </div>

[ Layout Primary container for organizing plugin content Previous  ](/framework_v2/layout)

[ Columns Implement zero-config column layouts for content organization Next  ](/framework_v2/columns)

[ Framework Index  ](/framework_v2)

---

# title

# Title

The Title system provides consistent text headings with different size variants. It helps maintain visual hierarchy and readability throughout the interface. 

[#](https://usetrmnl.com/framework_v2/title#base-structure)

### Base Structure

The Title system offers two primary variations: default and small. These base structures form the foundation for content headings. 

[#](https://usetrmnl.com/framework_v2/title#default-title)

#### Default Title

The `title` class creates a standard-sized heading. This is the most common usage for primary content headers. 

Default Title

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Title Default

Copy  Copied  Show more  Show less 
    
    
    <span class="title">Default Title</span>

[#](https://usetrmnl.com/framework_v2/title#small-title)

#### Small Title

Add `title--small` to create a more compact heading. Useful for secondary headers or where space is limited. 

Small Title

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Title Small

Copy  Copied  Show more  Show less 
    
    
    <span class="title title--small">Small Title</span>

[ Mashup Assemble multiple plugin views into a single interface Previous  ](/framework_v2/mashup)

[ Value Display data values with consistent formatting Next  ](/framework_v2/value)

[ Framework Index  ](/framework_v2)

---

# upgrade_guide

# Upgrade Guide

This short guide helps you upgrade from Framework v1 to v2. The new framework stays backward compatible, with the exception of the **Border** utility. 

[#](https://usetrmnl.com/framework_v2/upgrade_guide#deprecation-notice-border-utility)

### Deprecation notice: Border utility

The Border utility was redesigned to render a fullâ€‘spectrum grayscale on any surface shade. The markup stays the same, but the visual output changes. See the [Border](/framework_v2/border) docs for details and examples. 

  * New scale: `1` = black â€¦ `7` = white; works on light and dark backgrounds.
  * Previously (v1), borders only produced a faux grayscale on white surfaces and appeared solid black (invisible) on black surfaces.
  * How to upgrade: keep your markup (`border--h-{n}`, `border--v-{n}`), then reâ€‘evaluate `{n}` values on both light and dark surfaces.



[#](https://usetrmnl.com/framework_v2/upgrade_guide#what-s-new-you-can-adopt-immediately)

### Whatâ€™s new you can adopt immediately

  * Bitâ€‘depth variants: add `2bit:` and `4bit:` prefixes to enhance richer devices.
  * Orientation variants: use `portrait:` and `landscape:` without branching markup.
  * Responsive breakpoints: `sm`, `md`, `lg`, `xl`.
  * Automatic bitâ€‘depth adaptation for [Background](/framework_v2/background), [Border](/framework_v2/border), and [Text](/framework_v2/text).



For a deeper dive into enhancement options, see the [Enhancement Guide](/framework_v2/enhancement_guide). 

[#](https://usetrmnl.com/framework_v2/upgrade_guide#compatibility-notes)

### Compatibility notes

  * Legacy background tokens (`gray-1..7`) still render; prefer the expanded palette (`gray-10..75`) going forward.
  * Overflow: legacy list attributes (`data-list-limit`, `data-list-max-height`, `data-list-hidden-count`, `data-list-max-columns`) continue to work when placed on a descendant `.column` or `.list`. The runtime promotes them to the enclosing `.columns` container.
  * Overflow: when only `data-list-limit` is present, the engine defaults to a single column. Suppress the trailing label with `data-list-hidden-count="false"`.



[ V2 Overview Whatâ€™s new in Framework v2: utilities, components, and guides Previous  ](/framework_v2/v2_overview)

[ Enhancement Guide How to enhance your plugins with device-aware, bit-depth-aware, and orientation-responsive patterns Next  ](/framework_v2/enhancement_guide)

[ Framework Index  ](/framework_v2)

---

# v2_overview

# Framework v2 Overview

Welcome to Framework v2. This overview highlights whatâ€™s new and what changed, and points you to detailed guides. 

[#](https://usetrmnl.com/framework_v2/v2_overview#highlights-new-vs-v1)

### Highlights (new vs v1)

  * New responsive model (not present in v1): size breakpoints (`sm`, `md`, `lg`, `xl`), orientation prefixes (`portrait:`, `landscape:`), and bitâ€‘depth variants (`1bit:`, `2bit:`, `4bit:`).
  * Automatic bitâ€‘depth adaptation for [Background](/framework_v2/background), [Border](/framework_v2/border), and [Text](/framework_v2/text) (single tokens render appropriately on 1â€‘, 2â€‘, and 4â€‘bit displays).
  * Expanded Background/Text palette to 16 shades (`gray-10` â€¦ `gray-75`), with legacy `gray-1..7` still supported (deprecated).
  * New utilities: [Aspect Ratio](/framework_v2/aspect_ratio), [Scale](/framework_v2/scale), [Visibility](/framework_v2/visibility).
  * New elements/components: [Progress](/framework_v2/progress) (component), [Divider](/framework_v2/divider) (element).



[#](https://usetrmnl.com/framework_v2/v2_overview#what-changed)

### What changed

  * **New responsive model:** v1 had no responsive prefixes. v2 adds size, orientation, and bitâ€‘depth variants.
  * **Border utility:** only nonâ€‘backward compatible change. New 1â€“7 fullâ€‘spectrum scale that works on any surface shade. In v1, borders created faux grayscale only on white surfaces and appeared black/invisible on black surfaces.
  * **Background/Text:** expanded shade palette and bitâ€‘depth responsiveness; legacy `gray-1..7` tokens still render but are deprecated.



See [Border](/framework_v2/border), [Background](/framework_v2/background), and [Text](/framework_v2/text) docs for details. 

[#](https://usetrmnl.com/framework_v2/v2_overview#start-here)

### Start here

  * [Upgrade Guide](/framework_v2/upgrade_guide): concise steps to move from v1 to v2 (calls out the Border change).
  * [Enhancement Guide](/framework_v2/enhancement_guide): deep dive on new responsive capabilities and how to enhance your plugins.



[ Upgrade Guide Steps to upgrade your plugins to Framework v2 Next  ](/framework_v2/upgrade_guide)

[ Framework Index  ](/framework_v2)

---

# value

# Value

The Value system provides consistent text styling for displaying numerical and textual values, with various size options and support for tabular numbers. It ensures readability and visual hierarchy across different contexts. 

[#](https://usetrmnl.com/framework_v2/value#size-variants)

### Size Variants

The Value system offers eight size variants, from XXSmall to XXXLarge, allowing for flexible typography scaling across different use cases. Each size is carefully crafted for optimal readability and visual balance. 

[#](https://usetrmnl.com/framework_v2/value#xxsmall)

#### XXSmall

The `value--xxsmall` class creates the smallest text size, ideal for compact displays and supporting information. 

Example 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value XXSmall

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xxsmall">Example</span>
    <span class="value value--xxsmall value--tnums">48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#xsmall)

#### XSmall

The `value--xsmall` class provides a size slightly larger than XXSmall, suitable for secondary information and compact interfaces. 

Example 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value XSmall

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xsmall">Example</span>
    <span class="value value--xsmall value--tnums">48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#small)

#### Small

The `value--small` class creates a size suitable for general body text and regular content. 

Example 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Small

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--small">Example</span>
    <span class="value value--small value--tnums">48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#default-size)

#### Default Size

The base `value` class without size modifiers provides the standard display size. 

Example 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Default

Copy  Copied  Show more  Show less 
    
    
    <span class="value">Example</span>
    <span class="value value--tnums">48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#large)

#### Large

The `value--large` class creates emphasized text, suitable for important information and headings. 

Example 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Large

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--large">Example</span>
    <span class="value value--large value--tnums">48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#xlarge)

#### XLarge

The `value--xlarge` class provides prominent display text, ideal for section headers and key metrics. 

Example 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value XLarge

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xlarge">Example</span>
    <span class="value value--xlarge value--tnums">48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#xxlarge)

#### XXLarge

The `value--xxlarge` class creates very large display text, perfect for major headings and hero sections. 

Example 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value XXLarge

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xxlarge">Example</span>
    <span class="value value--xxlarge value--tnums">48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#xxxlarge)

#### XXXLarge

The `value--xxxlarge` class provides the largest text size, designed for maximum impact in hero sections and key displays. 

Example 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value XXXLarge

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--xxxlarge">Example</span>
    <span class="value value--xxxlarge value--tnums">48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#numerical-display)

### Numerical Display

For numerical values, the Value system includes special formatting options to ensure clear and consistent display of numbers, particularly in financial or data-heavy contexts. 

[#](https://usetrmnl.com/framework_v2/value#tabular-numbers)

#### Tabular Numbers

Add the `value--tnums` modifier to enable tabular numbers, ensuring consistent width for better alignment in tables and lists. 

Regular: 48,206.62 Tabular: 48,206.62

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Tabular Numbers

Copy  Copied  Show more  Show less 
    
    
    <span class="value value--large">Regular: 48,206.62</span>
    <span class="value value--large value--tnums">Tabular: 48,206.62</span>

[#](https://usetrmnl.com/framework_v2/value#responsive-values)

### Responsive Values

The Value system supports responsive variants using breakpoint prefixes. This allows values to adapt their size based on the device width, ensuring optimal readability across different screen sizes. 

[#](https://usetrmnl.com/framework_v2/value#breakpoint-prefixes)

#### Breakpoint Prefixes

Use breakpoint prefixes like `sm:`, `md:`, `lg:` to apply different sizes at different screen widths. 

Responsive Value 1,234.56

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Responsive

Copy  Copied  Show more  Show less 
    
    
    <!-- Small by default, large on md screens, xlarge on lg screens -->
    <span class="value value--small md:value--large lg:value--xlarge">
      Responsive Value
    </span>
    
    <!-- Progressive scaling with screen size -->
    <span class="value value--xsmall sm:value--small md:value--medium lg:value--large value--tnums">
      1,234.56
    </span>

[#](https://usetrmnl.com/framework_v2/value#orientation-and-size-orientation)

#### Orientation and Size+Orientation

Value sizes can adapt to orientation with `portrait:` and can be combined with size breakpoints (e.g., `md:portrait:`) for precise control. 

Orientation Variant 42,000.00

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Value Orientation

Copy  Copied  Show more  Show less 
    
    
    <!-- Orientation only: smaller in portrait -->
    <span class="value value--large portrait:value--small">Orientation Variant</span>
    
    <!-- Size + orientation: xlarge only on md+ screens in portrait -->
    <span class="value value--small md:portrait:value--xlarge value--tnums">42,000.00</span>

[ Title Style headings with consistent typography Previous  ](/framework_v2/title)

[ Label Create clear labels for unified content identification Next  ](/framework_v2/label)

[ Framework Index  ](/framework_v2)

---

# view

# View

The View system provides a consistent container structure for displaying content within the application. 

[#](https://usetrmnl.com/framework_v2/view#base-structure)

### Base Structure

The Layout element is the core component of every View, providing a consistent container for your content. Views can optionally include a Title Bar for additional context. 

[#](https://usetrmnl.com/framework_v2/view#view-with-title-bar)

#### View with Title Bar

The `view view--full` classes create a full-width view. Also available are `view--half_horizontal, view--half_vertical, view--quadrant`.  


When combined with a title bar, it provides context and navigation options. If you're building a screen in the markup editor, _you do not need to wrap your content_ with the `view view--{{size}}` classes. The example code below is sufficient for any layout. 

Layout

![](https://usetrmnl.com/images/plugins/trmnl--render.svg) Title Instance

Copy  Copied  Show more  Show less 
    
    
    <div class="layout">
      <!-- Your content here -->
    </div>
    
    <div class="title_bar">
      <img class="image" src="/images/plugins/trmnl--render.svg" />
      <span class="title">Title</span>
      <span class="instance">Instance</span>
    </div>

[#](https://usetrmnl.com/framework_v2/view#view-without-title-bar)

#### View without Title Bar

For simpler interfaces, you can create a view without a title bar using just the base view classes. 

Layout

Copy  Copied  Show more  Show less 
    
    
    <div class="layout">
      <!-- Your content here -->
    </div>

[#](https://usetrmnl.com/framework_v2/view#screen-container-modifiers)

### Screen Container Modifiers

The screen container that wraps your views has a no-bleed option that removes padding. This can be controlled through Private and Public Plugin settings, or applied directly in your code when developing locally. 

[#](https://usetrmnl.com/framework_v2/view#no-bleed-modifier)

#### No Bleed Modifier

The `screen--no-bleed` modifier removes the default padding around the screen container, allowing content to extend fully to the edges. 

Screen No Bleed / Layout

Copy  Copied  Show more  Show less 
    
    
    <div class="screen screen--no-bleed">
      <div class="view view--full">
        <div class="layout">
          <!-- Your content here -->
        </div>
      </div>
    </div>

[ Screen Device screen dimensions, orientation, and display properties Previous  ](/framework_v2/screen)

[ Layout Primary container for organizing plugin content Next  ](/framework_v2/layout)

[ Framework Index  ](/framework_v2)

---

# visibility

# Visibility

The visibility and display utilities provide comprehensive control over element visibility and display types. Use `hidden` to hide elements, `visible` to show them as blocks, or choose from specific display types like `flex`, `grid`, and `inline`. All classes work with responsive and bit-depth prefixes for device-specific layouts. 

[#](https://usetrmnl.com/framework_v2/visibility#visibility-across-devices)

## Visibility Across Devices

See how visibility classes behave across different screen sizes. Each column represents a different device size. 

Small (600px)

visible md:hidden

Medium (800px)

hidden md:visible lg:hidden

Large (1024px)

hidden lg:visible

Copy  Copied  Show more  Show less 
    
    
    <!-- Always visible -->
    <div class="visible">visible</div>
    
    <!-- Always hidden -->
    <div class="hidden">hidden</div>
    
    <!-- Hidden by default, visible on medium+ -->
    <div class="hidden md:visible">md:visible</div>
    
    <!-- Visible by default, hidden on medium+ -->
    <div class="visible md:hidden">md:hidden</div>
    
    <!-- Visible by default, hidden on large -->
    <div class="visible lg:hidden">lg:hidden</div>
    
    <!-- Display as flex on medium+ -->
    <div class="hidden md:flex">md:flex</div>
    
    <!-- Display as grid on large screens -->
    <div class="hidden lg:grid">lg:grid</div>

[#](https://usetrmnl.com/framework_v2/visibility#display-utilities)

## Display Utilities

Control how elements are displayed with specific display types. These classes set the CSS `display` property. 

Class | Effect | CSS Output  
---|---|---  
`hidden` |  Hide element completely  |  `display: none`  
`visible` |  Display as block element  |  `display: block`  
`block` |  Display as block element  |  `display: block`  
`inline` |  Display as inline element  |  `display: inline`  
`inline-block` |  Display as inline block element  |  `display: inline-block`  
`flex` |  Display as flex container  |  `display: flex`  
`grid` |  Display as grid container  |  `display: grid`  
`table` |  Display as table element  |  `display: table`  
`table-row` |  Display as table row element  |  `display: table-row`  
  
[#](https://usetrmnl.com/framework_v2/visibility#responsive-display-control)

## Responsive Display Control

All display utilities work with responsive prefixes. Size prefixes are mobile-first (apply at that size and larger). You can combine any display utility with responsive breakpoints. 

Example Class | Effect | Active On  
---|---|---  
`sm:hidden` |  Hide on small screens and larger  |  All devices (600px+)   
`md:flex` |  Display as flex on medium screens and larger  |  TRMNL OG, TRMNL V2 (800px+)   
`lg:grid` |  Display as grid on large screens  |  TRMNL V2 (1024px+)   
`sm:inline-block` |  Display as inline-block on small screens and larger  |  All devices (600px+)   
  
Copy  Copied  Show more  Show less 
    
    
    <!-- Basic responsive display -->
    <div class="hidden md:block">Show as block on medium+</div>
    <div class="block md:flex">Block by default, flex on medium+</div>
    <div class="hidden lg:grid">Show as grid on large screens</div>
    
    <!-- Complex responsive layouts -->
    <div class="inline sm:inline-block md:flex lg:grid">
      Changes display type at each breakpoint
    </div>
    
    <!-- Hide on mobile, show different layouts -->
    <div class="hidden sm:flex md:grid lg:table">
      Different layout per screen size
    </div>

[#](https://usetrmnl.com/framework_v2/visibility#bit-depth-display-control)

## Bit-Depth Display Control

All display utilities work with bit-depth prefixes to target specific display capabilities. Perfect for optimizing layouts for different e-ink displays. 

Example Class | Effect | Active On  
---|---|---  
`1bit:hidden` |  Hide on monochrome displays  |  TRMNL OG only   
`2bit:flex` |  Display as flex on 4-shade grayscale displays  |  TRMNL OG V2 only   
`4bit:grid` |  Display as grid on 16-shade grayscale displays  |  TRMNL V2, Kindle 2024 only   
  
[#](https://usetrmnl.com/framework_v2/visibility#device-specific-display-control)

## Device-Specific Display Control

Combine size and bit-depth prefixes with any display utility to target specific devices precisely. Use the pattern: `size:bit-depth:display`

Example Class | Target Device | Effect  
---|---|---  
`md:1bit:block` |  TRMNL OG only  |  Display as block (800px, monochrome)   
`md:2bit:flex` |  TRMNL OG V2 only  |  Display as flex (800px, 4-shade grayscale)   
`lg:4bit:grid` |  TRMNL V2 only  |  Display as grid (1024px, 16-shade grayscale)   
`sm:4bit:table` |  Kindle 2024 only  |  Display as table (600px, 16-shade grayscale)   
  
Copy  Copied  Show more  Show less 
    
    
    <!-- Device-specific layouts -->
    <div class="hidden md:1bit:block md:2bit:flex lg:4bit:grid">
      Different display types per device generation
    </div>
    
    <!-- Optimize for e-ink performance -->
    <div class="table 1bit:block 2bit:flex">
      Simple layouts for lower bit-depth displays
    </div>
    
    <!-- Complex responsive + bit-depth targeting -->
    <div class="hidden sm:inline md:1bit:block md:2bit:flex lg:4bit:grid">
      Progressive enhancement across all device capabilities
    </div>

[ Rounded Control element rounding with predefined values Previous  ](/framework_v2/rounded)

[ Responsive Adapt styles based on screen width using breakpoint prefixes Next  ](/framework_v2/responsive)

[ Framework Index  ](/framework_v2)

---
