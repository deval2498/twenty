import { isNavigationDrawerOpenState } from '@/ui/navigation/states/isNavigationDrawerOpenState';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';
import isPropValid from '@emotion/is-prop-valid';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { isNonEmptyString } from '@sniptt/guards';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { IconComponent, isDefined, MOBILE_VIEWPORT, Pill } from 'twenty-ui';

export type NavigationDrawerItemProps = {
  className?: string;
  label: string;
  level?: 1 | 2;
  to?: string;
  onClick?: () => void;
  Icon: IconComponent;
  active?: boolean;
  danger?: boolean;
  soon?: boolean;
  count?: number;
  keyboard?: string[];
  childItemsCount?: number;
  activeChild?: number;
  activeChildIndex?: number;
  isChild?: boolean;
};

type StyledItemProps = {
  active?: boolean;
  danger?: boolean;
  level: 1 | 2;
  soon?: boolean;
  to?: string;
  childItemsCount: number;
  childActiveIndex: number;
  isChild: boolean;
};

type StyledIconProps = {
  level: 1 | 2;
};

const StyledItem = styled('div', {
  shouldForwardProp: (prop) =>
    ![
      'active',
      'danger',
      'soon',
      'childItemsCount',
      'childActiveIndex',
      'isChild',
    ].includes(prop) && isPropValid(prop),
})<StyledItemProps>`
  align-items: center;
  background: ${(props) =>
    props.active ? props.theme.background.transparent.light : 'inherit'};
  height: ${({ theme }) => theme.spacing(5)};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  text-decoration: none;
  color: ${(props) => {
    if (props.active === true) {
      return props.theme.font.color.primary;
    }
    if (props.danger === true) {
      return props.theme.color.red;
    }
    if (props.soon === true) {
      return props.theme.font.color.light;
    }
    return props.theme.font.color.secondary;
  }};
  cursor: ${(props) => (props.soon ? 'default' : 'pointer')};
  display: flex;
  font-family: 'Inter';
  font-size: ${({ theme }) => theme.font.size.md};
  gap: ${({ theme }) => theme.spacing(2)};
  margin-left: ${({ level, theme, isChild }) =>
    isChild ? theme.spacing(0) : theme.spacing((level - 1) * 4)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
  padding-top: ${({ theme }) => theme.spacing(1)};
  pointer-events: ${(props) => (props.soon ? 'none' : 'auto')};

  :hover {
    background: ${({ theme }) => theme.background.transparent.light};
    color: ${(props) =>
      props.danger ? props.theme.color.red : props.theme.font.color.primary};
  }

  :hover .keyboard-shortcuts {
    visibility: visible;
  }

  user-select: none;

  @media (max-width: ${MOBILE_VIEWPORT}px) {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  position: relative; // Needed for the pseudo-element positioning

  ${({ isChild, theme, active }) =>
    isChild &&
    `
      &.show-before::before {
        content: '';
        position: absolute;
        top: 7px; // Middle of the container
        left: 12px; // Adjust based on your needs
        width: 8px; // Length of the horizontal line
        height: 15.17px; // Height to create the curve
        border: solid ${
          active ? theme.grayScale.gray40 : theme.grayScale.gray25
        };
        border-width: 0 0px 1px 1px; // Right and bottom borders to create a curve
        border-radius: 0 0 0 4px; // Curve at the bottom left corner
        transform: translateY(-50%); // Center the line vertically
        z-index: ${active ? 1 : 0};
      }
  `}

  ::after {
    content: '';
    position: absolute;
    top: 100%; /* Position at the bottom of the container */
    left: 12px; /* Adjust based on your needs */
    width: 1px; /* Line width */
    height: ${({ active, childItemsCount }) =>
      active && childItemsCount > 1
        ? `${(childItemsCount - 1) * 28 + 6}px`
        : '0'}; /* Adjust the multiplier as needed */
    background: ${({ theme, active, childItemsCount, childActiveIndex }) =>
      active && childItemsCount > 1
        ? `linear-gradient(to bottom, ${theme.grayScale.gray40} ${
            (childActiveIndex - 1) * 28
          }px, ${theme.grayScale.gray40} ${
            (childActiveIndex - 1) * 28 + 6
          }px, ${theme.grayScale.gray25} ${(childActiveIndex - 1) * 28}px, ${
            theme.grayScale.gray25
          } 100%)`
        : theme.grayScale.gray40}; /* Line color change */
    z-index: 1;
  }
`;

const StyledIcon = styled.div<StyledIconProps>`
  margin-left: ${({ theme, level }) =>
    level > 1 ? theme.spacing(5) : theme.spacing(0)};
  display: flex;
  align-items: center;
`;

const StyledItemLabel = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledItemCount = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  color: ${({ theme }) => theme.grayScale.gray0};
  display: flex;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  height: 16px;
  justify-content: center;
  margin-left: auto;
  width: 16px;
`;

const StyledKeyBoardShortcut = styled.div`
  align-items: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.font.color.light};
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  margin-left: auto;
  visibility: hidden;
`;

export const NavigationDrawerItem = ({
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
  childItemsCount = 0,
  activeChildIndex = 0,
  isChild = false,
}: NavigationDrawerItemProps) => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const setIsNavigationDrawerOpen = useSetRecoilState(
    isNavigationDrawerOpenState,
  );

  const handleItemClick = () => {
    if (isMobile) {
      setIsNavigationDrawerOpen(false);
    }

    if (isDefined(onClick)) {
      onClick();
      return;
    }

    if (isNonEmptyString(to)) navigate(to);
  };

  return (
    <StyledItem
      className={`${className} ${level > 1 ? 'show-before' : ''}`}
      level={level}
      onClick={handleItemClick}
      active={active}
      aria-selected={active}
      danger={danger}
      soon={soon}
      as={to ? Link : 'div'}
      to={to ? to : undefined}
      childItemsCount={childItemsCount || 0}
      childActiveIndex={activeChildIndex + 1}
      isChild={isChild}
    >
      {Icon && (
        <StyledIcon level={level}>
          <Icon size={theme.icon.size.md} stroke={theme.icon.stroke.md} />
        </StyledIcon>
      )}
      <StyledItemLabel>{label}</StyledItemLabel>
      {soon && <Pill label="Soon" />}
      {!!count && <StyledItemCount>{count}</StyledItemCount>}
      {keyboard && (
        <StyledKeyBoardShortcut className="keyboard-shortcuts">
          {keyboard}
        </StyledKeyBoardShortcut>
      )}
    </StyledItem>
  );
};
