import React from 'react';
import {PieChart} from 'react-native-chart-kit';
export default class VocabularyChart extends React.PureComponent {
  render() {
    let vC = Object.entries(global.user.vocabularyAchievement);

    let data = require('../../Entity/Vocabulary/ChartConfig.json');

    vC.forEach((element, index) => {
      let count = 0;
      let total = 0;
      element[1].forEach((item) => {
        if (item == 1) {
          count += 1;
        }
        total += 1;
      });
      element[2] = count / total;
      console.log(element[0]);
      data[element[0]].population = element[2];
    });
    data = Object.values(data);
    console.log(data);
    const chartConfig = {
      backgroundGradientFrom: 'red',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: 'black',
      backgroundGradientToOpacity: 1,
      color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
      strokeWidth: 1,
      barPercentage: 0.5,
      useShadowColorFromDataset: false,
    };
    return (
      <PieChart
        data={data}
        width={350}
        height={220}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
      />
    );
  }
}
