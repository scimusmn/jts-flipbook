##Journey to Space - Digital Flip Book

### About
Swipeable slideshow for iPad tablets. This app generates a series of full-screen slides from a configuration file and linked images. It can be used to make multiple iPad slideshows, each with unique content. See examples of the flipbook xml structure in configs directory.

### Hardware Setup
* If iPad is new, start with [Fresh Out of Box Configuration](http://projects.smm.org/atrium/media/node/291625).
* Install "Kiosk Pro Plus" from the App Store on the iPad.
* If asked, use LastPass credentials found under "Apple ID - sld.tech".
* Ensure iPad and Kiosk Pro settings match the [Best Settings for use with Kiosk Pro Plus](http://projects.smm.org/atrium/media/node/291625). 

### Install Flipbook Content
* Clone this repository into a folder on your computer.
* Copy the 'img' folder from Shared/Projects/Journey to Space (SPACE)/Multimedia/DigitalFlipbooks/jts-flipbook/img/ into the root folder of the project. 
* In the ```index.html``` file, change ```data-config``` to the path of the flipbook xml that represents whichever flipbook you want to use.

```html
<body data-config="configs/404.xml">
```
* Transfer files to iPad using [iMazing](http://imazing.com/) software.
  1. Connect via USB. Select iPad from sidebar. Select Apps > KioskPro.
  2. Drag files into root KioskPro folder. (index MUST be in root)

* Launch the Flipbook with Guided Access
  1. Launch the Kiosk Pro Plus app.
  2. Enable Guided Access by Triple-clicking the Home button.

