# Коротко о проекте:

> Макет - https://www.figma.com/file/mbUi7prsyinFITFz5Rmzy8/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-%7C-%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3?type=design&node-id=69%3A1962&mode=design&t=ica0xW3xyY0xWGR1-1


1. Бегущая строка. padding для читабельности текста ставим во все @media запросы иначе текст будет резать.
```
.runningLine__list {
  padding: 0 150%;
}
```

2. Здесь Swiper v11.1.1 совсем другая семантика.

3. Задала общую высоту списку слайдера, без него ломает. Фон в слайдере перенесла суда.
```
.stages__list .swiper-slide {
  height: auto;
  background: url("../img/background.jpg") center / cover no-repeat;
}
```

4. В слайдере резина по другому работает, надо ставить:
```
.participants__list .swiper-slide {
  /*резина при пополнения*/
  height: auto;
}
```
5. Боковые паддинги в слайдере лучше ставить тексту, иначе блок li будет лесть к соседу. Ширину в слайдере не ставим!!!
```
.stages__item {
  padding: 62px 0 10px;
  height: auto;
  background: none;
}
.stages__desc {
  padding-left: 73px;
  padding-right: 20px;
}
``` 
Сайт - https://leska-ver.github.io/fourHorses/

```
#Вариант загрузки папки в Github

New(или + рядом с авой) -> Repository name назвали типа Laguna -> Create repository -> Создали пустую папку на рабочем столе -> в ней Git Bash Here(ПКМ) -> git clone ссылка -> в папку Laguna(которая с Github пришла) кидаем файлы которые надо -> И в этой же папке открываем снова Git Bash Here(ПКМ) - git add . -> git commit -m 'текст' -> git push -> На сайте обновляем страничку Github

После исправления -> В папке нужной ПКМ -> Git Bash Here -> git add . -> git commit -m 'текст' -> git push -> На сайте обновляем страничку Github
```