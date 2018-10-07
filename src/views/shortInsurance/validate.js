
export default function(rules, obj) {
    if (typeof rules !== 'object') {
        throw new TypeError('need object type rule')  
    }
    if (typeof obj !== 'object' || !obj) {
        return { errMsg: 'the validated value should be a object' }
    }
    for (let key in rules) {
        let rule = formatRule(rules[key])
        let value = obj[key]
  
        // if (typeof value === 'string' && rule.trim === true) {
        //   value = obj[key] = value.trim();
        // }
  
        // treat null / '' / NaN as undefined
        if ((value === '' || value === null || Number.isNaN(value))) {
            value = obj[key] = undefined
        }
        const has = value !== null && value !== undefined
        if (!has) {
          if (rule.required) {
            return {
                errMsg: `${value}不能为空`
            }
          }
          if (rule.format && !rule.format.test(value)) {
            const errMsg = rule.message || `请检查${value}格式`
             return {
                errMsg: errMsg
            }
          }
        }
    }
}
// function formatRule(rule) {
//     rule = rule || {};
//     if (typeof rule === 'string') {
//       rule = { type: rule };
//     } else if (Array.isArray(rule)) {
//       rule = { type: 'enum', values: rule };
//     } else if (rule instanceof RegExp) {
//       rule = { type: 'string', format: rule };
//     }
  
//     if (rule.type && rule.type[rule.type.length - 1] === '?') {
//       rule.type = rule.type.slice(0, -1);
//       rule.required = false;
//     }
  
//     return rule;
//   }
