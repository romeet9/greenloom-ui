import{j3 as a,r as g,j as e,B as o,T as u,C as r,n as w,l as A,y as M,z as W,ak as F,ad as x}from"./iframe-C1qQ09LF.js";import{S as fe}from"./StoryPageWrapper-CS0_5maI.js";import{S as Se}from"./Sandbox.web-B2xP21Qp.js";import{g as be}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const xe={BASE_PROPS:"TimePicker Props",INPUT_PROPS:"Input Props"},T={table:{category:xe.BASE_PROPS}},n={table:{category:xe.INPUT_PROPS}},De={title:"Components/TimePicker",component:a,tags:["autodocs"],argTypes:{...be(),value:T,defaultValue:T,onChange:T,onApply:T,timeFormat:T,minuteStep:T,isOpen:T,defaultIsOpen:T,onOpenChange:T,showFooterActions:T,accessibilityLabel:n,errorText:n,helpText:n,successText:n,isDisabled:n,isRequired:n,label:n,labelPosition:n,size:n,validationState:n,name:n,autoFocus:n,necessityIndicator:n,placeholder:n,labelSuffix:n,labelTrailing:n,testID:{table:{disable:!0}},ref:{table:{disable:!0}},inputRef:{table:{disable:!0}},referenceProps:{table:{disable:!0}},setControlledValue:{table:{disable:!0}},time:{table:{disable:!0}},timeValue:{table:{disable:!0}},onTimeValueChange:{table:{disable:!0}},onInputClick:{table:{disable:!0}},createCompleteTime:{table:{disable:!0}},onFocus:n,onBlur:n},parameters:{docs:{page:()=>e.jsx(fe,{componentDescription:"The TimePicker component is used to select a specific time with support for both 12-hour and 24-hour formats, configurable minute steps, and responsive layouts.",componentName:"TimePicker",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/TimePicker/_decisions/decisions.md",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=110199-7268&p=f&t=Vkpr2l6vN8DJ0Bnw-0",children:e.jsx(Se,{editorHeight:600,children:`
              import { TimePicker } from '@greenloom/ui/components';

              function App() {
                const [time, setTime] = useState(null);
                
                return (
                  <TimePicker 
                    label="Select Time"
                    value={time}
                    onChange={({ value }) => setTime(value)}
                  />
                )
              }

              export default App;
            `})})}}},f=()=>{const[t,l]=g.useState(null);return e.jsx(a,{label:"Select a time",size:"medium",timeFormat:"12h",value:t,onChange:({value:i})=>{l(i),console.log("Selected time:",i)},showFooterActions:!1})};f.storyName="Basic";const S=()=>{const[t,l]=g.useState(null);return e.jsx(a,{label:"Select a time",size:"medium",timeFormat:"24h",value:t,onChange:({value:i})=>{l(i),console.log("Selected time:",i)},onApply:({value:i})=>{console.log("Time applied:",i)}})};S.storyName="Twenty-Four Hour";const b=()=>{const[t,l]=g.useState(new Date("2024-01-01T14:30:00"));return e.jsx(a,{label:"Select a time",size:"medium",timeFormat:"24h",isDisabled:!0,value:t,onChange:({value:i})=>{l(i),console.log("Selected time:",i)}})};b.storyName="Disabled";const v=()=>{const[t,l]=g.useState(!1),[i,p]=g.useState(new Date);return e.jsxs(o,{children:[e.jsxs(u,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"isOpen"}),", ",e.jsx(r,{size:"medium",children:"value"})," and associated event handlers you can control the TimePicker."]}),e.jsxs(o,{marginBottom:"spacing.5",children:[e.jsxs(u,{children:["Selected: ",i?i.toLocaleTimeString():"None"]}),e.jsxs(u,{marginTop:"spacing.2",children:["IsOpen: ",JSON.stringify(t)]})]}),e.jsx(a,{label:"Select Meeting Time",isOpen:t,onOpenChange:({isOpen:s})=>l(s),value:i,onChange:({value:s})=>{p(s),console.log("Time changed:",s)}}),e.jsx(w,{onClick:()=>{const s=new Date;s.setHours(Math.floor(Math.random()*12)+1),s.setMinutes(Math.floor(Math.random()*60)),p(s)},marginTop:"spacing.5",children:"Set Random Time"})]})};v.storyName="Controlled TimePicker";const C=()=>e.jsx(a,{label:"Meeting Time",defaultValue:new Date("2024-01-01T14:30:00"),onChange:({value:t})=>{console.log("Time changed:",t)}});C.storyName="Uncontrolled TimePicker";const B=()=>{const[t,l]=g.useState(null),[i,p]=g.useState(null),[s,h]=g.useState(!1),m=d=>{if(!d){h(!0);return}const c=d.getHours();c<9||c>=18?h(!0):h(!1)};return e.jsxs(o,{children:[e.jsxs(u,{marginBottom:"spacing.5",children:["TimePicker supports all common Input props like ",e.jsx(r,{size:"medium",children:"validationState"}),","," ",e.jsx(r,{size:"medium",children:"isRequired"}),", ",e.jsx(r,{size:"medium",children:"errorText"}),","," ",e.jsx(r,{size:"medium",children:"successText"}),", etc."]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(a,{validationState:s?"error":t?"success":"none",errorText:s?"Please select a time during business hours (9 AM - 6 PM)":void 0,successText:!s&&t?"Valid business hours selected":void 0,label:"Business Hours Meeting Time",value:t,onChange:({value:d})=>{l(d),m(d)}}),e.jsx(a,{label:"Appointment Time",helpText:"Select your preferred appointment time. We recommend scheduling during business hours.",value:i,onChange:({value:d})=>{p(d)}})]})]})};B.storyName="Validation States";const j=()=>{const[t,l]=g.useState(null),[i,p]=g.useState(null);return e.jsxs(o,{children:[e.jsxs(u,{marginBottom:"spacing.5",children:["TimePicker supports different size variants: ",e.jsx(r,{size:"medium",children:"medium"})," and"," ",e.jsx(r,{size:"medium",children:"large"}),"."]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",maxWidth:"400px",children:[e.jsx(a,{label:"Medium Size (Default)",size:"medium",value:t,onChange:({value:s})=>l(s),helpText:"This is the default medium size"}),e.jsx(a,{label:"Large Size",size:"large",value:i,onChange:({value:s})=>p(s),helpText:"This is the large size variant"})]})]})};j.storyName="Size Variants";const k=()=>e.jsxs(o,{children:[e.jsxs(u,{marginBottom:"spacing.5",children:["The ",e.jsx(r,{size:"medium",children:"labelPosition"})," prop controls where the label appears. You can also add ",e.jsx(r,{size:"medium",children:"labelSuffix"})," and ",e.jsx(r,{size:"medium",children:"labelTrailing"})," ","for additional content."]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(a,{label:"Meeting Time",labelPosition:"top",labelSuffix:e.jsx(M,{content:"Select your preferred meeting time",placement:"right",children:e.jsx(W,{display:"flex",children:e.jsx(F,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(A,{size:"small",children:"Time zone settings"})}),e.jsx(a,{label:"Start Time",labelPosition:"left",labelSuffix:e.jsx(M,{content:"Event start time",placement:"right",children:e.jsx(W,{display:"flex",children:e.jsx(F,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(A,{size:"small",children:"Learn more"})})]})]});k.storyName="Label Positions & Accessories";const P=()=>{const[t,l]=x.useState(null),[i,p]=x.useState(null),[s,h]=x.useState(null),[m,d]=x.useState(null);return e.jsxs(o,{children:[e.jsxs(u,{marginBottom:"spacing.5",children:["The ",e.jsx(r,{size:"medium",children:"minuteStep"})," prop controls the minute intervals available for selection. Supported values are ",e.jsx(r,{size:"medium",children:"1"}),", ",e.jsx(r,{size:"medium",children:"5"}),","," ",e.jsx(r,{size:"medium",children:"15"}),", and ",e.jsx(r,{size:"medium",children:"30"}),"."]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",maxWidth:"400px",children:[e.jsx(a,{label:"1-minute intervals (Default)",minuteStep:1,helpText:"All minutes available",value:t,onChange:({value:c})=>l(c)}),e.jsx(a,{label:"5-minute intervals",minuteStep:5,helpText:"00, 05, 10, 15, 20, etc.",value:i,onChange:({value:c})=>p(c)}),e.jsx(a,{label:"15-minute intervals",minuteStep:15,helpText:"00, 15, 30, 45",value:s,onChange:({value:c})=>h(c)}),e.jsx(a,{label:"30-minute intervals",minuteStep:30,helpText:"00, 30",value:m,onChange:({value:c})=>d(c)})]})]})};P.storyName="Minute Step Intervals";const y=()=>{const[t,l]=g.useState(null),[i,p]=g.useState(null);return e.jsxs(o,{children:[e.jsxs(u,{marginBottom:"spacing.5",children:["The ",e.jsx(r,{size:"medium",children:"showFooterActions"})," prop controls whether Apply/Cancel buttons are shown. When ",e.jsx(r,{size:"medium",children:"false"}),", time selection is applied immediately on blur."]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.6",maxWidth:"400px",children:[e.jsxs(o,{children:[e.jsx(a,{label:"With Footer Actions (Default)",showFooterActions:!0,value:t,onChange:({value:s})=>{l(s),console.log("Time changed (not applied yet):",s)},onApply:({value:s})=>{console.log("Time applied:",s)}}),e.jsxs(u,{size:"small",color:"surface.text.gray.muted",marginTop:"spacing.2",children:["Selected: ",t?t.toLocaleTimeString():"None"]})]}),e.jsxs(o,{children:[e.jsx(a,{label:"Without Footer Actions",showFooterActions:!1,value:i,onChange:({value:s})=>{p(s),console.log("Time applied immediately:",s)}}),e.jsxs(u,{size:"small",color:"surface.text.gray.muted",marginTop:"spacing.2",children:["Applied immediately:"," ",i?i.toLocaleTimeString():"None"]})]})]})]})};y.storyName="Footer Actions";const z=()=>{const[t,l]=x.useState(()=>{const m=new Date;return m.setHours(9,0,0,0),m}),[i,p]=x.useState(()=>{const m=new Date;return m.setHours(11,0,0,0),m}),s=x.useMemo(()=>{if(!t||!i)return null;const m=i.getTime()-t.getTime(),d=Math.floor(m/(1e3*60*60)),c=Math.floor(m%(1e3*60*60)/(1e3*60));return m<0?"End time must be after start time":d===0&&c===0?"0 minutes":d===0?`${c} minutes`:c===0?`${d} hours`:`${d} hours ${c} minutes`},[t,i]),h=t&&i&&i.getTime()>t.getTime();return e.jsxs(o,{children:[e.jsx(u,{marginBottom:"spacing.5",children:"Use multiple TimePicker components to create time range selections for scheduling, appointments, or work shifts."}),e.jsxs(o,{display:"flex",flexDirection:"row",gap:"spacing.5",maxWidth:"400px",children:[e.jsx(a,{label:"Start Time",value:t,onChange:({value:m})=>l(m),helpText:"Select the beginning time",timeFormat:"12h"}),e.jsx(a,{label:"End Time",value:i,onChange:({value:m})=>p(m),helpText:"Select the ending time",timeFormat:"12h",errorText:s==="End time must be after start time"?s:void 0,validationState:s==="End time must be after start time"?"error":void 0})]}),e.jsxs(o,{padding:"spacing.4",backgroundColor:h?"feedback.background.positive.subtle":"surface.background.gray.moderate",borderRadius:"medium",width:"30%",margin:["spacing.5","spacing.0"],children:[e.jsx(u,{weight:"semibold",size:"small",children:"Time Range Summary:"}),e.jsxs(u,{size:"small",marginTop:"spacing.2",children:["Start: ",t?t.toLocaleTimeString():"Not selected"]}),e.jsxs(u,{size:"small",children:["End: ",i?i.toLocaleTimeString():"Not selected"]}),e.jsxs(u,{size:"small",weight:"semibold",marginTop:"spacing.2",children:["Duration: ",s??"Select both times"]})]})]})};z.storyName="Time Range Selection";const D=()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.7",backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",minHeight:"100vh",children:[e.jsx(o,{maxWidth:"320px",children:e.jsx(a,{label:"Select Time",defaultValue:new Date,onChange:({value:t})=>console.log(t)})}),e.jsx(o,{maxWidth:"320px",children:e.jsx(a,{label:"Select Time (24h)",timeFormat:"24h",defaultValue:new Date,onChange:({value:t})=>console.log(t)})}),e.jsxs(w,{onClick:()=>{console.log("Change Time")},marginTop:"spacing.5",children:[" ","Change Time"]}),e.jsxs(w,{onClick:()=>{console.log("Change Time")},marginTop:"spacing.5",color:"positive",children:[" ","Change Time"]}),e.jsxs(w,{onClick:()=>{console.log("Change Time")},marginTop:"spacing.5",color:"negative",children:[" ","Change Time"]})]});D.storyName="With Cards (Backdrop Showcase)";var E,L,R;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [time, setTime] = useState<Date | null>(null);
  return <TimePicker label="Select a time" size="medium" timeFormat="12h" value={time} onChange={({
    value
  }) => {
    setTime(value);
    console.log('Selected time:', value);
  }} showFooterActions={false} />;
}`,...(R=(L=f.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var H,N,O;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [time, setTime] = useState<Date | null>(null);
  return <TimePicker label="Select a time" size="medium" timeFormat="24h" value={time} onChange={({
    value
  }) => {
    setTime(value);
    console.log('Selected time:', value);
  }} onApply={({
    value
  }) => {
    console.log('Time applied:', value);
  }} />;
}`,...(O=(N=S.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var I,V,U;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [time, setTime] = useState<Date | null>(new Date('2024-01-01T14:30:00'));
  return <TimePicker label="Select a time" size="medium" timeFormat="24h" isDisabled={true} value={time} onChange={({
    value
  }) => {
    setTime(value);
    console.log('Selected time:', value);
  }} />;
}`,...(U=(V=b.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var _,$,q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<Date | null>(new Date());
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">isOpen</Code>, <Code size="medium">value</Code> and associated
        event handlers you can control the TimePicker.
      </Text>
      <Box marginBottom="spacing.5">
        <Text>Selected: {time ? time.toLocaleTimeString() : 'None'}</Text>
        <Text marginTop="spacing.2">IsOpen: {JSON.stringify(isOpen)}</Text>
      </Box>
      <TimePicker label="Select Meeting Time" isOpen={isOpen} onOpenChange={({
      isOpen
    }) => setIsOpen(isOpen)} value={time} onChange={({
      value
    }) => {
      setTime(value);
      console.log('Time changed:', value);
    }} />
      <Button onClick={() => {
      const newTime = new Date();
      newTime.setHours(Math.floor(Math.random() * 12) + 1);
      newTime.setMinutes(Math.floor(Math.random() * 60));
      setTime(newTime);
    }} marginTop="spacing.5">
        Set Random Time
      </Button>
    </Box>;
}`,...(q=($=v.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var J,Y,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <TimePicker label="Meeting Time" defaultValue={new Date('2024-01-01T14:30:00')} onChange={({
    value
  }) => {
    console.log('Time changed:', value);
  }} />;
}`,...(Q=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var Z,G,K;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  // Separate state for each TimePicker to avoid conflicts
  const [businessTime, setBusinessTime] = useState<Date | null>(null);
  const [appointmentTime, setAppointmentTime] = useState<Date | null>(null);
  const [hasBusinessError, setHasBusinessError] = useState(false);
  const validateBusinessTime = (selectedTime: Date | null): void => {
    if (!selectedTime) {
      setHasBusinessError(true);
      return;
    }
    const hour = selectedTime.getHours();
    // Business hours validation: 9 AM to 6 PM
    if (hour < 9 || hour >= 18) {
      setHasBusinessError(true);
    } else {
      setHasBusinessError(false);
    }
  };
  return <Box>
      <Text marginBottom="spacing.5">
        TimePicker supports all common Input props like <Code size="medium">validationState</Code>,{' '}
        <Code size="medium">isRequired</Code>, <Code size="medium">errorText</Code>,{' '}
        <Code size="medium">successText</Code>, etc.
      </Text>

      <Box display="flex" flexDirection="column" gap="spacing.5">
        {/* Error state with business hours validation */}
        <TimePicker validationState={hasBusinessError ? 'error' : businessTime ? 'success' : 'none'} errorText={hasBusinessError ? 'Please select a time during business hours (9 AM - 6 PM)' : undefined} successText={!hasBusinessError && businessTime ? 'Valid business hours selected' : undefined} label="Business Hours Meeting Time" value={businessTime} onChange={({
        value
      }) => {
        setBusinessTime(value);
        validateBusinessTime(value);
      }} />

        {/* Help text with separate state */}
        <TimePicker label="Appointment Time" helpText="Select your preferred appointment time. We recommend scheduling during business hours." value={appointmentTime} onChange={({
        value
      }) => {
        setAppointmentTime(value);
      }} />
      </Box>
    </Box>;
}`,...(K=(G=B.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,ee,te;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [mediumTime, setMediumTime] = useState<Date | null>(null);
  const [largeTime, setLargeTime] = useState<Date | null>(null);
  return <Box>
      <Text marginBottom="spacing.5">
        TimePicker supports different size variants: <Code size="medium">medium</Code> and{' '}
        <Code size="medium">large</Code>.
      </Text>

      <Box display="flex" flexDirection="column" gap="spacing.5" maxWidth="400px">
        <TimePicker label="Medium Size (Default)" size="medium" value={mediumTime} onChange={({
        value
      }) => setMediumTime(value)} helpText="This is the default medium size" />

        <TimePicker label="Large Size" size="large" value={largeTime} onChange={({
        value
      }) => setLargeTime(value)} helpText="This is the large size variant" />
      </Box>
    </Box>;
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,se,ae;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Box>
      <Text marginBottom="spacing.5">
        The <Code size="medium">labelPosition</Code> prop controls where the label appears. You can
        also add <Code size="medium">labelSuffix</Code> and <Code size="medium">labelTrailing</Code>{' '}
        for additional content.
      </Text>

      <Box display="flex" flexDirection="column" gap="spacing.5">
        {/* Default top position */}
        <TimePicker label="Meeting Time" labelPosition="top" labelSuffix={<Tooltip content="Select your preferred meeting time" placement="right">
              <TooltipInteractiveWrapper display="flex">
                <InfoIcon size="small" color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>} labelTrailing={<Link size="small">Time zone settings</Link>} />

        {/* Left position */}
        <TimePicker label="Start Time" labelPosition="left" labelSuffix={<Tooltip content="Event start time" placement="right">
              <TooltipInteractiveWrapper display="flex">
                <InfoIcon size="small" color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} />
      </Box>
    </Box>;
}`,...(ae=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,ne,re;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [time1, setTime1] = React.useState<Date | null>(null);
  const [time2, setTime2] = React.useState<Date | null>(null);
  const [time3, setTime3] = React.useState<Date | null>(null);
  const [time4, setTime4] = React.useState<Date | null>(null);
  return <Box>
      <Text marginBottom="spacing.5">
        The <Code size="medium">minuteStep</Code> prop controls the minute intervals available for
        selection. Supported values are <Code size="medium">1</Code>, <Code size="medium">5</Code>,{' '}
        <Code size="medium">15</Code>, and <Code size="medium">30</Code>.
      </Text>

      <Box display="flex" flexDirection="column" gap="spacing.5" maxWidth="400px">
        <TimePicker label="1-minute intervals (Default)" minuteStep={1} helpText="All minutes available" value={time1} onChange={({
        value
      }) => setTime1(value)} />

        <TimePicker label="5-minute intervals" minuteStep={5} helpText="00, 05, 10, 15, 20, etc." value={time2} onChange={({
        value
      }) => setTime2(value)} />

        <TimePicker label="15-minute intervals" minuteStep={15} helpText="00, 15, 30, 45" value={time3} onChange={({
        value
      }) => setTime3(value)} />

        <TimePicker label="30-minute intervals" minuteStep={30} helpText="00, 30" value={time4} onChange={({
        value
      }) => setTime4(value)} />
      </Box>
    </Box>;
}`,...(re=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,me,ce;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [timeWithActions, setTimeWithActions] = useState<Date | null>(null);
  const [timeWithoutActions, setTimeWithoutActions] = useState<Date | null>(null);
  return <Box>
      <Text marginBottom="spacing.5">
        The <Code size="medium">showFooterActions</Code> prop controls whether Apply/Cancel buttons
        are shown. When <Code size="medium">false</Code>, time selection is applied immediately on
        blur.
      </Text>

      <Box display="flex" flexDirection="column" gap="spacing.6" maxWidth="400px">
        <Box>
          <TimePicker label="With Footer Actions (Default)" showFooterActions={true} value={timeWithActions} onChange={({
          value
        }) => {
          setTimeWithActions(value);
          console.log('Time changed (not applied yet):', value);
        }} onApply={({
          value
        }) => {
          console.log('Time applied:', value);
        }} />
          <Text size="small" color="surface.text.gray.muted" marginTop="spacing.2">
            Selected: {timeWithActions ? timeWithActions.toLocaleTimeString() : 'None'}
          </Text>
        </Box>

        <Box>
          <TimePicker label="Without Footer Actions" showFooterActions={false} value={timeWithoutActions} onChange={({
          value
        }) => {
          setTimeWithoutActions(value);
          console.log('Time applied immediately:', value);
        }} />
          <Text size="small" color="surface.text.gray.muted" marginTop="spacing.2">
            Applied immediately:{' '}
            {timeWithoutActions ? timeWithoutActions.toLocaleTimeString() : 'None'}
          </Text>
        </Box>
      </Box>
    </Box>;
}`,...(ce=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ue,de,pe;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [startTime, setStartTime] = React.useState<Date | null>(() => {
    const now = new Date();
    now.setHours(9, 0, 0, 0); // 9:00 AM
    return now;
  });
  const [endTime, setEndTime] = React.useState<Date | null>(() => {
    const now = new Date();
    now.setHours(11, 0, 0, 0); // 11:00 AM
    return now;
  });

  // Calculate duration
  const duration = React.useMemo(() => {
    if (!startTime || !endTime) return null;
    const diffMs = endTime.getTime() - startTime.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs % (1000 * 60 * 60) / (1000 * 60));
    if (diffMs < 0) return 'End time must be after start time';
    if (diffHours === 0 && diffMinutes === 0) return '0 minutes';
    if (diffHours === 0) return \`\${diffMinutes} minutes\`;
    if (diffMinutes === 0) return \`\${diffHours} hours\`;
    return \`\${diffHours} hours \${diffMinutes} minutes\`;
  }, [startTime, endTime]);
  const isValidRange = startTime && endTime && endTime.getTime() > startTime.getTime();
  return <Box>
      <Text marginBottom="spacing.5">
        Use multiple TimePicker components to create time range selections for scheduling,
        appointments, or work shifts.
      </Text>

      <Box display="flex" flexDirection="row" gap="spacing.5" maxWidth="400px">
        <TimePicker label="Start Time" value={startTime} onChange={({
        value
      }) => setStartTime(value)} helpText="Select the beginning time" timeFormat="12h" />

        <TimePicker label="End Time" value={endTime} onChange={({
        value
      }) => setEndTime(value)} helpText="Select the ending time" timeFormat="12h" errorText={duration === 'End time must be after start time' ? duration : undefined} validationState={duration === 'End time must be after start time' ? 'error' : undefined} />
      </Box>
      {/* Duration Display */}
      <Box padding="spacing.4" backgroundColor={isValidRange ? 'feedback.background.positive.subtle' : 'surface.background.gray.moderate'} borderRadius="medium" width="30%" margin={['spacing.5', 'spacing.0']}>
        <Text weight="semibold" size="small">
          Time Range Summary:
        </Text>
        <Text size="small" marginTop="spacing.2">
          Start: {startTime ? startTime.toLocaleTimeString() : 'Not selected'}
        </Text>
        <Text size="small">End: {endTime ? endTime.toLocaleTimeString() : 'Not selected'}</Text>
        <Text size="small" weight="semibold" marginTop="spacing.2">
          Duration: {duration ?? 'Select both times'}
        </Text>
      </Box>
    </Box>;
}`,...(pe=(de=z.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,Te,he;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.7" backgroundColor="surface.background.gray.moderate" padding="spacing.8" minHeight="100vh">
      <Box maxWidth="320px">
        <TimePicker label="Select Time" defaultValue={new Date()} onChange={({
        value
      }) => console.log(value)} />
      </Box>
      <Box maxWidth="320px">
        <TimePicker label="Select Time (24h)" timeFormat="24h" defaultValue={new Date()} onChange={({
        value
      }) => console.log(value)} />
      </Box>

      <Button onClick={() => {
      console.log('Change Time');
    }} marginTop="spacing.5">
        {' '}
        Change Time
      </Button>
      <Button onClick={() => {
      console.log('Change Time');
    }} marginTop="spacing.5" color="positive">
        {' '}
        Change Time
      </Button>
      <Button onClick={() => {
      console.log('Change Time');
    }} marginTop="spacing.5" color="negative">
        {' '}
        Change Time
      </Button>
    </Box>;
}`,...(he=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};const we=["BasicTimePicker","TwentyFourHourTimePicker","DisabledTimePicker","ControlledTimePicker","UncontrolledTimePicker","Validations","SizeVariants","LabelPositions","MinuteSteps","FooterActions","RangeSelection","TimePickerWithCardsShowcase"];export{f as BasicTimePicker,v as ControlledTimePicker,b as DisabledTimePicker,y as FooterActions,k as LabelPositions,P as MinuteSteps,z as RangeSelection,j as SizeVariants,D as TimePickerWithCardsShowcase,S as TwentyFourHourTimePicker,C as UncontrolledTimePicker,B as Validations,we as __namedExportsOrder,De as default};
