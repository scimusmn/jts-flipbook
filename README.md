##Journey to Space - Digital Flip Book
Swipeable slideshow for iPad tablets.


### About
This app generates a series of full-screen slides from a configuration file and linked images. It can be used to make multiple iPad slideshows, each with unique content. See example of the flipbook xml structure in configs directory.

### iPad Setup
#### 1. Initial configuration
* If iPad is fresh out of the box, start with [iPad Configuration Instructions](http://projects.smm.org/atrium/media/node/291625).

#### 2. Install [Kiosk Pro Plus](http://www.kioskproapp.com/)
* From the App Store on the iPad, search for "Kiosk Pro Plus"
* If asked to login, use credentials found under "Apple ID - sld.tech" in LastPass
* You should not have to purchase, simply download from cloud.

#### 3. Change iPad Settings.
* Wi-Fi: **OFF**
* Bluetooth: **OFF**
* General > Accessibility > Guided Access: **ON**
* General > Use Side Switch To: **Mute**

#### 4. Change KioskPro Settings.
* Homepage: **index.html**
* Show Bottom Navigation Bar With: **ALL OFF**
* Idle Time Limit: **0**


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

