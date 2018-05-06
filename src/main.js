import 'core-js/shim';

// 文字转换字符画的方法
export const wordToDrawing = ({
  word,
  fontSize,
  fontFamily,
  fontWeight,
  width,
  height,
  inParagraph,
}) => {
  if (word === ' ') {
    const rowContent = new Array(parseInt(fontSize || 40, 10) / 2)
      .fill('-')
      .join('');
    return new Array(parseInt(fontSize || 40, 10)).fill(rowContent).join('\n');
  }

  const wordVal = word.substring(0, 1) || 'W';
  const canvasSize = {
    width: parseInt(fontSize || 40, 10),
    height: parseInt(fontSize * 1.5 || 80, 10),
  };

  const canvas = document.createElement('canvas');
  canvas.style.width = canvasSize.width;
  canvas.style.height = canvasSize.height;
  canvas.style.position = 'fixed';
  canvas.style.right = 0;
  canvas.style.bottom = 0;
  canvas.style.zIndex = -999;

  document.body.appendChild(canvas);

  const getFamily = family => {
    if (!family) {
      return '"Microsoft Yahei"';
    }
    if (family.includes(' ')) {
      return `"${family.replace(/('|")/g, '')}"`;
    }
    return family;
  };

  // canvas 绘图
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.font = `${fontWeight || 'normal'} ${parseInt(fontSize, 10) ||
    40}px ${getFamily(fontFamily)}`;
  ctx.textBaseline = 'top';
  ctx.fillText(wordVal, 0, 0);

  // 读取图像的像素信息
  let drawing = '';
  for (let y = 0; y < canvasSize.height; y++) {
    for (let x = 0; x < canvasSize.width; x++) {
      const imageData = ctx.getImageData(x, y, 1, 1);
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
    drawing = drawing.split('\n').filter(s => s.includes('+')).join('\n');
  }

  const paitingSize = {
    width: width || fontSize || 40,
    height: height || fontSize || 40,
  };

  // 用空白补全宽度
  const widthDiff = paitingSize.width - drawing.split('\n')[0].length;
  if (widthDiff > 0) {
    const leftCols = Math.round(widthDiff / 2);
    const rightCols = widthDiff - leftCols;
    drawing = drawing
      .split('\n')
      .map(s => {
        const left = new Array(leftCols).fill('-').join('');
        const right = new Array(rightCols).fill('-').join('');
        return `${left}${s}${right}`;
      })
      .join('\n');
  }

  // 用空白补全高度
  const heightDiff = paitingSize.height - drawing.split('\n').length;
  if (heightDiff > 0) {
    const topRows = Math.round(heightDiff / 2);
    const bottomRows = heightDiff - topRows;

    const cols = drawing.split('\n')[0].length;
    const content = drawing.split('\n');
    const emptyRow = new Array(cols).fill('-').join('');
    drawing = new Array(topRows)
      .fill(emptyRow)
      .concat(content)
      .concat(new Array(bottomRows).fill(emptyRow))
      .join('\n');
  }

  // 修剪英文字母水平边缘空白的方法
  const characterHandler = drawing => {
    const leftEmptyWidth = drawing
      .split('\n')
      .map(s => s.match(/^(-+)?/)[0].length);
    const rightEmptyWidth = drawing
      .split('\n')
      .map(s => s.match(/(-+)?$/)[0].length);
    const leftMinWidth = Math.min(...leftEmptyWidth);
    const rightMinWidth = Math.min(...rightEmptyWidth);

    const newLeftEmpty = leftEmptyWidth.map(num =>
      new Array(num - leftMinWidth).fill('-').join('')
    );
    const newRightEmpty = rightEmptyWidth.map(num =>
      new Array(num - rightMinWidth).fill('-').join('')
    );

    const rows = drawing
      .split('\n')
      .map((s, i) =>
        s.replace(/^(-+)?/, newLeftEmpty[i]).replace(/(-+)?$/, newRightEmpty[i])
      );
    const minWidth = Math.min(...rows.map(s => s.length));

    return rows
      .map(s => s.replace(/^-+$/, new Array(minWidth).fill('-').join('')))
      .join('\n');
  };

  // 对非中文元素，修剪其左右两边
  const regForChinese = /[\u4e00-\u9fa5]/; // 中文的正则校验
  if (!regForChinese.test(wordVal)) {
    drawing = characterHandler(drawing);
  }

  return drawing;
};

// 文本转换字符画的方法
export const textToDrawing = ({
  text,
  fontSize,
  fontFamily,
  fontWeight,
  wordSpacing,
}) => {
  const config = {
    text: text || 'Hello World!',
    fontSize: fontSize || 40,
    fontFamily: fontFamily || '"Microsoft Yahei"',
    fontWeight: fontWeight || 'normal',
    wordSpacing: wordSpacing || 4,
  };
  const drawings = config.text.split('').map(word =>
    wordToDrawing({
      word,
      fontSize: config.fontSize,
      fontFamily: config.fontFamily,
      fontWeight: config.fontWeight,
      inParagraph: true,
    })
  );

  const rowCount = Math.max(...drawings.map(p => p.split('\n').length));
  const result = new Array(rowCount).fill('');
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < drawings.length; j++) {
      if (j > 0) {
        result[i] += new Array(config.wordSpacing).fill('-').join('');
      }

      const strToAdd =
        drawings[j].split('\n')[i] ||
        new Array(drawings[j].split('\n')[0].length).fill('-').join('');
      result[i] += strToAdd;
    }
  }

  return result.join('\n');
};

// 段落转换字符画的方法
export const paragraphToDrawing = ({
  paragraph,
  fontSize,
  fontFamily,
  fontWeight,
  wordSpacing,
  lineSpacing,
  textAlign,
}) => {
  const config = {
    paragraph: paragraph || 'Hello,\nWorld!',
    fontSize: fontSize || 40,
    fontFamily: fontFamily || '"Microsoft Yahei"',
    fontWeight: fontWeight || 'normal',
    wordSpacing: wordSpacing || 4,
    lineSpacing: lineSpacing || 0,
    textAlign: textAlign || 'left',
  };
  const drawings = config.paragraph.split('\n').map(text =>
    textToDrawing({
      text,
      fontSize: config.fontSize,
      fontFamily: config.fontFamily,
      fontWeight: config.fontWeight,
      wordSpacing: config.wordSpacing,
    })
  );

  const columnCount = Math.max(...drawings.map(p => p.split('\n')[0].length));
  const lineSpacingArea = new Array(config.lineSpacing)
    .fill(new Array(columnCount).fill('-').join(''))
    .join('\n');

  const lineHandler = (line, align) => {
    const widthDiff = columnCount - line.length;
    if (align === 'left') {
      return line + new Array(widthDiff).fill('-').join('');
    }
    if (align === 'right') {
      return new Array(widthDiff).fill('-').join('') + line;
    }

    const leftEmptyWidth = Math.round(widthDiff / 2);
    const rightEmptyWidth = widthDiff - leftEmptyWidth;
    return (
      new Array(leftEmptyWidth).fill('-').join('') +
      line +
      new Array(rightEmptyWidth).fill('-').join('')
    );
  };

  const result = [];
  for (let i = 0; i < drawings.length; i++) {
    drawings[i] = drawings[i]
      .split('\n')
      .map(line => lineHandler(line, config.textAlign))
      .join('\n');

    if (i > 0) {
      result[i] = lineSpacingArea
        ? `${lineSpacingArea}\n${drawings[i]}`
        : drawings[i];
    } else {
      result[i] = drawings[i];
    }
  }
  return result.join('\n');
};

export default {
  wordToDrawing,
  textToDrawing,
  paragraphToDrawing,
};
