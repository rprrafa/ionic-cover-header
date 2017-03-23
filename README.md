# Ionic Flex Header

Flex header for Ionic 1.x

![Alt text](/www/img/example1.gif "Sample example")
![Alt text](/www/img/example2.gif "Example with ion-slide-box")

## Code Example
Sample with image example
```html
<ion-view>
	<cover-header-parallax header-min="60" header-max="200" bg-color="[0, 121, 107]">
	    <!-- YOUR BACKGROUND COVER IMAGE HERE -->
	    <img src="img/cover-image.png">
	</cover-header-parallax>
	<ion-content> 
	    <!-- YOUR CONTENT HERE -->
	</ion-content>
</ion-view>
```

1. header-size it's the max header height, by default it's 200px;
2. bg-color is an array cwith header background color in rgb, by default it's rgb(0, 121, 107);

Also it's possible add other components, e.g ion-slide-box
```html
<ion-view>
	<cover-header-parallax header-min="60" header-max="200" bg-color="[0, 121, 107]">
		<ion-slide-box style="height: 100%;" show-pager="false">
	      <ion-slide >
		<div class="box blue" style="background: blue;height: 100%;"></div>
	      </ion-slide>
	      <ion-slide>
		<div class="box yellow" style="background: yellow;height: 100%;"></div>
	      </ion-slide>
	      <ion-slide>
		<div class="box pink" style="background: pink;height: 100%;"></div>
	      </ion-slide>
	    </ion-slide-box>
	</cover-header-parallax>
	<ion-content> 
	    <!-- YOUR CONTENT HERE -->
	</ion-content>
</ion-view>
```
## Installation
Download and import directive at your project
```html
<script src="js/cover-header-parallax.js"></script>
```

Add module 'rpCoverHeader'
```javascript
angular.module('app', ['ionic', 'rpCoverHeader']);
```

