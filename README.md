

<h1 align="center">
   <a href="https://github.com/aglsoftgithub/livebackground" target="_blank" align="center">
      Live Background v1.0.0
   </a>
</h1>

<p align="center">Free Librairy to make easily a live background on a div, section or container</p>

![Live Background Demo Image](https://aglsofthostingwebserver.on.drv.tw/sites/livebackground/demo.png)

![GitHub](https://img.shields.io/github/license/themeselection/sneat-html-admin-template-free)

## Introduction 🚀

In web development, the use of a carousel allows to present a certain number of elements without suffocating or overloading the visual of the pages. However, carousels or slideshows are inserted in a specific section, which is not very convenient if you want to put text on it. So why not put them in the background instead? LiveBackground :)

LiveBackground is a JavaScript library that allows you to insert a carousel or slideshow in the background of a div or section. Coupled with a CSS code, it allows you to adjust the visual content to your liking.

[View Demo](https://aglsofthostingwebserver.on.drv.tw/sites/livebackground/)

## Installation ⚒️

1. Download the code on [GitHub Repository](https://github.com/aglsoftgithub/livebackground) .
2. Import or copy libraries required

```html
<!-- import jquery (^3.6.1) -->
<script type="text/javascript" src="<your_path_to_jquery>"></script>
```

3. Import JS Code and CSS Code on your own project

```html
<!-- import css -->
<link rel="stylesheet" href="<your_path_to_css>/live-bg.css"/>

<!-- import js -->
<script type="text/javascript" src="<your_path_to_css>/live-bg.js"></script>
```

4. Define your div or section which will receive live background

```html
<div id="live-bg">
    <!-- Create two div to switch pictures for the live background -->
    <div class="background" id="background1"></div>
    <div class="background" id="background2"></div>

    <!-- Add a mirror to configure the brightness of picture -->
    <div id="mirror"></div>
</div>
```

5. Configure and launch the animation

```html
<script type="text/javascript">
    $(function(){
        // use default configuration
        config();

        // start live background
        livebackground();
    })
</script>
```

5. Check our live-bg file to see options of livebackground


```js
/**
 * used to configure the live background animation
 * 
 * @param {String} img_folder 			The folder of pictures to load
 * @param {Integer} max_img 			The max number of pictures to load
 * @param {Integer} animation_time 		The time (ms) used to switch between two pictures
 * @param {Integer} transition_time 	The time (ms) used for the switch animation 
 * @param {Float} brightness 			The opacity of pictures to display (value between 0 and 1)
 */
function config(img_folder=null, max_img=null, animation_time=null, transition_time=null, brightness=null);
```
## Documentation 📜

Not available yet.

## Browser Support 🖥️

At present, we officially aim to support versions of these following browsers:

- Chrome (latest)
- FireFox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Opera (latest)

## Support 👨‍💻

We use GitHub issues as support tickets to manage Item support.

1. In order to raise the GitHub issue, you must have a github account.

## License ©

- Copyright © [AGLSoft](https://bit.ly/3jzb5VN)
- Licensed under [MIT](https://github.com/themeselection/sneat-html-admin-template-free/blob/master/LICENSE.md)

## Contributing 🦸

Contribution are always welcome and recommended! Here is how:

- Fork the repository ([here is the guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)).
- Clone to your machine `git clone https://github.com/YOUR_USERNAME/REPO_URL` Make your changes
- Create a pull request

### Contribution Requirements 🧰

- Contributions are only accepted through Github pull requests.
- Finally, contributed code must work in all supported browsers.

## Creators 😇

- [Adrien Guy Lagrange (AGLSoft)](https://bit.ly/3jzb5VN)

## Changelog 📆

Please refer to the our [CHANGELOG](#) file. We will add a detailed release notes to each new release.

## Social Media 🌍

- Telegram : [https://t.me/aglsoftchannel](https://t.me/aglsoftchannel)
- YouTube : [https://www.youtube.com/channel/UC1BgnUNMzL3jv1zMhAusJ4g](https://www.youtube.com/channel/UC1BgnUNMzL3jv1zMhAusJ4g)