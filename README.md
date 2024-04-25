#Коротко о проекте:

Макет - https://www.figma.com/file/mbUi7prsyinFITFz5Rmzy8/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-%7C-%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3?type=design&node-id=69%3A1962&mode=design&t=ica0xW3xyY0xWGR1-1

1. Здесь Swiper v11.1.1 совсем другая семантика.

2. Задала общую ширину и высоту списку слайдера, без него ломает. Фон в слайдере перенесла суда.
```
.stages__list .swiper-slide {
  flex-shrink: unset;
  height: auto;
  background: url("../img/background.jpg") center / cover no-repeat;
}
```

3. В слайдере резина по другому работает, надо ставить:
```
.participants__list .swiper-slide {
  /*резина при пополнения*/
  height: auto;
}
```
