##Journey to Space - Digital Flip Book
Swipeable slideshow for iPad tablets.


### About
This app generates a series of full-screen slides from a configuration file and linked images. It can be used to make multiple iPad slideshows, each with unique content. See example of the flipbook xml structure in configs directory.

### iPad Setup
#### 1. Initial configuration
* If iPad is fresh out of the box, start with [Fresh Out of Box Configuration](http://projects.smm.org/atrium/media/node/291625).

#### 2. Install Kiosk Pro Plus
* Launch the App Store on the iPad, search for "Kiosk Pro Plus".
* If asked to login, use LastPass credentials found under "Apple ID - sld.tech".

#### 3. Change iPad Settings and Kiosk Pro Settings.
To prepare iPad for kiosk use, use the settings found here: [Best Settings for use with Kiosk Pro Plus](http://projects.smm.org/atrium/media/node/291625). 

### Install Flipbook on Ipad
#### 1. Set configuration path.
* Change the data-config attribute in index.html to the path of your flipbook xml.

```html
<body data-config="configs/404.xml">
```
#### 2. Transfer files to iPad.

1. Get [iMazing](http://imazing.com/) software.
2. Connect via USB. Select iPad from sidebar. Select Apps > KioskPro.
3. Drag files into root KioskPro folder. (index MUST be in root)


### Launch Flipbook
#### 1. Run Kiosk Presentation
* Select 'Run Kiosk Presentation' in upper left corner.

#### 2. Enable iPad Guided Access session.
* Triple-click Home button > select start.

