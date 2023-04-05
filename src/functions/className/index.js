export const getNavLinkClassName = ({ isActive, isPending }) => {
  if (isPending) {
    return 'pending';
  } else if (isActive) {
    return 'active link';
  } else {
    return 'link';
  }
};
