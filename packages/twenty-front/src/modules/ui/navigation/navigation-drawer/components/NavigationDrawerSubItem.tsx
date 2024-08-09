import {
  NavigationDrawerItem,
  NavigationDrawerItemProps,
} from '@/ui/navigation/navigation-drawer/components/NavigationDrawerItem';
import styled from '@emotion/styled';

type StyledItemProps = {
  isChild: boolean;
};

const StyledItem = styled.div<StyledItemProps>`
  margin-left: ${({ theme, isChild }) =>
    isChild ? theme.spacing(0) : theme.spacing(4)};
`;

type NavigationDrawerSubItemProps = NavigationDrawerItemProps;

export const NavigationDrawerSubItem = ({
  className,
  label,
  level = 1,
  Icon,
  to,
  onClick,
  active,
  danger,
  soon,
  count,
  keyboard,
  activeChildIndex,
  isChild = false,
}: NavigationDrawerSubItemProps) => {
  return (
    <StyledItem isChild={isChild}>
      <NavigationDrawerItem
        className={className}
        label={label}
        level={level}
        Icon={Icon}
        to={to}
        onClick={onClick}
        active={active}
        danger={danger}
        soon={soon}
        count={count}
        keyboard={keyboard}
        activeChildIndex={activeChildIndex}
        isChild={isChild}
      />
    </StyledItem>
  );
};
