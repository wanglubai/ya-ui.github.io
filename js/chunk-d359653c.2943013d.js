(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d359653c"],{"7b9d":function(t,e,a){"use strict";a("cda3")},a0cf:function(t,e,a){"use strict";a("d840")},a5b3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textarea-c"},[a("div",{staticClass:"textarea"},[a("ya-textarea",{attrs:{autofocus:!0},on:{blur:t.blurAction,focus:t.focusAction,input:t.inputAction,change:t.changeAction}})],1),a("div",{staticClass:"console"},t._l(t.msg,(function(e,n){return a("p",{key:n},[t._v(t._s(e))])})),0),a("div",{staticClass:"textarea"},[a("ya-textarea",{attrs:{readonly:!0,value:"一段只读文本，readonly=true"}})],1),a("div",{staticClass:"textarea2"},[a("ya-textarea",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("div",{staticClass:"textarea3"},[a("ya-textarea",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("div",{staticClass:"textarea4"},[a("ya-textarea",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ya-textarea",class:{"ya-textarea-active":t.isFocus}},[a("textarea",t._b({directives:[{name:"model",rawName:"v-model",value:t.selfValue,expression:"selfValue"}],ref:"ele",staticClass:"ya-textarea-ele",attrs:{placeholder:t.placeholder,maxlength:t.maxlength,disabled:t.disabled},domProps:{value:t.selfValue},on:{focus:t.focusAction,blur:t.blurAction,change:t.changeAction,input:function(e){e.target.composing||(t.selfValue=e.target.value)}}},"textarea",t.$props,!1)),t._v(" "),t.remainTag&&!t.readonly?a("span",{staticClass:"ya-textarea-remain"},[t._v(t._s(t.remain))]):t._e()])},u=[],c=(a("a9e3"),{components:{},props:{disabled:{type:Boolean,default:!1},cols:Number,rows:Number,readonly:Boolean,wrap:String,autofocus:Boolean,remainTag:{type:Boolean,default:!0},placeholder:{type:String,default:"please..."},value:{type:String,default:""},maxlength:{type:Number,default:60}},data:function(){return{selfValue:this.value,isFocus:!1}},computed:{count:function(){return this.selfValue.length},remain:function(){var t=this.maxlength-this.count;return t}},watch:{value:function(t){this.selfValue=t},selfValue:function(t){this.$emit("input",t)}},methods:{focusAction:function(t){this.isFocus=!0,this.$emit("focus",t)},blurAction:function(t){this.isFocus=!1,this.$emit("blur",t)},changeAction:function(){this.$emit("change",this.selfValue)}},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}}),i=c,l=(a("7b9d"),a("2877")),r=Object(l["a"])(i,s,u,!1,null,"0f52fa78",null),f=r.exports,d={components:{YaTextarea:f},props:{},data:function(){return{value:"一段可写文本 hello world",msg:[]}},computed:{},watch:{},methods:{pushMsg:function(t){5==this.msg.length&&this.msg.shift(),this.msg.push(t)},blurAction:function(){this.pushMsg("... blur event")},focusAction:function(){this.pushMsg("... focus event")},inputAction:function(t){this.pushMsg("... input:".concat(t))},changeAction:function(t){this.pushMsg("... change:".concat(t))}},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},h=d,p=(a("a0cf"),Object(l["a"])(h,n,o,!1,null,"21346bc0",null));e["default"]=p.exports},cda3:function(t,e,a){},d840:function(t,e,a){}}]);
//# sourceMappingURL=chunk-d359653c.2943013d.js.map