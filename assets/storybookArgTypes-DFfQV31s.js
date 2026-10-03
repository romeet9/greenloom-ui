import{bi as g,bj as m,bk as b}from"./iframe-C1qQ09LF.js";const o={control:{type:"object"}},l=["Can be",'- an absolute value like `"10px"`','- token `"spacing.5"`','- an array shorthand `["spacing.2", "10px", "spacing.5", "spacing.9"]` (Similar to CSS shorthands)','- responsive object with combinatation of all previous values `{ "base": "spacing.3", "l": ["spacing.10", "20px"]}`',"[MDN Docs for ShortHand Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties)"].join(`

`),i=["Can be",'- an absolute value like `"10px"`','- token `"spacing.5"`','- responsive object with combinatation of all previous values `{ "base": "spacing.3", "l": "20px"}`'].join(`

`),t='&nbsp;&nbsp;<span title="Also supported as styled-prop in other components">💅🏼</span>',h=b({}),d=({category:s="StyledProps",descriptionLength:e}={})=>{const r={...o,table:{category:s}},a=Object.fromEntries(Object.entries(h).filter(([n])=>!n.includes("margin")).map(([n,S])=>{const p=n.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`);return[n,{...o,description:`**CSS property \`${p}\`** ${e==="long"?t:""}

<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/${p}">MDN Docs for ${p}</a><br/><br/>`,table:{category:s,type:{summary:`MakeValueResponsive<CSSObject['${n}']>`}}}]}));return{margin:{...r,description:`**Margin Shorthand**${e==="long"?t:""}

${e==="long"?l:""}`},marginX:{...r,description:`**Horizontal Margin**${e==="long"?t:""}

${e==="long"?i:""}`},marginY:{...r,description:`**Vertical Margin**${e==="long"?t:""}

${e==="long"?i:""}`},marginTop:{...r,description:`**CSS Property \`margin-top\`**${e==="long"?t:""}

 Supports same values as marginX, and marginY`},marginRight:{...r,description:`**CSS Property \`margin-right\`**${e==="long"?t:""}

 Supports same values as marginX, and marginY`},marginBottom:{...r,description:`**CSS Property \`margin-bottom\`**${e==="long"?t:""}

 Supports same values as marginX, and marginY`},marginLeft:{...r,description:`**CSS Property \`margin-left\`**${e==="long"?t:""}

 Supports same values as marginX, and marginY`},...a}},u=()=>{const s=Object.fromEntries(Object.entries(g({})).filter(([e])=>!Object.keys(d()).includes(e)&&!e.includes("padding")&&!e.includes("backgroundColor")&&!e.startsWith("on")).map(([e,r])=>{const a=e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);return[e,{...o,description:`**CSS property \`${a}\`**



<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/${a}">MDN Docs for ${a}</a><br/><br/>`,table:{type:{summary:`MakeValueResponsive<CSSObject['${e}']>`}}}]}));return{backgroundColor:{...o,description:"**CSS property `background-color`**.\n\nYou can use our surface.background.* tokens as value here"},padding:{...o,description:`**Padding Shorthand**

${l}`},paddingX:{...o,description:`**Horizontal Padding**

${i}`},paddingY:{...o,description:`**Vertical Padding**

${i}`},paddingTop:{...o,description:"**CSS Property `padding-top`**\n\n Supports same values as paddingX, and paddingY"},paddingRight:{...o,description:"**CSS Property `padding-right`**\n\n Supports same values as paddingX, and paddingY"},paddingBottom:{...o,description:"**CSS Property `padding-bottom`**\n\n Supports same values as paddingX, and paddingY"},paddingLeft:{...o,description:"**CSS Property `padding-left`**\n\n Supports same values as paddingX, and paddingY"},...d({descriptionLength:"long",category:null}),...s,children:{table:{disable:!0}},__brand__:{table:{disable:!0}},as:{control:{type:"select",options:m}},elevation:{control:{type:"radio",options:["lowRaised","midRaised","highRaised"]}},backdropFilter:{...o,description:`**CSS property \`backdrop-filter\`**

Applies a backdrop filter effect to the area behind the element.

<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter">MDN Docs for backdrop-filter</a><br/><br/>`},transition:{...o,description:`**CSS property \`transition\`**

Specifies the transition effects to use when animating between different states.

<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition">MDN Docs for transition</a><br/><br/>`}}},y=()=>({...u(),borderRadius:{...o,description:"**`borderRadius` token of blade**."},lineHeight:{...o,description:"**CSS property `line-height`**"},forwardedAs:{table:{disable:!0}},theme:{table:{disable:!0}},ref:{table:{disable:!0}},children:{table:{disable:!0}},as:{control:{type:"text"}}}),C=()=>({onMouseEnter:{table:{category:"CommonEvents"},description:"Event handler which triggers when mouse enters"},onMouseLeave:{table:{category:"CommonEvents"},description:"Event handler which triggers when mouse leaves"},onFocus:{table:{category:"CommonEvents"},description:"Event handler which triggers when element is focus"},onBlur:{table:{category:"CommonEvents"},description:"Event handler which triggers when element looses focus"},onMouseMove:{table:{category:"CommonEvents"},description:"Event handler which triggers when mouse moves"},onMouseOver:{table:{category:"CommonEvents"},description:"Event handler which triggers when mouse enters"},onPointerDown:{table:{category:"CommonEvents"},description:"Event handler which triggers when pointer is down"},onPointerEnter:{table:{category:"CommonEvents"},description:"Event handler which triggers when pointer enters"},onTouchEnd:{table:{category:"CommonEvents"},description:"Event handler which triggers when touch ends"},onTouchStart:{table:{category:"CommonEvents"},description:"Event handler which triggers when touch starts"}});export{C as a,u as b,y as c,d as g};
