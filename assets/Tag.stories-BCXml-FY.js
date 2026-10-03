import{jf as p,ad as u,j as e,B as o,a9 as w,ab as m,n as F,bb as _,X as L}from"./iframe-C1qQ09LF.js";import{S as U}from"./Sandbox.web-B2xP21Qp.js";import{S as k}from"./StoryPageWrapper-CS0_5maI.js";import{g as A}from"./storybookArgTypes-DFfQV31s.js";import{i as x}from"./iconMap-BGYDFM5U.js";const O=()=>e.jsxs(k,{componentName:"Tag",componentDescription:"These are set of interactive keywords that help organise & categorise objects. Tags can be added or removed from an object by the users.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85897&t=CvaYT53LNc4OYVKa-1&scaling=min-zoom&page-id=21689%3A381614&mode=design",children:[e.jsx(L,{children:"Usage"}),e.jsx(U,{children:`
        import React from 'react';
        import { Tag, FileTextIcon } from '@greenloom/ui/components';
        
        function App() {
          const [isTagVisible, setIsTagVisible] = React.useState(true);

          return (
            isTagVisible 
            ? <Tag
                icon={FileTextIcon}
                onDismiss={() => {
                  console.log('Unpaid Tag dismissed');
                  setIsTagVisible(false);
                }}
              >
                Unpaid
              </Tag>
            : null
          )
        }

        export default App;
        `})]}),W={title:"Components/Tag",component:p,tags:["autodocs"],argTypes:{...A(),icon:{name:"icon",type:"select",options:Object.keys(x),mapping:x},_isVirtuallyFocussed:{table:{disable:!0}}},parameters:{docs:{page:O}}},C=({children:t,...a})=>{const[r,i]=u.useState(!0);return e.jsx(o,{children:r?e.jsx(p,{...a,onDismiss:()=>i(!1),children:t}):null})},l=C.bind({});l.args={children:"Unpaid",icon:"FileTextIcon"};const c=C.bind({});c.args={children:"Disabled Tag",icon:"FileTextIcon",isDisabled:!0};const Y=({children:t,...a})=>{const[r,i]=u.useState(!0);return e.jsx(o,{display:"flex",flexDirection:"column",gap:"spacing.4",maxWidth:"spacing.40",children:e.jsx(o,{children:r?e.jsx(p,{...a,onDismiss:()=>i(!1),children:t}):null})})},n=Y.bind({});n.args={children:"This is a very long tag label that will get truncated",icon:"FileTextIcon"};n.storyName="Text Truncation Tooltip";const E=({children:t,onSubmit:a})=>m()?e.jsx(o,{children:t}):e.jsx("form",{onSubmit:a,children:t}),g=t=>{const[a,r]=u.useState(""),[i,T]=u.useState([]),d=()=>{a&&(T([...i,a]),r(""))},P=s=>{T(i.filter(N=>N!==s))};return e.jsxs(o,{children:[e.jsx(o,{paddingY:"spacing.4",display:"flex",flexDirection:"row",flexWrap:"wrap",children:i.map(s=>e.jsx(p,{...t,marginRight:"spacing.2",onDismiss:()=>P(s),children:s},s))}),e.jsx(o,{children:e.jsxs(E,{onSubmit:s=>{s.preventDefault(),d()},children:[e.jsx(w,{label:"Tag Label",value:a,onChange:({value:s})=>r(s??""),onSubmit:m()?()=>d():void 0}),e.jsx(F,{icon:_,iconPosition:"right",variant:"secondary",marginTop:"spacing.2",type:"submit",onClick:m()?()=>d():void 0,children:"Create Tag"})]})})]})};var b,f,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [isTagVisible, setIsTagVisible] = React.useState(true);
  return <Box>
      {isTagVisible ? <Tag {...args} onDismiss={() => setIsTagVisible(false)}>
          {children}
        </Tag> : null}
    </Box>;
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var V,S,j;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [isTagVisible, setIsTagVisible] = React.useState(true);
  return <Box>
      {isTagVisible ? <Tag {...args} onDismiss={() => setIsTagVisible(false)}>
          {children}
        </Tag> : null}
    </Box>;
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,y,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [isTagVisible, setIsTagVisible] = React.useState(true);
  return <Box display="flex" flexDirection="column" gap="spacing.4" maxWidth="spacing.40">
      <Box>
        {isTagVisible ? <Tag {...args} onDismiss={() => setIsTagVisible(false)}>
            {children}
          </Tag> : null}
      </Box>
    </Box>;
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var I,B,R;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`(props: TagProps): React.ReactElement => {
  const [inputValue, setInputValue] = React.useState('');
  const [tags, setTags] = React.useState<string[]>([]);
  const addTag = (): void => {
    // Add input value to tags and clear the input value
    if (inputValue) {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };
  const removeTag = (tagName: TagProps['children']): void => {
    setTags(tags.filter(tagNameValue => tagNameValue !== tagName));
  };
  return <Box>
      <Box paddingY="spacing.4" display="flex" flexDirection="row" flexWrap="wrap">
        {tags.map(tagName => <Tag key={tagName} {...props} marginRight="spacing.2" onDismiss={() => removeTag(tagName)}>
            {tagName}
          </Tag>)}
      </Box>
      <Box>
        <CrossPlatformForm onSubmit={e => {
        e.preventDefault();
        addTag();
      }}>
          <TextInput label="Tag Label" value={inputValue} onChange={({
          value
        }) => setInputValue(value ?? '')} {...{
          onSubmit: isReactNative() ? () => addTag() : undefined
        }} />
          <Button icon={PlusIcon} iconPosition="right" variant="secondary" marginTop="spacing.2" type="submit" {...{
          onClick: isReactNative() ? () => addTag() : undefined
        }}>
            Create Tag
          </Button>
        </CrossPlatformForm>
      </Box>
    </Box>;
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const z=["Default","Disabled","TagTextTruncation","ControlledTags"],q=Object.freeze(Object.defineProperty({__proto__:null,ControlledTags:g,Default:l,Disabled:c,TagTextTruncation:n,__namedExportsOrder:z,default:W},Symbol.toStringTag,{value:"Module"}));export{q as t};
