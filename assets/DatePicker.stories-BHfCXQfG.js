import{j2 as m,ad as p,h$ as t,j as e,B as o,T as l,C as r,n as y,h_ as x,l as q,y as Z,z as Q,ak as G,aY as Fa,aZ as Na,a_ as Va,b0 as Ea,hR as K,X as La,j3 as $a}from"./iframe-C1qQ09LF.js";import{S as Ua}from"./StoryPageWrapper-CS0_5maI.js";import{S as _a}from"./Sandbox.web-B2xP21Qp.js";import{g as Ha}from"./storybookArgTypes-DFfQV31s.js";const Ra={BASE_PROPS:"DatePicker Props",INPUT_PROPS:"Input Props"},d={table:{category:Ra.BASE_PROPS}},h={table:{category:Ra.INPUT_PROPS}},Ja={title:"Components/DatePicker",component:m,tags:["autodocs"],argTypes:{...Ha(),value:d,isOpen:d,onChange:d,selectionType:d,presets:d,minDate:d,maxDate:d,excludeDate:d,picker:d,visibleMonth:d,defaultVisibleMonth:d,onVisibleMonthChange:d,onOpenChange:d,allowSingleDateInRange:d,defaultIsOpen:d,defaultPicker:d,defaultValue:d,firstDayOfWeek:d,onMonthSelect:d,onYearSelect:d,onNext:d,onNextDecade:d,onNextMonth:d,onNextYear:d,onPickerChange:d,onPrevious:d,onPreviousDecade:d,onPreviousMonth:d,onPreviousYear:d,locale:d,footer:d,accessibilityLabel:h,errorText:h,helpText:h,isDisabled:h,isRequired:h,label:h,labelPosition:h,size:h,successText:h,validationState:h,name:h,autoFocus:h,necessityIndicator:h,showClearButton:h,onClearButtonClick:h},parameters:{docs:{page:()=>e.jsxs(Ua,{componentDescription:"The DatePicker component is used to select a date or a range of dates.",componentName:"DatePicker",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/DatePicker/_decisions/decisions.md",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=88832-1762629&t=oSH8pSWjSoiOUnXo-0",children:[e.jsx(La,{children:"Usage"}),e.jsx(_a,{editorHeight:600,children:`
              import { DatePicker } from '@greenloom/ui/components';
import { m } from 'framer-motion';

              function App() {
                return (
                  <DatePicker 
                    label="Name"
                    onChange={(e) => console.log(e)}
                  />
                )
              }

              export default App;
            `})]})}}},A=({...a})=>{if(a.selectionType==="single"&&typeof a.label=="object")throw new Error("[Storybook Controls]: Cannot use {start,end} label for single selection, please switch to the SingleDatePicker story");return e.jsx(m,{onChange:i=>{console.log(i)},...a})},C=A.bind({});C.storyName="SingleDatePicker";C.args={label:"Select a date",selectionType:"single",size:"large"};const b=A.bind({});b.storyName="RangeDatePicker";b.args={label:{start:"Select a date range"},selectionType:"range"};const T=({...a})=>{const[i,c]=p.useState([t().subtract(7,"days").toDate(),t().toDate()]);return e.jsxs(o,{children:[e.jsxs(l,{children:["In Range DatePicker you can pass ",e.jsx(r,{size:"medium",children:"presets"})," which will render a quick selection panel inside DatePicker for easy to use range selections"]}),e.jsxs(l,{marginTop:"spacing.4",children:["presets accepts an array of objects with ",e.jsx(r,{children:"label"})," and"," ",e.jsx(r,{size:"medium",children:"value"})," properties."]}),e.jsxs(l,{marginTop:"spacing.2",marginBottom:"spacing.5",children:["Example:",e.jsx(r,{size:"medium",children:`
            [ { label: 'Past 7 days', value: (date) => [dayjs(date).subtract(7, 'days').toDate(), date]} ]
          `})]}),e.jsx(m,{label:{start:"Select a date range"},selectionType:"range",value:i,onChange:n=>{console.log(n),c(n)},presets:[{label:"Today",value:n=>[t(n).startOf("day").toDate(),n]},{label:"Yesterday",value:n=>[t(n).subtract(1,"day").startOf("day").toDate(),n]},{label:"Past 7 days",value:n=>[t(n).subtract(7,"days").toDate(),n]},{label:"Past 15 days",value:n=>[t(n).subtract(15,"days").toDate(),n]},{label:"Past month",value:n=>[t(n).subtract(1,"month").toDate(),n]},{label:"Past year",value:n=>[t(n).subtract(1,"year").toDate(),n]},{label:"Past financial year",value:n=>{const s=t(n),u=s.month()>=3?s.year():s.year()-1;return[t(`${u-1}-04-01`).toDate(),t(`${u}-03-31`).toDate()]}},{label:"Custom",value:()=>[null,null]}]})]})};T.storyName="With Presets";const P=({...a})=>{const[i,c]=p.useState([t().subtract(7,"days").toDate(),t().toDate()]);return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["When using ",e.jsx(r,{size:"medium",children:'displayFormat="compact"'})," with presets, the DatePicker displays a single input field showing the selected preset label or date range in a compact format."]}),e.jsx(m,{label:{start:"Select a date range"},selectionType:"range",allowSingleDateInRange:!0,value:i,onChange:n=>{console.log(n),c(n)},displayFormat:"compact",presets:[{label:"Today",value:n=>[t(n).startOf("day").toDate(),n]},{label:"Yesterday",value:n=>[t(n).subtract(1,"day").startOf("day").toDate(),n]},{label:"Past 7 days",value:n=>[t(n).subtract(7,"days").toDate(),n]},{label:"Past 15 days",value:n=>[t(n).subtract(15,"days").toDate(),n]},{label:"Past month",value:n=>[t(n).subtract(1,"month").toDate(),n]},{label:"Past year",value:n=>[t(n).subtract(1,"year").toDate(),n]},{label:"Past financial year",value:n=>{const s=t(n),u=s.month()>=3?s.year():s.year()-1;return[t(`${u-1}-04-01`).toDate(),t(`${u}-03-31`).toDate()]}},{label:"Custom",value:()=>[null,null]}]})]})};P.storyName="With Presets (displayFormat compact)";const k=()=>{const[a,i]=p.useState(!1),[c,n]=p.useState([t().subtract(3,"months").toDate(),t().add(3,"day").subtract(3,"months").toDate()]),[s,u]=p.useState(t().subtract(3,"months").toDate());return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"isOpen"}),", ",e.jsx(r,{size:"medium",children:"value"})," and associated event handlers you can control the DatePicker."]}),e.jsxs(o,{marginBottom:"spacing.5",children:[e.jsxs(l,{children:["Selected: [",t(c[0]).format("DD-MM-YYYY"),","," ",t(c[1]).format("DD-MM-YYYY"),"]"]}),e.jsxs(l,{marginTop:"spacing.2",children:["IsOpen: ",JSON.stringify(a)]})]}),e.jsx(m,{label:{start:"Select a date range"},selectionType:"range",isOpen:a,onOpenChange:({isOpen:g})=>i(g),value:c,onChange:g=>{n(g)}}),e.jsxs(o,{marginTop:"spacing.5",children:[e.jsx(l,{marginBottom:"spacing.5",children:"Single Date Picker"}),e.jsxs(l,{children:["Selected: ",t(s).format("DD-MM-YYYY")]}),e.jsx(m,{label:"Select a date",selectionType:"single",value:s,onChange:g=>{g&&u(g)}})]}),e.jsxs(y,{onClick:()=>{u(t().subtract(Math.round(Math.random()*10),"month").toDate())},marginTop:"spacing.5",children:[" ","Change Date"]})]})};k.storyName="Controlled DatePicker";const B=()=>{const[a,i]=p.useState([new Date,t().add(3,"day").toDate()]),[c,n]=p.useState(!1);return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["DatePicker supports all common Input props like ",e.jsx(r,{size:"medium",children:"validationState"}),","," ",e.jsx(r,{size:"medium",children:"isRequired"}),", ",e.jsx(r,{size:"medium",children:"isDisabled"})," etc."]}),e.jsx(m,{validationState:c?"error":"none",errorText:"Cannot select a range which is more than 3 days",label:{start:"Select a date range"},selectionType:"range",value:a,onChange:s=>{i(s),t(s[1]).diff(s[0],"day")>3?n(!0):n(!1)}})]})};B.storyName="Validations";const S=()=>e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"minDate"})," and ",e.jsx(r,{size:"medium",children:"maxDate"})," props you can set minimum and maximum dates that can be selected."]}),e.jsxs(o,{marginY:"spacing.4",display:"flex",gap:"spacing.2",flexDirection:"column",children:[e.jsx(l,{children:"Example: "}),e.jsx(l,{size:"small",children:"minDate={dayjs().subtract(1, 'week').toDate()}"}),e.jsx(l,{size:"small",children:"maxDate={dayjs().add(1, 'week').toDate()}"})]}),e.jsx(m,{label:{start:"Select a date range"},selectionType:"range",minDate:t().subtract(1,"week").toDate(),maxDate:t().add(1,"week").toDate()}),e.jsxs(o,{marginTop:"spacing.8",children:[e.jsx(l,{marginBottom:"spacing.3",children:"Single DatePicker with min/max:"}),e.jsx(m,{label:"Select a date",selectionType:"single",minDate:t().subtract(1,"month").toDate(),maxDate:t().add(1,"month").toDate()})]})]});S.storyName="MinMaxDates";const v=()=>{const a=t("2026-03-01").startOf("month").toDate(),i=t("2026-03-31").endOf("month").toDate();return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["When today's month falls outside the allowed ",e.jsx(r,{size:"medium",children:"minDate"})," /"," ",e.jsx(r,{size:"medium",children:"maxDate"})," range, the calendar no longer opens on a fully-disabled month. Instead it opens clamped to the range — here directly on"," ",e.jsx(r,{size:"medium",children:"March 2026"})," (the only selectable month)."]}),e.jsxs(o,{marginY:"spacing.4",display:"flex",gap:"spacing.2",flexDirection:"column",children:[e.jsx(l,{children:"Example (allowed range limited to March 2026): "}),e.jsx(l,{size:"small",children:"minDate={dayjs('2026-03-01').startOf('month').toDate()}"}),e.jsx(l,{size:"small",children:"maxDate={dayjs('2026-03-31').endOf('month').toDate()}"})]}),e.jsx(m,{label:"Select a date",selectionType:"single",minDate:a,maxDate:i}),e.jsxs(o,{marginTop:"spacing.8",children:[e.jsx(l,{marginBottom:"spacing.3",children:"Range DatePicker with the same March 2026 range:"}),e.jsx(m,{label:{start:"Select a date range"},selectionType:"range",minDate:a,maxDate:i})]})]})};v.storyName="Initial Month (Disabled Today)";const w=()=>e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"excludeDate"})," function you can exclude specific dates from being selected."]}),e.jsxs(o,{marginY:"spacing.4",display:"flex",gap:"spacing.2",flexDirection:"column",children:[e.jsx(l,{children:"Example, exclude weekends: "}),e.jsx(l,{size:"small",children:"excludeDate={(date) => dayjs(date).day() === 0 || dayjs(date).day() === 6}"})]}),e.jsx(m,{label:"Select Dates Without Weekends",selectionType:"single",excludeDate:a=>t(a).day()===0||t(a).day()===6})]});w.storyName="ExcludeDates";const z=()=>e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["The ",e.jsx(r,{size:"medium",children:"label"})," prop accepts a string or an object"," ",e.jsx(r,{size:"medium",children:"{start, end}"})," depending on the",e.jsx(r,{size:"medium",children:"selectionType"}),". When the"," ",e.jsx(r,{size:"medium",children:"labelPositionLeft"})," prop is set & selectionType is range, the label will be rendered on the left with the ",e.jsx(r,{size:"medium",children:"{start}"})," string."]}),e.jsxs(o,{display:"flex",gap:"spacing.5",flexDirection:"column",children:[e.jsx(m,{labelPosition:"left",selectionType:"range",label:{start:"Select a date range"}}),e.jsx(m,{selectionType:"single",labelPosition:"left",label:"Select a date"})]})]});z.storyName="LabelPositionLeft";const Y=({...a})=>e.jsxs(o,{children:[e.jsxs(l,{children:["By passing ",e.jsx(r,{size:"medium",children:"picker"})," prop as ",e.jsx(r,{size:"medium",children:"month"})," or"," ",e.jsx(r,{size:"medium",children:"year"})," you can render a month/year picker"]}),e.jsx(l,{marginTop:"spacing.2",children:"You can also hook into onMonthSelect and onYearSelect events"}),e.jsx(l,{color:"surface.text.gray.muted",size:"small",marginTop:"spacing.2",marginBottom:"spacing.4",children:"Note: picker is only supported in single selection mode"}),e.jsx(m,{format:"MMM",picker:"month",selectionType:"single",...a})]});Y.storyName="Month/Year Picker";const M=()=>(console.log(Intl.DateTimeFormat.supportedLocalesOf("en")),e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["The DatePicker component supports localization using the i18nify-js. You can pass the locale prop to the",e.jsx(r,{size:"medium",children:"I18nProvider"})," to change the locale of the DatePicker."]}),e.jsx(K,{initData:{locale:"hi-IN"},children:e.jsx(m,{label:"initData={{ locale: 'hi-IN' }}"})}),e.jsx(K,{initData:{locale:"ms-MY"},children:e.jsx(o,{marginTop:"spacing.5",children:e.jsx(m,{label:"initData={{ locale: 'ms-MY' }}"})})})]}));M.storyName="Localization";const R=()=>e.jsx(o,{children:e.jsx(x,{label:"Date",selectionType:"single",onChange:a=>{console.log("date",a)}})});R.storyName="FilterChipDatePicker (Single Selection)";const O=()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.8",maxWidth:"760px",children:[e.jsxs(l,{children:["Use ",e.jsx(r,{size:"medium",children:"showClearButton"})," to control the clear (cross) button on the FilterChipDatePicker. It defaults to ",e.jsx(r,{size:"medium",children:"true"}),"."]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(l,{weight:"semibold",children:"With clear button (default)"}),e.jsxs(l,{size:"small",color:"surface.text.gray.muted",children:["Once a date is selected the cross appears; pressing it clears the value (fires"," ",e.jsx(r,{size:"medium",children:"onChange"})," with an empty value and"," ",e.jsx(r,{size:"medium",children:"onClearButtonClick"}),")."]}),e.jsx(o,{children:e.jsx(x,{label:"Date",selectionType:"single",defaultValue:new Date})})]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsxs(l,{weight:"semibold",children:["Without clear button (showClearButton=","{false}",")"]}),e.jsx(l,{size:"small",color:"surface.text.gray.muted",children:"For filters that must always hold a value. The chip starts with a default date and never shows the cross, so it can't be cleared to an empty state — the calendar can still be opened to change the date."}),e.jsx(o,{children:e.jsx(x,{label:"Date",selectionType:"single",defaultValue:new Date,showClearButton:!1})})]})]});O.storyName="FilterChipDatePicker (Clear Button Behaviour)";const I=()=>e.jsx(o,{children:e.jsx(x,{label:"Date",selectionType:"range",onChange:a=>{console.log(a)}})});I.storyName="FilterChipDatePicker (Multi Selection)";const D=({displayFormat:a})=>e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["Use the ",e.jsx(r,{size:"medium",children:"displayFormat"})," control below to switch between"," ",e.jsx(r,{size:"medium",children:"compact"})," and ",e.jsx(r,{size:"medium",children:"default"}),". In"," ",e.jsx(r,{size:"medium",children:"compact"})," mode, selecting a named preset (e.g."," ",e.jsx(r,{size:"medium",children:"Past 7 days"}),") shows the preset label, while a"," ",e.jsx(r,{size:"medium",children:"Custom"})," range shows a humanised date range (e.g. 7 Jun - 12 Jun 2026). In ",e.jsx(r,{size:"medium",children:"default"})," mode, the chip always shows the raw date range."]}),e.jsx(x,{label:"Date",selectionType:"range",displayFormat:a,presets:[{label:"Past 7 days",value:i=>[t(i).subtract(7,"days").toDate(),i]},{label:"Past 15 days",value:i=>[t(i).subtract(15,"days").toDate(),i]},{label:"Past month",value:i=>[t(i).subtract(1,"month").toDate(),i]},{label:"Custom",value:()=>[null,null]}],onChange:i=>{console.log(i)}})]});D.storyName="FilterChipDatePicker (Range Selection) with Presets";D.args={displayFormat:"compact"};D.argTypes={displayFormat:{name:"displayFormat",control:{type:"inline-radio"},options:["compact","default"],description:"Controls what is shown inside the selected state of the chip.",...d}};const U=()=>{const[a,i]=p.useState(!1),[c,n]=p.useState(new Date);return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"isOpen"}),", ",e.jsx(r,{size:"medium",children:"value"})," and associated event handlers you can control the FilterChipDatePicker."]}),e.jsxs(o,{marginBottom:"spacing.5",children:[e.jsxs(l,{children:["Selected: ",t(c).format("DD-MM-YYYY")]}),e.jsxs(l,{marginTop:"spacing.2",children:["IsOpen: ",JSON.stringify(a)]})]}),e.jsx(x,{label:"Date",selectionType:"single",isOpen:a,onOpenChange:({isOpen:s})=>i(s),value:c,onChange:s=>{n(s)}})]})},_=()=>{const[a,i]=p.useState(!1),[c,n]=p.useState([new Date,t().add(3,"day").toDate()]);return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"isOpen"}),", ",e.jsx(r,{size:"medium",children:"value"})," and associated event handlers you can control the FilterChipDatePicker."]}),e.jsxs(o,{marginBottom:"spacing.5",children:[e.jsxs(l,{children:["Selected: [",t(c[0]).format("DD-MM-YYYY"),", ",t(c[1]).format("DD-MM-YYYY"),"]"]}),e.jsxs(l,{marginTop:"spacing.2",children:["IsOpen: ",JSON.stringify(a)]})]}),e.jsx(x,{label:"Date",selectionType:"range",isOpen:a,onOpenChange:({isOpen:s})=>i(s),value:c,onChange:s=>{n(s)},onClearButtonClick:()=>{n([null,null])}})]})},H=()=>{const[a,i]=p.useState(!1),[c,n]=p.useState([new Date,t().add(3,"day").toDate()]);return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"isOpen"}),", ",e.jsx(r,{size:"medium",children:"value"})," and associated event handlers you can control the FilterChipDatePicker."]}),e.jsxs(o,{marginBottom:"spacing.5",children:[e.jsxs(l,{children:["Selected: [",t(c[0]).format("DD-MM-YYYY"),", ",t(c[1]).format("DD-MM-YYYY"),"]"]}),e.jsxs(l,{marginTop:"spacing.2",children:["IsOpen: ",JSON.stringify(a)]})]}),e.jsx(x,{label:"Date",selectionType:"range",isOpen:a,onOpenChange:({isOpen:s})=>i(s),value:c,onChange:s=>{n(s)},onClearButtonClick:()=>{n([null,null])},isDisabled:!0})]})},J=()=>e.jsx(o,{children:e.jsxs(o,{display:"flex",gap:"spacing.5",flexDirection:"column",children:[e.jsx(m,{selectionType:"single",labelPosition:"left",label:"Select a date",labelSuffix:e.jsx(Z,{content:"Select a date",placement:"right",children:e.jsx(Q,{display:"flex",children:e.jsx(G,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(q,{size:"small",children:"Learn more"})}),e.jsx(m,{labelPosition:"left",selectionType:"range",label:"Select a date range",labelSuffix:e.jsx(Z,{content:"Select a date",placement:"right",children:e.jsx(Q,{display:"flex",children:e.jsx(G,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(q,{size:"small",children:"Learn more"})})]})}),j=A.bind({});j.storyName="DatePicker with Footer";j.args={label:"Select a date",selectionType:"range",footer:e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(l,{size:"small",color:"surface.text.gray.normal",children:"This section only displays records from the last 45 days. This section only displays records from the last 45 days."}),e.jsx(q,{size:"small",href:"#",children:"Link to report tab"})]})};const f=A.bind({});f.storyName="Without Action Buttons";f.args={label:"Select a date",selectionType:"single",showFooterActions:!1};const W=()=>e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"showClearButton"})," prop, you can render a clear button in the DatePicker input. When clicked, it will clear the selected date."]}),e.jsx(l,{marginBottom:"spacing.5",color:"surface.text.gray.muted",size:"small",children:"In uncontrolled mode, the clear button will automatically clear the internal state."}),e.jsxs(o,{display:"flex",gap:"spacing.5",flexDirection:"column",children:[e.jsx(m,{label:"Single Date (Uncontrolled)",selectionType:"single",showClearButton:!0,onChange:a=>{console.log("value",a)},onClearButtonClick:()=>{console.log("Clear button clicked - Single")},presets:[{label:"In 7 days",value:a=>[t(a).subtract(7,"days").toDate(),a]},{label:"In a month",value:a=>[t(a).subtract(15,"days").toDate(),a]}]}),e.jsx(m,{label:{start:"Date Range (Uncontrolled)"},selectionType:"range",showClearButton:!0,onClearButtonClick:()=>{console.log("Clear button clicked - Range")},onChange:a=>{console.log("value",a)},presets:[{label:"Today",value:a=>[t(a).startOf("day").toDate(),a]},{label:"Yesterday",value:a=>[t(a).subtract(1,"day").startOf("day").toDate(),a]},{label:"Past 7 days",value:a=>[t(a).subtract(7,"days").toDate(),a]},{label:"Past 15 days",value:a=>[t(a).subtract(15,"days").toDate(),a]},{label:"Past month",value:a=>[t(a).subtract(1,"month").toDate(),a]},{label:"Past year",value:a=>[t(a).subtract(1,"year").toDate(),a]},{label:"Past financial year",value:a=>{const i=t(a),c=i.month()>=3?i.year():i.year()-1;return[t(`${c-1}-04-01`).toDate(),t(`${c}-03-31`).toDate()]}},{label:"Custom",value:()=>[null,null]}]})]})]});W.storyName="Clear Button (Uncontrolled)";const F=()=>{const[a,i]=p.useState(new Date),[c,n]=p.useState([t().subtract(3,"months").toDate(),t().add(3,"day").subtract(3,"months").toDate()]);return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"showClearButton"})," and"," ",e.jsx(r,{size:"medium",children:"onClearButtonClick"})," props, you can control when the clear button appears and handle the clear action in controlled mode."]}),e.jsxs(l,{marginBottom:"spacing.5",color:"surface.text.gray.muted",size:"small",children:["In controlled mode, use ",e.jsx(r,{size:"medium",children:"onClearButtonClick"})," to reset your state."]}),e.jsxs(o,{display:"flex",gap:"spacing.5",flexDirection:"column",children:[e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.2",children:["Selected Single Date: ",a?t(a).format("DD-MM-YYYY"):"None"]}),e.jsx(m,{label:"Single Date (Controlled)",selectionType:"single",value:a,onChange:s=>i(s),showClearButton:!0,onClearButtonClick:()=>{console.log("Clear button clicked - resetting single date")}})]}),e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.2",children:["Selected Range: ",c[0]?t(c[0]).format("DD-MM-YYYY"):"None"," -"," ",c[1]?t(c[1]).format("DD-MM-YYYY"):"None"]}),e.jsx(m,{label:{start:"Date Range (Controlled)"},selectionType:"range",value:c,onChange:s=>n(s),showClearButton:!0,onClearButtonClick:()=>{console.log("Clear button clicked - resetting date range")},presets:[{label:"Today",value:s=>[t(s).startOf("day").toDate(),s]},{label:"Yesterday",value:s=>[t(s).subtract(1,"day").startOf("day").toDate(),s]},{label:"Past 7 days",value:s=>[t(s).subtract(7,"days").toDate(),s]},{label:"Past 15 days",value:s=>[t(s).subtract(15,"days").toDate(),s]},{label:"Past month",value:s=>[t(s).subtract(1,"month").toDate(),s]},{label:"Past year",value:s=>[t(s).subtract(1,"year").toDate(),s]},{label:"Past financial year",value:s=>{const u=t(s),g=u.month()>=3?u.year():u.year()-1;return[t(`${g-1}-04-01`).toDate(),t(`${g}-03-31`).toDate()]}},{label:"Custom",value:()=>[null,null]}]})]}),e.jsx(o,{display:"flex",gap:"spacing.3",children:e.jsx(y,{size:"small",onClick:()=>{i(new Date),n([new Date,t().add(7,"day").toDate()])},children:"Reset to Today"})})]})]})};F.storyName="Clear Button (Controlled)";const N=()=>{const[a,i]=p.useState(new Date),[c,n]=p.useState([t().subtract(3,"months").toDate(),t().add(3,"day").subtract(3,"months").toDate()]);return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["With ",e.jsx(r,{size:"medium",children:"showClearButton"})," and"," ",e.jsx(r,{size:"medium",children:"onClearButtonClick"})," props, you can control when the clear button appears and handle the clear action in controlled mode."]}),e.jsxs(l,{marginBottom:"spacing.5",color:"surface.text.gray.muted",size:"small",children:["In controlled mode, use ",e.jsx(r,{size:"medium",children:"onClearButtonClick"})," to reset your state."]}),e.jsxs(o,{display:"flex",gap:"spacing.5",flexDirection:"column",children:[e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.2",children:["Selected Single Date: ",a?t(a).format("DD-MM-YYYY"):"None"]}),e.jsx(m,{label:"Single Date (Controlled)",selectionType:"single",value:a,onChange:s=>i(s),showClearButton:!0,onClearButtonClick:()=>{console.log("Clear button clicked - resetting single date")}})]}),e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.2",children:["Selected Range: ",c[0]?t(c[0]).format("DD-MM-YYYY"):"None"," -"," ",c[1]?t(c[1]).format("DD-MM-YYYY"):"None"]}),e.jsx(m,{label:{start:"Date Range (Controlled)"},selectionType:"range",value:c,onChange:s=>n(s),showClearButton:!0,onClearButtonClick:()=>{console.log("Clear button clicked - resetting date range")},allowSingleDateInRange:!0,displayFormat:"compact",presets:[{label:"Today",value:s=>[t(s).startOf("day").toDate(),s]},{label:"Yesterday",value:s=>[t(s).subtract(1,"day").startOf("day").toDate(),s]},{label:"Past 7 days",value:s=>[t(s).subtract(7,"days").toDate(),s]},{label:"Past 15 days",value:s=>[t(s).subtract(15,"days").toDate(),s]},{label:"Past month",value:s=>[t(s).subtract(1,"month").toDate(),s]},{label:"Past year",value:s=>[t(s).subtract(1,"year").toDate(),s]},{label:"Past financial year",value:s=>{const u=t(s),g=u.month()>=3?u.year():u.year()-1;return[t(`${g-1}-04-01`).toDate(),t(`${g}-03-31`).toDate()]}},{label:"Custom",value:()=>[null,null]}]})]}),e.jsx(o,{display:"flex",gap:"spacing.3",children:e.jsx(y,{size:"small",onClick:()=>{i(new Date),n([new Date,t().add(7,"day").toDate()])},children:"Reset to Today"})})]})]})};N.storyName="Clear Button (Controlled ) (Display Compact)";const V=()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.7",backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",minHeight:"100vh",children:[e.jsx(o,{maxWidth:"320px",children:e.jsx(m,{label:"Select Date",selectionType:"single",defaultValue:new Date,onChange:a=>console.log(a)})}),e.jsx(o,{maxWidth:"320px",children:e.jsx(m,{label:"Select Range",selectionType:"range",defaultValue:[new Date,new Date],onChange:a=>console.log(a)})}),e.jsxs(y,{onClick:()=>{console.log("Change Date")},marginTop:"spacing.5",children:[" ","Change Date"]}),e.jsxs(y,{onClick:()=>{console.log("Change Date")},marginTop:"spacing.5",color:"positive",children:[" ","Change Date"]}),e.jsxs(y,{onClick:()=>{console.log("Change Date")},marginTop:"spacing.5",color:"negative",children:[" ","Change Date"]}),e.jsx(o,{maxWidth:"320px",children:e.jsx(m,{label:"Select Range",selectionType:"range",defaultValue:[new Date,new Date],onChange:a=>console.log(a),presets:[{label:"Today",value:a=>[t(a).startOf("day").toDate(),a]},{label:"Yesterday",value:a=>[t(a).subtract(1,"day").startOf("day").toDate(),a]},{label:"Past 7 days",value:a=>[t(a).subtract(7,"days").toDate(),a]},{label:"Past 15 days",value:a=>[t(a).subtract(15,"days").toDate(),a]},{label:"Past month",value:a=>[t(a).subtract(1,"month").toDate(),a]},{label:"Past year",value:a=>[t(a).subtract(1,"year").toDate(),a]},{label:"Past financial year",value:a=>{const i=t(a),c=i.month()>=3?i.year():i.year()-1;return[t(`${c-1}-04-01`).toDate(),t(`${c}-03-31`).toDate()]}},{label:"Custom",value:()=>[null,null]}]})}),e.jsxs(y,{onClick:()=>{console.log("Change Date")},marginTop:"spacing.5",children:[" ","Change Date"]}),e.jsxs(y,{onClick:()=>{console.log("Change Date")},marginTop:"spacing.5",color:"positive",children:[" ","Change Date"]}),e.jsxs(y,{onClick:()=>{console.log("Change Date")},marginTop:"spacing.5",color:"negative",children:[" ","Change Date"]})]});V.storyName="With Cards (Backdrop Showcase)";const Oa=()=>{const[a,i]=p.useState(new Date),[c,n]=p.useState(()=>{const u=new Date;return u.setHours(10,0,0,0),u}),s=p.useMemo(()=>{if(!a||!c)return null;const u=new Date(a);return u.setHours(c.getHours(),c.getMinutes(),0,0),u},[a,c]);return{selectedDate:a,setSelectedDate:i,selectedTime:c,setSelectedTime:n,combinedDateTime:s}},Ia=({selectedDate:a,setSelectedDate:i,selectedTime:c,setSelectedTime:n,combinedDateTime:s})=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(m,{label:"Event Date",selectionType:"single",value:a,onChange:u=>i(u)}),e.jsx($a,{label:"Event Time",value:c,onChange:({value:u})=>n(u),timeFormat:"12h",minuteStep:15}),s&&e.jsxs(o,{padding:"spacing.4",backgroundColor:"feedback.background.positive.subtle",borderRadius:"medium",children:[e.jsx(l,{weight:"semibold",size:"small",children:"Scheduled for:"}),e.jsx(l,{size:"small",marginTop:"spacing.2",children:t(s).format("dddd, MMMM D, YYYY [at] h:mm A")})]})]}),E=()=>{const a=Oa();return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["Combine ",e.jsx(r,{size:"medium",children:"DatePicker"})," and ",e.jsx(r,{size:"medium",children:"TimePicker"})," on a single page for scheduling use cases like booking appointments, creating events, or setting deadlines."]}),e.jsx(Ia,{...a})]})};E.storyName="DatePicker with TimePicker";const L=()=>{const[a,i]=p.useState(!1),c=Oa();return e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["Combine ",e.jsx(r,{size:"medium",children:"DatePicker"})," and ",e.jsx(r,{size:"medium",children:"TimePicker"})," ","inside a ",e.jsx(r,{size:"medium",children:"Modal"})," for scheduling use cases like booking appointments, creating events, or setting deadlines."]}),e.jsx(y,{onClick:()=>i(!0),children:"Schedule Event"}),e.jsxs(Fa,{isOpen:a,onDismiss:()=>i(!1),size:"medium",children:[e.jsx(Na,{title:"Schedule an Event",subtitle:"Pick a date and time for your event"}),e.jsx(Va,{children:e.jsx(Ia,{...c})}),e.jsx(Ea,{children:e.jsxs(o,{display:"flex",gap:"spacing.3",justifyContent:"flex-end",width:"100%",children:[e.jsx(y,{variant:"secondary",onClick:()=>i(!1),children:"Cancel"}),e.jsx(y,{onClick:()=>{console.log("Event scheduled:",c.combinedDateTime),i(!1)},children:"Confirm"})]})})]})]})},$=()=>{const[a,i]=p.useState([t().subtract(1,"month").toDate(),t().toDate()]),[c,n]=p.useState([null,null]),[s,u]=p.useState();return p.useEffect(()=>{const[g,X]=a;if(!g||!X)return;const Wa=t(X).diff(t(g),"day");u(t(g).subtract(Wa+1,"day").toDate())},[a]),e.jsxs(o,{children:[e.jsxs(l,{marginBottom:"spacing.5",children:["Use ",e.jsx(r,{size:"medium",children:"visibleMonth"}),"/",e.jsx(r,{size:"medium",children:"defaultVisibleMonth"})," ","to anchor a comparison ",e.jsx(r,{size:"medium",children:"DatePicker"})," on the months immediately preceding a primary range's selection — without pre-filling the comparison"," ",e.jsx(r,{size:"medium",children:"value"}),'. Pick a primary range below, then open "Compare to" and notice the calendar opens on the same-length period right before it.']}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",maxWidth:"400px",children:[e.jsx(m,{label:{start:"Primary date range"},selectionType:"range",value:a,onChange:g=>i(g)}),e.jsx(m,{label:{start:"Compare to"},selectionType:"range",value:c,visibleMonth:s,onVisibleMonthChange:u,onChange:g=>n(g)})]})]})};$.storyName="Comparison Range (visibleMonth)";L.storyName="DatePicker with TimePicker (Modal)";var ee,ae,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`({
  ...args
}) => {
  if (args.selectionType === 'single' && typeof args.label === 'object') {
    throw new Error('[Storybook Controls]: Cannot use {start,end} label for single selection, please switch to the SingleDatePicker story');
  }
  return <DatePickerComponent onChange={date => {
    console.log(date);
  }} {...args} />;
}`,...(te=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,oe;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`({
  ...args
}) => {
  if (args.selectionType === 'single' && typeof args.label === 'object') {
    throw new Error('[Storybook Controls]: Cannot use {start,end} label for single selection, please switch to the SingleDatePicker story');
  }
  return <DatePickerComponent onChange={date => {
    console.log(date);
  }} {...args} />;
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,re,ie;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`({
  ..._args
}) => {
  const [selectedDates, setSelectedDates] = React.useState<DatesRangeValue>([dayjs().subtract(7, 'days').toDate(), dayjs().toDate()]);
  return <Box>
      <Text>
        In Range DatePicker you can pass <Code size="medium">presets</Code> which will render a
        quick selection panel inside DatePicker for easy to use range selections
      </Text>
      <Text marginTop="spacing.4">
        presets accepts an array of objects with <Code>label</Code> and{' '}
        <Code size="medium">value</Code> properties.
      </Text>
      <Text marginTop="spacing.2" marginBottom="spacing.5">
        Example:
        <Code size="medium">
          {\`
            [ { label: 'Past 7 days', value: (date) => [dayjs(date).subtract(7, 'days').toDate(), date]} ]
          \`}
        </Code>
      </Text>

      <DatePickerComponent label={{
      start: 'Select a date range'
    }} selectionType="range" value={selectedDates} onChange={date => {
      console.log(date);
      setSelectedDates(date as DatesRangeValue);
    }} presets={[{
      label: 'Today',
      value: date => [dayjs(date).startOf('day').toDate(), date]
    }, {
      label: 'Yesterday',
      value: date => [dayjs(date).subtract(1, 'day').startOf('day').toDate(), date]
    }, {
      label: 'Past 7 days',
      value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
    }, {
      label: 'Past 15 days',
      value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
    }, {
      label: 'Past month',
      value: date => [dayjs(date).subtract(1, 'month').toDate(), date]
    }, {
      label: 'Past year',
      value: date => [dayjs(date).subtract(1, 'year').toDate(), date]
    }, {
      label: 'Past financial year',
      value: date => {
        const d = dayjs(date);
        const year = d.month() >= 3 ? d.year() : d.year() - 1;
        return [dayjs(\`\${year - 1}-04-01\`).toDate(), dayjs(\`\${year}-03-31\`).toDate()];
      }
    }, {
      label: 'Custom',
      value: () => [null, null] as DatesRangeValue
    }]} />
    </Box>;
}`,...(ie=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,de,me;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`({
  ..._args
}) => {
  const [selectedDates, setSelectedDates] = React.useState<DatesRangeValue>([dayjs().subtract(7, 'days').toDate(), dayjs().toDate()]);
  return <Box>
      <Text marginBottom="spacing.5">
        When using <Code size="medium">{'displayFormat="compact"'}</Code> with presets, the
        DatePicker displays a single input field showing the selected preset label or date range in
        a compact format.
      </Text>

      <DatePickerComponent label={{
      start: 'Select a date range'
    }} selectionType="range" allowSingleDateInRange={true} value={selectedDates} onChange={date => {
      console.log(date);
      setSelectedDates(date as DatesRangeValue);
    }} displayFormat="compact" presets={[{
      label: 'Today',
      value: date => [dayjs(date).startOf('day').toDate(), date]
    }, {
      label: 'Yesterday',
      value: date => [dayjs(date).subtract(1, 'day').startOf('day').toDate(), date]
    }, {
      label: 'Past 7 days',
      value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
    }, {
      label: 'Past 15 days',
      value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
    }, {
      label: 'Past month',
      value: date => [dayjs(date).subtract(1, 'month').toDate(), date]
    }, {
      label: 'Past year',
      value: date => [dayjs(date).subtract(1, 'year').toDate(), date]
    }, {
      label: 'Past financial year',
      value: date => {
        const d = dayjs(date);
        const year = d.month() >= 3 ? d.year() : d.year() - 1;
        return [dayjs(\`\${year - 1}-04-01\`).toDate(), dayjs(\`\${year}-03-31\`).toDate()];
      }
    }, {
      label: 'Custom',
      value: () => [null, null] as DatesRangeValue
    }]} />
    </Box>;
}`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,ge;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState<DatesRangeValue>([dayjs().subtract(3, 'months').toDate(), dayjs().add(3, 'day').subtract(3, 'months').toDate()]);
  const [date, setDate] = React.useState(dayjs().subtract(3, 'months').toDate());
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">isOpen</Code>, <Code size="medium">value</Code> and associated
        event handlers you can control the DatePicker.
      </Text>
      <Box marginBottom="spacing.5">
        <Text>
          Selected: [{dayjs(dateRange[0]).format('DD-MM-YYYY')},{' '}
          {dayjs(dateRange[1]).format('DD-MM-YYYY')}]
        </Text>
        <Text marginTop="spacing.2">IsOpen: {JSON.stringify(isOpen)}</Text>
      </Box>
      <DatePickerComponent label={{
      start: 'Select a date range'
    }} selectionType="range" isOpen={isOpen} onOpenChange={({
      isOpen
    }) => setIsOpen(isOpen)} value={dateRange} onChange={date => {
      setDateRange(date);
    }} />
      <Box marginTop="spacing.5">
        <Text marginBottom="spacing.5">Single Date Picker</Text>
        <Text>Selected: {dayjs(date).format('DD-MM-YYYY')}</Text>
        <DatePickerComponent label="Select a date" selectionType="single" value={date} onChange={date => {
        if (date) setDate(date);
      }} />
      </Box>

      <Button onClick={() => {
      setDate(dayjs().subtract(Math.round(Math.random() * 10), 'month').toDate());
    }} marginTop="spacing.5">
        {' '}
        Change Date
      </Button>
    </Box>;
}`,...(ge=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,ye,De;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<DatesRangeValue>([new Date(), dayjs().add(3, 'day').toDate()]);
  const [hasError, setHasError] = React.useState(false);
  return <Box>
      <Text marginBottom="spacing.5">
        DatePicker supports all common Input props like <Code size="medium">validationState</Code>,{' '}
        <Code size="medium">isRequired</Code>, <Code size="medium">isDisabled</Code> etc.
      </Text>
      <DatePickerComponent validationState={hasError ? 'error' : 'none'} errorText="Cannot select a range which is more than 3 days" label={{
      start: 'Select a date range'
    }} selectionType="range" value={date} onChange={date => {
      setDate(date);
      if (dayjs(date[1]).diff(date[0], 'day') > 3) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    }} />
    </Box>;
}`,...(De=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};var xe,Ce,be;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">minDate</Code> and <Code size="medium">maxDate</Code> props you can
        set minimum and maximum dates that can be selected.
      </Text>
      <Box marginY="spacing.4" display="flex" gap="spacing.2" flexDirection="column">
        <Text>Example: </Text>
        <Text size="small">{\`minDate={dayjs().subtract(1, 'week').toDate()}\`}</Text>
        <Text size="small">{\`maxDate={dayjs().add(1, 'week').toDate()}\`}</Text>
      </Box>
      <DatePickerComponent label={{
      start: 'Select a date range'
    }} selectionType="range" minDate={dayjs().subtract(1, 'week').toDate()} maxDate={dayjs().add(1, 'week').toDate()} />
      <Box marginTop="spacing.8">
        <Text marginBottom="spacing.3">Single DatePicker with min/max:</Text>
        <DatePickerComponent label="Select a date" selectionType="single" minDate={dayjs().subtract(1, 'month').toDate()} maxDate={dayjs().add(1, 'month').toDate()} />
      </Box>
    </Box>;
}`,...(be=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var je,fe,Te;v.parameters={...v.parameters,docs:{...(je=v.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  // minDate and maxDate are both restricted to March 2026, so months outside it have no
  // selectable dates and the calendar opens directly on March 2026.
  const minDate = dayjs('2026-03-01').startOf('month').toDate();
  const maxDate = dayjs('2026-03-31').endOf('month').toDate();
  return <Box>
      <Text marginBottom="spacing.5">
        When today&apos;s month falls outside the allowed <Code size="medium">minDate</Code> /{' '}
        <Code size="medium">maxDate</Code> range, the calendar no longer opens on a fully-disabled
        month. Instead it opens clamped to the range — here directly on{' '}
        <Code size="medium">March 2026</Code> (the only selectable month).
      </Text>
      <Box marginY="spacing.4" display="flex" gap="spacing.2" flexDirection="column">
        <Text>Example (allowed range limited to March 2026): </Text>
        <Text size="small">{\`minDate={dayjs('2026-03-01').startOf('month').toDate()}\`}</Text>
        <Text size="small">{\`maxDate={dayjs('2026-03-31').endOf('month').toDate()}\`}</Text>
      </Box>
      <DatePickerComponent label="Select a date" selectionType="single" minDate={minDate} maxDate={maxDate} />
      <Box marginTop="spacing.8">
        <Text marginBottom="spacing.3">Range DatePicker with the same March 2026 range:</Text>
        <DatePickerComponent label={{
        start: 'Select a date range'
      }} selectionType="range" minDate={minDate} maxDate={maxDate} />
      </Box>
    </Box>;
}`,...(Te=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Pe,ke,Be;w.parameters={...w.parameters,docs:{...(Pe=w.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">excludeDate</Code> function you can exclude specific dates from
        being selected.
      </Text>
      <Box marginY="spacing.4" display="flex" gap="spacing.2" flexDirection="column">
        <Text>Example, exclude weekends: </Text>
        <Text size="small">{\`excludeDate={(date) => dayjs(date).day() === 0 || dayjs(date).day() === 6}\`}</Text>
      </Box>
      <DatePickerComponent label="Select Dates Without Weekends" selectionType="single" excludeDate={date => dayjs(date).day() === 0 || dayjs(date).day() === 6} />
    </Box>;
}`,...(Be=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var Se,ve,we;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <Box>
      <Text marginBottom="spacing.5">
        The <Code size="medium">label</Code> prop accepts a string or an object{' '}
        <Code size="medium">{\`{start, end}\`}</Code> depending on the
        <Code size="medium">selectionType</Code>. When the{' '}
        <Code size="medium">labelPositionLeft</Code> prop is set & selectionType is range, the label
        will be rendered on the left with the <Code size="medium">{\`{start}\`}</Code> string.
      </Text>
      <Box display="flex" gap="spacing.5" flexDirection="column">
        <DatePickerComponent labelPosition="left" selectionType="range" label={{
        start: 'Select a date range'
      }} />
        <DatePickerComponent selectionType="single" labelPosition="left" label="Select a date" />
      </Box>
    </Box>;
}`,...(we=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ze,Ye,Me;Y.parameters={...Y.parameters,docs:{...(ze=Y.parameters)==null?void 0:ze.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box>
      <Text>
        By passing <Code size="medium">picker</Code> prop as <Code size="medium">month</Code> or{' '}
        <Code size="medium">year</Code> you can render a month/year picker
      </Text>
      <Text marginTop="spacing.2">
        You can also hook into onMonthSelect and onYearSelect events
      </Text>
      <Text color="surface.text.gray.muted" size="small" marginTop="spacing.2" marginBottom="spacing.4">
        Note: picker is only supported in single selection mode
      </Text>
      <DatePickerComponent format="MMM" picker="month" selectionType="single" {...args} />
    </Box>;
}`,...(Me=(Ye=Y.parameters)==null?void 0:Ye.docs)==null?void 0:Me.source}}};var Re,Oe,Ie;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  console.log(Intl.DateTimeFormat.supportedLocalesOf('en'));
  return <Box>
      <Text marginBottom="spacing.5">
        The DatePicker component supports localization using the i18nify-js. You can pass the locale
        prop to the
        <Code size="medium">I18nProvider</Code> to change the locale of the DatePicker.
      </Text>
      <I18nProvider initData={{
      locale: 'hi-IN'
    }}>
        <DatePickerComponent label={\`initData={{ locale: 'hi-IN' }}\`} />
      </I18nProvider>

      <I18nProvider initData={{
      locale: 'ms-MY'
    }}>
        <Box marginTop="spacing.5">
          <DatePickerComponent label={\`initData={{ locale: 'ms-MY' }}\`} />
        </Box>
      </I18nProvider>
    </Box>;
}`,...(Ie=(Oe=M.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var We,Fe,Ne;R.parameters={...R.parameters,docs:{...(We=R.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <Box>
      <FilterChipDatePicker label="Date" selectionType="single" onChange={date => {
      console.log('date', date);
    }} />
    </Box>;
}`,...(Ne=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var Ve,Ee,Le;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8" maxWidth="760px">
      <Text>
        Use <Code size="medium">showClearButton</Code> to control the clear (cross) button on the
        FilterChipDatePicker. It defaults to <Code size="medium">true</Code>.
      </Text>

      <Box display="flex" flexDirection="column" gap="spacing.3">
        <Text weight="semibold">With clear button (default)</Text>
        <Text size="small" color="surface.text.gray.muted">
          Once a date is selected the cross appears; pressing it clears the value (fires{' '}
          <Code size="medium">onChange</Code> with an empty value and{' '}
          <Code size="medium">onClearButtonClick</Code>).
        </Text>
        <Box>
          <FilterChipDatePicker label="Date" selectionType="single" defaultValue={new Date()} />
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="spacing.3">
        <Text weight="semibold">Without clear button (showClearButton={'{false}'})</Text>
        <Text size="small" color="surface.text.gray.muted">
          For filters that must always hold a value. The chip starts with a default date and never
          shows the cross, so it can&apos;t be cleared to an empty state — the calendar can still be
          opened to change the date.
        </Text>
        <Box>
          <FilterChipDatePicker label="Date" selectionType="single" defaultValue={new Date()} showClearButton={false} />
        </Box>
      </Box>
    </Box>;
}`,...(Le=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var $e,Ue,_e;I.parameters={...I.parameters,docs:{...($e=I.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <Box>
      <FilterChipDatePicker label="Date" selectionType="range" onChange={date => {
      console.log(date);
    }} />
    </Box>;
}`,...(_e=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:_e.source}}};var He,Je,Ae;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`({
  displayFormat
}) => {
  return <Box>
      <Text marginBottom="spacing.5">
        Use the <Code size="medium">displayFormat</Code> control below to switch between{' '}
        <Code size="medium">compact</Code> and <Code size="medium">default</Code>. In{' '}
        <Code size="medium">compact</Code> mode, selecting a named preset (e.g.{' '}
        <Code size="medium">Past 7 days</Code>) shows the preset label, while a{' '}
        <Code size="medium">Custom</Code> range shows a humanised date range (e.g. 7 Jun - 12 Jun
        2026). In <Code size="medium">default</Code> mode, the chip always shows the raw date range.
      </Text>
      <FilterChipDatePicker label="Date" selectionType="range" displayFormat={displayFormat} presets={[{
      label: 'Past 7 days',
      value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
    }, {
      label: 'Past 15 days',
      value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
    }, {
      label: 'Past month',
      value: date => [dayjs(date).subtract(1, 'month').toDate(), date]
    }, {
      label: 'Custom',
      value: () => [null, null] as DatesRangeValue
    }]} onChange={date => {
      console.log(date);
    }} />
    </Box>;
}`,...(Ae=(Je=D.parameters)==null?void 0:Je.docs)==null?void 0:Ae.source}}};var qe,Xe,Ze;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">isOpen</Code>, <Code size="medium">value</Code> and associated
        event handlers you can control the FilterChipDatePicker.
      </Text>
      <Box marginBottom="spacing.5">
        <Text>Selected: {dayjs(date).format('DD-MM-YYYY')}</Text>
        <Text marginTop="spacing.2">IsOpen: {JSON.stringify(isOpen)}</Text>
      </Box>
      <FilterChipDatePicker label="Date" selectionType="single" isOpen={isOpen} onOpenChange={({
      isOpen
    }) => setIsOpen(isOpen)} value={date} onChange={date => {
      setDate(date as Date);
    }} />
    </Box>;
}`,...(Ze=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var Qe,Ge,Ke;_.parameters={..._.parameters,docs:{...(Qe=_.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState<DatesRangeValue>([new Date(), dayjs().add(3, 'day').toDate()]);
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">isOpen</Code>, <Code size="medium">value</Code> and associated
        event handlers you can control the FilterChipDatePicker.
      </Text>
      <Box marginBottom="spacing.5">
        <Text>
          Selected: [{dayjs(date[0]).format('DD-MM-YYYY')}, {dayjs(date[1]).format('DD-MM-YYYY')}]
        </Text>
        <Text marginTop="spacing.2">IsOpen: {JSON.stringify(isOpen)}</Text>
      </Box>
      <FilterChipDatePicker label="Date" selectionType="range" isOpen={isOpen} onOpenChange={({
      isOpen
    }) => setIsOpen(isOpen)} value={date} onChange={date => {
      setDate(date as DatesRangeValue);
    }} onClearButtonClick={() => {
      setDate([null, null]);
    }} />
    </Box>;
}`,...(Ke=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source}}};var ea,aa,ta;H.parameters={...H.parameters,docs:{...(ea=H.parameters)==null?void 0:ea.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState<DatesRangeValue>([new Date(), dayjs().add(3, 'day').toDate()]);
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">isOpen</Code>, <Code size="medium">value</Code> and associated
        event handlers you can control the FilterChipDatePicker.
      </Text>
      <Box marginBottom="spacing.5">
        <Text>
          Selected: [{dayjs(date[0]).format('DD-MM-YYYY')}, {dayjs(date[1]).format('DD-MM-YYYY')}]
        </Text>
        <Text marginTop="spacing.2">IsOpen: {JSON.stringify(isOpen)}</Text>
      </Box>
      <FilterChipDatePicker label="Date" selectionType="range" isOpen={isOpen} onOpenChange={({
      isOpen
    }) => setIsOpen(isOpen)} value={date} onChange={date => {
      setDate(date as DatesRangeValue);
    }} onClearButtonClick={() => {
      setDate([null, null]);
    }} isDisabled />
    </Box>;
}`,...(ta=(aa=H.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var sa,na,oa;J.parameters={...J.parameters,docs:{...(sa=J.parameters)==null?void 0:sa.docs,source:{originalSource:`() => {
  return <Box>
      <Box display="flex" gap="spacing.5" flexDirection="column">
        <DatePickerComponent selectionType="single" labelPosition="left" label="Select a date" labelSuffix={<Tooltip content="Select a date" placement="right">
              <TooltipInteractiveWrapper display="flex">
                <InfoIcon size="small" color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} />
        <DatePickerComponent labelPosition="left" selectionType="range" label="Select a date range" labelSuffix={<Tooltip content="Select a date" placement="right">
              <TooltipInteractiveWrapper display="flex">
                <InfoIcon size="small" color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} />
      </Box>
    </Box>;
}`,...(oa=(na=J.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var la,ra,ia;j.parameters={...j.parameters,docs:{...(la=j.parameters)==null?void 0:la.docs,source:{originalSource:`({
  ...args
}) => {
  if (args.selectionType === 'single' && typeof args.label === 'object') {
    throw new Error('[Storybook Controls]: Cannot use {start,end} label for single selection, please switch to the SingleDatePicker story');
  }
  return <DatePickerComponent onChange={date => {
    console.log(date);
  }} {...args} />;
}`,...(ia=(ra=j.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var ca,da,ma;f.parameters={...f.parameters,docs:{...(ca=f.parameters)==null?void 0:ca.docs,source:{originalSource:`({
  ...args
}) => {
  if (args.selectionType === 'single' && typeof args.label === 'object') {
    throw new Error('[Storybook Controls]: Cannot use {start,end} label for single selection, please switch to the SingleDatePicker story');
  }
  return <DatePickerComponent onChange={date => {
    console.log(date);
  }} {...args} />;
}`,...(ma=(da=f.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ua,pa,ga;W.parameters={...W.parameters,docs:{...(ua=W.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">showClearButton</Code> prop, you can render a clear button in the
        DatePicker input. When clicked, it will clear the selected date.
      </Text>
      <Text marginBottom="spacing.5" color="surface.text.gray.muted" size="small">
        In uncontrolled mode, the clear button will automatically clear the internal state.
      </Text>
      <Box display="flex" gap="spacing.5" flexDirection="column">
        <DatePickerComponent label="Single Date (Uncontrolled)" selectionType="single" showClearButton onChange={value => {
        console.log('value', value);
      }} onClearButtonClick={() => {
        console.log('Clear button clicked - Single');
      }} presets={[{
        label: 'In 7 days',
        value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
      }, {
        label: 'In a month',
        value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
      }]} />
        <DatePickerComponent label={{
        start: 'Date Range (Uncontrolled)'
      }} selectionType="range" showClearButton onClearButtonClick={() => {
        console.log('Clear button clicked - Range');
      }} onChange={value => {
        console.log('value', value);
      }} presets={[{
        label: 'Today',
        value: date => [dayjs(date).startOf('day').toDate(), date]
      }, {
        label: 'Yesterday',
        value: date => [dayjs(date).subtract(1, 'day').startOf('day').toDate(), date]
      }, {
        label: 'Past 7 days',
        value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
      }, {
        label: 'Past 15 days',
        value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
      }, {
        label: 'Past month',
        value: date => [dayjs(date).subtract(1, 'month').toDate(), date]
      }, {
        label: 'Past year',
        value: date => [dayjs(date).subtract(1, 'year').toDate(), date]
      }, {
        label: 'Past financial year',
        value: date => {
          const d = dayjs(date);
          const year = d.month() >= 3 ? d.year() : d.year() - 1;
          return [dayjs(\`\${year - 1}-04-01\`).toDate(), dayjs(\`\${year}-03-31\`).toDate()];
        }
      }, {
        label: 'Custom',
        value: () => [null, null] as DatesRangeValue
      }]} />
      </Box>
    </Box>;
}`,...(ga=(pa=W.parameters)==null?void 0:pa.docs)==null?void 0:ga.source}}};var ha,ya,Da;F.parameters={...F.parameters,docs:{...(ha=F.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
  const [singleDate, setSingleDate] = React.useState<Date | null>(new Date());
  const [dateRange, setDateRange] = React.useState<DatesRangeValue>([dayjs().subtract(3, 'months').toDate(), dayjs().add(3, 'day').subtract(3, 'months').toDate()]);
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">showClearButton</Code> and{' '}
        <Code size="medium">onClearButtonClick</Code> props, you can control when the clear button
        appears and handle the clear action in controlled mode.
      </Text>
      <Text marginBottom="spacing.5" color="surface.text.gray.muted" size="small">
        In controlled mode, use <Code size="medium">onClearButtonClick</Code> to reset your state.
      </Text>

      <Box display="flex" gap="spacing.5" flexDirection="column">
        <Box>
          <Text marginBottom="spacing.2">
            Selected Single Date: {singleDate ? dayjs(singleDate).format('DD-MM-YYYY') : 'None'}
          </Text>
          <DatePickerComponent label="Single Date (Controlled)" selectionType="single" value={singleDate} onChange={date => setSingleDate(date)} showClearButton onClearButtonClick={() => {
          console.log('Clear button clicked - resetting single date');
        }} />
        </Box>

        <Box>
          <Text marginBottom="spacing.2">
            Selected Range: {dateRange[0] ? dayjs(dateRange[0]).format('DD-MM-YYYY') : 'None'} -{' '}
            {dateRange[1] ? dayjs(dateRange[1]).format('DD-MM-YYYY') : 'None'}
          </Text>
          <DatePickerComponent label={{
          start: 'Date Range (Controlled)'
        }} selectionType="range" value={dateRange} onChange={date => setDateRange(date)} showClearButton onClearButtonClick={() => {
          console.log('Clear button clicked - resetting date range');
        }} presets={[{
          label: 'Today',
          value: date => [dayjs(date).startOf('day').toDate(), date]
        }, {
          label: 'Yesterday',
          value: date => [dayjs(date).subtract(1, 'day').startOf('day').toDate(), date]
        }, {
          label: 'Past 7 days',
          value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
        }, {
          label: 'Past 15 days',
          value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
        }, {
          label: 'Past month',
          value: date => [dayjs(date).subtract(1, 'month').toDate(), date]
        }, {
          label: 'Past year',
          value: date => [dayjs(date).subtract(1, 'year').toDate(), date]
        }, {
          label: 'Past financial year',
          value: date => {
            const d = dayjs(date);
            const year = d.month() >= 3 ? d.year() : d.year() - 1;
            return [dayjs(\`\${year - 1}-04-01\`).toDate(), dayjs(\`\${year}-03-31\`).toDate()];
          }
        }, {
          label: 'Custom',
          value: () => [null, null] as DatesRangeValue
        }]} />
        </Box>

        <Box display="flex" gap="spacing.3">
          <Button size="small" onClick={() => {
          setSingleDate(new Date());
          setDateRange([new Date(), dayjs().add(7, 'day').toDate()]);
        }}>
            Reset to Today
          </Button>
        </Box>
      </Box>
    </Box>;
}`,...(Da=(ya=F.parameters)==null?void 0:ya.docs)==null?void 0:Da.source}}};var xa,Ca,ba;N.parameters={...N.parameters,docs:{...(xa=N.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
  const [singleDate, setSingleDate] = React.useState<Date | null>(new Date());
  const [dateRange, setDateRange] = React.useState<DatesRangeValue>([dayjs().subtract(3, 'months').toDate(), dayjs().add(3, 'day').subtract(3, 'months').toDate()]);
  return <Box>
      <Text marginBottom="spacing.5">
        With <Code size="medium">showClearButton</Code> and{' '}
        <Code size="medium">onClearButtonClick</Code> props, you can control when the clear button
        appears and handle the clear action in controlled mode.
      </Text>
      <Text marginBottom="spacing.5" color="surface.text.gray.muted" size="small">
        In controlled mode, use <Code size="medium">onClearButtonClick</Code> to reset your state.
      </Text>

      <Box display="flex" gap="spacing.5" flexDirection="column">
        <Box>
          <Text marginBottom="spacing.2">
            Selected Single Date: {singleDate ? dayjs(singleDate).format('DD-MM-YYYY') : 'None'}
          </Text>
          <DatePickerComponent label="Single Date (Controlled)" selectionType="single" value={singleDate} onChange={date => setSingleDate(date)} showClearButton onClearButtonClick={() => {
          console.log('Clear button clicked - resetting single date');
        }} />
        </Box>

        <Box>
          <Text marginBottom="spacing.2">
            Selected Range: {dateRange[0] ? dayjs(dateRange[0]).format('DD-MM-YYYY') : 'None'} -{' '}
            {dateRange[1] ? dayjs(dateRange[1]).format('DD-MM-YYYY') : 'None'}
          </Text>
          <DatePickerComponent label={{
          start: 'Date Range (Controlled)'
        }} selectionType="range" value={dateRange} onChange={date => setDateRange(date)} showClearButton onClearButtonClick={() => {
          console.log('Clear button clicked - resetting date range');
        }} allowSingleDateInRange displayFormat="compact" presets={[{
          label: 'Today',
          value: date => [dayjs(date).startOf('day').toDate(), date]
        }, {
          label: 'Yesterday',
          value: date => [dayjs(date).subtract(1, 'day').startOf('day').toDate(), date]
        }, {
          label: 'Past 7 days',
          value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
        }, {
          label: 'Past 15 days',
          value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
        }, {
          label: 'Past month',
          value: date => [dayjs(date).subtract(1, 'month').toDate(), date]
        }, {
          label: 'Past year',
          value: date => [dayjs(date).subtract(1, 'year').toDate(), date]
        }, {
          label: 'Past financial year',
          value: date => {
            const d = dayjs(date);
            const year = d.month() >= 3 ? d.year() : d.year() - 1;
            return [dayjs(\`\${year - 1}-04-01\`).toDate(), dayjs(\`\${year}-03-31\`).toDate()];
          }
        }, {
          label: 'Custom',
          value: () => [null, null] as DatesRangeValue
        }]} />
        </Box>

        <Box display="flex" gap="spacing.3">
          <Button size="small" onClick={() => {
          setSingleDate(new Date());
          setDateRange([new Date(), dayjs().add(7, 'day').toDate()]);
        }}>
            Reset to Today
          </Button>
        </Box>
      </Box>
    </Box>;
}`,...(ba=(Ca=N.parameters)==null?void 0:Ca.docs)==null?void 0:ba.source}}};var ja,fa,Ta;V.parameters={...V.parameters,docs:{...(ja=V.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.7" backgroundColor="surface.background.gray.moderate" padding="spacing.8" minHeight="100vh">
      <Box maxWidth="320px">
        <DatePickerComponent label="Select Date" selectionType="single" defaultValue={new Date()} onChange={date => console.log(date)} />
      </Box>
      <Box maxWidth="320px">
        <DatePickerComponent label="Select Range" selectionType="range" defaultValue={[new Date(), new Date()]} onChange={date => console.log(date)} />
      </Box>

      <Button onClick={() => {
      console.log('Change Date');
    }} marginTop="spacing.5">
        {' '}
        Change Date
      </Button>
      <Button onClick={() => {
      console.log('Change Date');
    }} marginTop="spacing.5" color="positive">
        {' '}
        Change Date
      </Button>
      <Button onClick={() => {
      console.log('Change Date');
    }} marginTop="spacing.5" color="negative">
        {' '}
        Change Date
      </Button>

      <Box maxWidth="320px">
        <DatePickerComponent label="Select Range" selectionType="range" defaultValue={[new Date(), new Date()]} onChange={date => console.log(date)} presets={[{
        label: 'Today',
        value: date => [dayjs(date).startOf('day').toDate(), date]
      }, {
        label: 'Yesterday',
        value: date => [dayjs(date).subtract(1, 'day').startOf('day').toDate(), date]
      }, {
        label: 'Past 7 days',
        value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
      }, {
        label: 'Past 15 days',
        value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
      }, {
        label: 'Past month',
        value: date => [dayjs(date).subtract(1, 'month').toDate(), date]
      }, {
        label: 'Past year',
        value: date => [dayjs(date).subtract(1, 'year').toDate(), date]
      }, {
        label: 'Past financial year',
        value: date => {
          const d = dayjs(date);
          const year = d.month() >= 3 ? d.year() : d.year() - 1;
          return [dayjs(\`\${year - 1}-04-01\`).toDate(), dayjs(\`\${year}-03-31\`).toDate()];
        }
      }, {
        label: 'Custom',
        value: () => [null, null] as DatesRangeValue
      }]} />
      </Box>
      <Button onClick={() => {
      console.log('Change Date');
    }} marginTop="spacing.5">
        {' '}
        Change Date
      </Button>
      <Button onClick={() => {
      console.log('Change Date');
    }} marginTop="spacing.5" color="positive">
        {' '}
        Change Date
      </Button>
      <Button onClick={() => {
      console.log('Change Date');
    }} marginTop="spacing.5" color="negative">
        {' '}
        Change Date
      </Button>
    </Box>;
}`,...(Ta=(fa=V.parameters)==null?void 0:fa.docs)==null?void 0:Ta.source}}};var Pa,ka,Ba;E.parameters={...E.parameters,docs:{...(Pa=E.parameters)==null?void 0:Pa.docs,source:{originalSource:`() => {
  const state = useDateTimePickerState();
  return <Box>
      <Text marginBottom="spacing.5">
        Combine <Code size="medium">DatePicker</Code> and <Code size="medium">TimePicker</Code> on a
        single page for scheduling use cases like booking appointments, creating events, or setting
        deadlines.
      </Text>
      <DateTimePickerFields {...state} />
    </Box>;
}`,...(Ba=(ka=E.parameters)==null?void 0:ka.docs)==null?void 0:Ba.source}}};var Sa,va,wa;L.parameters={...L.parameters,docs:{...(Sa=L.parameters)==null?void 0:Sa.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const state = useDateTimePickerState();
  return <Box>
      <Text marginBottom="spacing.5">
        Combine <Code size="medium">DatePicker</Code> and <Code size="medium">TimePicker</Code>{' '}
        inside a <Code size="medium">Modal</Code> for scheduling use cases like booking
        appointments, creating events, or setting deadlines.
      </Text>

      <Button onClick={() => setIsOpen(true)}>Schedule Event</Button>

      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} size="medium">
        <ModalHeader title="Schedule an Event" subtitle="Pick a date and time for your event" />
        <ModalBody>
          <DateTimePickerFields {...state} />
        </ModalBody>
        <ModalFooter>
          <Box display="flex" gap="spacing.3" justifyContent="flex-end" width="100%">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
            console.log('Event scheduled:', state.combinedDateTime);
            setIsOpen(false);
          }}>
              Confirm
            </Button>
          </Box>
        </ModalFooter>
      </Modal>
    </Box>;
}`,...(wa=(va=L.parameters)==null?void 0:va.docs)==null?void 0:wa.source}}};var za,Ya,Ma;$.parameters={...$.parameters,docs:{...(za=$.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
  const [primaryRange, setPrimaryRange] = React.useState<DatesRangeValue>([dayjs().subtract(1, 'month').toDate(), dayjs().toDate()]);
  const [comparisonRange, setComparisonRange] = React.useState<DatesRangeValue>([null, null]);
  const [comparisonVisibleMonth, setComparisonVisibleMonth] = React.useState<Date | undefined>();

  // Same-length period immediately preceding the primary range, with no gap between the two.
  React.useEffect(() => {
    const [primaryStart, primaryEnd] = primaryRange;
    if (!primaryStart || !primaryEnd) return;
    const rangeLengthInDays = dayjs(primaryEnd).diff(dayjs(primaryStart), 'day');
    setComparisonVisibleMonth(dayjs(primaryStart).subtract(rangeLengthInDays + 1, 'day').toDate());
  }, [primaryRange]);
  return <Box>
      <Text marginBottom="spacing.5">
        Use <Code size="medium">visibleMonth</Code>/<Code size="medium">defaultVisibleMonth</Code>{' '}
        to anchor a comparison <Code size="medium">DatePicker</Code> on the months immediately
        preceding a primary range&apos;s selection — without pre-filling the comparison{' '}
        <Code size="medium">value</Code>. Pick a primary range below, then open &quot;Compare
        to&quot; and notice the calendar opens on the same-length period right before it.
      </Text>
      <Box display="flex" flexDirection="column" gap="spacing.5" maxWidth="400px">
        <DatePickerComponent label={{
        start: 'Primary date range'
      }} selectionType="range" value={primaryRange} onChange={date => setPrimaryRange(date)} />
        <DatePickerComponent label={{
        start: 'Compare to'
      }} selectionType="range" value={comparisonRange} visibleMonth={comparisonVisibleMonth} onVisibleMonthChange={setComparisonVisibleMonth} onChange={date => setComparisonRange(date)} />
      </Box>
    </Box>;
}`,...(Ma=(Ya=$.parameters)==null?void 0:Ya.docs)==null?void 0:Ma.source}}};const Aa=["SingleDatePicker","RangeDatePicker","DatePickerPresets","DatePickerPresetsWithDisplayFormatCompact","DatePickerControlled","Validations","MinMaxDates","InitialMonthWithDisabledToday","ExcludeDates","LabelPositionLeft","MonthPicker","Localization","FilterChipDatePickerStorySingleStory","FilterChipDatePickerClearButtonBehavior","FilterChipDatePickerStoryMultiSelectionStory","FilterChipDatePickerStoryWithPreset","ControlledFilterChipDatePickerSingle","ControlledFilterChipDatePickerRange","DisabledDatePickerWithFilterChipSelectInput","DatePickerWithLabelSuffixTrailing","DatePickerWithFooter","WithoutActionButtons","ClearButtonUncontrolled","ClearButtonControlled","ClearButtonControlledDisplayCompact","DatePickerWithCardsShowcase","DatePickerWithTimePicker","DatePickerWithTimePickerInModal","DatePickerComparisonRange"],Ga=Object.freeze(Object.defineProperty({__proto__:null,ClearButtonControlled:F,ClearButtonControlledDisplayCompact:N,ClearButtonUncontrolled:W,ControlledFilterChipDatePickerRange:_,ControlledFilterChipDatePickerSingle:U,DatePickerComparisonRange:$,DatePickerControlled:k,DatePickerPresets:T,DatePickerPresetsWithDisplayFormatCompact:P,DatePickerWithCardsShowcase:V,DatePickerWithFooter:j,DatePickerWithLabelSuffixTrailing:J,DatePickerWithTimePicker:E,DatePickerWithTimePickerInModal:L,DisabledDatePickerWithFilterChipSelectInput:H,ExcludeDates:w,FilterChipDatePickerClearButtonBehavior:O,FilterChipDatePickerStoryMultiSelectionStory:I,FilterChipDatePickerStorySingleStory:R,FilterChipDatePickerStoryWithPreset:D,InitialMonthWithDisabledToday:v,LabelPositionLeft:z,Localization:M,MinMaxDates:S,MonthPicker:Y,RangeDatePicker:b,SingleDatePicker:C,Validations:B,WithoutActionButtons:f,__namedExportsOrder:Aa,default:Ja},Symbol.toStringTag,{value:"Module"}));export{Ga as d};
