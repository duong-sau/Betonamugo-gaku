import React from 'react';
import {BarChart} from 'react-native-chart-kit';
let percent = [0, 0, 0, 0, 0, 0, 0];

export default class GrammarChart extends React.PureComponent {
  render() {
    global.user.grammarAchievement.forEach(function estimate(element, index) {
      percent[index] = (100 * element) / global.max[index];
    });
    const data = {
      labels: [
        'Present',
        '  Past ',
        'Future',
        '  Compare ',
        '   Passive',
        'Prepo',
        'Condition ',
      ],
      datasets: [
        {
          data: percent,
        },
      ],
    };
    const chartConfig = {
      backgroundGradientFrom: 'red',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: 'black',
      backgroundGradientToOpacity: 0.1,
      color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
      strokeWidth: 1,
      barPercentage: 0.7,
      useShadowColorFromDataset: false,
    };
    return (
      <BarChart
        data={data}
        width={390}
        height={230}
        yAxisLabel="%"
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        style={{borderRadius: 10}}
      />
    );
  }
}
