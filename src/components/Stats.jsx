import styled from 'styled-components';
import FlexText from './FlexText';
import PropTypes from 'prop-types';
import { Stack } from './Stack';

const AbilityScoreText = styled(FlexText).attrs(() => ({
  $size: 30,
  $monospace: true,
}))`
  margin-left: auto;
`;

const AbilityNameText = styled(FlexText).attrs(() => ({
  $size: 30,
  $monospace: true,
}))``;

const Stats = ({ abilities }) => {
  const displayScore = (score) => {
    if (score > 0) return `+${score}`;
    else if (score === 0) return `±0`;
    else return String(score);
  };

  return (
    <Stack $gap={1}>
      <Stack direction="horizontal" $gap={2}>
        <AbilityNameText>СНОРОВКА</AbilityNameText>
        <AbilityScoreText>{displayScore(abilities.agility)}</AbilityScoreText>
      </Stack>
      <Stack direction="horizontal" $gap={2}>
        <AbilityNameText>КОНТРОЛЬ</AbilityNameText>
        <AbilityScoreText>{displayScore(abilities.presence)}</AbilityScoreText>
      </Stack>
      <Stack direction="horizontal" $gap={2}>
        <AbilityNameText>УДАЛЬ</AbilityNameText>
        <AbilityScoreText>{displayScore(abilities.strength)}</AbilityScoreText>
      </Stack>
      <Stack direction="horizontal" $gap={2}>
        <AbilityNameText>СТОЙКОСТЬ</AbilityNameText>
        <AbilityScoreText>{displayScore(abilities.toughness)}</AbilityScoreText>
      </Stack>
    </Stack>
  );
};

Stats.propTypes = {
  abilities: PropTypes.object,
};

export default Stats;
