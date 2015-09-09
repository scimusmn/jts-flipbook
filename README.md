##Journey to Space - Digital Flip Book

### About
Swipeable slideshow for iPad tablets. This app generates a series of full-screen slides from a configuration file and linked images. It can be used to make multiple iPad slideshows, each with unique content. See examples of the flipbook xml structure in configs directory.

### Hardware Setup
* If iPad is new, start with [Fresh Out of Box Configuration](http://projects.smm.org/atrium/media/node/291625).
* Install "Kiosk Pro Plus" from the App Store on the iPad.
* Use LastPass credentials found under "Apple ID - sld.tech" if prompted by App Store.
* Ensure iPad and Kiosk Pro settings match these: [Best Settings for use with Kiosk Pro Plus](http://projects.smm.org/atrium/media/node/291625). 

### Install Flipbook Content
* In the ```index.html``` file, change ```data-config``` to the path of your flipbook xml.

```html
<body data-config="configs/404.xml">
```
* Transfer files to iPad.
  1. Get [iMazing](http://imazing.com/) software.
  2. Connect via USB. Select iPad from sidebar. Select Apps > KioskPro.
  3. Drag files into root KioskPro folder. (index MUST be in root)

* Launch the Flipbook with Guided Access
  1. Launch the Kiosk Pro Plus app.
  2. Enable Guided Access by Triple-clicking the Home button.

