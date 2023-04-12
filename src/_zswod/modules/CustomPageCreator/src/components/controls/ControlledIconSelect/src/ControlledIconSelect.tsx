import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { CustomPageFormContent } from '../../../../models/CustomPageFormContent';
import { Icon } from 'src/_zswod/models/enums/Icon';
import { IconSelect } from './IconSelect';

type ControlledIconSelectProps = {
  control: Control<CustomPageFormContent, Icon>;
};

const ControlledIconSelect: FC<ControlledIconSelectProps> = ({ control }) => (
  <Controller
    control={control}
    name="iconId"
    render={({ field: { value, onChange } }) => <IconSelect iconId={value} onSelect={onChange} />}
  />
);

export { ControlledIconSelect };
