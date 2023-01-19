import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  StatsLi,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({
  username = 'не відомо',
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsLi>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsLi>
      </Stats>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
