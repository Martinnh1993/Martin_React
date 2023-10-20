import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Ellipse, G, Line, Rect } from 'react-native-svg'
import Colors from '../../constants/colors'
import { createAnimatableComponent } from 'react-native-animatable'

const AnimatableLine = createAnimatableComponent(Line);
const AnimatableRect = createAnimatableComponent(Rect);
const AnimatableEllipse = createAnimatableComponent(Ellipse);

const ManFigure = ({ wrongWord }) => {
  const scale = 1.5; // Scale factor (50% larger)
  const scaledWidth = 300 * scale; // Scaled width
  const scaledHeight = 400 * scale; // Scaled height

  const Rope = <AnimatableLine animation={'fadeIn'} x1="300" y1="10" x2="300" y2="140" stroke="brown" strokeWidth="5" />
  const Head = <AnimatableEllipse animation={'fadeIn'} cx="300" cy="150" rx="50" ry="50" fill={Colors.accent500} />
  const Nack = <AnimatableRect animation={'fadeIn'} width="10" height="50" x="295" y="200" fill={Colors.accent500} />
  const Hands = <AnimatableLine animation={'fadeIn'} x1="360" y1="250" x2="240" y2="250" stroke={Colors.accent500} stroke-Linecap="round" strokeWidth="10" />
  const Body = <AnimatableRect animation={'fadeIn'} width="10" height="50" x="295" y="250" fill={Colors.accent500} />
  const Lags = (
    <G>
      <AnimatableLine animation={'fadeIn'} x1="300" y1="300" x2="250" y2="350" stroke={Colors.accent500} stroke-Linecap="round" strokeWidth="10" />
      <AnimatableLine animation={'fadeIn'} x1="300" y1="300" x2="350" y2="350" stroke={Colors.accent500} stroke-Linecap="round" strokeWidth="10" />
    </G>
  );

  return (
    <View style={styles.container}>
      <Svg version="1.1" viewBox={`0 0 ${scaledWidth} ${scaledHeight}`} preserveAspectRatio="xMinYMin meet" class="svg-content" width="240" height="250">
        <Rect fill={Colors.primary700} width={scaledWidth} height="15" x="0" y="15" />
        <Rect fill={Colors.primary700} width="20" height={scaledHeight} x="20" y="20" />
        <Rect fill={Colors.primary700} width={scaledWidth} height="40" x="10" y={scaledHeight - 40} />
        {wrongWord > 0 ? Rope : null}
        {wrongWord > 1 ? Head : null}
        {wrongWord > 2 ? Nack : null}
        {wrongWord > 3 ? Hands : null}
        {wrongWord > 4 ? Body : null}
        {wrongWord > 5 ? Lags : null}
      </Svg>
    </View>
  );
}

export default ManFigure;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
