import arrayFrom from 'array-from';
import Setup from './setup';

class Base {
  constructor(el) {
    this.$el = el;
  }

  static selector() {
    const prefix = Setup.selectorPrefix || 'setup';
    if (Setup.selectorType === 'css_class') {
      return `.${prefix}-${this.className.toLowerCase()}`;
    }
    return `[data-${prefix}-${this.className.toLowerCase()}]`;
  }

  static init(element = document.body) {
    const selector = this.selector();
    const elementsToInit = element.querySelectorAll(selector);

    // return elementsToInit.forEach(el => new this(el), this);
    return arrayFrom(elementsToInit).forEach((el) => new this(el), this);
  }
}

export default Base;
