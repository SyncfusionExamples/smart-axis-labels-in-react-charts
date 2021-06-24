import React from 'react';
import './App.css';
import {chartData} from './data';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, 
  ColumnSeries, Category, Inject, MultiLevelLabel} from '@syncfusion/ej2-react-charts';
function App() {
  const customLabel=(args:any)=>{
    if(args.text==="France")
      args.labelStyle.color = 'red';
  }
  return (
    <div style={{textAlign:"center", margin:'5%'}}>
      <ChartComponent title="Internet users"
      axisLabelRender={customLabel}
      // add labelIntersectAction:"MultipleRows" in x-axis settings, when labels intersect with each other. 
      primaryXAxis={{valueType:"Category",
      labelPlacement:"OnTicks", //Renders the label on ticks
      edgeLabelPlacement:"Hide", //Labels at the edge will be hidden when they did not fit.
      labelStyle:{color:"green", fontWeight:"Bold"}, //Customize the label font styles
      enableTrim:true, maximumLabelWidth:50,
      labelPosition:"Outside", maximumLabels:2,
      multiLevelLabels:[{
        categories:[{
          start:-0.5,end:5.5,text:"Half Yearly 1"
        },{
          start:5.5,end:11.5,text:"Half Yearly 2"
        }]
      }]}}>
        <Inject services={[ColumnSeries, Category, MultiLevelLabel]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Column" dataSource={chartData}
          xName="country" yName="value"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
export default App;

