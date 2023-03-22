import { createEnumMapper } from 'src/_zswod/utils/mapperCreators';
import { Icon, iconConsts } from './Icon';
import { iconNodeDict } from './iconNodeDict';

const mapStringToIcon = createEnumMapper<Icon>(iconConsts, 'Unknown');

const getIcon = (icon: Icon) => iconNodeDict[icon];

export { mapStringToIcon, getIcon };
