##Journey to Space - Digital Flip Book
Swipeable slideshow for iPad tablets.


### About
This app generates a series of full-screen slides from a configuration file and linked images. It can be used to make multiple iPad slideshows, each with unique content. See example of the flipbook xml structure in configs directory.

### iPad Configuration
* If setting up iPad from scratch first complete [iPad Configuration Instructions](http://projects.smm.org/atrium/media/node/291625) on Atrium.

### Installation
#### 1. Set configuration path.
* Edit data-config attribute in index.html.

```html
<body data-config="configs/404.xml">
```

#### 2. Install KioskPro.

* [KioskPro](http://www.kioskproapp.com/)

#### 3. Transfer files to iPad.

1. Get [iMazing](http://imazing.com/) software.
2. Connect via USB. Select iPad from sidebar. Select Apps > KioskPro.
3. Drag files into root KioskPro folder. (index MUST be in root)


#### 4. Change iPad Settings.
* Wi-Fi: **OFF**
* Bluetooth: **OFF**
* General > Accessibility > Guided Access: **ON**
* General > Use Side Switch To: **Mute**
* Hold device in Landscape Orientation. Swipe up from bottom of screen to access Control Center. Tap "lock rotation" icon.


#### 5. Change KioskPro Settings.
* Homepage: **index.html**
* Show Bottom Navigation Bar With: **ALL OFF**
* Idle Time Limit: **0**


#### 6. Run Kiosk Presentation
* Select 'Run Kiosk Presentation' in upper left corner.

#### 7. Enable iPad Guided Access session.
* Triple-click Home button > select start.

##Status
Installation should be confirmed and tested in real exhibit space.