# ionic-cover-header-parallax

Header flexível para ionic 1.x

![Alt text](/www/img/example1.gif "Exemplo simples")
![Alt text](/www/img/example2.gif "Exemplo com ion-slide-box")

## Code Example
Modo simples com imagem
```html
<cover-header-parallax header-size="200" bg-color="[0, 121, 107]">
    <!-- YOUR BACKGROUND COVER IMAGE HERE -->
    <img src="img/cover-image.png">
</cover-header-parallax>
```

1. header-size é a altura máxima do header, o valor default é 200px;
2. bg-color é um array com a cor de fundo do header em rgb, o valor default é rgb(0, 121, 107);

Também é possível adicionar outros componentes, como por exemplo, ion-slide-box
```html
<cover-header-parallax header-size="200" bg-color="[0, 121, 107]">
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
```
## Installation
Baixar e importar a diretiva
```html
<script src="js/cover-header-parallax.js"></script>
```

Adicionar módulo 'rpCoverHeader'
```javascript
angular.module('app', ['ionic', 'rpCoverHeader']);
```

