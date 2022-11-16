

export { default } from '/Users/lym/Desktop/LowCode/rax-lowcode-single-demo/src/index.tsx';

import * as componentInstances from '/Users/lym/Desktop/LowCode/rax-lowcode-single-demo/src/index.tsx';



export * from '/Users/lym/Desktop/LowCode/rax-lowcode-single-demo/src/index.tsx';

const coveredComponents = {};

const library = 'MyBizComponent';
const execCompile = !!true;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}