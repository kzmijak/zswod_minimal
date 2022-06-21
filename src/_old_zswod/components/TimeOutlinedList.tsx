import {
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { timeSince } from '../utils/Mock/timeAgo';

type TimeOutlinedListProps = {
  children: ReactNode[] | ReactNode;
  date: Date;
};

const TimeOutlinedList: FC<TimeOutlinedListProps> = ({ children, date }) => (
  <TimelineItem>
    <TimelineOppositeContent>{children}</TimelineOppositeContent>

    <TimelineSeparator>
      <TimelineDot sx={{ background: 'white' }} />
      <TimelineConnector />
    </TimelineSeparator>

    <TimelineOppositeContent sx={{ flex: 0.1 }}>
      <Typography noWrap sx={{ position: 'absolute', left: 0 }}>
        {timeSince(date)} temu
      </Typography>
    </TimelineOppositeContent>
  </TimelineItem>
);

export { TimeOutlinedList };
