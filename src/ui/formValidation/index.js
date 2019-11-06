import React, { useState, useEffect, Fragment, forwardRef,useImperativeHandle } from 'react';
import { View } from 'react-native';
import DefaultRules from './defaultRules';
import Tip from '../tip'

export default forwardRef(function FormValid({
    rules,
    children
},ref){
    let formElements = [];

    function cloneChildren(children) {
        return React.Children.map(children, (child, index) => {
            if (child && child.props.name) {
                formElements.push(child)
                return React.cloneElement(child);
            } else if (child && child.props.children) {
                return React.cloneElement(child, child.props, cloneChildren(child.props.children));
            } else {
                return child;
            }
        })
    }

    function value() {
        return formElements.map((element,index)=>{
            return element.ref.current.value();
        });
    }

    useImperativeHandle(ref, () => ({
        valid: () => {
            let validResult = formElements.map((element,index)=>{
                let elementRef = element.ref;
                let elementValue = element.ref.current.value();
                let elementName = element.props.name;
                let elementRules = rules[elementName]; //当前元素校验规则
                
                for (const rule in elementRules) {
                    if (elementRules.hasOwnProperty(rule)) {
                        if (DefaultRules[rule]) { //默认校验
                            if(!DefaultRules[rule](elementValue)){
                                return elementRules[rule]; //默认校验错误消息
                            }
                        } else if (rule === 'regExp') { // 自定义pattern
                            let reg = elementRules[rule].rule;
                            let message = elementRules[rule].message;
                            if (!reg.test(elementValue)) {
                                return message;
                            }
                        } else if (rule === 'custom') { //自定义方法校验
                            let func = elementRules[rule].rule;
                            let message = elementRules[rule].message;
                            
                            if(!func(elementValue, value())){
                                return message;
                            }
                        }
                    }
                }
                return true;
            })
            let errorResult = validResult.filter(item=> typeof item === 'string')
            if (errorResult.length > 0) {
                Tip.message(errorResult[0]);
                return false;
            }
            return true;
        }
      }));
    return (<Fragment>
        {cloneChildren(children)}
    </Fragment>);
}
) 