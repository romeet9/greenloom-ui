import{jw as l,r as u,j as e,x as r,T as a,jx as ie,X as pe}from"./iframe-C1qQ09LF.js";import{S as he}from"./Sandbox.web-B2xP21Qp.js";import{S as fe}from"./StoryPageWrapper-CS0_5maI.js";import{a as Ce}from"./storybookArgTypes-DFfQV31s.js";import{u as oe}from"./useToast.web-DG48GqLd.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const be=()=>e.jsxs(fe,{componentName:"CounterInput",componentDescription:"CounterInput allows users to increment or decrement numerical values using built-in controls with manual text input support.",figmaURL:"https://www.figma.com/design/fGoYjy1l6hjqG759G6XZEF/-Research--Counter-Input?node-id=323-11223&t=GDE5fN6tVSW2JXeR-0",children:[e.jsx(pe,{children:"Usage"}),e.jsx(he,{showConsole:!0,children:`
        import { CounterInput } from '@greenloom/ui/components';
        import { useState } from 'react';

        function App() {
          const [quantity, setQuantity] = useState(1);

          return (
            <CounterInput 
              label="Quantity" 
              value={quantity}
              onChange={({ value }) => {
                setQuantity(value);
                console.log('Value changed:', value);
              }}
              min={1}
              max={10}
            />
          )
        }

        export default App;
        `})]}),we={title:"Components/Input/CounterInput",component:l,args:{label:"Quantity",defaultValue:5,min:0,max:100,emphasis:"subtle",size:"medium",isLoading:!1,isDisabled:!1},tags:["autodocs"],argTypes:{...Ce(),onChange:{action:"onChange"},onFocus:{action:"onFocus"},onBlur:{action:"onBlur"},emphasis:{control:{type:"select"},options:["subtle","intense"]},size:{control:{type:"select"},options:["xsmall","small","medium","large"]},value:{control:{disable:!0},table:{category:"State Management"}},defaultValue:{control:{type:"number"},table:{category:"State Management"}},labelPosition:{control:{type:"select"},options:["top","left"]},label:{description:"Label for the `CounterInput`.",control:{type:"text"}},accessibilityLabel:{description:"Accessibility label for the `CounterInput`.",control:{type:"text"}}},parameters:{docs:{page:be}}},p=({...s})=>{const[n,o]=u.useState(5);return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Basic Usage"}),e.jsx(a,{size:"medium",color:"surface.text.gray.muted",children:"Simple counter input with label, value, and onChange handler."}),e.jsx(l,{label:"Basic Counter",...s,value:n,onChange:({value:t})=>{console.log("newValue",t),o(t)}}),e.jsxs(a,{size:"small",color:"surface.text.gray.subtle",children:["Current value: ",n]})]})},h=({...s})=>{const[n,o]=u.useState(1),[t,c]=u.useState(2),[i,g]=u.useState(2),[d,x]=u.useState(3),[B,re]=u.useState(100),[ue,ce]=u.useState(100),[me,de]=u.useState(100),[ge,xe]=u.useState(100);return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Size Variants"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(a,{size:"medium",weight:"medium",children:"Single Digit Values"}),e.jsx(l,{...s,label:"XSmall Counter",size:"xsmall",value:n,onChange:({value:m})=>o(m),min:0}),e.jsx(l,{label:"Small Counter",size:"small",value:t,onChange:({value:m})=>c(m),min:0}),e.jsx(l,{label:"Medium Counter (Default)",size:"medium",value:i,onChange:({value:m})=>g(m),min:0}),e.jsx(l,{label:"Large Counter",size:"large",value:d,onChange:({value:m})=>x(m),min:0})]}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(a,{size:"medium",weight:"medium",children:"Three Digit Values"}),e.jsx(l,{label:"XSmall Counter",size:"xsmall",value:B,onChange:({value:m})=>re(m),min:0,max:999}),e.jsx(l,{label:"Small Counter",size:"small",value:ue,onChange:({value:m})=>ce(m),min:0,max:999}),e.jsx(l,{label:"Medium Counter",size:"medium",value:me,onChange:({value:m})=>de(m),min:0,max:999}),e.jsx(l,{label:"Large Counter",size:"large",value:ge,onChange:({value:m})=>xe(m),min:0,max:999})]})]})},f=({...s})=>{const[n,o]=u.useState(5),[t,c]=u.useState(5);return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Emphasis Variants"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(a,{size:"medium",weight:"medium",children:"Subtle Emphasis (Default)"}),e.jsx(a,{size:"small",color:"surface.text.gray.muted",children:"Gray icons and borders, no progress bar color"}),e.jsx(l,{label:"Subtle Counter",...s,emphasis:"subtle",value:n,onChange:({value:i})=>o(i),min:0,max:10})]}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(a,{size:"medium",weight:"medium",children:"Intense Emphasis"}),e.jsx(a,{size:"small",color:"surface.text.gray.muted",children:"Primary colored icons and borders, blue progress bar"}),e.jsx(l,{label:"Intense Counter",emphasis:"intense",value:t,onChange:({value:i})=>c(i),min:0,max:10})]})]})},C=({...s})=>{const[n,o]=u.useState(5);return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Min/Max Constraints"}),e.jsx(a,{size:"medium",color:"surface.text.gray.muted",children:"Counter with minimum value of 1 and maximum value of 10. Buttons disable at limits."}),e.jsx(l,{label:"Constrained Counter",...s,value:n,onChange:({value:t})=>o(t),min:1,max:10}),e.jsxs(a,{size:"small",color:"surface.text.gray.subtle",children:["Current: ",n," | Min: 1 | Max: 10"]})]})},b=({...s})=>e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Uncontrolled Component"}),e.jsx(a,{size:"medium",color:"surface.text.gray.muted",children:"Counter with defaultValue, manages its own state internally."}),e.jsx(l,{label:"Uncontrolled Counter",...s,defaultValue:3,min:0,max:20,onChange:({value:n})=>console.log("Uncontrolled value changed:",n)})]}),y=({...s})=>{const[n,o]=u.useState({cartQuantity:{value:5,isLoading:!1},subscriptionSeats:{value:3,isLoading:!1}}),t=(c,i)=>({value:g})=>{o(d=>({...d,[c]:{value:g,isLoading:!0}})),setTimeout(()=>{o(d=>({...d,[c]:{...d[c],isLoading:!1}}))},i)};return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Loading State"}),e.jsx(a,{size:"medium",color:"surface.text.gray.muted",children:"Shows loading indicator and disables interactions during async operations."}),e.jsx(l,{label:"Cart Quantity (2.5s loading)",...s,value:n.cartQuantity.value,onChange:t("cartQuantity",2500),isLoading:n.cartQuantity.isLoading,emphasis:"intense",min:0,max:10}),e.jsx(l,{label:"Subscription Seats (1s loading)",...s,value:n.subscriptionSeats.value,onChange:t("subscriptionSeats",1e3),isLoading:n.subscriptionSeats.isLoading,emphasis:"subtle",min:1,max:20})]})},v=({...s})=>{const[n,o]=u.useState(5),[t,c]=u.useState(!1),i=oe(),g=async({value:d})=>{c(!0);try{await new Promise((x,B)=>{setTimeout(()=>{Math.random()>.5?x(!0):B(new Error("API call failed"))},1500)}),o(d),i.show({content:`Successfully changed value to ${d}`,color:"positive"})}catch{i.show({content:"Failed to change value. Please try again.",color:"negative"})}finally{c(!1)}};return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Controlled Loading Example"}),e.jsx(a,{size:"medium",color:"surface.text.gray.muted",children:"User has full control over when the value changes and loading state. Value only updates after successful async operation."}),e.jsx(l,{label:"API-Controlled Counter",...s,value:n,onChange:g,isLoading:t,min:1,max:10,emphasis:"intense"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsxs(a,{size:"small",color:"surface.text.gray.subtle",children:["Current value: ",n]}),e.jsxs(a,{size:"small",color:"surface.text.gray.subtle",children:["Status: ",t?"Loading...":"Ready"]}),e.jsx(a,{size:"small",color:"surface.text.gray.muted",children:"• Loading starts immediately when button is clicked • Value only changes after successful API response • Random 50% failure rate to demonstrate error handling"})]}),e.jsx(ie,{})]})},T=({...s})=>{const[n,o]=u.useState(5);return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Disabled State"}),e.jsx(a,{size:"medium",color:"surface.text.gray.muted",children:"Counter input in disabled state - no interactions allowed."}),e.jsx(l,{label:"Disabled Counter",...s,value:n,onChange:({value:t})=>o(t),isDisabled:!0}),e.jsx(l,{label:"Disabled Counter",...s,emphasis:"subtle",value:n,onChange:({value:t})=>o(t),isDisabled:!0})]})},V=({...s})=>{const[n,o]=u.useState(1),[t,c]=u.useState(2);return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Label Positioning"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(a,{size:"medium",weight:"medium",children:"Top Position (Default)"}),e.jsx(l,{label:"Top Label",...s,labelPosition:"top",value:n,onChange:({value:i})=>o(i),min:0,max:10})]}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(a,{size:"medium",weight:"medium",children:"Left Position"}),e.jsx(l,{label:"Left Label",...s,labelPosition:"left",value:t,onChange:({value:i})=>c(i),min:0,max:10})]})]})},S=({...s})=>{const[n,o]=u.useState({quantity:2,licenses:1,users:5}),t=c=>({value:i})=>{o(g=>({...g,[c]:i}))};return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsx(a,{size:"large",weight:"semibold",children:"Multiple Counter Inputs"}),e.jsx(a,{size:"medium",color:"surface.text.gray.muted",children:"Multiple counter inputs for payment and subscription management."}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(l,{label:"Product Quantity",...s,name:"quantity",value:n.quantity,onChange:t("quantity"),min:1,max:100}),e.jsx(l,{label:"API Licenses",...s,name:"licenses",value:n.licenses,onChange:t("licenses"),min:1,max:20}),e.jsx(l,{label:"Team Members",...s,name:"users",value:n.users,onChange:t("users"),min:1,max:50})]}),e.jsxs(r,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",borderRadius:"medium",children:[e.jsx(a,{size:"small",weight:"medium",children:"Subscription Details:"}),e.jsxs(a,{size:"small",color:"surface.text.gray.subtle",children:["Quantity: ",n.quantity,", Licenses: ",n.licenses,", Team Members:"," ",n.users]})]})]})},D=({...s})=>{const[n,o]=u.useState(1),t=oe(),c=({value:i})=>{o(i),i>5?t.show({content:`Quantity ${i} exceeds limit of 5!`,color:"negative",autoDismiss:!0,duration:3e3}):i>=3&&t.show({content:`Bulk discount applied for ${i} items!`,color:"positive",autoDismiss:!0,duration:3e3})};return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(ie,{}),e.jsx(a,{size:"large",weight:"semibold",children:"Validation with Toast Notifications"}),e.jsx(l,{label:"Order Quantity",...s,value:n,onChange:c,min:1,max:10}),e.jsxs(r,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",borderRadius:"medium",children:[e.jsx(a,{size:"small",weight:"medium",children:"Validation Rules (Small Thresholds):"}),e.jsx(a,{size:"small",color:"surface.text.gray.subtle",children:"• 1-2 items: No toast"}),e.jsx(a,{size:"small",color:"surface.text.gray.subtle",children:'• 3-5 items: Success toast - "Bulk discount applied"'}),e.jsx(a,{size:"small",color:"surface.text.gray.subtle",children:'• 6+ items: Error toast - "Exceeds limit of 5"'})]})]})};var z,j,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(5 as number);
  return <BaseBox display="flex" flexDirection="column" gap="spacing.4">
      <Text size="large" weight="semibold">
        Basic Usage
      </Text>
      <Text size="medium" color="surface.text.gray.muted">
        Simple counter input with label, value, and onChange handler.
      </Text>
      <CounterInputComponent label="Basic Counter" {...args} value={value} onChange={({
      value: newValue
    }) => {
      console.log('newValue', newValue);
      setValue(newValue);
    }} />
      <Text size="small" color="surface.text.gray.subtle">
        Current value: {value}
      </Text>
    </BaseBox>;
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var L,I,M;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`({
  ...args
}) => {
  const [xsmallValue, setXsmallValue] = useState(1);
  const [smallValue, setSmallValue] = useState(2);
  const [mediumValue, setMediumValue] = useState(2);
  const [largeValue, setLargeValue] = useState(3);
  const [xsmallThreeDigitValue, setXsmallThreeDigitValue] = useState(100);
  const [smallThreeDigitValue, setSmallThreeDigitValue] = useState(100);
  const [mediumThreeDigitValue, setMediumThreeDigitValue] = useState(100);
  const [largeThreeDigitValue, setLargeThreeDigitValue] = useState(100);
  return <BaseBox display="flex" flexDirection="column" gap="spacing.6">
      <Text size="large" weight="semibold">
        Size Variants
      </Text>

      <BaseBox display="flex" flexDirection="column" gap="spacing.3">
        <Text size="medium" weight="medium">
          Single Digit Values
        </Text>
        <CounterInputComponent {...args} label="XSmall Counter" size="xsmall" value={xsmallValue} onChange={({
        value
      }) => setXsmallValue(value)} min={0} />
        <CounterInputComponent label="Small Counter" size="small" value={smallValue} onChange={({
        value
      }) => setSmallValue(value)} min={0} />
        <CounterInputComponent label="Medium Counter (Default)" size="medium" value={mediumValue} onChange={({
        value
      }) => setMediumValue(value)} min={0} />
        <CounterInputComponent label="Large Counter" size="large" value={largeValue} onChange={({
        value
      }) => setLargeValue(value)} min={0} />
      </BaseBox>

      <BaseBox display="flex" flexDirection="column" gap="spacing.3">
        <Text size="medium" weight="medium">
          Three Digit Values
        </Text>
        <CounterInputComponent label="XSmall Counter" size="xsmall" value={xsmallThreeDigitValue} onChange={({
        value
      }) => setXsmallThreeDigitValue(value)} min={0} max={999} />
        <CounterInputComponent label="Small Counter" size="small" value={smallThreeDigitValue} onChange={({
        value
      }) => setSmallThreeDigitValue(value)} min={0} max={999} />
        <CounterInputComponent label="Medium Counter" size="medium" value={mediumThreeDigitValue} onChange={({
        value
      }) => setMediumThreeDigitValue(value)} min={0} max={999} />
        <CounterInputComponent label="Large Counter" size="large" value={largeThreeDigitValue} onChange={({
        value
      }) => setLargeThreeDigitValue(value)} min={0} max={999} />
      </BaseBox>
    </BaseBox>;
}`,...(M=(I=h.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var P,Q,E;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`({
  ...args
}) => {
  const [subtleValue, setSubtleValue] = useState(5);
  const [intenseValue, setIntenseValue] = useState(5);
  return <BaseBox display="flex" flexDirection="column" gap="spacing.6">
      <Text size="large" weight="semibold">
        Emphasis Variants
      </Text>

      <BaseBox display="flex" flexDirection="column" gap="spacing.3">
        <Text size="medium" weight="medium">
          Subtle Emphasis (Default)
        </Text>
        <Text size="small" color="surface.text.gray.muted">
          Gray icons and borders, no progress bar color
        </Text>
        <CounterInputComponent label="Subtle Counter" {...args} emphasis="subtle" value={subtleValue} onChange={({
        value
      }) => setSubtleValue(value)} min={0} max={10} />
      </BaseBox>

      <BaseBox display="flex" flexDirection="column" gap="spacing.3">
        <Text size="medium" weight="medium">
          Intense Emphasis
        </Text>
        <Text size="small" color="surface.text.gray.muted">
          Primary colored icons and borders, blue progress bar
        </Text>
        <CounterInputComponent label="Intense Counter" emphasis="intense" value={intenseValue} onChange={({
        value
      }) => setIntenseValue(value)} min={0} max={10} />
      </BaseBox>
    </BaseBox>;
}`,...(E=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:E.source}}};var k,q,U;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(5);
  return <BaseBox display="flex" flexDirection="column" gap="spacing.4">
      <Text size="large" weight="semibold">
        Min/Max Constraints
      </Text>
      <Text size="medium" color="surface.text.gray.muted">
        Counter with minimum value of 1 and maximum value of 10. Buttons disable at limits.
      </Text>
      <CounterInputComponent label="Constrained Counter" {...args} value={value} onChange={({
      value: newValue
    }) => setValue(newValue)} min={1} max={10} />
      <Text size="small" color="surface.text.gray.subtle">
        Current: {value} | Min: 1 | Max: 10
      </Text>
    </BaseBox>;
}`,...(U=(q=C.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var R,F,X;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`({
  ...args
}) => {
  return <BaseBox display="flex" flexDirection="column" gap="spacing.4">
      <Text size="large" weight="semibold">
        Uncontrolled Component
      </Text>
      <Text size="medium" color="surface.text.gray.muted">
        Counter with defaultValue, manages its own state internally.
      </Text>
      <CounterInputComponent label="Uncontrolled Counter" {...args} defaultValue={3} min={0} max={20} onChange={({
      value
    }) => console.log('Uncontrolled value changed:', value)} />
    </BaseBox>;
}`,...(X=(F=b.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var A,G,N;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`({
  ...args
}) => {
  const [counters, setCounters] = useState({
    cartQuantity: {
      value: 5,
      isLoading: false
    },
    subscriptionSeats: {
      value: 3,
      isLoading: false
    }
  });
  const handleChange = (key: keyof typeof counters, loadingDuration: number) => ({
    value: newValue
  }: {
    value: number;
  }): void => {
    setCounters(prev => ({
      ...prev,
      [key]: {
        value: newValue,
        isLoading: true
      }
    }));

    // Simulate async operation
    setTimeout(() => {
      setCounters(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          isLoading: false
        }
      }));
    }, loadingDuration);
  };
  return <BaseBox display="flex" flexDirection="column" gap="spacing.4">
      <Text size="large" weight="semibold">
        Loading State
      </Text>
      <Text size="medium" color="surface.text.gray.muted">
        Shows loading indicator and disables interactions during async operations.
      </Text>
      <CounterInputComponent label="Cart Quantity (2.5s loading)" {...args} value={counters.cartQuantity.value} onChange={handleChange('cartQuantity', 2500)} isLoading={counters.cartQuantity.isLoading} emphasis="intense" min={0} max={10} />
      <CounterInputComponent label="Subscription Seats (1s loading)" {...args} value={counters.subscriptionSeats.value} onChange={handleChange('subscriptionSeats', 1000)} isLoading={counters.subscriptionSeats.isLoading} emphasis="subtle" min={1} max={20} />
    </BaseBox>;
}`,...(N=(G=y.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var $,W,O;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleControlledChange = async ({
    value: newValue
  }: {
    value: number;
  }): Promise<void> => {
    setIsLoading(true);
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve(true);
          } else {
            reject(new Error('API call failed'));
          }
        }, 1500);
      });
      setValue(newValue);
      toast.show({
        content: \`Successfully changed value to \${newValue}\`,
        color: 'positive'
      });
    } catch (error) {
      toast.show({
        content: \`Failed to change value. Please try again.\`,
        color: 'negative'
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <BaseBox display="flex" flexDirection="column" gap="spacing.4">
      <Text size="large" weight="semibold">
        Controlled Loading Example
      </Text>
      <Text size="medium" color="surface.text.gray.muted">
        User has full control over when the value changes and loading state. Value only updates
        after successful async operation.
      </Text>
      <CounterInputComponent label="API-Controlled Counter" {...args} value={value} onChange={handleControlledChange} isLoading={isLoading} min={1} max={10} emphasis="intense" />
      <BaseBox display="flex" flexDirection="column" gap="spacing.2">
        <Text size="small" color="surface.text.gray.subtle">
          Current value: {value}
        </Text>
        <Text size="small" color="surface.text.gray.subtle">
          Status: {isLoading ? 'Loading...' : 'Ready'}
        </Text>
        <Text size="small" color="surface.text.gray.muted">
          • Loading starts immediately when button is clicked • Value only changes after successful
          API response • Random 50% failure rate to demonstrate error handling
        </Text>
      </BaseBox>
      <ToastContainer />
    </BaseBox>;
}`,...(O=(W=v.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var _,J,Y;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(5);
  return <BaseBox display="flex" flexDirection="column" gap="spacing.4">
      <Text size="large" weight="semibold">
        Disabled State
      </Text>
      <Text size="medium" color="surface.text.gray.muted">
        Counter input in disabled state - no interactions allowed.
      </Text>
      <CounterInputComponent label="Disabled Counter" {...args} value={value} onChange={({
      value: newValue
    }) => setValue(newValue)} isDisabled={true} />
      <CounterInputComponent label="Disabled Counter" {...args} emphasis="subtle" value={value} onChange={({
      value: newValue
    }) => setValue(newValue)} isDisabled={true} />
    </BaseBox>;
}`,...(Y=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,H,K;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  ...args
}) => {
  const [topValue, setTopValue] = useState(1);
  const [leftValue, setLeftValue] = useState(2);
  return <BaseBox display="flex" flexDirection="column" gap="spacing.6">
      <Text size="large" weight="semibold">
        Label Positioning
      </Text>

      <BaseBox display="flex" flexDirection="column" gap="spacing.3">
        <Text size="medium" weight="medium">
          Top Position (Default)
        </Text>
        <CounterInputComponent label="Top Label" {...args} labelPosition="top" value={topValue} onChange={({
        value
      }) => setTopValue(value)} min={0} max={10} />
      </BaseBox>

      <BaseBox display="flex" flexDirection="column" gap="spacing.3">
        <Text size="medium" weight="medium">
          Left Position
        </Text>

        <CounterInputComponent label="Left Label" {...args} labelPosition="left" value={leftValue} onChange={({
        value
      }) => setLeftValue(value)} min={0} max={10} />
      </BaseBox>
    </BaseBox>;
}`,...(K=(H=V.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var ee,ae,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`({
  ...args
}) => {
  const [formData, setFormData] = useState({
    quantity: 2,
    licenses: 1,
    users: 5
  });
  const handleFieldChange = (field: keyof typeof formData) => ({
    value
  }: {
    value: number;
  }) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <BaseBox display="flex" flexDirection="column" gap="spacing.6">
      <Text size="large" weight="semibold">
        Multiple Counter Inputs
      </Text>
      <Text size="medium" color="surface.text.gray.muted">
        Multiple counter inputs for payment and subscription management.
      </Text>

      <BaseBox display="flex" flexDirection="column" gap="spacing.4">
        <CounterInputComponent label="Product Quantity" {...args} name="quantity" value={formData.quantity} onChange={handleFieldChange('quantity')} min={1} max={100} />

        <CounterInputComponent label="API Licenses" {...args} name="licenses" value={formData.licenses} onChange={handleFieldChange('licenses')} min={1} max={20} />

        <CounterInputComponent label="Team Members" {...args} name="users" value={formData.users} onChange={handleFieldChange('users')} min={1} max={50} />
      </BaseBox>

      <BaseBox padding="spacing.4" backgroundColor="surface.background.gray.intense" borderRadius="medium">
        <Text size="small" weight="medium">
          Subscription Details:
        </Text>
        <Text size="small" color="surface.text.gray.subtle">
          Quantity: {formData.quantity}, Licenses: {formData.licenses}, Team Members:{' '}
          {formData.users}
        </Text>
      </BaseBox>
    </BaseBox>;
}`,...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,le;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`({
  ...args
}) => {
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();
  const handleChange = ({
    value
  }: {
    value: number;
  }): void => {
    setQuantity(value);

    // Simple validation logic with small thresholds
    if (value > 5) {
      toast.show({
        content: \`Quantity \${value} exceeds limit of 5!\`,
        color: 'negative',
        autoDismiss: true,
        duration: 3000
      });
    } else if (value >= 3) {
      toast.show({
        content: \`Bulk discount applied for \${value} items!\`,
        color: 'positive',
        autoDismiss: true,
        duration: 3000
      });
    }
  };
  return <BaseBox display="flex" flexDirection="column" gap="spacing.4">
      <ToastContainer />

      <Text size="large" weight="semibold">
        Validation with Toast Notifications
      </Text>

      <CounterInputComponent label="Order Quantity" {...args} value={quantity} onChange={handleChange} min={1} max={10} />

      <BaseBox padding="spacing.4" backgroundColor="surface.background.gray.intense" borderRadius="medium">
        <Text size="small" weight="medium">
          Validation Rules (Small Thresholds):
        </Text>
        <Text size="small" color="surface.text.gray.subtle">
          • 1-2 items: No toast
        </Text>
        <Text size="small" color="surface.text.gray.subtle">
          • 3-5 items: Success toast - "Bulk discount applied"
        </Text>
        <Text size="small" color="surface.text.gray.subtle">
          • 6+ items: Error toast - "Exceeds limit of 5"
        </Text>
      </BaseBox>
    </BaseBox>;
}`,...(le=(se=D.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const Le=["BasicUsage","SizeVariants","EmphasisVariants","MinMaxConstraints","UncontrolledComponent","LoadingState","ControlledLoading","DisabledState","LabelPositioning","MultipleCounterInputs","WithToastValidation"];export{p as BasicUsage,v as ControlledLoading,T as DisabledState,f as EmphasisVariants,V as LabelPositioning,y as LoadingState,C as MinMaxConstraints,S as MultipleCounterInputs,h as SizeVariants,b as UncontrolledComponent,D as WithToastValidation,Le as __namedExportsOrder,we as default};
