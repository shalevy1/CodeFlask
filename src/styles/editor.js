import { BACKGROUND_COLOR, LINE_HEIGHT, FONT_SIZE } from './theme-default';

const FONT_FAMILY = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`;
const COLOR = (CSS.supports('caret-color', '#000')) ? BACKGROUND_COLOR : '#ccc';
const LINE_NUMBER_WIDTH = '40px'


export const editor_css = `
  .codeflask {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .codeflask, .codeflask * {
    box-sizing: border-box;
  }

  .codeflask__pre {
    pointer-events: none;
    z-index: 3;
    overflow: hidden;
  }

  .codeflask__textarea {
    background: none;
    border: none;
    color: ${COLOR};
    z-index: 1;
    resize: none;
    font-family: ${FONT_FAMILY};
    -webkit-appearance: pre;
    caret-color: #111;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .codeflask--has-line-numbers .codeflask__textarea {
    width: calc(100% - ${LINE_NUMBER_WIDTH});
  }

  .codeflask__code {
    display: block;
    font-family: ${FONT_FAMILY};
    overflow: hidden;
  }

  .codeflask__flatten {
    padding: 10px;
    font-size: ${FONT_SIZE};
    line-height: ${LINE_HEIGHT};
    white-space: pre;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    margin: 0 !important;
    outline: none;
    text-align: left;
  }

  .codeflask__flatten.word-wrap {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .codeflask--has-line-numbers .codeflask__flatten {
    width: calc(100% - ${LINE_NUMBER_WIDTH});
    left: ${LINE_NUMBER_WIDTH};
  }

  .codeflask__line-highlight {
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: ${LINE_HEIGHT};
    background: rgba(0,0,0,0.1);
    z-index: 1;
  }

  .codeflask__lines {
    padding: 10px 4px;
    font-size: 12px;
    line-height: ${LINE_HEIGHT};
    font-family: 'Cousine', monospace;
    position: absolute;
    left: 0;
    top: 0;
    width: ${LINE_NUMBER_WIDTH};
    height: 100%;
    text-align: right;
    color: #999;
    z-index: 2;
  }

  .codeflask__lines__line {
    display: block;
  }

  .codeflask.codeflask--has-line-numbers {
    padding-left: ${LINE_NUMBER_WIDTH};
  }

  .codeflask.codeflask--has-line-numbers:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${LINE_NUMBER_WIDTH};
    height: 100%;
    background: #eee;
    z-index: 1;
  }

.codeflask .codeflask__auto-suggestions-list {
	position: absolute;
  width: 300px;
  font-family: monospace;
  background: #f4f4f4;
	font-size: 12px;
	border: 1px solid #eeeeee;
	z-index: 10;
}

.codeflask .codeflask__auto-suggestions-list ul {
  list-style: none;
  margin: 0;
	padding: 0;
}

.codeflask .codeflask__auto-suggestions-list ul li {
	padding: 3px 5px;
	border-bottom: 1px solid #eeeeee;
}

.codeflask .codeflask__auto-suggestions-list ul li.selected {
	background: beige;
}

.codeflask .codeflask__auto-suggestions-list ul li .description {
	float: right;
	font-size: 80%;
	opacity: 0.7;
}
`;
