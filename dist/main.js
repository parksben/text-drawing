'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paragraphToDrawing = exports.textToDrawing = exports.wordToDrawing = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

require('core-js/shim');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 文字转换字符画的方法
var wordToDrawing = exports.wordToDrawing = function wordToDrawing(_ref) {
  var word = _ref.word,
      fontSize = _ref.fontSize,
      fontFamily = _ref.fontFamily,
      fontWeight = _ref.fontWeight,
      width = _ref.width,
      height = _ref.height,
      inParagraph = _ref.inParagraph;

  if (word === ' ') {
    var rowContent = new Array(parseInt(fontSize || 40, 10) / 2).fill('-').join('');
    return new Array(parseInt(fontSize || 40, 10)).fill(rowContent).join('\n');
  }

  var wordVal = word.substring(0, 1) || 'W';
  var canvasSize = {
    width: parseInt(fontSize || 40, 10),
    height: parseInt(fontSize * 1.5 || 80, 10)
  };

  var canvas = document.createElement('canvas');
  canvas.style.width = canvasSize.width;
  canvas.style.height = canvasSize.height;
  canvas.style.position = 'fixed';
  canvas.style.right = 0;
  canvas.style.bottom = 0;
  canvas.style.zIndex = -999;

  document.body.appendChild(canvas);

  var getFamily = function getFamily(family) {
    if (!family) {
      return '"Microsoft Yahei"';
    }
    if (family.includes(' ')) {
      return '"' + family.replace(/('|")/g, '') + '"';
    }
    return family;
  };

  // canvas 绘图
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.font = (fontWeight || 'normal') + ' ' + (parseInt(fontSize, 10) || 40) + 'px ' + getFamily(fontFamily);
  ctx.textBaseline = 'top';
  ctx.fillText(wordVal, 0, 0);

  // 读取图像的像素信息
  var drawing = '';
  for (var y = 0; y < canvasSize.height; y++) {
    for (var x = 0; x < canvasSize.width; x++) {
      var imageData = ctx.getImageData(x, y, 1, 1);
      if (imageData.data[0] > 0) {
        drawing += '+';
      } else {
        drawing += '-';
      }
    }
    drawing += '\n';
  }
  drawing = drawing.replace(/\n$/, '');
  document.body.removeChild(canvas);

  // 对元素做垂直居中处理
  if (!inParagraph) {
    drawing = drawing.split('\n').filter(function (s) {
      return s.includes('+');
    }).join('\n');
  }

  var paitingSize = {
    width: width || fontSize || 40,
    height: height || fontSize || 40
  };

  // 用空白补全宽度
  var widthDiff = paitingSize.width - drawing.split('\n')[0].length;
  if (widthDiff > 0) {
    var leftCols = Math.round(widthDiff / 2);
    var rightCols = widthDiff - leftCols;
    drawing = drawing.split('\n').map(function (s) {
      var left = new Array(leftCols).fill('-').join('');
      var right = new Array(rightCols).fill('-').join('');
      return '' + left + s + right;
    }).join('\n');
  }

  // 用空白补全高度
  var heightDiff = paitingSize.height - drawing.split('\n').length;
  if (heightDiff > 0) {
    var topRows = Math.round(heightDiff / 2);
    var bottomRows = heightDiff - topRows;

    var cols = drawing.split('\n')[0].length;
    var content = drawing.split('\n');
    var emptyRow = new Array(cols).fill('-').join('');
    drawing = new Array(topRows).fill(emptyRow).concat(content).concat(new Array(bottomRows).fill(emptyRow)).join('\n');
  }

  // 修剪英文字母水平边缘空白的方法
  var characterHandler = function characterHandler(drawing) {
    var leftEmptyWidth = drawing.split('\n').map(function (s) {
      return s.match(/^(-+)?/)[0].length;
    });
    var rightEmptyWidth = drawing.split('\n').map(function (s) {
      return s.match(/(-+)?$/)[0].length;
    });
    var leftMinWidth = Math.min.apply(Math, (0, _toConsumableArray3.default)(leftEmptyWidth));
    var rightMinWidth = Math.min.apply(Math, (0, _toConsumableArray3.default)(rightEmptyWidth));

    var newLeftEmpty = leftEmptyWidth.map(function (num) {
      return new Array(num - leftMinWidth).fill('-').join('');
    });
    var newRightEmpty = rightEmptyWidth.map(function (num) {
      return new Array(num - rightMinWidth).fill('-').join('');
    });

    var rows = drawing.split('\n').map(function (s, i) {
      return s.replace(/^(-+)?/, newLeftEmpty[i]).replace(/(-+)?$/, newRightEmpty[i]);
    });
    var minWidth = Math.min.apply(Math, (0, _toConsumableArray3.default)(rows.map(function (s) {
      return s.length;
    })));

    return rows.map(function (s) {
      return s.replace(/^-+$/, new Array(minWidth).fill('-').join(''));
    }).join('\n');
  };

  // 对非中文元素，修剪其左右两边
  var regForChinese = /[\u4e00-\u9fa5]/; // 中文的正则校验
  if (!regForChinese.test(wordVal)) {
    drawing = characterHandler(drawing);
  }

  return drawing;
};

// 文本转换字符画的方法
var textToDrawing = exports.textToDrawing = function textToDrawing(_ref2) {
  var text = _ref2.text,
      fontSize = _ref2.fontSize,
      fontFamily = _ref2.fontFamily,
      fontWeight = _ref2.fontWeight,
      wordSpacing = _ref2.wordSpacing;

  var config = {
    text: text || 'Hello World!',
    fontSize: fontSize || 40,
    fontFamily: fontFamily || '"Microsoft Yahei"',
    fontWeight: fontWeight || 'normal',
    wordSpacing: wordSpacing || 4
  };
  var drawings = config.text.split('').map(function (word) {
    return wordToDrawing({
      word: word,
      fontSize: config.fontSize,
      fontFamily: config.fontFamily,
      fontWeight: config.fontWeight,
      inParagraph: true
    });
  });

  var rowCount = Math.max.apply(Math, (0, _toConsumableArray3.default)(drawings.map(function (p) {
    return p.split('\n').length;
  })));
  var result = new Array(rowCount).fill('');
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < drawings.length; j++) {
      if (j > 0) {
        result[i] += new Array(config.wordSpacing).fill('-').join('');
      }

      var strToAdd = drawings[j].split('\n')[i] || new Array(drawings[j].split('\n')[0].length).fill('-').join('');
      result[i] += strToAdd;
    }
  }

  return result.join('\n');
};

// 段落转换字符画的方法
var paragraphToDrawing = exports.paragraphToDrawing = function paragraphToDrawing(_ref3) {
  var paragraph = _ref3.paragraph,
      fontSize = _ref3.fontSize,
      fontFamily = _ref3.fontFamily,
      fontWeight = _ref3.fontWeight,
      wordSpacing = _ref3.wordSpacing,
      lineSpacing = _ref3.lineSpacing,
      textAlign = _ref3.textAlign;

  var config = {
    paragraph: paragraph || 'Hello,\nWorld!',
    fontSize: fontSize || 40,
    fontFamily: fontFamily || '"Microsoft Yahei"',
    fontWeight: fontWeight || 'normal',
    wordSpacing: wordSpacing || 4,
    lineSpacing: lineSpacing || 0,
    textAlign: textAlign || 'left'
  };
  var drawings = config.paragraph.split('\n').map(function (text) {
    return textToDrawing({
      text: text,
      fontSize: config.fontSize,
      fontFamily: config.fontFamily,
      fontWeight: config.fontWeight,
      wordSpacing: config.wordSpacing
    });
  });

  var columnCount = Math.max.apply(Math, (0, _toConsumableArray3.default)(drawings.map(function (p) {
    return p.split('\n')[0].length;
  })));
  var lineSpacingArea = new Array(config.lineSpacing).fill(new Array(columnCount).fill('-').join('')).join('\n');

  var lineHandler = function lineHandler(line, align) {
    var widthDiff = columnCount - line.length;
    if (align === 'left') {
      return line + new Array(widthDiff).fill('-').join('');
    }
    if (align === 'right') {
      return new Array(widthDiff).fill('-').join('') + line;
    }

    var leftEmptyWidth = Math.round(widthDiff / 2);
    var rightEmptyWidth = widthDiff - leftEmptyWidth;
    return new Array(leftEmptyWidth).fill('-').join('') + line + new Array(rightEmptyWidth).fill('-').join('');
  };

  var result = [];
  for (var i = 0; i < drawings.length; i++) {
    drawings[i] = drawings[i].split('\n').map(function (line) {
      return lineHandler(line, config.textAlign);
    }).join('\n');

    if (i > 0) {
      result[i] = lineSpacingArea ? lineSpacingArea + '\n' + drawings[i] : drawings[i];
    } else {
      result[i] = drawings[i];
    }
  }
  return result.join('\n');
};

exports.default = {
  wordToDrawing: wordToDrawing,
  textToDrawing: textToDrawing,
  paragraphToDrawing: paragraphToDrawing
};