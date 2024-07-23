import FlexText from './FlexText';
import { Stack } from './Stack';
import PropTypes from 'prop-types';

const BasicResources = ({ hp, silver, omens }) => {
  return (
    <Stack direction="horizontal" $gap={20}>
      <div>
        <FlexText $bold $size={20} $monospace>
          ПЗ:{' '}
        </FlexText>
        <FlexText $size={20} $monospace>
          {hp}
        </FlexText>
      </div>
      <div>
        <FlexText $bold $size={20} $monospace>
          Серебро:{' '}
        </FlexText>
        <FlexText $size={20} $monospace>
          {silver}
        </FlexText>
      </div>
      <div>
        <FlexText $bold $size={20} $monospace>
          Знамения:{' '}
        </FlexText>
        <FlexText $size={20} $monospace>
          {omens}
        </FlexText>
      </div>
    </Stack>
  );
};

BasicResources.propTypes = {
  hp: PropTypes.number,
  silver: PropTypes.number,
  omens: PropTypes.string,
};

export default BasicResources;
