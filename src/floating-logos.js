var bubbles = [{
  s: .6,
  x: 1134,
  y: 45
}, {
  s: .6,
  x: 1620,
  y: 271
}, {
  s: .6,
  x: 1761,
  y: 372
}, {
  s: .6,
  x: 2499,
  y: 79
}, {
  s: .6,
  x: 2704,
  y: 334
}, {
  s: .6,
  x: 2271,
  y: 356
}, {
  s: .6,
  x: 795,
  y: 226
}, {
  s: .6,
  x: 276,
  y: 256
}, {
  s: .6,
  x: 1210,
  y: 365
}, {
  s: .6,
  x: 444,
  y: 193
}, {
  s: .6,
  x: 2545,
  y: 387
}, {
  s: .8,
  x: 1303,
  y: 193
}, {
  s: .8,
  x: 907,
  y: 88
}, {
  s: .8,
  x: 633,
  y: 320
}, {
  s: .8,
  x: 323,
  y: 60
}, {
  s: .8,
  x: 129,
  y: 357
}, {
  s: .8,
  x: 1440,
  y: 342
}, {
  s: .8,
  x: 1929,
  y: 293
}, {
  s: .8,
  x: 2135,
  y: 198
}, {
  s: .8,
  x: 2276,
  y: 82
}, {
  s: .8,
  x: 2654,
  y: 182
}, {
  s: .8,
  x: 2783,
  y: 60
}, {
  x: 1519,
  y: 118
}, {
  x: 1071,
  y: 233
}, {
  x: 1773,
  y: 148
}, {
  x: 2098,
  y: 385
}, {
  x: 2423,
  y: 244
}, {
  x: 901,
  y: 385
}, {
  x: 624,
  y: 111
}, {
  x: 75,
  y: 103
}, {
  x: 413,
  y: 367
}, {
  x: 2895,
  y: 271
}, {
  x: 1990,
  y: 75
}];

var logos = [{
  name: "Affirm",
  cssClass: "Affirm"
}, {
  name: "Allianz",
  cssClass: "Allianz"
}, {
  name: "Amazon",
  cssClass: "Amazon"
}, {
  name: "Blue Apron",
  cssClass: "BlueApron"
}, {
  name: "Catawiki",
  cssClass: "Catawiki"
}, {
  name: "City of Boston",
  cssClass: "CityofBoston"
}, {
  name: "Deliveroo",
  cssClass: "Deliveroo"
}, {
  name: "DiDi",
  cssClass: "DiDi"
}, {
  name: "Doordash",
  cssClass: "Doordash"
}, {
  name: "Expedia",
  cssClass: "Expedia"
}, {
  name: "Fender Guitars",
  cssClass: "Fender"
}, {
  name: "Fitbit",
  cssClass: "Fitbit"
}, {
  name: "Google",
  cssClass: "Google"
}, {
  name: "Indiegogo",
  cssClass: "Indiegogo"
}, {
  name: "Instacart",
  cssClass: "Instacart"
}, {
  name: "Kickstarter",
  cssClass: "Kickstarter"
}, {
  name: "Lyft",
  cssClass: "Lyft"
}, {
  name: "Nasdaq",
  cssClass: "Nasdaq"
}, {
  name: "Nat Geo",
  cssClass: "Nat-Geo"
}, {
  name: "OpenTable",
  cssClass: "OpenTable"
}, {
  name: "Panic",
  cssClass: "Panic"
}, {
  name: "Pinterest",
  cssClass: "Pinterest"
}, {
  name: "Postmates",
  cssClass: "Postmates"
}, {
  name: "Rackspace",
  cssClass: "Rackspace"
}, {
  name: "Reddit",
  cssClass: "Reddit"
}, {
  name: "Salesforce",
  cssClass: "Salesforce"
}, {
  name: "Shopify",
  cssClass: "Shopify"
}, {
  name: "Slack",
  cssClass: "Slack"
}, {
  name: "Spotify",
  cssClass: "Spotify"
}, {
  name: "Squarespace",
  cssClass: "Squarespace"
}, {
  name: "Target",
  cssClass: "Target"
}, {
  name: "TaskRabbit",
  cssClass: "TaskRabbit"
}, {
  name: "Ted",
  cssClass: "Ted"
}, {
  name: "The Guardian",
  cssClass: "TheGuardian"
}, {
  name: "TicketSwap",
  cssClass: "TicketSwap"
}, {
  name: "Twitch",
  cssClass: "Twitch"
}, {
  name: "Uber",
  cssClass: "Uber"
}, {
  name: "WeTransfer",
  cssClass: "WeTransfer"
}, {
  name: "Wish",
  cssClass: "Wish"
}, {
  name: "Xero",
  cssClass: "Xero"
}, {
  name: "Yelp",
  cssClass: "Yelp"
}, {
  name: "Zillow",
  cssClass: "Zillow"
}];



const loadImages = function (t, e) {
  "string" == typeof t && (t = [t]);
  var n = -t.length;
  t.forEach(function (t) {
    var i = new Image;
    i.src = t,
      i.onload = function () {
        0 === ++n && e && e()
      }
  })
}



export default function LogoBubbles(e) {
  var s = this;
  var self = s;
  var params = e;
  this.bubbles = bubbles;
  this.logos = logos;

  // copy all params to this
  for (a in params)
    self[a] = params[a];

  this.container = document.querySelector(s.containerSelector);
  this.noiseT = 0;

  s.scrollX = 0,
    function (e) {
      var s = 0,
        n = 0,
        a = null;
      for (s = e.length - 1; s > 0; s -= 1)
        n = Math.floor(Math.random() * (s + 1)),
        a = e[s],
        e[s] = e[n],
        e[n] = a
    }(s.logos),

    s.vertShrink = 0;

  i();

  window.addEventListener("resize", i);

  s.playing = !1;

  r();
  window.addEventListener("scroll", r);

  s.logosLoaded = !1;

  var n = 'https://stripe.com/img/v3/customers/logos/header-logos.png?52';

  loadImages(n, function () {
    s.logosLoaded = !0
  });

  for (var a = 0; a < s.bubbles.length; a++) {
    var t = s.bubbles[a];
    var o = a % s.logos.length;
    t.scale = t.s || 1,
      t.seedX = 1e4 * Math.random(),
      t.seedY = 1e4 * Math.random(),
      t.noiseX = t.noiseY = 0,
      t.introDelay = Math.random() * s.introDelay,
      t.introProgress = 0,
      t.el = document.createElement("div"),
      t.el.className = s.classPrefix + s.logos[o].cssClass,
      t.tagEl = document.createElement("span"),
      t.tagEl.innerHTML = s.logos[o].name,
      t.el.appendChild(t.tagEl),
      l(t),
      s.container.appendChild(t.el)
  }

  function i() {
    var e, n, a, t, o;
    s.vertShrink = (e = 1e3, n = 800, (window.innerHeight - e) / (n - e)),
    s.vertShrink = (a = s.vertShrink, t = 0, o = 1, Math.max(Math.min(a, o), t))
  }

  function r() {
    var e = s.container.getBoundingClientRect();
    (e.bottom < 0 || e.top > window.innerHeight) && 1 == s.playing ? s.playing = !1 : e.bottom > 0 && e.top < window.innerHeight && 0 == s.playing && (s.playing = !0,
      requestAnimationFrame(function (e) {
        s.tick(e)
      }))
  }

  function l(e) {
    var n = e.x + e.noiseX + s.scrollX,
      a = e.y + e.noiseY;
    a = function (e, s, n) {
        return e * (1 - n) + s * n
      }(a, s.containerHeight / 2, s.vertShrink * s.maxShrink),
      n < -200 && (e.x += s.containerWidth);
    var t = c(e.introProgress) / 20 + .95;
    t *= e.scale,
      e.el.style.opacity = c(e.introProgress),
      e.el.style.transform = "translate(" + n + "px, " + a + "px) scale(" + t + ")"
  }

  function c(e) {
    return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
  }

  s.firstTick = null,
  s.lastTick = 0,
  s.tick = function (e) {
    s.firstTick || (s.firstTick = e);
    var n = (e -= s.firstTick) - s.lastTick;
    s.lastTick = e,
      s.noiseT += n * s.noiseSpeed,
      s.scrollX -= n * s.scrollSpeed;
    for (var a = 0; a < s.bubbles.length; a++) {
      var t = s.bubbles[a];
      t.noiseX = noise(t.seedX + s.noiseT) * s.noiseScale - s.noiseScale / 2,
        t.noiseY = noise(t.seedY + s.noiseT) * s.noiseScale - s.noiseScale / 2,
        s.logosLoaded && t.introProgress < 1 && e > t.introDelay && (t.introProgress = Math.min(1, t.introProgress + n / s.introDuration)),
        l(t)
    }
    s.playing && requestAnimationFrame(s.tick)
  }
}


var perlin,
  PERLIN_ZWRAPB = 8,
  PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB,
  PERLIN_SIZE = 4095,
  perlin_octaves = 4,
  perlin_amp_falloff = .5,
  scaled_cosine = function (e) {
    return .5 * (1 - Math.cos(e * Math.PI))
  },
  noise = function (e) {
    if (null == perlin) {
      perlin = new Array(PERLIN_SIZE + 1);
      for (var s = 0; s < PERLIN_SIZE + 1; s++)
        perlin[s] = Math.random()
    }
    e < 0 && (e = -e);
    for (var n, a, t = Math.floor(e), o = e - t, i = 0, r = .5, l = 0; l < perlin_octaves; l++)
      n = scaled_cosine(o),
      a = perlin[t & PERLIN_SIZE],
      i += (a += n * (perlin[t + 1 & PERLIN_SIZE] - a)) * r,
      r *= perlin_amp_falloff,
      t <<= 1,
      (o *= 2) >= 1 && (t++,
        o--);
    return i
  };