# JavaScript基于时间的动画算法

相信做过前端的人对使用JavaScript实现动画的原理都很熟悉。现在让你实现一个让一个div从左到右来回移动的JS代码，你可能嗖嗖就写出来了：

```javascript
  function moveDiv(div, fps) {
        var left = 0;
        var param = 1;
        function loop () {
            update();
            draw();
        }
        function update() {
            left += param * 2;
            if (left > 300) {
                left = 300;
                param = -1;
            } else if (left < 0) {
                left = 0;
                param = 1;
            }
        }
        function draw() {
            div.style.left = left + "px";
        }
        setInterval(loop, 1000 / fps);
    }
    moveDiv(document.getElementById("div1"), 60);
```

效果如下：

[http://jsfiddle.net/livoras/4taf9hhs/embedded/result,js,html,css/](http://jsfiddle.net/livoras/4taf9hhs/embedded/result,js,html,css/)

看看代码，我们让一个div在0 ～ 300px区间内左右来回移动。`update`计算更新描绘div的位置，`draw`重新描绘页面上的div。为了方便起见，这里直接使用`setInterval`作为定时器，实际情况下可以采用你喜欢的`setTimeout`或者`requestAnimationFrame`。这里设置每秒钟到更新60次，60fps是人尽皆知的比较适合做动画的帧率。

地球人都知道，JavaScript中的定时器是不准确的。由于JavaScript运行时需要耗费时间，而JavaScript又是单线程的，所以如果一个定时器如果比较耗时的话，是会阻塞下一个定时器的执行。所以即使你这里设置了`1000 / 60`每秒60帧的帧率，在不同的浏览器平台的差异也会导致实际上你的没有60fps的帧率。

所以上面代码在一个手机上执行的时候可能有60fps的帧率，在另外一个手机上可能就只有30fps，更甚可能只有10fps。

我们模拟一下这种情况会有什么效果发生：

[http://jsfiddle.net/livoras/Lcv1jm53/embedded/result,js,html,css/](http://jsfiddle.net/livoras/Lcv1jm53/embedded/result,js,html,css/)

这完全不对大头！

可以看到三个方块移动速度根本不在同一个channel上。想象一下一个超级马里奥游戏在10fps的情况会怎么样？按跳跃一下，你会看到马里奥以一种太空漫游的姿态在空中抛弧线。

导致这种情况的原因很简单，因为我们计算和绘制每个div位置的时候是在每帧更新，每帧移动2px。在60fps的情况下，我们1秒钟会执行60帧，所以小块每秒钟会移动60 * 2 = 120px；如果是30fps，小块每秒就移动30 * 2 = 60px，以此类推10fps就是每秒移动20px。

三个小块在单位时间内移动的距离不一样！

假如你现在要做一个超级马里奥的游戏，怎么做到可以在不同帧率的情况下让马里奥看起来还是那么迅速且帅气？

解决方案很明显。虽然不同的浏览器平台上的运行差异可能会导致帧率的不一致，但是有一样东西是在任何平台上都一致的，那就是时间。所以我们可以改良我们的算法，不是以帧为基准来更新方块的位置，而是以时间为单位更新。也就是说，我们之前是`px/frame`，现在换成`px/ms`。

这就是接下来要说的基于时间（Time-based）的动画算法。

## 基于时间的动画算法（Time-based）

其实思路和实现都很简单。我们计算每一帧离上一帧过去了多少时间，然后根据过去的时间来更新方块的位置。

例如，上面的方块应该每秒钟移动120px，每毫秒移动120 / 1000 = 0.12像素（12px/ms）。如果上一帧方块的位置在left为10px的位置，到了这一帧的时候，假设相对于上一帧来说时间过去了200ms，那在时间上来说在这一帧方块应该移动200ms * 0.12px/ms = 240px。最终位置应该为10 + 240 = 250px。其实就是`left = left + detalTime * speed`。代码如下：

```javascript
    function moveDivTimeBased(div, fps) {
        var left = 0;
        var current = +new Date;
        var previous = +new Date;
        var param = 1;

        function loop() {
            var current = +new Date;
            var dt = current - previous; // 计算时间差
            previous = current;
            update(dt);
            draw()
        }

        function update(dt) {
            left += param * (dt * 0.12); // 根据时间差更新位置
            if (left > 300) {
                left = 300;
                param = -1;
            } else if (left < 0) {
                left = 0;
                param = 1;
            }
        }        

        function draw() {
            div.style.left = left + "px";
        }

        setInterval(loop, 1000 / fps);
    }
```

看看效果如何：

[http://jsfiddle.net/livoras/8da1nssL/embedded/result,js,html,css/](http://jsfiddle.net/livoras/8da1nssL/embedded/result,js,html,css/)

看起来比上面的好多了，30fps和10fps好像能勉强赶上60fps的步伐。但是时间久了会发现30fps和10fps越来越落后于60fps。（建议先刷新再看看效果会更加明显）

这是因为**每次小方块碰到边缘的时候，都会损失掉一部分时间，而且帧率越低的损失越大。**看看我们上面的`update`函数：

```javascript
      function update(dt) {
          left += param * (dt * 0.12); // 根据时间差更新位置
          if (left > 300) {
              left = 300;
              param = -1;
          } else if (left < 0) {
              left = 0;
              param = 1;
          }
      }
```

假如我们现在方块的位置在left为290px的位置，这一帧传入的dt为100ms，那么我们left为290 + 100 * 0.12 = 302，但是302大于300，所以left会被设置为300。那么本来用来移动2px的时间就会白白被“抛弃”掉。dt越大，浪费得越多，所以30fps和10fps会比60fps越来越慢。

为了解决这个问题，我们对已有的算法进行改良。

## 改良基于时间的动画算法

解决思路如下：不一次算整块的时间（dt）移动的距离，而是把dt分成固定的时间片，通过多次update固定的时间片来计算dt时间后应该到什么位置。

比较抽象，我们直接看代码：

```javascript
    function moveDivTimeBasedImprove(div, fps) {
        var left = 0;
        var current = +new Date;
        var previous = +new Date;
        var dt = 1000 / 60;
        var acc = 0;
        var param = 1;

        function loop() {
            var current = +new Date;
            var passed = current - previous;
            previous = current;
            acc += passed; // 累积过去的时间
            while(acc >= dt) { // 当时间大于我们的固定的时间片的时候可以进行更新
                update(dt); // 分片更新时间
                acc -= dt;
            }
            draw();
        }
        // update 和 draw 函数不变
        setInterval(loop, 1000 / fps);
    }
```

我们先确定一个固定更新的时间片，如固定为60fps时一帧的时间：1000 / 60 = 0.167ms。然后积累过去的时间，然后根据固定时间片分片进行更新。也就说，即使这一帧和上一帧相差过去了100ms，我也会把这100ms分成很多个0.167ms来执行update函数。这样做有两个好处：

1. 固定的时间片足够小，更新的时候可以减少边缘损失的时间。
2. 不同帧率，不管你是60，30，还是10fps，也是根据固定时间片来执行update函数，所以即使有损失，不同帧率之间的损失是一样的。那么我们三个方块就可以达到同步移动的效果的了！

看上面的代码，update和draw函数保持不变，而loop函数中，对过去的时间进行了累加，当时间超过固定的片就可以执行update。while循环可以保证更新直到把积累的时间都更新完。

**对时间进行积累，然后分固定片更新**。这种方式还有一个非常大的好处，如果你的帧率超过了60fps，如达到100fps或者200fps，这时候passed会小于0.167ms，时间就会被积累，积累大于0.167才会执行更新。碉堡的效果就是：**不管你的帧率是高还是低，移动速度都可以和60fps情况下的速度同步。**

看看最后的效果：

[http://jsfiddle.net/livoras/25nut92z/embedded/result,js,html,css/](http://jsfiddle.net/livoras/25nut92z/embedded/result,js,html,css/)

还是蛮不错的。

## 总结

基于帧的动画算法会在帧率不同的情况下导致动画体验有较大的差异，所有动画都应该基于时间进行执行。而基于时间的动画算法要注意边缘时间的损失，最好采取积累时间，然后分固定片更新动画的方式。

转自：https://github.com/livoras/blog/issues/8

## References

- [http://gafferongames.com/game-physics/fix-your-timestep/](http://gafferongames.com/game-physics/fix-your-timestep/)
- [http://blog.sklambert.com/using-time-based-animation-implement/](http://blog.sklambert.com/using-time-based-animation-implement/)
- [http://viget.com/extend/time-based-animation](http://viget.com/extend/time-based-animation)
- [http://codetheory.in/time-based-animations-in-html5-games-why-and-how-to-implement-them/](http://codetheory.in/time-based-animations-in-html5-games-why-and-how-to-implement-them/)