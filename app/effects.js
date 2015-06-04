System.register(["aurelia-framework","config","gooy/aurelia-animator-velocity"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,i){var n=i[t];if(n){var a={};for(var o in n)a[o]=n[o];a.value=a.initializer.call(e),Object.defineProperty(e,t,a)}}var n,a,o,r,s=function(){function e(e,t,i){for(var n=0;n<t.length;n++){var a=t[n],o=a.decorators,r=a.key;if(delete a.key,delete a.decorators,a.enumerable=a.enumerable||!1,a.configurable=!0,("value"in a||a.initializer)&&(a.writable=!0),o){for(var s=0;s<o.length;s++){var l=o[s];if("function"!=typeof l)throw new TypeError("The decorator for method "+a.key+" is of the invalid type "+typeof l);a=l(e,r,a)||a}if(void 0!==a.initializer){i[r]=a;continue}}Object.defineProperty(e,r,a)}}return function(t,i,n,a,o){return i&&e(t.prototype,i,a),n&&e(t,n,o),t}}();return{setters:[function(e){n=e.bindable},function(e){a=e.config},function(e){o=e.VelocityAnimator}],execute:function(){r=function(){function e(n){t(this,e),i(this,"selectedEnterAnimation",r),i(this,"selectedEnterEasing",r),i(this,"selectedLeaveAnimation",r),i(this,"selectedLeaveEasing",r),i(this,"enterDuration",r),i(this,"leaveDuration",r),this.enterEffects=[],this.leaveEffects=[],this.easings=[],this.animator=n,this.config=a,this.selectedEnterAnimation=this.animator.enterAnimation.properties,this.selectedEnterEasing=this.animator.enterAnimation.options?this.animator.enterAnimation.options.easing:null,this.enterDuration=this.animator.enterAnimation.options?this.animator.enterAnimation.options.duration:null,this.selectedLeaveAnimation=this.animator.leaveAnimation.properties,this.selectedLeaveEasing=this.animator.leaveAnimation.options?this.animator.leaveAnimation.options.easing:null,this.leaveDuration=this.animator.leaveAnimation.options?this.animator.leaveAnimation.options.duration:null;var o;for(o in Velocity.Redirects)o.lastIndexOf("In")===o.length-2&&this.enterEffects.push(o),o.lastIndexOf("Down")===o.length-4&&this.enterEffects.push(o),0===o.indexOf("callout")&&this.enterEffects.push(o);for(o in Velocity.Redirects)o.lastIndexOf("Out")===o.length-3&&this.leaveEffects.push(o),o.lastIndexOf("Up")===o.length-2&&this.leaveEffects.push(o),0===o.indexOf("callout")&&this.leaveEffects.push(o);for(o in Velocity.Easings)this.easings.push(o)}var r={};return s(e,[{key:"selectedEnterAnimation",decorators:[n],initializer:null,enumerable:!0},{key:"selectedEnterEasing",decorators:[n],initializer:null,enumerable:!0},{key:"selectedLeaveAnimation",decorators:[n],initializer:null,enumerable:!0},{key:"selectedLeaveEasing",decorators:[n],initializer:null,enumerable:!0},{key:"enterDuration",decorators:[n],initializer:null,enumerable:!0},{key:"leaveDuration",decorators:[n],initializer:null,enumerable:!0},{key:"openDialog",value:function(e){this[e]&&this[e].open()}},{key:"selectedEnterAnimationChanged",value:function(e,t){this.updateEnterAnimation()}},{key:"selectedEnterEasingChanged",value:function(e,t){this.updateEnterAnimation()}},{key:"enterDurationChanged",value:function(e,t){this.updateEnterAnimation()}},{key:"updateEnterAnimation",value:function(){this.animator.enterAnimation={properties:this.selectedEnterAnimation,options:{easing:this.selectedEnterEasing,duration:this.enterDuration}}}},{key:"selectedLeaveAnimationChanged",value:function(e,t){this.updateLeaveAnimation()}},{key:"selectedLeaveEasingChanged",value:function(e,t){this.updateLeaveAnimation()}},{key:"updateLeaveAnimation",value:function(){this.animator.leaveAnimation={properties:this.selectedLeaveAnimation,options:{easing:this.selectedLeaveEasing,duration:this.leaveDuration}}}}],[{key:"inject",value:[o],enumerable:!0}],r),e}(),e("SettingsPage",r)}}});