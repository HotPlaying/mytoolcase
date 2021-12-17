console.log('zmcs_attach.js');
var times = 0;

console.log('$("#selector1").type = ', $('#selector1')[0].type);

function rotatePic() {
  var item = $('#codeimg1');
  var parentNode = $('#dialog_container_1');

  var css = 'rotate(' + ++times * 90 + 'deg)';

  var h = item.height();
  var w = item.width();
  var H = parentNode.height();
  var W = parentNode.width();

  var ratioY = H / h;
  var ratioX = W / w;
  if (times % 2 == 1) {
    ratioY = W / h;
    ratioX = H / w;
  }
  var ratio = 1;
  if (ratioX < 1 || ratioY < 1) {
    ratio = ratioY;
    if (ratioX < ratioY) ratio = ratioX;
  }

  if (ratio !== 1) {
    css += ' scale(' + ratio + ')';
  }
  item.css('transform', css);

  // if (times % 4 === 0) times = 0;
}

console.log(analyseParams('codeId=2&vl=VL202012010020'));

/* 解构场景值存放的变量 */
function analyseParams(param) {
  let options = {};
  let paramArray = param.split('&');
  for (let i = 0; i < paramArray.length; i++) {
    options[paramArray[i].split('=')[0]] = paramArray[i].split('=')[1];
  }
  return options;
}

testObjectKeys();

/* 测试Object.keys */
function testObjectKeys() {
  var obj = {
    a: 1,
    b: 2,
  };
  console.log(obj);
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i]);
  }
}

var objList = [
  {
    a: 1,
  },
  {
    a: 1,
  },
  {
    a: 2,
  },
  {
    a: 2,
  },
  {
    a: 2,
  },
  {
    a: 3,
  },
];
console.log('src = ');
console.log(objList);
console.log('dst = ');
console.log(getObjectValueList(objList, 'a'));

function getObjectValueList(objList, key) {
  if (objList == null || objList == []) return;
  var dstValueList = [];
  for (var i = 0; i < objList.length; i++) {
    dstValueList.push(objList[i][key]);
  }
  return dstValueList;
}

const uriComponent = 'url=abcd&addr=广东省珠海市香洲区(第四街区)';
console.log('urlComponent = {}', uriComponent);
console.log('encodeURI(uriComponent) = {}', encodeURI(uriComponent));

console.log('encodeURIComponent(uriComponent) = {}', encodeURIComponent(uriComponent));

$('#genRidBatch').on('click', function(){
  let IDs = [];
  for (let i = 0; i < 30; i++) {
    // console.log('generateRid' + i + ' = ' + generateRid());
    IDs.push(generateRid());
  }
  let IDs_str = '';
  IDs.forEach((v)=>{
    IDs_str += v + '\n';
  })

  $(this).after($(`<textarea>${IDs_str}</textarea>`).css({height: '300px', width: '300px'}));

})
function genRidBatch() {
  
}
/**
 * 生成rid
 */
function generateRid() {
  const CONST_CHARS = '0123456789abcdefghijklmnopqrstuvwxyz'.split(''),
    RID_LENGTH = 32;
  let rid = [],
    i;
  for (i = 0; i < RID_LENGTH; i++) rid[i] = CONST_CHARS[0 | (Math.random() * CONST_CHARS.length)];
  return rid.join('');
}

// function arrayToSet()

// function PicTool(options) {
//     this.itemId = options.itemId;
//     this.parentNodeId = options.parentId;

//     this.times = 0;
//     this.$id = function (id) {
//         return '#' + id;
//     };
//     this.item = $.CurrentDialog.find(this.$id(this.itemId));
//     this.parentNode = $.CurrentDialog.find(this.$id(this.itemId));
//     this.transformCss = '';
//     this.selfAdapted = function () {
//         var h = this.item.height();
//         var w = this.item.width();
//         var H = this.parentNode.height();
//         var W = this.parentNode.width();

//         var ratioY = H / h;
//         var ratioX = W / w;
//         if (times % 2 == 1) {
//             ratioY = W / h;
//             ratioX = H / w;
//         }
//         var ratio = 1;
//         if (ratioX < 1 || ratioY < 1) {
//             ratio = ratioY;
//             if (ratioX < ratioY) ratio = ratioX;
//         }

//         if (ratio !== 1) {
//             this.transformCss += ' scale(' + ratio + ')';
//         }
//         this.item.css('transform', this.transformCss);
//     }
// }

matchPhone('13644445555');
matchPhone('46556151');
matchPhone('sdferwe');

$('#phone').bind('input propertychange', function (e) {
  matchPhone($(this).val());
});

function matchPhone(phone) {
  var regex = new RegExp(
    /^((13[0-9])|(14[579])|(15([0-3]|[5-9]))|(166)|(17[0135678])|(18[0-9])|(19[89]))\d{8}$/,
  );
  var isValid = !!phone.match(regex);
  console.log('matchPhone[%s]=%o', phone, isValid.valueOf());
}

