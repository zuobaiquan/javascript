 function data() {
    var data = [];          
    for (var i = 1; i < 41; i++) {
        data.push({
            img: './img/' + i + '.jpg',
            caption: '第' + texthan(i) + '张',
            desc: '描述' + texthan(i)
        });
    };
    return data;
};
function texthan(n) {
    var han = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    if (n > 10) {
        var s = Math.floor(n / 10) > 1 ? han[Math.floor(n / 10) - 1]+'十' : '十';
        var g = n % 10 - 1 >= 0 ? han[n % 10 - 1] : '';
        return s + g;
    } else {
        return han[n - 1];
    }
}
function Surround(option) {
    option = option || {};
    this.activeindex = option.activeindex || 0;
    this.state = option.state || 0;
}
Surround.prototype = {
    getdom: function (obj) {
        var method = obj.substr(0, 1) == '.' ? 'getElementsByClassName' : 'getElementById';
        return document[method](obj.substr(1));
    },
    getwh: function (obj) {
        return {
            w: obj.clientWidth,
            h: obj.clientHeight
        }
    },
    select: function (start, end) {
        var num = end - start + 1;
        return Math.floor(Math.random() * num + start);
    },
    rsort: function (n) {
        var _photo = this.getdom('.photo');
        var wrap = this.getwh(this.getdom('#wrap'));
        var photo = this.getwh(this.getdom('.photo')[0]);
        var photos = []
        for (var i = 0; i < _photo.length; i++) {
            _photo[i].className = 'photo photo-front';
            _photo[i].style.left = '';
            _photo[i].style.top = '';
            _photo[i].style['transform'] = 'rotate(0deg) scale(1.3)';
            photos.push(_photo[i]);
        };
        var photo_center = this.getdom('#photo_' + n);
        photo_center.className += ' photo-center';
        photo_center = photos.splice(n, 1)[0];
        if (this.state === 0) {    
        this.separate(photos,function(photo){
            photo.style.left = this.range().left.x + 'px';
            photo.style.top = this.range().left.y + 'px';
            photo.style['transform'] = 'rotate(' + this.select(-90, 90) + 'deg) scale(1)';
        },function(photo){
            photo.style.left = this.range().right.x + 'px';
            photo.style.top = this.range().right.y + 'px';
            photo.style['transform'] = 'rotate(' + this.select(-90, 90) + 'deg) scale(1)';
        });   
        } else if (this.state === 1) {
            for(var s in photos){
                photos[s].style['transform'] = 'rotate(' + this.select(0, 360) +
                'deg) scale(1) translate(500px)';
            };
        } else {
            var r = 460;
            for (var s = 0; s < photos.length; s++) {
                var deg = this.select(0, 360);
                var sinY = Math.sin(deg * Math.PI / 180) * r;
                var cosX = Math.cos(deg * Math.PI / 180) * r;
                photos[s].style.top = ((wrap.h / 2) + sinY) + 'px';
                photos[s].style.left = ((wrap.w / 2) + cosX) + 'px';
                photos[s].style.transform = 'rotate(' + (deg + 90) + 'deg)'
            };
        };
        var navs = this.getdom('.i');
        for (var i = 0; i < navs.length; i++) {
            navs[i].className = 'i';
        }
        this.getdom("#nav_" + n).className += ' i_current';
    },
    separate:function(photos,lfn,rfn){
        var photos_left = photos.splice(0, Math.ceil(photos.length / 2));
        var photos_right = photos;
        for(s in photos_left){
            var photo = photos_left[s];
            lfn.apply(this,[photo]);
        }
        for(s in photos_right){
            var photo = photos_right[s];
            rfn.apply(this,[photo]);
        }
    },
    turn: function (elem) {
        var cls = elem.className;
        var n = elem.id.split('_')[1];
        this.activeindex = Number(n);
        if (!elem.classList.contains("photo-center")) {
            return this.rsort(n);
        }
        if (elem.classList.contains('photo-front')) {
            cls = cls.replace(/photo-front/, "photo-back");
            this.getdom("#nav_" + n).classList.add('i_back');
        } else {
            cls = cls.replace(/photo-back/, "photo-front");
            this.getdom("#nav_" + n).classList.remove('i_back');
        };
        return elem.className = cls;
    },
    range: function () {
        var range = {
            left: {
                x: [],
                y: []
            },
            right: {
                x: [],
                y: []
            }
        };
        var wrap = this.getwh(this.getdom('#wrap'));
        var photo = this.getwh(this.getdom('.photo')[0]);
        range.left.x = this.select(-photo.w, (wrap.w - photo.w) / 2);
        range.left.y = this.select(-photo.h, wrap.h);
        range.right.x = this.select((wrap.w - photo.w) / 2, wrap.w);
        range.right.y = this.select(-photo.h, wrap.h);
        return range;
    },
    time:function(data) {
        if (this.activeindex > data.length - 1) {
            this.activeindex = 0;
        };
        this.rsort(this.activeindex);            
        this.activeindex++;
    },
    addPhotos: function (data) {
        var lists = '';
        var nav = '';
        var navbox = document.createElement('div');
        navbox.className = 'nav';
        for (var i in data) {
            var photobox =
                `<div class="photo  photo-front"  id="photo_${i}">
                    <div class="photo-wrap">
                        <div class="side side-front">
                            <p class="imgs">
                                <img src="${data[i].img}" />
                            </p>
                            <p class="caption">${data[i].caption}</p>
                        </div>
                        <div class="side side-back">
                            <p class="desc">
                                ${data[i].desc}
                            </p>
                        </div>
                    </div>
                </div>`;
            var navitem = `<span id="nav_${i}"  class="i"></span>`
            nav += navitem;
            lists += photobox;
        }
        navbox.innerHTML = nav;
        this.getdom('#wrap').innerHTML = lists;
        this.getdom("#wrap").append(navbox);
        var i = this.getdom(".nav")[0].getElementsByClassName('i');
        var photo = this.getdom(".photo");
        [].slice.call(i).forEach(function(el,index) {
            el.onclick = function(){
                this.turn(this.getdom('#photo_'+index));
            }.bind(this);
        },this);
        
        [].slice.call(photo).forEach(function(el,index){
            el.onclick = function(event){
                this.turn(event.currentTarget);
            }.bind(this);
        },this);
        this.rsort(this.activeindex);
    }
}
var surround = new Surround();
surround.addPhotos(data());
surround.getdom("#change").onchange = function () {
    if (this.checked) {
        var speed =surround.getdom('#speed').value;
        surround.getdom('#speed').onchange = function () {
            speed = this.value;
            clearInterval(timer);
            timer = setInterval(function(){
                surround.time(data());
            }, speed * 500);
        };
        timer = setInterval(function(){
            surround.time(data());
        }, speed * 500);
    } else {
        clearInterval(timer);
    };
};
btn();
function btn() {
    for (var i = 0; i < surround.getdom('.btn').length; i++) {
        (function (i) {
            surround.getdom(".btn")[i].onclick = function () {
                for (var j = 0; j < surround.getdom('.btn').length; j++) {
                    surround.getdom(".btn")[j].className = 'btn';
                };
                surround.getdom(".btn")[i].className = 'btn show';
                surround.state = i;
                surround.rsort(surround.activeindex);
            };
        })(i);
}
};